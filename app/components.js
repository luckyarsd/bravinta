'use client';
import { useEffect, useRef, useState } from 'react';
import { model, siteTypes } from '../lib/data';

const reduce = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;
const fmt = (n, d = 0) => new Intl.NumberFormat('en-IN', { minimumFractionDigits: d, maximumFractionDigits: d }).format(n);
const pick = (interest) => { window.dispatchEvent(new CustomEvent('brivanta:interest', { detail: interest })); };

export function Header({ links, ids }) {
  const [open, setOpen] = useState(false);
  const [cur, setCur] = useState('');
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const on = () => {
      const y = 96; let c = '', dk = false;
      for (const id of ids) { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= y) { c = id; dk = el.dataset.dark === '1'; } }
      setCur({ pulse: 'impact', estimate: 'impact' }[c] || c); setDark(dk);
    };
    on(); addEventListener('scroll', on, { passive: true }); addEventListener('resize', on);
    return () => { removeEventListener('scroll', on); removeEventListener('resize', on); };
  }, [ids]);
  return (
    <header className={'hdr' + (dark ? ' dk' : '')}>
      <div className="w nav">
        <a className="logo" href="#top" aria-label="Brivanta Energy, home"><img src="/brand/logo.png" width="190" height="47" alt="Brivanta Energy Private Limited" /></a>
        <button className="mb" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /><i /></button>
        <nav className={open ? 'open' : ''} aria-label="Main">
          {links.map((l) => <a key={l.label} href={l.href} className={cur === l.spy && l.label !== 'Solar' && l.label !== 'Wind' ? 'on' : ''} onClick={() => setOpen(false)}>{l.label}</a>)}
          <a className="btn" href="#contact" onClick={() => { pick('Free site survey'); setOpen(false); }}>Get a Free Site Survey</a>
        </nav>
      </div>
    </header>
  );
}

export function Count({ n, d = 0, p = '', u = '' }) {
  const r = useRef(null); const [v, setV] = useState(n);
  useEffect(() => {
    if (reduce() || !r.current) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now();
      const tick = (t) => { const k = Math.min((t - t0) / 1400, 1); setV(n * (1 - Math.pow(1 - k, 3))); if (k < 1) requestAnimationFrame(tick); };
      setV(0); requestAnimationFrame(tick);
    }, { threshold: 0.5 });
    io.observe(r.current); return () => io.disconnect();
  }, [n]);
  return <b ref={r}>{p}{fmt(v, d)}{u}</b>;
}

export function Enquire({ interest, children, className = '', href = '#contact' }) {
  return <a className={className} href={href} onClick={() => pick(interest)}>{children}</a>;
}

function Slider({ id, label, value, min, max, step = 1, onChange, text }) {
  const pc = ((value - min) / (max - min)) * 100;
  return (
    <div className="sl">
      <label htmlFor={id}><span>{label}</span><b>{text ?? value}</b></label>
      <input id={id} className="rng" type="range" min={min} max={max} step={step} value={value} style={{ '--p': pc + '%' }} onChange={(e) => onChange(+e.target.value)} />
    </div>
  );
}

const inr = (n) => (n >= 1e7 ? `₹ ${fmt(n / 1e7, 2)} crore` : n >= 1e5 ? `₹ ${fmt(n / 1e5, 1)} lakh` : `₹ ${fmt(n)}`);

export function Estimator() {
  const [t, setT] = useState(1); const [kwp, setKwp] = useState(120); const [ch, setCh] = useState(8); const [veh, setVeh] = useState(60);
  const gen = kwp * model.yieldKwhPerKwp;                 // kWh per year
  const demand = veh * siteTypes[t].kwh * 365;            // kWh per year delivered to vehicles
  const co2 = (gen * model.gridKgPerKwh) / 1000;          // tonnes per year
  const save = gen * model.tariffInrPerKwh;
  const share = Math.min(100, Math.round((gen / demand) * 100));
  return (
    <div className="est" id="estimator">
      <h3>Impact Estimator</h3>
      <p className="sub">Move the sliders to match your site. Results update instantly.</p>
      <Slider id="e-t" label="Site type" value={t} min={0} max={5} onChange={setT} text={siteTypes[t].n} />
      <Slider id="e-k" label="Solar capacity (kWp)" value={kwp} min={10} max={500} step={5} onChange={setKwp} />
      <Slider id="e-c" label="EV chargers" value={ch} min={1} max={20} onChange={setCh} />
      <Slider id="e-v" label="Daily vehicles" value={veh} min={5} max={300} step={5} onChange={setVeh} />
      <div className="res" aria-live="polite">
        <div className="r1"><small>CO₂ avoided / year</small><strong>{fmt(co2, co2 < 100 ? 1 : 0)} tCO₂</strong></div>
        <div className="r2"><small>Estimated savings / year</small><strong>{inr(save)}</strong></div>
      </div>
      <p className="fine">{fmt(gen / 1000, 0)} MWh of solar a year covers about {share}% of the {fmt(demand / 1000, 0)} MWh your {fmt(veh)} daily vehicles draw. Based on {fmt(model.yieldKwhPerKwp)} kWh per kWp, {model.gridKgPerKwh} kg CO₂ per grid kWh and ₹{model.tariffInrPerKwh} per kWh avoided. A site survey gives your exact figures.</p>
      <Enquire className="btn sm" interest={`Solar EV Hub (${siteTypes[t].n}, ${kwp} kWp, ${ch} chargers)`}>Get this designed for my site</Enquire>
    </div>
  );
}

