/**
 * Site content — update these values when you have final business details.
 * See README.md for which fields to change.
 */
export const site = {
  name: '911 Cooling',
  tagline: 'HVAC & Emergency Services',
  phone: '(305) 555-0911',
  phoneTel: '+13055550911',
  email: 'service@911cooling.com',
  license: 'Licensed & Insured — FL HVAC # pending',
  /** Your Google Business Profile reviews URL — update when ready */
  googleBusinessUrl: 'https://www.google.com/maps',
  diagnosticOffer: 'Diagnostic fee waived with any same-day repair',
  hero: {
    headline: 'South Florida A/C Emergency? Let us Help',
    /** Add photos to public/images/hero/ — see README there */
    bannerImages: [
      '/images/hero/01.png',
      '/images/hero/02.png',
      '/images/hero/03.png',
      '/images/hero/04.png',
    ],
    bullets: [{ label: 'Honest' }, { label: 'Fast' }, { label: 'Professional' }],
  },
  trustChips: ['24/7 Emergency Dispatch', 'Licensed & Insured', 'No Hidden Fees'],
  whoWeAre: {
    prehead: 'Who We Are',
    headline: 'Certified & Licensed HVAC Contractor You Can Trust',
    bodyBefore: 'At 911 Cooling, we’re more than just an',
    bodyHighlight: 'HVAC company in Miami-Dade',
    bodyAfter:
      '; we’re a dedicated team committed to your comfort and safety across South Florida. Founded on reliability, professionalism, and fast emergency response, we deliver heating and cooling solutions you can count on when the heat is unbearable.',
    quote:
      'It’s not just about fixing problems; it’s about building trust and giving you peace of mind that your home is in good hands. Our commitment is your comfort and satisfaction, 24/7.',
    signature: 'The 911 Cooling Team',
    signatureTitle: 'HVAC & Emergency Services',
    photoTop: '/images/hero/01.png',
    photoBottom: '/images/hero/02.png',
  },
  reviews: {
    prehead: 'Real Stories. Real Comfort.',
    headline: 'See What Our Customers Are Saying',
    items: [
      {
        name: 'Maria Rodriguez',
        time: '3 months ago',
        text: 'They showed up fast when our AC died during a heat wave. The technician explained everything clearly, worked efficiently, and had us cooling again the same visit. Honest pricing — no surprises.',
      },
      {
        name: 'James Chen',
        time: '5 months ago',
        text: 'Professional from the first call to the last screw tightened. They respected our home, wore shoe covers, and double-checked the system before leaving. We had been dealing with weak airflow upstairs for weeks, and two other companies quoted us a full system replacement without really explaining why. 911 Cooling took the time to test static pressure, inspect the ductwork, and found a combination of a dirty coil, a failing capacitor, and a partially blocked return. They walked us through every reading, showed us photos on their phone, and gave us three options at different price points with zero pressure. The crew finished the repair the same day, cleaned up completely, and followed up the next morning to make sure temperatures were holding. That level of honesty and technical detail is rare in South Florida. We signed up for their maintenance plan on the spot and have already recommended them to our neighbors. If you want a team that treats your home like their own and actually fixes the root cause instead of upselling, call 911 Cooling.',
      },
      {
        name: 'Patricia Gomez',
        time: '1 year ago',
        text: 'Our unit was making a loud noise and not cooling upstairs. 911 Cooling diagnosed a capacitor issue on the spot and fixed it right away. Friendly team and fair quote.',
      },
      {
        name: 'David Okonkwo',
        time: '8 months ago',
        text: 'Excellent communication and on-time arrival. They walked us through options without pressure and helped us choose what fit our budget. Five stars for emergency service.',
      },
      {
        name: 'Sandra Mitchell',
        time: '4 months ago',
        text: 'Our condo AC quit on a Saturday night and 911 Cooling still picked up. Technician arrived within the window they quoted, found a clogged drain line and a weak capacitor, and had cold air running again in under two hours. Clear pricing before any work started.',
      },
      {
        name: 'Carlos Vega',
        time: '6 weeks ago',
        text: 'Best HVAC experience we have had in Kendall. They serviced both our main unit and mini-split, replaced a bad contactor, and explained how to keep the condensate line clear during humid season. Courteous, fast, and the house has never cooled more evenly.',
      },
    ],
  },
  about: {
    hero: {
      breadcrumb: 'Home / About Us',
      headline: 'About Us',
      image: '/images/hero/01.png',
    },
    story: {
      prehead: 'Our Story',
      headline: 'Where Emergency Response Meets Lasting Comfort',
      paragraphs: [
        {
          before: '911 Cooling is a licensed HVAC company serving Miami-Dade and surrounding South Florida communities, dedicated to ',
          highlight: 'heating, ventilation, and air conditioning services',
          after:
            ' for residential clients. With fully stocked trucks and certified technicians, we deliver comfort and peace of mind when Florida heat demands it most.',
        },
        {
          text: 'We built 911 Cooling around a simple promise: show up fast when your AC fails, fix it right the first time, and leave your system stronger so the next emergency is less likely. Every visit includes prevention checks — not just a quick patch.',
        },
      ],
    },
    standFor: {
      prehead: 'What We Stand For',
      headline: 'Choose Us for Your Comfort',
      intro:
        'Discover why South Florida homeowners trust 911 Cooling for expert HVAC services, emergency repair, and maintenance that puts your home first.',
      pillars: [
        {
          title: 'Quality Service',
          body: 'We provide high-quality HVAC repair and maintenance tailored to your system, your home, and South Florida’s heat and humidity.',
        },
        {
          title: 'Customer Satisfaction',
          body: 'Our priority is clear communication, on-time arrival, and work that is not done until your home is cool and you are confident in the repair.',
        },
        {
          title: 'Prevention First',
          body: 'We treat every call as a chance to prevent the next breakdown — condensate lines, capacitors, airflow, and electrical checks included.',
        },
      ],
    },
    faq: {
      prehead: 'Got Questions?',
      headline: 'Frequently Asked Questions',
      intro:
        'Find answers to common inquiries about our HVAC services so you can choose 911 Cooling with confidence.',
      items: [
        {
          question: 'What services do you offer?',
          answer:
            'We offer emergency AC repair, full HVAC diagnostics, preventive maintenance, and condensate line service for South Florida homes.',
        },
        {
          question: 'Do you provide services for both residential and commercial clients?',
          answer:
            'Our primary focus is residential HVAC throughout Miami-Dade. Contact us for commercial inquiries — we will let you know if we can serve your property.',
        },
        {
          question: 'How often should I have my HVAC system serviced?',
          answer:
            'In South Florida, we recommend a professional tune-up at least twice per year — before peak cooling season and mid-summer — to prevent breakdowns when you need your AC most.',
        },
        {
          question: 'Are your services eco-friendly?',
          answer:
            'We optimize existing systems for efficiency, proper refrigerant handling, and reduced energy waste — helping your unit run cooler without working harder than it should.',
        },
      ],
    },
    cta: {
      headline: 'Contact 911 Cooling Today for Your HVAC Needs!',
      button: 'Get Your Free Quote',
    },
  },
  installations: {
    hero: {
      headline: 'Our Installations',
      subhead: 'Check out our showcase of AC Installations!',
      /** Best/cleanest shots only — public/images/installations/hero/ */
      bannerImages: [
        '/images/installations/hero/01.png',
        '/images/installations/hero/02.png',
        '/images/installations/hero/03.png',
      ],
    },
    /** Full gallery grid — public/images/installations/gallery/ */
    galleryImages: [
      { src: '/images/installations/gallery/01.png', alt: 'AC installation — outdoor condenser unit' },
      { src: '/images/installations/gallery/02.png', alt: 'HVAC technician servicing rooftop unit' },
      { src: '/images/installations/gallery/03.png', alt: 'AC system maintenance and repair' },
      { src: '/images/installations/gallery/04.png', alt: 'Residential cooling installation' },
      { src: '/images/installations/gallery/05.png', alt: 'Commercial HVAC installation work' },
      { src: '/images/installations/gallery/06.png', alt: 'New AC unit installation South Florida' },
    ],
  },
  /** SHELVED — Comfort Club ($19/mo) removed from site; may return later. See docs/AGENT-HANDOFF.md */
  comfortClub: {
    price: '$19',
    period: '/month',
    title: 'Comfort Club Maintenance',
    subtitle: 'Stop emergencies before they start. Priority scheduling when Miami heat spikes.',
    perks: [
      '2 comprehensive tune-ups per year',
      'Priority scheduling during heat waves',
      '15% discount on all repairs',
      'Free annual condensate line flush',
    ],
  },
  serviceAreas: [
    'Kendall',
    'Doral',
    'Coral Gables',
    'Pinecrest',
    'Sweetwater',
    'Miami',
    'Hialeah',
    'Homestead',
    'Cutler Bay',
    'Palmetto Bay',
    'South Miami',
    'Westchester',
  ],
  meta: {
    title: '911 Cooling | 24/7 Emergency HVAC Miami-Dade',
    description:
      'South Florida emergency AC repair and HVAC service. 24/7 dispatch, licensed technicians, diagnostic fee waived with repair. Call 911 Cooling now.',
  },
} as const;
