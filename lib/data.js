// Site content and figures live in this file. Change text or numbers here and redeploy;
// the components don't need to be touched.

export const site = {
  name: 'Brivanta Energy Private Limited',
  short: 'Brivanta Energy',
  url: 'https://www.brivantaenergy.in',
  email: 'hello@brivanta.com', // check this is the inbox you actually read
  phone: '', // e.g. '+91 98xxx xxxxx'. Only shown when filled in.
  whatsapp: '', // digits only with country code, e.g. '9198xxxxxxxx'
  formEndpoint: '', // form service URL (see README). Leave empty to use the visitor's email app.
};

export const links = [
  { href: '#solutions', label: 'Solutions', spy: 'solutions' },
  { href: '#hub', label: 'EV Charging', spy: 'hub' },
  { href: '#solar', label: 'Solar', spy: 'solutions' },
  { href: '#wind', label: 'Wind', spy: 'solutions' },
  { href: '#pulse', label: 'Impact', spy: 'impact' },
  { href: '#contact', label: 'Contact', spy: 'contact' },
];

// Assumptions behind the Impact Estimator.
export const model = {
  yieldKwhPerKwp: 1450, // yearly kWh per kWp after losses, rough India average
  gridKgPerKwh: 0.71, // kg CO2 per grid kWh, rounded from the CEA baseline database
  tariffInrPerKwh: 8, // grid tariff saved on every solar kWh
};
export const siteTypes = [
  { name: 'Hotel', kwhPerVisit: 18 },
  { name: 'Mall', kwhPerVisit: 15 },
  { name: 'Public parking', kwhPerVisit: 15 },
  { name: 'Highway', kwhPerVisit: 30 },
  { name: 'Housing society', kwhPerVisit: 12 },
  { name: 'Office', kwhPerVisit: 14 },
]; // kwhPerVisit: typical energy delivered per charging visit

