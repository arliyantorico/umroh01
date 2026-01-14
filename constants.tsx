
import { Package, Feature, Testimonial } from './types';

export const PACKAGES: Package[] = [
  {
    id: '1',
    title: '5-Star Umrah Ramadan',
    description: 'Experience the spiritual height of Ramadan with luxury accommodation steps from the Haram.',
    longDescription: 'Our Ramadan package is designed for the discerning pilgrim who seeks to maximize their spiritual focus during the holiest month. We provide seamless logistical support and luxury accommodations directly overlooking the Holy Mosque, ensuring you are never far from the heart of worship.',
    price: '$2,500',
    duration: '12 Days',
    tag: 'Ramadan Special',
    tagColor: 'bg-accent',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALb741PxwYCSAzFWxaoPn3zYB5DymitZJoklTBRN5nYfXjRg60DVXL3WARcvGp1122xXb7ifXZ69MVw8vaKWiJWPV06iTM_Vd2gyBCgTNKFzgnt21s3zc9xRjP3l4su7m0OE1EsIlnAdikygl0buqEFxurMLE-lgGwkPe2wxVQOwlyJVHIU7357PB7MvRUFF1xa1zhNdSXU0NO6Jesoy9aYFdX9dGySU3Fjgn1Z2x1qPoYWaCbEs1ElCazih6bnQbZfEHP68itn1Q',
    features: ['Flight', '5-Star', 'Visa'],
    inclusions: [
      'Round-trip international flights (Economy/Business)',
      '5-Star accommodation in Makkah (Clock Tower or similar)',
      '5-Star accommodation in Madinah (Pullman Zamzam or similar)',
      'Daily Suhoor and Iftar buffet',
      'VIP ground transportation in private GMC/Luxury bus',
      'Electronic Umrah Visa processing',
      'Guided Ziyarah in Makkah and Madinah'
    ],
    itinerary: [
      { day: 'Day 1-2', activity: 'Arrival in Jeddah and transfer to Makkah for Umrah rituals.' },
      { day: 'Day 3-7', activity: 'Spiritual activities and prayers in Masjid al-Haram, Makkah.' },
      { day: 'Day 8-10', activity: 'Transfer to Madinah via Haramain High Speed Rail.' },
      { day: 'Day 11-12', activity: 'Ziyarah in Madinah and departure to airport.' }
    ]
  },
  {
    id: '2',
    title: 'Economy Saver Package',
    description: 'Affordable spirituality without compromising on guidance and essential comfort.',
    longDescription: 'The Economy Saver package is ideal for families and students looking for a comprehensive pilgrimage experience at an accessible price point. We focus on providing high-quality guidance and reliable logistics, keeping you focused on your spiritual journey.',
    price: '$1,800',
    duration: '10 Days',
    tag: 'Best Value',
    tagColor: 'bg-primary',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAmrXAuKUELXhTJuf633YU4k8FQ4-rygevgCIFPWYUGkv2RWkNPJeZdsCDn51HkmVGC1Sjfu1YaDx71VZ25wCUGNXxl_0d0rM1qmPvPdkw5jhdqIEIitcSf4THS9lDu-hEF00FEPdTH4GtNA0FBSa5au23rEvWxFZg9xWix8IidEjTvrRtuh1g4p5-mnsKZzmxHQOCR5BkxJ3vaORMVZy2A8d5Oanpot_kNXVaOYkc73ByvKm7f3Vl8lx2StXAaDamXQkHqamaIkng',
    features: ['Flight', '3-Star', 'Transport'],
    inclusions: [
      'Round-trip international flights',
      '3-Star hotels within walking distance (600m-800m) to Haram',
      'Standard Umrah Visa',
      'Air-conditioned group bus transport',
      'Guided group Ziyarah tours'
    ],
    itinerary: [
      { day: 'Day 1', activity: 'Arrival and Umrah performance.' },
      { day: 'Day 2-5', activity: 'Daily prayers in Makkah.' },
      { day: 'Day 6-9', activity: 'Travel to Madinah and visitation of the Prophet\'s Mosque.' },
      { day: 'Day 10', activity: 'Farewell and return flight.' }
    ]
  },
  {
    id: '3',
    title: 'VIP Hajj Experience',
    description: 'The ultimate pilgrimage journey with private tents in Mina and exclusive access.',
    longDescription: 'A once-in-a-lifetime journey deserves unparalleled service. Our VIP Hajj experience offers the highest level of exclusivity, featuring private camps in Mina directly next to the Jamarat, gourmet dining, and 24/7 dedicated support staff.',
    price: 'Inquire',
    duration: '21 Days',
    tag: 'VIP Experience',
    tagColor: 'bg-black/80',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDaUCXU_doS2HRkdxQ-bD2bLX2z3fHBxhY-39BWI4KNuxADactDHPlNG7P2rBMWpP8LfBjZ3MHpbaF6XkzAQuWovC2sCwjQhAEyXjQ8srZA6a20dSphVqieorlycDvVTu_ka7ZGOjPYRj3eNyCpTMpeAEsGqfbXZY_KaW8ozS2qUiFRpPdtmZeEx_5NRe6CYJNrMrl-VKotVEd8rp3ckKDNlG3T_BGWgkOV4DLfsJurQlZr2mTxhzdpNwunY2DVgwrFcYW4uS3jY5Y',
    features: ['First Class', '5-Star+', 'Butler'],
    inclusions: [
      'First Class airfare with major carriers',
      'Luxury Presidential Suites in Makkah & Madinah',
      'Private air-conditioned tents in Mina (Category A+)',
      '24/7 Personal concierge and butler service',
      'Exclusive Hajj seminars with world-renowned scholars',
      'Full medical support team'
    ],
    itinerary: [
      { day: 'Phase 1', activity: 'Pre-Hajj spiritual preparation in Madinah (5 days).' },
      { day: 'Phase 2', activity: 'Transfer to Makkah and performance of Umrah (3 days).' },
      { day: 'Phase 3', activity: 'The Days of Hajj: Mina, Arafat, and Muzdalifah in VIP comfort (6 days).' },
      { day: 'Phase 4', activity: 'Tawaf al-Wida and departure (Rest of stay).' }
    ]
  }
];

export const FEATURES: Feature[] = [
  {
    icon: 'school',
    title: 'Expert Mutawwif',
    description: 'Our journeys are guided by renowned scholars to ensure every ritual is performed with correctness and deep spiritual understanding.'
  },
  {
    icon: 'apartment',
    title: 'Luxury Accommodation',
    description: 'Rest in premium hotels just steps away from the Haram, allowing you to maximize your time in prayer and reflection.'
  },
  {
    icon: 'verified_user',
    title: 'Seamless Processing',
    description: 'From visa handling to ground transport, we manage every logistical detail so you can focus entirely on your ibadah.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: '"An unforgettable journey. The attention to detail and spiritual guidance provided by the team made our Hajj experience profound and worry-free."',
    author: 'Ahmed Al-Farsi',
    role: 'Hajj Package 2023',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtu4D2VZ0Bis4nPewIIIxavnzCCu_UsoxIDZLwVfABmpjkqD7oV2z86u-KY9szUhs1fAOlX12RiFNMn_HYN07zBMGCsxfW3c-N94JJStO6EQLQuaDToxMcChTrhH1IUg9jcFSIU7_FkkQxW6iyzSCbaumSmo8Bl-8298WqiA6-doT4IPGAHS1vCTah2Enw-DUiv8mQ3rphrgab6S8ePs6NDeHzT9i_koSZfa-ORyrurfuAwf4k1yfo4NHitTZ6CtAkNnXM2ov_JvE'
  }
];
