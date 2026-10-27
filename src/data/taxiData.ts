import { FleetCar, TaxiRoute, TourPackage, ReviewItem, FAQItem } from '../types';

export const FLEET_CARS: FleetCar[] = [
  {
    id: 'swift',
    name: 'Maruti Suzuki Swift',
    category: 'hatchback',
    tagline: 'Swift / WagonR or similar',
    image: '/images/swift.jpg',
    seats: 4,
    luggage: 2,
    ac: true,
    baseFarePerKm: 10,
    cityPackageRate: 1499,
    features: ['Chilled Air Conditioning', 'Clean & Sanitized Cabin', 'Luggage Boot Space', 'Fast City Nav'],
    bestFor: 'City rides, shopping, solo travelers & quick transfers',
    popular: false
  },
  {
    id: 'sedan',
    name: 'Maruti Dzire / Etios',
    category: 'sedan',
    tagline: 'Comfortable Executive Sedan',
    image: '/images/sedan.jpg',
    seats: 4,
    luggage: 3,
    ac: true,
    baseFarePerKm: 11,
    cityPackageRate: 1800,
    features: ['Spacious 378L Boot', 'Ergonomic Rear Recline', 'Highway Comfort Suspension', 'Mobile USB Charging'],
    bestFor: 'Airport pickup/drop, business travel, couples & family trips',
    popular: true
  },
  {
    id: 'ertiga',
    name: 'Maruti Suzuki Ertiga',
    category: 'suv',
    tagline: 'Smart 6-Seater Family MPV',
    image: '/images/ertiga.jpg',
    seats: 6,
    luggage: 4,
    ac: true,
    baseFarePerKm: 13,
    cityPackageRate: 2400,
    features: ['Roof-Mounted Rear AC Vents', 'Foldable 3rd Row', 'Extra Luggage Carrier', 'Smooth Highway Ride'],
    bestFor: 'Family weekend trips to Somnath, Dwarka & Gir Lion Safari',
    popular: true
  },
  {
    id: 'innova',
    name: 'Toyota Innova',
    category: 'suv',
    tagline: 'Reliable 7-Seater Workhorse',
    image: '/images/innova.jpg',
    seats: 7,
    luggage: 5,
    ac: true,
    baseFarePerKm: 15,
    cityPackageRate: 2800,
    features: ['Renowned Reliability', 'Heavy Luggage Capacity', 'All-Terrain Comfort', 'Dual Zone AC'],
    bestFor: 'Long distance touring, religious yatras & NRI airport transfers',
    popular: false
  },
  {
    id: 'crysta',
    name: 'Toyota Innova Crysta',
    category: 'suv',
    tagline: 'Premium Executive Luxury MPV',
    image: '/images/crysta.jpg',
    seats: 7,
    luggage: 5,
    ac: true,
    baseFarePerKm: 18,
    cityPackageRate: 3500,
    features: ['Plush Captain Seats', 'Whisper-Quiet Cabin', 'Ambient Lighting', 'Premium Audio System'],
    bestFor: 'VIP delegations, high-end family travel & luxury wedding cabs',
    popular: true
  },
  {
    id: 'tempo-traveller',
    name: 'Force Tempo Traveller',
    category: 'group',
    tagline: '14 / 17-Seater Luxury Van',
    image: '/images/tempo-traveller.jpg',
    seats: 17,
    luggage: 12,
    ac: true,
    baseFarePerKm: 24,
    cityPackageRate: 4800,
    features: ['Pushback High-Back Seats', 'High Roof Stand-Up Clearance', 'Individual AC Vents', 'PA/Mic & LED Screen'],
    bestFor: 'Family groups, wedding guests, corporate tours & pilgrim yatras',
    popular: false
  },
  {
    id: 'bus',
    name: 'Luxury Tourist Mini Coach',
    category: 'group',
    tagline: '25 to 35-Seater Tour Bus',
    image: '/images/bus.jpg',
    seats: 30,
    luggage: 25,
    ac: true,
    baseFarePerKm: 34,
    cityPackageRate: 7500,
    features: ['Air Suspension', 'Large Underfloor Luggage Bay', 'Reclining Luxury Seats', 'Surround Sound System'],
    bestFor: 'Large wedding groups, school/college excursions & grand Gujarat tours',
    popular: false
  }
];