// Official figures. Each one carries the date it was published.
export const hero = [
  { value: '168 GW', label: 'India solar capacity' },
  { value: '52,718', label: 'public EV charging stations' },
  { value: '57 GW', label: 'India wind capacity' },
];
export const pulse = [
  {
    value: 168,
    unit: ' GW',
    label: 'Solar installed',
    source: 'MNRE, 31 Aug 2026',
    accent: 'gold',
  },
  {
    value: 57.4,
    decimals: 1,
    unit: ' GW',
    label: 'Wind installed',
    source: 'MNRE, 30 Jun 2026',
    accent: 'teal',
  },
  {
    value: 288,
    prefix: '≈',
    unit: ' GW',
    label: 'Total renewables',
    source: 'MNRE, Jun 2026',
    accent: 'green',
  },
  {
    value: 52718,
    label: 'Public EV charging stations',
    source: 'Lok Sabha reply, 21 Jul 2026',
    accent: 'green',
  },
  { text: '1 crore+', label: 'Registered EVs', source: 'VAHAN, 26 Jul 2026', accent: 'gold' },
  {
    value: 39.72,
    decimals: 2,
    unit: ' lakh',
    label: 'PM Surya Ghar rooftops',
    source: 'MNRE, 22 Jul 2026',
    accent: 'teal',
  },
];
export const solarMix = [
  { label: 'Ground-mounted', value: 123.99, color: '#f5b83d' },
  { label: 'Rooftop', value: 32.59, color: '#3dbc5a' },
  { label: 'Hybrid', value: 4.83, color: '#14b8a6' },
  { label: 'Off-grid', value: 6.63, color: '#8fa6ea' },
];
export const windStates = [
  { label: 'Gujarat', value: 16086 },
  { label: 'Tamil Nadu', value: 12273 },
  { label: 'Karnataka', value: 8896 },
  { label: 'Maharashtra', value: 6318 },
];
export const solarAdds = [
  {
    label: 'Gujarat',
    value: 7.6,
    lon: 72.0,
    lat: 22.4,
    color: '#f5b83d',
    radius: 22,
    labelDx: 12,
    labelDy: 22,
  },
  {
    label: 'Rajasthan',
    value: 6.6,
    lon: 74.2,
    lat: 26.7,
    color: '#f5b83d',
    radius: 20,
    labelDx: 12,
    labelDy: 4,
  },
  {
    label: 'Tamil Nadu',
    value: 2.4,
    lon: 78.4,
    lat: 10.9,
    color: '#3dbc5a',
    radius: 11,
    labelDx: 12,
    labelDy: 4,
  },
];
export const roadmap = [
  { figure: '500 GW', text: 'non-fossil electricity capacity target by 2030', color: '#1b8a3a' },
  { figure: '100 GW', text: 'wind capacity target by 2030 (156 GW by 2036)', color: '#14b8a6' },
  { figure: '45%', text: 'cut in emissions intensity of GDP by 2030 vs 2005', color: '#f5b83d' },
  { figure: '2070', text: 'net-zero emissions target', color: '#12337a' },
  {
    figure: '1,457 Mt',
    text: 'CO₂ from India’s power sector in 2025, about 10% of the global power total',
    color: '#c0392b',
  },
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
  { title: 'Solar Panels', caption: 'rooftop & ground', href: '#solar' },
  { title: 'EV Charging', caption: 'AC · DC fast', href: '#hub' },
  { title: 'Wind Energy', caption: 'small & hybrid', href: '#wind' },
  { title: 'Batteries', caption: 'storage & backup', href: '#batteries' },
  { title: 'Chargers', caption: 'home & commercial', href: '#chargers' },
];
export const solutions = [
  {
    id: 'solar-ev',
    art: 'hub',
    title: 'Solar-Enabled EV Charging',
    description: 'Charging hubs powered by rooftop and canopy solar, with optional battery buffer.',
  },
  {
    id: 'stations',
    art: 'ev',
    title: 'EV Charging Stations',
    description: 'AC and DC fast charging for hotels, malls, offices, societies and highways.',
  },
  {
    id: 'chargers',
    art: 'chargers',
    title: 'EV Chargers (Sales)',
    description: 'Home wall boxes and commercial chargers, supplied and installed.',
  },
  {
    id: 'solar',
    art: 'solar',
    title: 'Solar Panels & Systems',
    description: 'Rooftop, ground-mount and solar carports, designed, supplied, commissioned.',
  },
  {
    id: 'batteries',
    art: 'batt',
    title: 'Batteries & Storage',
    description: 'Backup and storage to keep chargers and sites running through peaks and outages.',
  },
  {
    id: 'wind',
    art: 'wind',
    title: 'Wind Energy',
    description: 'Wind and wind-solar hybrid solutions for sites with the right resource.',
  },
];
export const hubFeatures = [
  { title: 'Solar canopy', detail: 'shades parked cars while generating' },
  { title: 'AC + DC chargers', detail: 'sized to your site and traffic' },
  { title: 'Battery buffer', detail: 'optional, for peaks and outages' },
  { title: 'Smart app', detail: 'live status, payments, usage reports' },
];
export const installs = [
  { initial: 'H', title: 'Hotels', detail: 'guest and valet charging' },
  { initial: 'M', title: 'Malls', detail: 'dwell-time fast charging' },
  { initial: 'P', title: 'Public parking', detail: 'municipal & transit hubs' },
  { initial: 'W', title: 'Highways', detail: 'corridor fast-charge stops' },
  { initial: 'S', title: 'Housing societies', detail: 'shared + home charging' },
  { initial: 'O', title: 'Offices', detail: 'fleet and staff charging' },
];
export const why = [
  { title: 'One partner', detail: 'solar, wind, storage and charging under one roof' },
  { title: 'Site-first design', detail: 'every layout sized to your traffic and roof' },
  { title: 'Built for India', detail: 'designed around MNRE norms and local grids' },
  { title: 'Always-on support', detail: 'monitoring, service and uptime reporting' },
];