export function Contact({ site, options }) {
  const [msg, setMsg] = useState({ k: '', t: '' }); const [busy, setBusy] = useState(false);
  const [interest, setInterest] = useState(options[0]);
  const form = useRef(null);
  useEffect(() => {
    const on = (e) => { const d = String(e.detail || ''); if (!d) return; const m = options.find((o) => d.startsWith(o)) || (d.startsWith('Solar EV Hub') ? 'Solar-Enabled EV Charging' : '');  setInterest(m || 'Free site survey'); if (form.current && d !== m && !d.startsWith('Free')) form.current.elements.m.value = `Interested in: ${d}`; };
    window.addEventListener('brivanta:interest', on); return () => window.removeEventListener('brivanta:interest', on);
  }, [options]);
  const submit = async (e) => {
    e.preventDefault(); const f = new FormData(e.target);
    if (f.get('company')) return;
    const data = { name: f.get('n'), phone: f.get('p'), email: f.get('e'), interest: f.get('t'), message: f.get('m') };
    const body = `Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || '-'}\nInterest: ${data.interest}\n\n${data.message}`;
    if (site.formEndpoint) {
      setBusy(true);
      try {
        const r = await fetch(site.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
        if (!r.ok) throw new Error(); e.target.reset(); setMsg({ k: 'ok', t: 'Thank you. Our team will reply within one working day.' });
      } catch { setMsg({ k: 'err', t: `We could not send that. Please email ${site.email} directly.` }); }
      setBusy(false);
    } else {
      location.href = `mailto:${site.email}?subject=${encodeURIComponent('Enquiry: ' + data.interest)}&body=${encodeURIComponent(body)}`;
      setMsg({ k: 'ok', t: `Opening your email app. If nothing opens, write to ${site.email}.` });
    }
  };
  return (
    <form ref={form} className="fm" onSubmit={submit}>
      <div className="two">
        <div><label htmlFor="n">Name</label><input id="n" name="n" required autoComplete="name" /></div>
        <div><label htmlFor="p">Phone number</label><input id="p" name="p" type="tel" required inputMode="tel" autoComplete="tel" /></div>
      </div>
      <label htmlFor="e">Email <i>(optional)</i></label><input id="e" name="e" type="email" autoComplete="email" />
      <label htmlFor="t">I am interested in</label>
      <select id="t" name="t" value={interest} onChange={(e) => setInterest(e.target.value)}>{options.map((o) => <option key={o}>{o}</option>)}</select>
      <label htmlFor="m">Tell us about your site</label><textarea id="m" name="m" rows="4" placeholder="Location, roof or parking area, expected vehicles per day" />
      <input className="hp" name="company" tabIndex="-1" autoComplete="off" aria-hidden="true" />
      <button className="btn full" type="submit" disabled={busy}>{busy ? 'Sending…' : 'Send enquiry'}</button>
      <p role="status" className={'note ' + msg.k}>{msg.t}</p>
    </form>
  );
}

export function Sources({ items }) {
  const [o, setO] = useState(true);
  useEffect(() => { if (matchMedia('(max-width:700px)').matches) setO(false); }, []);
  return (
    <details className="fs" open={o} onToggle={(e) => setO(e.currentTarget.open)}>
      <summary>Data sources</summary>
      <ul>{items.map((t) => <li key={t}>{t}</li>)}</ul>
    </details>
  );
}
