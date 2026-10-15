// ALL site content lives here. Edit text and numbers here; components never need touching.

export const site = {
  name: 'Brivanta Energy Private Limited',
  short: 'Brivanta Energy',
  url: 'https://www.brivantaenergy.in',
  email: 'hello@brivanta.com', // CONFIRM: the address that should receive enquiries
  phone: '',                   // optional, e.g. '+91 98xxx xxxxx'. Shown only when filled in.
  whatsapp: '',                // optional, digits only with country code, e.g. '9198xxxxxxxx'
  formEndpoint: '',            // optional, see README: a form-service URL. Empty = opens the visitor's email app.
};

export const links = [
  { href: '#solutions', label: 'Solutions', spy: 'solutions' },
  { href: '#hub', label: 'EV Charging', spy: 'hub' },
  { href: '#solar', label: 'Solar', spy: 'solutions' },
  { href: '#wind', label: 'Wind', spy: 'solutions' },
  { href: '#pulse', label: 'Impact', spy: 'impact' },
  { href: '#contact', label: 'Contact', spy: 'contact' },
];

// Estimator model. Change a constant here and the page updates.
export const model = {
  yieldKwhPerKwp: 1450,   // annual solar yield after system losses, India average
  gridKgPerKwh: 0.71,     // grid emission factor, kg CO2 per kWh (CEA CO2 Baseline Database, rounded)
  tariffInrPerKwh: 8,     // grid power cost avoided by each solar kWh
};
export const siteTypes = [
  { n: 'Hotel', kwh: 18 }, { n: 'Mall', kwh: 15 }, { n: 'Public parking', kwh: 15 },
  { n: 'Highway', kwh: 30 }, { n: 'Housing society', kwh: 12 }, { n: 'Office', kwh: 14 },
]; // kwh = typical energy delivered per charging visit

// Official figures, each with the date it was published.
export const hero = [
  { v: '168 GW', l: 'India solar capacity' },
  { v: '52,718', l: 'public EV charging stations' },
  { v: '57 GW', l: 'India wind capacity' },
];
export const pulse = [
  { n: 168, u: ' GW', l: 'Solar installed', s: 'MNRE, 31 Aug 2026', c: 'gold' },
  { n: 57.4, d: 1, u: ' GW', l: 'Wind installed', s: 'MNRE, 30 Jun 2026', c: 'teal' },
  { n: 288, p: '≈', u: ' GW', l: 'Total renewables', s: 'MNRE, Jun 2026', c: 'green' },
  { n: 52718, l: 'Public EV charging stations', s: 'Lok Sabha reply, 21 Jul 2026', c: 'green' },
  { t: '1 crore+', l: 'Registered EVs', s: 'VAHAN, 26 Jul 2026', c: 'gold' },
  { n: 39.72, d: 2, u: ' lakh', l: 'PM Surya Ghar rooftops', s: 'MNRE, 22 Jul 2026', c: 'teal' },
];
export const solarMix = [
  { l: 'Ground-mounted', v: 123.99, c: '#f5b83d' }, { l: 'Rooftop', v: 32.59, c: '#3dbc5a' },
  { l: 'Hybrid', v: 4.83, c: '#14b8a6' }, { l: 'Off-grid', v: 6.63, c: '#8fa6ea' },
];
export const windStates = [
  { l: 'Gujarat', v: 16086 }, { l: 'Tamil Nadu', v: 12273 }, { l: 'Karnataka', v: 8896 }, { l: 'Maharashtra', v: 6318 },
];
export const solarAdds = [
  { l: 'Gujarat', v: 7.6, lon: 72.0, lat: 22.4, c: '#f5b83d', r: 22, dx: 12, dy: 22 },
  { l: 'Rajasthan', v: 6.6, lon: 74.2, lat: 26.7, c: '#f5b83d', r: 20, dx: 12, dy: 4 },
  { l: 'Tamil Nadu', v: 2.4, lon: 78.4, lat: 10.9, c: '#3dbc5a', r: 11, dx: 12, dy: 4 },
];
export const roadmap = [
  { v: '500 GW', t: 'non-fossil electricity capacity target by 2030', c: '#1b8a3a' },
  { v: '100 GW', t: 'wind capacity target by 2030 (156 GW by 2036)', c: '#14b8a6' },
  { v: '45%', t: 'cut in emissions intensity of GDP by 2030 vs 2005', c: '#f5b83d' },
  { v: '2070', t: 'net-zero emissions target', c: '#12337a' },
  { v: '1,457 Mt', t: 'CO₂ from India’s power sector in 2025, about 10% of the global power total', c: '#c0392b' },
];
export const sources = [
  'Solar 168 GW (ground 123.99, rooftop 32.59, hybrid 4.83, off-grid 6.63): MNRE, 31 Aug 2026',
  'H1 2026 solar additions by state and ≈288 GW total renewables: MNRE, JMK Research',
  'Wind 57.44 GW and state capacities, 30 Jun 2026; 100 GW by 2030 target: MNRE',
  '52,718 public EV charging stations (16,561 with fast chargers for cars), as of 31 Mar 2026: Ministry of Heavy Industries, Lok Sabha reply, 21 Jul 2026',
  '10,023,396 registered EVs on 26 Jul 2026: Ministry of Road Transport, Lok Sabha reply (VAHAN)',
  'PM Surya Ghar 39.72 lakh installations: MNRE, 22 Jul 2026',
  '1,457 MtCO₂ power-sector emissions 2025; net zero 2070; 500 GW by 2030: Government of India targets',
];

