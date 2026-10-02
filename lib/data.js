// ALL site content lives here. Edit text/numbers here, no need to touch components.
export const site = { name: 'Brivanta Energy Pvt Ltd', url: 'https://brivanta.com', email: 'hello@brivanta.com', phone: '+91 00000 00000' };
export const links = [{ href: '#services', label: 'Solutions' }, { href: '#impact', label: 'Impact' }, { href: '#savings', label: 'Savings' }, { href: '#process', label: 'Process' }, { href: '#faq', label: 'FAQ' }];
// PLACEHOLDER numbers: replace with your real figures before launch.
export const stats = [{ value: 3, suffix: ' min', label: 'Typical battery swap' }, { value: 24, suffix: 'x7', label: 'Customer support' }, { value: 4, suffix: '', label: 'Vehicle categories served' }, { value: 100, suffix: '%', label: 'Renewable-ready design' }];
const I = { bolt: 'M13 2 4 14h7l-1 8 9-12h-7z', batt: 'M3 8h15a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zM22 11v2M7 12h4M9 10v4', plug: 'M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0zM12 17v5', fleet: 'M3 16V7h11v9M14 10h4l3 3v3h-7M7 19a2 2 0 1 0 0-.01M17 19a2 2 0 1 0 0-.01', pulse: 'M3 12h4l3-8 4 16 3-8h4', sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5 19 19M5 19l1.5-1.5M17.5 6.5 19 5' };
export const services = [
  { t: 'Battery recharge and swapping', d: 'Exchange a drained pack for a full one in minutes. No waiting at a socket, more hours on the road.', i: I.batt },
  { t: 'EV battery sales', d: 'New batteries matched to your vehicle, with honest advice on capacity, range and warranty.', i: I.bolt },
  { t: 'Charging infrastructure', d: 'Chargers for homes, offices and commercial sites, installed, commissioned and maintained.', i: I.plug },
  { t: 'Fleet energy plans', d: 'Delivery and ride-hailing fleets get predictable energy costs and priority service.', i: I.fleet },
  { t: 'Battery health and service', d: 'Testing, reconditioning and replacement advice to extend the life of every pack.', i: I.pulse },
  { t: 'Solar-ready storage', d: 'Energy storage that pairs with solar, so more of your power comes from the sun.', i: I.sun },
];
export const steps = [{ t: 'Tell us your need', d: 'Vehicle type, daily distance and location.' }, { t: 'Get a tailored plan', d: 'Recharge, swap or buy, matched to your usage.' }, { t: 'Onboard in days', d: 'Batteries, chargers or swap access set up for you.' }, { t: 'Ride with support', d: 'Ongoing service and battery health checks.' }];
// mileage = km per litre of petrol; kwh = EV kWh per km
export const vehicles = [{ n: 'Two-wheeler', km: 60, mileage: 45, kwh: 0.03 }, { n: 'Three-wheeler', km: 100, mileage: 25, kwh: 0.08 }, { n: 'Car', km: 40, mileage: 15, kwh: 0.15 }, { n: 'Light truck', km: 120, mileage: 10, kwh: 0.3 }];
export const faqs = [
  { q: 'What is battery swapping?', a: 'You exchange a discharged battery for a fully charged one at a Brivanta point. It takes minutes, far less than a full charge.' },
  { q: 'Can I buy a battery without a plan?', a: 'Yes. We sell batteries outright and help you choose one that fits your vehicle.' },
  { q: 'Do you work with fleets and businesses?', a: 'Yes. Fleet plans cover recharge, swapping, charger installation and servicing under one agreement.' },
  { q: 'How accurate is the savings calculator?', a: 'It is an estimate based on the numbers you enter. Your real savings depend on your vehicle, tariff and usage.' },
  { q: 'How do I get started?', a: 'Send a request using the form below. We reply with a recommendation and a quote.' },
];
