import { ServicePackage, ExampleProject, ProcessStep, FaqItem } from '../types';

export const THREE_PACKAGES: ServicePackage[] = [
  {
    id: 'marketing-review',
    name: 'Marketing Review',
    price: 3000000,
    engagementType: 'One-time project',
    targetAudience: 'For a business that already has a website or Instagram page.',
    includes: [
      'Review of one website OR Instagram page',
      'Review of the offer and customer inquiry journey',
      'A short report with five prioritized improvements',
      'One review call'
    ],
    excludes: 'Excludes implementation and ongoing management.'
  },
  {
    id: 'landing-page',
    name: 'Landing Page',
    price: 4000000,
    engagementType: 'One-time project',
    targetAudience: 'For a business that needs one clear page to present an offer.',
    includes: [
      'One responsive landing page with up to five sections',
      'Placement and light editing of client-provided text and images',
      'One basic inquiry form',
      'One round of revisions'
    ],
    excludes: 'Excludes online payments, product catalogs, and custom integrations.'
  },
  {
    id: 'landing-page-plus-review',
    name: 'Landing Page + Marketing Review',
    price: 5000000,
    engagementType: 'One-time project',
    targetAudience: 'Includes the Landing Page package plus:',
    includes: [
      'One responsive landing page with up to five sections',
      'Review of the offer and inquiry journey',
      'Improved headline and CTA copy',
      'Five practical recommendations for directing existing traffic to the page',
      'One handover call'
    ]
  }
];

export const THREE_STEP_PROCESS: ProcessStep[] = [
  {
    number: '01',
    title: 'Quick Review',
    timeline: 'Days 1 – 3',
    description: 'We review how customers currently reach you and identify why people hesitate or leave before placing an order.'
  },
  {
    number: '02',
    title: 'Simple Page Design',
    timeline: 'Days 4 – 10',
    description: 'We write clear descriptions, display transparent toman prices, and build an easy mobile page that loads quickly.'
  },
  {
    number: '03',
    title: 'Launch & Connect',
    timeline: 'Days 11 – 14',
    description: 'You add the link to your Instagram bio or share it with buyers, and start receiving organized orders and inquiries.'
  }
];

export const TWO_EXAMPLE_PROJECTS: ExampleProject[] = [
  {
    id: 'negin-boutique',
    projectTypeLabel: 'Example project',
    businessName: 'Negin Boutique',
    location: 'Tehran',
    categoryLabel: 'Online Clothing Store',
    headline: 'Helping shoppers check sizes and order clothes without waiting for DM replies',
    summary: 'An online clothing store in Tehran that replaced manual direct messages with a simple mobile page.',
    challenge: 'Customers had to wait hours for basic price and sizing replies during busy evenings, leading to lost sales.',
    solution: 'A simple mobile page where shoppers easily see photos, sizes, and exact toman prices, with a direct order button.',
    representativeContact: 'Negin Karimi',
    role: 'Founder'
  },
  {
    id: 'sara-skincare',
    projectTypeLabel: 'Example project',
    businessName: 'Sara Skincare',
    location: 'Rasht',
    categoryLabel: 'Beauty Brand',
    headline: 'Giving shoppers clear product details and easy inquiries',
    summary: 'A natural skincare brand in Rasht that made it straightforward for customers to choose products.',
    challenge: 'Visitors from social media had questions about natural ingredients and skin compatibility before purchasing.',
    solution: 'A clean product page showing clear ingredients, customer recommendations, and an easy inquiry button.',
    representativeContact: 'Sara Mohammadi',
    role: 'Brand Manager'
  }
];

export const THREE_FAQS: FaqItem[] = [
  {
    question: 'How quickly can our landing page go live?',
    answer: 'Most simple landing pages are completed, reviewed, and published within 10 to 14 days.'
  },
  {
    question: 'What are the costs, and how is advertising handled?',
    answer: 'Our one-time packages range from 3,000,000 to 5,000,000 toman. Domain, hosting, and any advertising spend are billed separately.'
  },
  {
    question: 'When and how do discovery calls take place?',
    answer: 'Calls are scheduled in Tehran time (Asia/Tehran) by phone or video to review your business and answer any questions.'
  }
];