export const strip = [
  { t: 'Solar Panels', d: 'rooftop & ground', h: '#solar' }, { t: 'EV Charging', d: 'AC · DC fast', h: '#hub' },
  { t: 'Wind Energy', d: 'small & hybrid', h: '#wind' }, { t: 'Batteries', d: 'storage & backup', h: '#batteries' },
  { t: 'Chargers', d: 'home & commercial', h: '#chargers' },
];
export const solutions = [
  { id: 'solar-ev', k: 'hub', t: 'Solar-Enabled EV Charging', d: 'Charging hubs powered by rooftop and canopy solar, with optional battery buffer.' },
  { id: 'stations', k: 'ev', t: 'EV Charging Stations', d: 'AC and DC fast charging for hotels, malls, offices, societies and highways.' },
  { id: 'chargers', k: 'chargers', t: 'EV Chargers (Sales)', d: 'Home wall boxes and commercial chargers, supplied and installed.' },
  { id: 'solar', k: 'solar', t: 'Solar Panels & Systems', d: 'Rooftop, ground-mount and solar carports, designed, supplied, commissioned.' },
  { id: 'batteries', k: 'batt', t: 'Batteries & Storage', d: 'Backup and storage to keep chargers and sites running through peaks and outages.' },
  { id: 'wind', k: 'wind', t: 'Wind Energy', d: 'Wind and wind-solar hybrid solutions for sites with the right resource.' },
];
export const hubFeatures = [
  { t: 'Solar canopy', d: 'shades parked cars while generating' },
  { t: 'AC + DC chargers', d: 'sized to your site and traffic' },
  { t: 'Battery buffer', d: 'optional, for peaks and outages' },
  { t: 'Smart app', d: 'live status, payments, usage reports' },
];
export const installs = [
  { i: 'H', t: 'Hotels', d: 'guest and valet charging' }, { i: 'M', t: 'Malls', d: 'dwell-time fast charging' },
  { i: 'P', t: 'Public parking', d: 'municipal & transit hubs' }, { i: 'W', t: 'Highways', d: 'corridor fast-charge stops' },
  { i: 'S', t: 'Housing societies', d: 'shared + home charging' }, { i: 'O', t: 'Offices', d: 'fleet and staff charging' },
];
export const why = [
  { t: 'One partner', d: 'solar, wind, storage and charging under one roof' },
  { t: 'Site-first design', d: 'every layout sized to your traffic and roof' },
  { t: 'Built for India', d: 'designed around MNRE norms and local grids' },
  { t: 'Always-on support', d: 'monitoring, service and uptime reporting' },
];