export const POPULAR_ROUTES: TaxiRoute[] = [
  {
    id: 'rajkot-ahmedabad',
    from: 'Rajkot',
    to: 'Ahmedabad',
    distanceKm: 215,
    duration: '3 hrs 45 mins',
    sedanFareEst: 2600,
    suvFareEst: 3500,
    routeVia: 'Via NH47 (Limbdi - Bagodara Expressway)',
    highlight: 'Fast four-lane expressway, on-time airport and railway connections'
  },
  {
    id: 'rajkot-hirasar-airport',
    from: 'Rajkot City',
    to: 'Hirasar Int. Airport (HSR)',
    distanceKm: 32,
    duration: '40 mins',
    sedanFareEst: 899,
    suvFareEst: 1399,
    routeVia: 'Via NH27 (Kuvadva Road)',
    highlight: 'Guaranteed 24x7 terminal pickup with flight delay tracking'
  },
  {
    id: 'rajkot-somnath',
    from: 'Rajkot',
    to: 'Somnath Jyotirlinga',
    distanceKm: 198,
    duration: '3 hrs 50 mins',
    sedanFareEst: 2800,
    suvFareEst: 3800,
    routeVia: 'Via NH151 (Gondal - Jetpur - Junagadh - Veraval)',
    highlight: 'Pilgrimage corridor, comfortable scenic drive to the holy temple'
  },
  {
    id: 'rajkot-dwarka',
    from: 'Rajkot',
    to: 'Dwarkadhish Temple',
    distanceKm: 225,
    duration: '4 hrs 15 mins',
    sedanFareEst: 3100,
    suvFareEst: 4200,
    routeVia: 'Via Jamnagar - Khambhalia Highway',
    highlight: 'Direct temple drop, Bet Dwarka & Shivrajpur Blue Flag Beach trip'
  },
  {
    id: 'rajkot-jamnagar',
    from: 'Rajkot',
    to: 'Jamnagar',
    distanceKm: 92,
    duration: '1 hr 45 mins',
    sedanFareEst: 1450,
    suvFareEst: 2100,
    routeVia: 'Via SH25 (Direct 4-Lane Highway)',
    highlight: 'Reliance Greens, brass industry hub, & Lakhota Lake express'
  },
  {
    id: 'rajkot-junagadh',
    from: 'Rajkot',
    to: 'Junagadh (Girnar)',
    distanceKm: 104,
    duration: '2 hrs 00 mins',
    sedanFareEst: 1600,
    suvFareEst: 2300,
    routeVia: 'Via NH151 (Gondal - Jetpur)',
    highlight: 'Girnar Ropeway pickup, historic Uparkot Fort & Bhavnath valley'
  },
  {
    id: 'rajkot-sasangir',
    from: 'Rajkot',
    to: 'Sasan Gir (Lion Sanctuary)',
    distanceKm: 156,
    duration: '3 hrs 20 mins',
    sedanFareEst: 2400,
    suvFareEst: 3200,
    routeVia: 'Via Junagadh - Mendarda route',
    highlight: 'Asiatic Lion Safari morning & evening slot timings matched'
  },
  {
    id: 'rajkot-diu',
    from: 'Rajkot',
    to: 'Diu Island',
    distanceKm: 232,
    duration: '5 hrs 00 mins',
    sedanFareEst: 3400,
    suvFareEst: 4600,
    routeVia: 'Via Junagadh - Una - Diu Coastline',
    highlight: 'Nagoa Beach weekend getaways, Portuguese forts, & resorts'
  },
  {
    id: 'rajkot-surat',
    from: 'Rajkot',
    to: 'Surat',
    distanceKm: 440,
    duration: '8 hrs 15 mins',
    sedanFareEst: 5400,
    suvFareEst: 7200,
    routeVia: 'Via Vadodara - Bharuch Golden Bridge highway',
    highlight: 'Door-to-door diamond & textile trade travel, sleeper-smooth rides'
  },
  {
    id: 'rajkot-morbi',
    from: 'Rajkot',
    to: 'Morbi (Ceramic Hub)',
    distanceKm: 68,
    duration: '1 hr 15 mins',
    sedanFareEst: 1200,
    suvFareEst: 1750,
    routeVia: 'Via Morbi - Rajkot Highway',
    highlight: 'Daily business traveler pickups for ceramic factories & tiles expo'
  }
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'saurashtra-darshan',
    title: 'Saurashtra Holy Pilgrimage Tour',
    tagline: 'Complete 3 Days / 2 Nights Sacred Circuit',
    days: '3 Days / 2 Nights',
    places: ['Dwarka Temple & Bet Dwarka', 'Somnath Temple & Veraval', 'Junagadh Girnar Darshan', 'Porbandar Kirti Mandir'],
    sedanPrice: 9499,
    ertigaPrice: 12999,
    crystaPrice: 16999,
    badge: 'Most Popular'
  },
  {
    id: 'wildlife-beach',
    title: 'Gir Lion Safari & Diu Beach Getaway',
    tagline: 'Adventure & Coastal Relaxation',
    days: '2 Days / 1 Night',
    places: ['Sasan Gir Devalia Park', 'Diu Nagoa Beach & Fort', 'Naida Caves & Church', 'Somnath Evening Aarti'],
    sedanPrice: 7200,
    ertigaPrice: 9800,
    crystaPrice: 12500,
    badge: 'Family Favorite'
  },
  {
    id: 'rajkot-local-heritage',
    title: 'Rajkot Full-Day City & Temple Tour',
    tagline: '8 Hours / 80 Kilometers Complete Tour',
    days: '1 Full Day',
    places: ['Ishwariya Park & Lake', 'Watson Museum & Jubilee Garden', 'Aji Dam Garden', 'Rotary Dolls Museum', 'Racecourse Ring Road'],
    sedanPrice: 1800,
    ertigaPrice: 2400,
    crystaPrice: 3200
  }
];

