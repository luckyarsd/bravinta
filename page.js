import { Header, Stat, Calculator, Contact } from './components';
import { site, links, stats, services, steps, vehicles, faqs } from '../lib/data';

function Turbine({ x, y, s }) {
  return (<g><path d={`M${x} ${y}V300`} stroke="#fff" strokeOpacity=".7" strokeWidth={3 * s} />
    <g className="rot" style={{ transformOrigin: `${x}px ${y}px` }}>
      {[0, 120, 240].map((r) => <path key={r} d={`M${x} ${y}L${x - 3 * s} ${y - 70 * s}L${x + 3 * s} ${y - 70 * s}Z`} fill="#fff" transform={`rotate(${r} ${x} ${y})`} />)}
      <circle cx={x} cy={y} r={5 * s} fill="#fff" /></g></g>);
}

const ld = { '@context': 'https://schema.org', '@type': 'Organization', name: site.name, url: site.url, email: site.email, areaServed: 'IN', description: 'Sustainable EV energy solutions: battery recharge, swapping, sales and fleet energy plans.' };

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Header links={links} />
      <main id="top">
        <section className="hero">
          <svg className="art" viewBox="0 0 400 300" preserveAspectRatio="xMidYMax slice" aria-hidden="true">
            <Turbine x={270} y={110} s={1.3} /><Turbine x={350} y={150} s={0.9} /><Turbine x={200} y={175} s={0.6} />
            <path d="M0 260Q100 220 200 255T400 240V300H0Z" fill="#00a86b" fillOpacity=".55" /><path d="M0 285Q120 255 240 280T400 270V300H0Z" fill="#0d2238" fillOpacity=".5" />
          </svg>
          <div className="w hc">
            <h1>Powering the electric future, one charge at a time.</h1>
            <p>Battery recharge, swapping and sales for riders, fleets and businesses. Cleaner energy, lower running costs, more time on the road.</p>
            <div className="cta"><a className="btn" href="#contact">Get a free quote</a><a className="btn ghost" href="#savings">Calculate savings</a></div>
          </div>
        </section>
        <section id="impact" className="stats"><div className="w sg">{stats.map((s) => <Stat key={s.label} {...s} />)}</div></section>
        <section id="services"><div className="w">
          <div className="hd"><h2>Energy solutions for every EV</h2><p>One partner for the energy side of electric mobility, from a single battery to a full fleet.</p></div>
          <div className="grid">{services.map((s) => (
            <article className="card hov" key={s.t}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={s.i} /></svg>
              <h3>{s.t}</h3><p>{s.d}</p></article>))}</div>
        </div></section>
        <section id="savings" className="soft"><div className="w">
          <div className="hd"><h2>See what going electric saves you</h2><p>Pick your vehicle and adjust the numbers. The estimate updates instantly.</p></div>
          <Calculator vehicles={vehicles} />
        </div></section>
        <section id="process"><div className="w">
          <div className="hd"><h2>How it works</h2></div>
          <ol className="steps">{steps.map((s) => <li key={s.t}><h3>{s.t}</h3><p>{s.d}</p></li>)}</ol>
        </div></section>
        <section id="faq" className="soft"><div className="w narrow">
          <div className="hd"><h2>Frequently asked questions</h2></div>
          {faqs.map((f) => <details key={f.q}><summary>{f.q}</summary><p>{f.a}</p></details>)}
        </div></section>
        <section id="contact"><div className="w cg">
          <div><h2>Talk to our team</h2><p>Tell us what you need and we will reply with a plan and a quote.</p>
            <ul className="ci"><li>Email: <a href={`mailto:${site.email}`}>{site.email}</a></li><li>Phone: <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></li></ul></div>
          <Contact email={site.email} services={services} />
        </div></section>
      </main>
      <footer><div className="w fw"><span>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</span><a href={`mailto:${site.email}`}>{site.email}</a></div></footer>
    </>
  );
}
