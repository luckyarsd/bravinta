'use client';
import { useEffect, useRef, useState } from 'react';

export function Header({ links }) {
  const [o, setO] = useState(false);
  return (
    <header className="hdr"><div className="strip" />
      <div className="w nav">
        <a className="logo" href="#top"><svg viewBox="0 0 32 32" width="30" height="30" aria-hidden="true"><defs><linearGradient id="lg" x1="0" x2="1"><stop stopColor="#0b74b0" /><stop offset="1" stopColor="#00a86b" /></linearGradient></defs><rect width="32" height="32" rx="8" fill="url(#lg)" /><path d="M18 4 8 18h7l-1 10 10-14h-7z" fill="#fff" /></svg>Brivanta<span>Energy</span></a>
        <button className="mb" aria-label="Menu" aria-expanded={o} onClick={() => setO(!o)}><i /><i /><i /></button>
        <nav className={o ? 'open' : ''}>
          {links.map((l) => <a key={l.href} href={l.href} onClick={() => setO(false)}>{l.label}</a>)}
          <a className="btn" href="#contact" onClick={() => setO(false)}>Get a quote</a>
        </nav>
      </div>
    </header>
  );
}

export function Stat({ value, suffix, label }) {
  const r = useRef(null); const [n, setN] = useState(value);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return; io.disconnect();
      const t0 = performance.now();
      const tick = (t) => { const p = Math.min((t - t0) / 1200, 1); setN(Math.round(value * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(tick); };
      setN(0); requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(r.current); return () => io.disconnect();
  }, [value]);
  return <div ref={r} className="stat"><b>{n}{suffix}</b><span>{label}</span></div>;
}

const inr = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 });
export function Calculator({ vehicles }) {
  const [v, setV] = useState(0); const [km, setKm] = useState(vehicles[0].km);
  const [pp, setPp] = useState(100); const [el, setEl] = useState(9);
  const x = vehicles[v];
  const petrol = 30 * km * (pp / x.mileage), ev = 30 * km * el * x.kwh, save = petrol - ev;
  const co2 = Math.max(0, (30 * km / x.mileage) * 2.31 * 12);
  const pick = (i) => { setV(i); setKm(vehicles[i].km); };
  return (
    <div className="calc">
      <div className="card">
        <div className="tabs" role="tablist">{vehicles.map((a, i) => <button key={a.n} role="tab" aria-selected={i === v} className={i === v ? 'on' : ''} onClick={() => pick(i)}>{a.n}</button>)}</div>
        <label>Distance per day <b>{km} km</b></label><input type="range" min="10" max="300" value={km} onChange={(e) => setKm(+e.target.value)} />
        <label>Petrol price <b>Rs {pp}/litre</b></label><input type="range" min="80" max="130" value={pp} onChange={(e) => setPp(+e.target.value)} />
        <label>Electricity cost <b>Rs {el}/kWh</b></label><input type="range" min="4" max="20" value={el} onChange={(e) => setEl(+e.target.value)} />
      </div>
      <div className="out" aria-live="polite">
        <span>Estimated monthly saving</span>
        <strong>{save > 0 ? '' : '-'}Rs {inr.format(Math.abs(save))}</strong>
        <div className="bars">
          <div><small>Petrol Rs {inr.format(petrol)}</small><i style={{ width: '100%' }} /></div>
          <div><small>Electric Rs {inr.format(ev)}</small><i className="g" style={{ width: Math.min(100, Math.max(4, (ev / petrol) * 100)) + '%' }} /></div>
        </div>
        <p>About Rs {inr.format(save * 12)} and {inr.format(co2)} kg CO2 less per year. Illustrative estimate only.</p>
      </div>
    </div>
  );
}

export function Contact({ email, services }) {
  const [msg, setMsg] = useState('');
  const submit = (e) => {
    e.preventDefault(); const f = new FormData(e.target);
    const body = `Name: ${f.get('n')}\nPhone: ${f.get('p')}\nInterest: ${f.get('t')}\n\n${f.get('m')}`;
    location.href = `mailto:${email}?subject=${encodeURIComponent('Quote request: ' + f.get('t'))}&body=${encodeURIComponent(body)}`;
    setMsg('Opening your email app. If nothing opens, write to ' + email);
  };
  return (
    <form className="card" onSubmit={submit}>
      <label htmlFor="n">Name</label><input id="n" name="n" required autoComplete="name" />
      <label htmlFor="p">Phone number</label><input id="p" name="p" type="tel" required inputMode="tel" autoComplete="tel" />
      <label htmlFor="t">I am interested in</label>
      <select id="t" name="t">{services.map((s) => <option key={s.t}>{s.t}</option>)}</select>
      <label htmlFor="m">Message</label><textarea id="m" name="m" rows="3" />
      <button className="btn full" type="submit">Send request</button>
      <p role="status" className="note">{msg}</p>
    </form>
  );
}