export const CUSTOMER_REVIEWS: ReviewItem[] = [
  {
    id: '1',
    name: 'Bhavesh Patel',
    city: 'Ahmedabad',
    trip: 'Rajkot to Hirasar Airport',
    rating: 5,
    date: 'Yesterday',
    comment: 'Booked an Innova for our morning flight at Hirasar Airport. The driver arrived 15 minutes before time at Kalawad Road, assisted with heavy luggage, and the car was sparkling clean. Super smooth booking over WhatsApp!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Meera Trivedi',
    city: 'Mumbai',
    trip: 'Rajkot to Somnath & Dwarka',
    rating: 5,
    date: '3 days ago',
    comment: 'We hired an Ertiga for 3 days Saurashtra pilgrim tour with my elderly parents. The driver was very respectful, drove cautiously on highways, and knew the best clean food stops. Highly recommended!',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    name: 'Hitesh Gondaliya',
    city: 'Rajkot',
    trip: 'Rajkot to Surat Outstation',
    rating: 5,
    date: 'Last week',
    comment: 'Best cab rates in Rajkot without any hidden toll confusion. Transparent pricing shared beforehand on WhatsApp. Chilled AC throughout the 400km journey.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&auto=format&fit=crop&q=80'
  }
];

export const TAXI_FAQS: FAQItem[] = [
  {
    category: 'booking',
    question: 'How do I book a taxi with Rajkot Taxi Point?',
    answer: 'Booking is lightning fast! Simply tap "WhatsApp Us" or "Call Now". Send your pickup address, destination, date, and preferred car. Our dispatcher immediately responds with car confirmation and driver details. No tedious app installs or complicated signup forms required.'
  },
  {
    category: 'airport',
    question: 'Do you offer pickup & drop at Rajkot Hirasar International Airport?',
    answer: 'Yes! We provide dedicated 24x7 Hirasar Airport taxi service. Just share your flight number and landing time. Even if your flight is delayed, our driver tracks the flight status and waits at the arrivals pickup lane with your name board.'
  },
  {
    category: 'fare',
    question: 'Are there any hidden costs, night charges, or surprise extras?',
    answer: 'Zero hidden costs. We provide all-inclusive or clearly broken down estimates (km rate, toll taxes, driver allowance, and parking) beforehand on WhatsApp before your ride begins. What we agree on is what you pay.'
  },
  {
    category: 'booking',
    question: 'Which car models are available in your fleet?',
    answer: 'We have a wide fleet of verified commercial cabs: Maruti Swift (hatchback), Maruti Dzire / Toyota Etios (sedan), Maruti Ertiga (6-seater MPV), Toyota Innova & Innova Crysta (luxury 7-seater SUV), Force Tempo Traveller (14-17 seater), and 30-seater luxury mini buses.'
  },
  {
    category: 'safety',
    question: 'Can I book one-way outstation cabs from Rajkot?',
    answer: 'Absolutely. We offer dedicated one-way drop fares to Ahmedabad, Jamnagar, Junagadh, Somnath, Dwarka, Surat, and Mumbai, meaning you only pay for the one-way trip rather than paying round-trip return empty kilometers.'
  },
  {
    category: 'safety',
    question: 'Are the drivers verified and safe for night travel and families?',
    answer: 'Every driver in our network holds a commercial badge license, has undergone thorough police verification, and has over 5+ years of highway driving experience across Gujarat. Cars are equipped with GPS tracking for maximum peace of mind.'
  }
];

export const RAJKOT_PICKUP_POINTS = [
  'Rajkot Junction Railway Station',
  'Hirasar International Airport (HSR)',
  'Kalawad Road',
  '150 Feet Ring Road',
  'Indira Circle / University Road',
  'Gondal Road / ST Bus Stand',
  'Yagnik Road / Trikon Baug',
  'Kotecha Chowk',
  'Mavdi / Mavdi Bypass',
  'Madhapar Chowk (Jamnagar Road)',
  'Greenland Chowkadi (Ahmedabad Highway)',
  'Aji Dam / Bhavanagar Road'
];

export const POPULAR_DESTINATIONS = [
  'Hirasar International Airport (HSR)',
  'Ahmedabad (Airport / City)',
  'Somnath Jyotirlinga Temple',
  'Dwarka & Bet Dwarka',
  'Jamnagar (City / Reliance)',
  'Junagadh (Girnar Ropeway)',
  'Sasan Gir (Lion Safari)',
  'Diu Island & Nagoa Beach',
  'Surat City',
  'Vadodara',
  'Morbi Ceramic Zone',
  'Bhavnagar / Palitana',
  'Porbandar',
  'Gandhinagar'
];
