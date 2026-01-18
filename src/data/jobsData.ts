export const jobsData = [
  {
    id: 1,
    title: 'CNC Field Service Technician',
    company: 'Confidential Manufacturing Partner',
    location: 'On the Road (Canada)',
    country: 'Canada',
    state: 'Multiple',
    city: 'Field Based',
    type: 'Direct Placement',
    category: 'technician',
    industry: 'Industrial Machinery',
    salary: {
      min: 38,
      max: 45,
      currency: 'CAD',
      unit: 'hour',
    },
    postedDate: '2025-11-23',
    closingDate: null,
    urgent: true,
    featured: true,
    description:
      'Service, install, and support CNC and industrial machinery while delivering excellent customer experience.',
    fullDescription: `
      <h3>Mission, Values, and Behaviour</h3>
      <p>Our mission is to enhance customer profitability by delivering effective machinery solutions and support. We foster a culture of trust, collaboration, accountability, and continuous improvement.</p>

      <h3>Position Overview</h3>
      <p>The CNC Field Service Technician plays a critical role in machinery start-up, training, servicing, and customer support across a designated territory. This role requires strong technical expertise and a customer-first mindset.</p>

      <h3>Duties & Responsibilities</h3>
      <ul>
        <li>Install, assemble, and commission new and used machinery</li>
        <li>Upgrade and repair machinery efficiently</li>
        <li>Provide machine demonstrations, start-ups, and customer training</li>
        <li>Troubleshoot electrical, mechanical, PLC, servo, and pneumatic systems</li>
        <li>Maintain accurate work orders, time, and expense reports</li>
        <li>Liaise with manufacturers for complex service issues</li>
      </ul>

      <h3>Minimum Requirements</h3>
      <ul>
        <li>3+ years experience servicing industrial machinery</li>
        <li>Post-graduate technical certification</li>
        <li>Strong electrical, PLC, servo, pneumatic, and mechanical skills</li>
        <li>CNC machinery experience (asset)</li>
        <li>Excellent communication and customer service skills</li>
        <li>Willingness to travel</li>
      </ul>

      <h3>Working Conditions</h3>
      <ul>
        <li>Field-based with out-of-town travel</li>
        <li>Occasional evening or extended hours</li>
        <li>Physically demanding work environment</li>
      </ul>
    `,
    requirements: [
      '3+ years industrial machinery service',
      'PLC & electrical knowledge',
      'Mechanical aptitude',
      'Customer service skills',
      'Travel readiness',
    ],
    benefits: [
      'Dental Care',
      'Extended Health Care',
      'Paid Time Off',
      'RRSP Matching',
    ],
    tags: ['CNC', 'Field Service', 'Industrial Machinery', 'PLC'],
    shift: 'Flexible',
    experience: '3+ years',
  },

  {
    id: 2,
    title: 'Outside Sales Manager',
    company: 'Confidential Industrial Solutions Company',
    location: 'Territory Based (Canada)',
    country: 'Canada',
    state: 'Multiple',
    city: 'Field Based',
    type: 'Direct Placement',
    category: 'leadership',
    industry: 'Industrial Sales',
    salary: {
      min: 120000,
      max: 180000,
      currency: 'CAD',
      unit: 'year',
    },
    postedDate: '2025-12-05',
    closingDate: null,
    urgent: false,
    featured: true,
    description:
      'Develop new business and manage key accounts while driving revenue growth in an assigned territory.',
    fullDescription: `
      <h3>Position Summary</h3>
      <p>The Outside Sales Manager is responsible for managing existing accounts and developing new business opportunities within an assigned territory. This role suits a high-energy, results-driven professional.</p>

      <h3>Key Responsibilities</h3>
      <ul>
        <li>Manage and grow existing customer accounts</li>
        <li>Identify and develop new business opportunities</li>
        <li>Conduct client meetings and product presentations</li>
        <li>Develop sales strategies to exceed revenue targets</li>
        <li>Maintain CRM and sales reporting</li>
      </ul>

      <h3>Requirements</h3>
      <ul>
        <li>Proven experience in B2B or industrial sales</li>
        <li>Strong negotiation and communication skills</li>
        <li>Ability to work independently in a field role</li>
        <li>Customer-focused mindset</li>
      </ul>
    `,
    requirements: [
      'B2B Sales Experience',
      'Territory Management',
      'Client Relationship Skills',
      'Negotiation Skills',
    ],
    benefits: [
      'High Commission Structure',
      'Health Benefits',
      'Paid Time Off',
      'Career Growth',
    ],
    tags: ['Sales', 'Outside Sales', 'Account Management'],
    shift: 'Day Shift',
    experience: '5+ years',
  },
];
export const filterOptions = {
  jobTypes: [
    { value: 'Direct Placement', label: 'Direct Placement', count: 2 },
  ],
  industries: [
    { value: 'Industrial Machinery', label: 'Industrial Machinery', count: 1 },
    { value: 'Industrial Sales', label: 'Industrial Sales', count: 1 },
  ],
  categories: [
    { value: 'technician', label: 'Technicians', count: 1 },
    { value: 'leadership', label: 'Leadership', count: 1 },
  ],
  locations: [
    { value: 'Canada', label: 'Canada (Field Based)', count: 2 },
  ],
  cities: [
    { value: 'Field Based', label: 'Field Based', count: 2 },
  ],
  experience: [
    { value: '3+ years', label: 'Mid Level (3+ years)', count: 1 },
    { value: '5+ years', label: 'Senior (5+ years)', count: 1 },
  ],
};