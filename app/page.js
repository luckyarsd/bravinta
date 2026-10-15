import Image from 'next/image';
import { Header, Count, Enquire, Estimator, Contact, Sources } from './components';
import { Scene, Mini, Bolt } from './art';
import { dots, proj, MAP_W, MAP_H } from '../lib/india';
import { site, links, hero, pulse, solarMix, windStates, solarAdds, roadmap, sources, strip, solutions, hubFeatures, installs, why } from '../lib/data';

const spyIds = ['pulse', 'solutions', 'hub', 'estimate', 'contact'];
const ld = {
  '@context': 'https://schema.org', '@type': 'Organization', name: site.name, alternateName: 'Brivanta Energy', url: site.url,
  logo: site.url + '/brand/logo.png', email: site.email, areaServed: 'IN',
  description: 'Solar-powered EV charging stations, solar systems, wind energy, batteries and chargers for homes, hotels, malls and highways in India.',
};
const solarTotal = solarMix.reduce((a, b) => a + b.v, 0);
const windMax = windStates[0].v;

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Header links={links} ids={spyIds} />
      <main id="top">
        <section className="hero">
          <i className="blob b1" /><i className="blob b2" />
          <div className="w hg">
            <div className="ht">
              <span className="pill"><i />India’s energy, electrified</span>
              <h1>Power the sun.<br /><em>Charge the road.</em><br />Own your energy.</h1>
              <p className="lead">Solar-powered EV charging stations, solar systems, wind energy, batteries and chargers for homes, hotels, malls and highways, all from one Indian energy company.</p>
              <div className="cta">
                <Enquire className="btn" interest="Solar EV Hub" href="#estimate">Design My Solar + EV Site</Enquire>
                <a className="btn ghost" href="#hub"><span aria-hidden="true">▶</span> See How It Works</a>
              </div>
              <ul className="hs">{hero.map((h) => <li key={h.l}><b>{h.v}</b><span>{h.l}</span></li>)}</ul>
              <p className="src">India figures from MNRE and Parliament replies, 2026. Sources are listed at the foot of the page.</p>
            </div>
            <div className="hv">
              <Scene uid="hero" />
              <div className="fc l"><span className="sunb" /><div><b>Clean energy today</b><small>sun + wind → wheels</small></div></div>
              <div className="fc r"><Bolt size={30} color="#1b8a3a" /><div><b>Solar + EV Hub</b><small>AC + DC fast charging</small></div></div>
            </div>
          </div>
        </section>

        <nav className="strip" aria-label="Product areas"><div className="w sg">{strip.map((s) => <a key={s.t} href={s.h}><i /><div><b>{s.t}</b><small>{s.d}</small></div></a>)}</div></nav>

        <section id="pulse" data-dark="1" className="pulse">
          <div className="w pg">
            <div>
              <p className="eyebrow g">The India energy pulse</p>
              <h2>The numbers behind the shift</h2>
              <p className="sublead">Official figures from the Ministry of New and Renewable Energy, Parliament replies and the VAHAN portal, each shown with the date it was published.</p>
              <div className="cards">{pulse.map((p) => (
                <div key={p.l} className={'sc ' + p.c}><strong>{p.t ? p.t : <Count n={p.n} d={p.d} p={p.p} u={p.u} />}</strong><b>{p.l}</b><small>{p.s}</small></div>))}</div>
              <h3 className="ch">Where India’s 168 GW of solar sits (Aug 2026, GW)</h3>
              <div className="mix" role="img" aria-label="Solar capacity split">{solarMix.map((m) => <i key={m.l} style={{ flex: m.v / solarTotal, background: m.c }} />)}</div>
              <ul className="lg">{solarMix.map((m) => <li key={m.l}><i style={{ background: m.c }} />{m.l} <b>{m.v}</b></li>)}</ul>
              <h3 className="ch">Wind capacity by state (MW, 30 Jun 2026)</h3>
              <ul className="wb">{windStates.map((w) => <li key={w.l}><span>{w.l}</span><div><i style={{ width: (w.v / windMax) * 100 + '%' }} /><b>{w.v.toLocaleString('en-IN')}</b></div></li>)}</ul>
            </div>
            <div className="mapc">
              <h3>Solar added Jan–Jun 2026 (GW)</h3>
              <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} role="img" aria-label="Dot map of India: Gujarat added 7.6 GW, Rajasthan 6.6 GW, Tamil Nadu 2.4 GW of solar in the first half of 2026">
                {dots.map(([x, y], i) => <circle key={i} cx={x} cy={y} r="1.9" fill="#4f78c4" fillOpacity=".6" />)}
                {solarAdds.map((a) => { const [x, y] = proj(a.lon, a.lat); return (
                  <g key={a.l}><circle cx={x} cy={y} r={a.r} fill={a.c} fillOpacity=".22" className="pls" /><circle cx={x} cy={y} r="5" fill={a.c} />
                    <text x={x + a.dx + 2} y={y + a.dy - 4} fill="#fff" fontSize="13" fontWeight="700" stroke="#0a2a65" strokeWidth="3" paintOrder="stroke">{a.l} {a.v}</text></g>); })}
              </svg>
              <p>Gujarat, Rajasthan and Tamil Nadu led H1 2026 additions.</p>
            </div>
          </div>
        </section>

        <section id="solutions" className="light">
          <div className="w">
            <p className="eyebrow">What we do</p>
            <h2>One company. The whole clean-energy stack.</h2>
            <div className="grid">{solutions.map((s) => (
              <article id={s.id === 'solar' || s.id === 'wind' || s.id === 'chargers' || s.id === 'batteries' ? s.id : undefined} className="card" key={s.t}>
                <div className="art"><Mini k={s.k} /></div>
                <h3>{s.t}</h3><p>{s.d}</p>
                <Enquire className="more" interest={s.t}>Explore <span aria-hidden="true">→</span></Enquire>
              </article>))}</div>
          </div>
        </section>

        <section id="hub" className="light hubs">
          <div className="w">
            <div className="hh">
              <div className="hubv"><Scene uid="hub" /></div>
              <div className="hubt">
                <p className="eyebrow">Signature product</p>
                <h2>Brivanta Solar EV Hub</h2>
                <p className="lead2">A charging station that makes much of its own electricity. Solar canopy on top, chargers underneath, optional battery for peak hours and backup.</p>
                <ul className="ck">{hubFeatures.map((f) => <li key={f.t}><i aria-hidden="true">✓</i><div><b>{f.t}</b><small>{f.d}</small></div></li>)}</ul>
                <Enquire className="btn" interest="Solar EV Hub layout">Request a Layout</Enquire>
              </div>
            </div>
            <p className="eyebrow sp">Where we install</p>
            <ul className="inst">{installs.map((i) => <li key={i.t}><span>{i.i}</span><b>{i.t}</b><small>{i.d}</small></li>)}</ul>
          </div>
        </section>

        <section id="estimate" className="light est-s">
          <div className="w">
            <p className="eyebrow">Carbon &amp; savings</p>
            <h2>See your clean-energy impact before you build</h2>
            <div className="eg">
              <Estimator />
              <div className="road">
                <h3>India’s climate roadmap</h3>
                <ul>{roadmap.map((r) => <li key={r.v}><i style={{ background: r.c }} /><strong style={{ color: r.c }}>{r.v}</strong><span>{r.t}</span></li>)}</ul>
              </div>
            </div>
            <p className="eyebrow sp">Why Brivanta</p>
            <ul className="why">{why.map((w) => <li key={w.t}><b>{w.t}</b><span>{w.d}</span></li>)}</ul>
          </div>
        </section>

        <section id="contact" className="contact">
          <div className="w cg">
            <div>
              <p className="eyebrow">Get a free site survey</p>
              <h2>Tell us about your site. We’ll design the rest.</h2>
              <p className="lead2">Share where you want to build and we will reply with a layout, capacity and cost estimate for your solar and EV charging setup.</p>
              <ul className="ci">
                <li><span>Email</span><a href={`mailto:${site.email}`}>{site.email}</a></li>
                {site.phone && <li><span>Phone</span><a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></li>}
                {site.whatsapp && <li><span>WhatsApp</span><a href={`https://wa.me/${site.whatsapp}`} rel="noopener">Message us for a quick quote</a></li>}
              </ul>
            </div>
            <Contact site={site} options={['Free site survey', ...solutions.map((s) => s.t)]} />
          </div>
        </section>
      </main>

      <footer>
        <div className="w ft">
          <div className="fl"><Image src="/brand/logo.png" width={190} height={47} alt="Brivanta Energy Private Limited" /><p>Solar, EV charging, wind and storage from one Indian energy company.</p></div>
          <Sources items={sources} />
        </div>
        <div className="w fb"><span>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</span><a href={`mailto:${site.email}`}>{site.email}</a></div>
      </footer>
    </>
  );
}
