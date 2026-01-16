export const jobsData = [
  {
    id: 1,
    title: 'CNC Machine Operator',
    company: 'Premier Manufacturing Inc.',
    location: 'Toronto, ON',
    country: 'Canada',
    state: 'Ontario',
    city: 'Toronto',
    type: 'Direct Placement',
    category: 'operator',
    industry: 'Manufacturing',
    salary: {
      min: 55000,
      max: 70000,
      currency: 'CAD',
    },
    postedDate: '2025-01-10',
    closingDate: '2025-02-28',
    urgent: true,
    featured: true,
    description: 'We are seeking an experienced CNC Machine Operator to join our precision manufacturing team. The ideal candidate will have hands-on experience operating CNC lathes and mills.',
    fullDescription: `
      <h3>About the Role</h3>
      <p>Premier Manufacturing Inc. is looking for a skilled CNC Machine Operator to join our growing team. You will be responsible for setting up, operating, and maintaining CNC machinery to produce precision parts for the aerospace industry.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Set up and operate CNC machines (lathes, mills, grinders)</li>
        <li>Read and interpret blueprints, CAD drawings, and work orders</li>
        <li>Perform quality inspections using precision measuring instruments</li>
        <li>Maintain equipment and perform routine maintenance</li>
        <li>Troubleshoot and resolve machining issues</li>
        <li>Document production data and maintain accurate records</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>3+ years of CNC machine operation experience</li>
        <li>Proficiency in reading technical drawings and GD&T</li>
        <li>Experience with Fanuc or Haas controllers preferred</li>
        <li>Strong mathematical and problem-solving skills</li>
        <li>Ability to work rotating shifts</li>
        <li>High school diploma or equivalent</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Competitive salary with annual reviews</li>
        <li>Comprehensive health and dental benefits</li>
        <li>RRSP matching program</li>
        <li>Paid vacation and sick days</li>
        <li>Ongoing training and development</li>
      </ul>
    `,
    requirements: [
      '3+ years CNC experience',
      'Blueprint reading',
      'Quality inspection skills',
      'Fanuc/Haas controllers',
    ],
    benefits: [
      'Health & Dental',
      'RRSP Matching',
      'Paid Training',
      'Shift Premium',
    ],
    tags: ['CNC', 'Manufacturing', 'Day Shift', 'Full-time'],
    shift: 'Day Shift',
    experience: '3-5 years',
  },
  {
    id: 2,
    title: 'Industrial Electrician',
    company: 'TechCorp Industries',
    location: 'Vancouver, BC',
    country: 'Canada',
    state: 'British Columbia',
    city: 'Vancouver',
    type: 'Direct Placement',
    category: 'electrical',
    industry: 'Industrial Equipment',
    salary: {
      min: 75000,
      max: 90000,
      currency: 'CAD',
    },
    postedDate: '2025-01-08',
    closingDate: '2025-03-15',
    urgent: false,
    featured: true,
    description: 'Join our maintenance team as an Industrial Electrician. You will be responsible for installing, maintaining, and repairing electrical systems in our manufacturing facility.',
    fullDescription: `
      <h3>About the Role</h3>
      <p>TechCorp Industries is seeking a licensed Industrial Electrician to maintain and improve our electrical systems. This is an excellent opportunity to work with cutting-edge automation equipment.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Install, maintain, and repair industrial electrical systems</li>
        <li>Troubleshoot PLCs, VFDs, and control systems</li>
        <li>Perform preventive maintenance on electrical equipment</li>
        <li>Read and interpret electrical schematics</li>
        <li>Ensure compliance with electrical codes and safety standards</li>
        <li>Participate in equipment upgrades and new installations</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Red Seal Certification as Industrial Electrician</li>
        <li>5+ years of industrial electrical experience</li>
        <li>PLC programming experience (Allen Bradley preferred)</li>
        <li>Knowledge of CSA and provincial electrical codes</li>
        <li>Strong troubleshooting and analytical skills</li>
      </ul>
      
      <h3>Benefits</h3>
      <ul>
        <li>Industry-leading compensation package</li>
        <li>Full benefits from day one</li>
        <li>Tool allowance</li>
        <li>Continuous learning opportunities</li>
      </ul>
    `,
    requirements: [
      'Red Seal Certification',
      '5+ years experience',
      'PLC programming',
      'CSA code knowledge',
    ],
    benefits: [
      'Full Benefits',
      'Tool Allowance',
      'Training Budget',
      'Pension Plan',
    ],
    tags: ['Electrical', 'Red Seal', 'PLC', 'Industrial'],
    shift: 'Day Shift',
    experience: '5+ years',
  },
  {
    id: 3,
    title: 'HVAC Service Technician',
    company: 'Climate Solutions Inc.',
    location: 'Calgary, AB',
    country: 'Canada',
    state: 'Alberta',
    city: 'Calgary',
    type: 'Direct Placement',
    category: 'technician',
    industry: 'HVAC',
    salary: {
      min: 60000,
      max: 75000,
      currency: 'CAD',
    },
    postedDate: '2025-01-12',
    closingDate: '2025-02-15',
    urgent: true,
    featured: false,
    description: 'Looking for a skilled HVAC Service Technician to service and repair commercial HVAC systems. Must have valid G2 license and strong customer service skills.',
    fullDescription: `
      <h3>About the Role</h3>
      <p>Climate Solutions Inc. is expanding and looking for experienced HVAC Service Technicians to join our commercial service team.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Service and repair commercial HVAC systems</li>
        <li>Perform preventive maintenance on rooftop units, chillers, and boilers</li>
        <li>Diagnose and troubleshoot system issues</li>
        <li>Provide excellent customer service</li>
        <li>Complete service reports and documentation</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Valid G2 Gas Fitter License</li>
        <li>5+ years commercial HVAC experience</li>
        <li>Strong diagnostic and troubleshooting skills</li>
        <li>Valid driver's license and clean driving record</li>
        <li>Excellent communication skills</li>
      </ul>
    `,
    requirements: [
      'G2 Gas License',
      '5+ years experience',
      'Commercial HVAC',
      'Valid Driver\'s License',
    ],
    benefits: [
      'Company Vehicle',
      'Gas Card',
      'Tool Allowance',
      'Benefits Package',
    ],
    tags: ['HVAC', 'Commercial', 'Service', 'G2 License'],
    shift: 'Day Shift',
    experience: '5+ years',
  },
  {
    id: 4,
    title: 'Maintenance Millwright',
    company: 'Steel Dynamics Corp.',
    location: 'Hamilton, ON',
    country: 'Canada',
    state: 'Ontario',
    city: 'Hamilton',
    type: 'Direct Placement',
    category: 'maintenance',
    industry: 'Manufacturing',
    salary: {
      min: 70000,
      max: 85000,
      currency: 'CAD',
    },
    postedDate: '2025-01-05',
    closingDate: '2025-02-28',
    urgent: false,
    featured: true,
    description: 'Steel Dynamics is seeking a certified Millwright to perform preventive and corrective maintenance on production equipment in our steel processing facility.',
    fullDescription: `
      <h3>About the Role</h3>
      <p>Join our maintenance team and work on heavy industrial equipment in a fast-paced steel manufacturing environment.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Perform preventive and corrective maintenance</li>
        <li>Install, align, and maintain industrial machinery</li>
        <li>Troubleshoot mechanical, hydraulic, and pneumatic systems</li>
        <li>Weld and fabricate components as needed</li>
        <li>Work with maintenance planning team</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Industrial Millwright Certificate (433A)</li>
        <li>5+ years heavy industrial experience</li>
        <li>Welding certification an asset</li>
        <li>Experience with hydraulics and pneumatics</li>
        <li>Ability to work rotating shifts</li>
      </ul>
    `,
    requirements: [
      'Millwright 433A',
      '5+ years experience',
      'Welding skills',
      'Hydraulics knowledge',
    ],
    benefits: [
      'Shift Premium',
      'Overtime Available',
      'Full Benefits',
      'Pension Plan',
    ],
    tags: ['Millwright', 'Maintenance', 'Heavy Industrial', 'Rotating Shifts'],
    shift: 'Rotating Shifts',
    experience: '5+ years',
  },
  {
    id: 5,
    title: 'PLC Technician',
    company: 'Automation Plus Ltd.',
    location: 'Mississauga, ON',
    country: 'Canada',
    state: 'Ontario',
    city: 'Mississauga',
    type: 'Direct Placement',
    category: 'electrical',
    industry: 'Automation',
    salary: {
      min: 65000,
      max: 80000,
      currency: 'CAD',
    },
    postedDate: '2025-01-14',
    closingDate: '2025-03-01',
    urgent: true,
    featured: false,
    description: 'Program and troubleshoot PLC systems for automated manufacturing lines. Experience with Allen Bradley and Siemens platforms required.',
    fullDescription: `
      <h3>About the Role</h3>
      <p>Automation Plus is looking for a PLC Technician to support our growing automation projects across various industries.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Program and troubleshoot PLC systems</li>
        <li>Design and implement HMI interfaces</li>
        <li>Commission automated systems</li>
        <li>Provide technical support to clients</li>
        <li>Document system configurations</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Diploma in Electrical/Electronics or Automation</li>
        <li>3+ years PLC programming experience</li>
        <li>Allen Bradley and/or Siemens experience</li>
        <li>HMI programming skills</li>
        <li>Travel required (25%)</li>
      </ul>
    `,
    requirements: [
      'PLC Programming',
      'Allen Bradley/Siemens',
      'HMI Design',
      '3+ years experience',
    ],
    benefits: [
      'Travel Allowance',
      'Training Budget',
      'Flexible Hours',
      'Health Benefits',
    ],
    tags: ['PLC', 'Automation', 'Allen Bradley', 'Siemens'],
    shift: 'Day Shift',
    experience: '3-5 years',
  },
  {
    id: 6,
    title: 'Heavy Equipment Operator',
    company: 'BuildRight Construction',
    location: 'Edmonton, AB',
    country: 'Canada',
    state: 'Alberta',
    city: 'Edmonton',
    type: 'Direct Placement',
    category: 'operator',
    industry: 'Construction',
    salary: {
      min: 50000,
      max: 65000,
      currency: 'CAD',
    },
    postedDate: '2025-01-11',
    closingDate: '2025-02-20',
    urgent: false,
    featured: false,
    description: 'Operate excavators, loaders, and dozers for major construction projects. Valid heavy equipment license required.',
    fullDescription: `
      <h3>About the Role</h3>
      <p>BuildRight Construction is hiring Heavy Equipment Operators for upcoming infrastructure projects in the Edmonton area.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Operate various heavy equipment safely</li>
        <li>Perform pre-operation inspections</li>
        <li>Follow site safety protocols</li>
        <li>Work with site supervisors and crew</li>
        <li>Maintain equipment logs</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Valid Heavy Equipment Operator certification</li>
        <li>3+ years of construction experience</li>
        <li>Experience with excavators, loaders, dozers</li>
        <li>Valid driver's license</li>
        <li>Ability to work outdoors in various conditions</li>
      </ul>
    `,
    requirements: [
      'Heavy Equipment Cert',
      '3+ years experience',
      'Multiple equipment types',
      'Valid License',
    ],
    benefits: [
      'Project Bonuses',
      'Overtime Pay',
      'Safety Gear Provided',
      'Health Benefits',
    ],
    tags: ['Heavy Equipment', 'Construction', 'Outdoor', 'Excavator'],
    shift: 'Day Shift',
    experience: '3-5 years',
  },
  {
    id: 7,
    title: 'Field Service Technician',
    company: 'Industrial Equipment Services',
    location: 'Montreal, QC',
    country: 'Canada',
    state: 'Quebec',
    city: 'Montreal',
    type: 'Direct Placement',
    category: 'technician',
    industry: 'Industrial Equipment',
    salary: {
      min: 55000,
      max: 70000,
      currency: 'CAD',
    },
    postedDate: '2025-01-09',
    closingDate: '2025-02-28',
    urgent: true,
    featured: false,
    description: 'Travel to client sites to install, maintain, and repair industrial equipment. Strong mechanical and electrical skills required.',
    fullDescription: `
      <h3>About the Role</h3>
      <p>Join our field service team and work on diverse industrial equipment across Quebec and Eastern Canada.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Install and commission industrial equipment</li>
        <li>Perform scheduled maintenance visits</li>
        <li>Troubleshoot and repair equipment issues</li>
        <li>Train customers on equipment operation</li>
        <li>Maintain service records</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Diploma in Mechanical or Electrical Technology</li>
        <li>3+ years field service experience</li>
        <li>Bilingual (French/English)</li>
        <li>Valid driver's license</li>
        <li>Willingness to travel (50%)</li>
      </ul>
    `,
    requirements: [
      'Technical Diploma',
      'Field Service Experience',
      'Bilingual (FR/EN)',
      'Travel Required',
    ],
    benefits: [
      'Company Vehicle',
      'Travel Per Diem',
      'Tool Allowance',
      'Benefits Package',
    ],
    tags: ['Field Service', 'Travel', 'Bilingual', 'Industrial'],
    shift: 'Day Shift',
    experience: '3-5 years',
  },
  {
    id: 8,
    title: 'Production Supervisor',
    company: 'Advanced Manufacturing Co.',
    location: 'Brampton, ON',
    country: 'Canada',
    state: 'Ontario',
    city: 'Brampton',
    type: 'Direct Placement',
    category: 'leadership',
    industry: 'Manufacturing',
    salary: {
      min: 75000,
      max: 95000,
      currency: 'CAD',
    },
    postedDate: '2025-01-07',
    closingDate: '2025-02-15',
    urgent: false,
    featured: true,
    description: 'Lead a team of production workers in our automotive parts manufacturing facility. Strong leadership and lean manufacturing experience required.',
    fullDescription: `
      <h3>About the Role</h3>
      <p>We are seeking an experienced Production Supervisor to lead our afternoon shift team in a fast-paced manufacturing environment.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Supervise team of 20+ production workers</li>
        <li>Ensure production targets are met</li>
        <li>Implement lean manufacturing principles</li>
        <li>Manage employee performance and development</li>
        <li>Maintain health and safety standards</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>5+ years manufacturing experience</li>
        <li>3+ years supervisory experience</li>
        <li>Lean/Six Sigma certification preferred</li>
        <li>Strong leadership and communication skills</li>
        <li>Computer proficiency (MS Office, ERP systems)</li>
      </ul>
    `,
    requirements: [
      'Supervisory Experience',
      'Manufacturing Background',
      'Lean/Six Sigma',
      'Leadership Skills',
    ],
    benefits: [
      'Bonus Program',
      'Health Benefits',
      'RRSP Matching',
      'Career Growth',
    ],
    tags: ['Supervisor', 'Manufacturing', 'Leadership', 'Lean'],
    shift: 'Afternoon Shift',
    experience: '5+ years',
  },
  {
    id: 9,
    title: 'Welder/Fabricator',
    company: 'Metal Works Industries',
    location: 'Winnipeg, MB',
    country: 'Canada',
    state: 'Manitoba',
    city: 'Winnipeg',
    type: 'Direct Placement',
    category: 'technician',
    industry: 'Manufacturing',
    salary: {
      min: 50000,
      max: 65000,
      currency: 'CAD',
    },
    postedDate: '2025-01-13',
    closingDate: '2025-02-28',
    urgent: false,
    featured: false,
    description: 'Skilled Welder/Fabricator needed for custom metal fabrication. MIG, TIG, and stick welding experience required.',
    fullDescription: `
      <h3>About the Role</h3>
      <p>Metal Works Industries is looking for a skilled Welder/Fabricator to join our custom fabrication shop.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Perform MIG, TIG, and stick welding</li>
        <li>Read and interpret blueprints</li>
        <li>Fabricate custom metal components</li>
        <li>Operate cutting and forming equipment</li>
        <li>Ensure quality standards are met</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>CWB Welding Certification</li>
        <li>3+ years fabrication experience</li>
        <li>Blueprint reading skills</li>
        <li>Experience with various metals</li>
        <li>Safety conscious mindset</li>
      </ul>
    `,
    requirements: [
      'CWB Certification',
      'MIG/TIG/Stick',
      'Blueprint Reading',
      '3+ years experience',
    ],
    benefits: [
      'Overtime Available',
      'Tool Allowance',
      'Health Benefits',
      'Stable Hours',
    ],
    tags: ['Welding', 'Fabrication', 'CWB', 'Manufacturing'],
    shift: 'Day Shift',
    experience: '3-5 years',
  },
  {
    id: 10,
    title: 'Robotics Technician',
    company: 'RoboTech Solutions',
    location: 'Kitchener, ON',
    country: 'Canada',
    state: 'Ontario',
    city: 'Kitchener',
    type: 'Direct Placement',
    category: 'electrical',
    industry: 'Automation',
    salary: {
      min: 70000,
      max: 85000,
      currency: 'CAD',
    },
    postedDate: '2025-01-15',
    closingDate: '2025-03-15',
    urgent: true,
    featured: true,
    description: 'Program and maintain industrial robots including Fanuc, ABB, and KUKA systems. Exciting opportunity in growing automation company.',
    fullDescription: `
      <h3>About the Role</h3>
      <p>RoboTech Solutions is seeking a Robotics Technician to support our automation projects for major automotive manufacturers.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Program and troubleshoot industrial robots</li>
        <li>Integrate robots with peripheral equipment</li>
        <li>Perform robot calibration and maintenance</li>
        <li>Support commissioning and startups</li>
        <li>Provide technical training to customers</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Diploma in Robotics, Automation, or Electrical</li>
        <li>3+ years robotics experience</li>
        <li>Fanuc, ABB, or KUKA programming</li>
        <li>Vision system experience an asset</li>
        <li>Willingness to travel for projects</li>
      </ul>
    `,
    requirements: [
      'Robotics Programming',
      'Fanuc/ABB/KUKA',
      'Technical Diploma',
      '3+ years experience',
    ],
    benefits: [
      'Project Bonuses',
      'Training Programs',
      'Travel Allowance',
      'Health Benefits',
    ],
    tags: ['Robotics', 'Automation', 'Fanuc', 'ABB', 'KUKA'],
    shift: 'Day Shift',
    experience: '3-5 years',
  },
  {
    id: 11,
    title: 'Maintenance Technician',
    company: 'Food Processing Corp.',
    location: 'Surrey, BC',
    country: 'Canada',
    state: 'British Columbia',
    city: 'Surrey',
    type: 'Direct Placement',
    category: 'maintenance',
    industry: 'Food & Beverage',
    salary: {
      min: 55000,
      max: 68000,
      currency: 'CAD',
    },
    postedDate: '2025-01-10',
    closingDate: '2025-02-20',
    urgent: false,
    featured: false,
    description: 'Perform maintenance on food processing equipment. Experience with conveyors, packaging machines, and sanitation standards required.',
    fullDescription: `
      <h3>About the Role</h3>
      <p>Food Processing Corp. is hiring a Maintenance Technician for our food manufacturing facility.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Maintain and repair production equipment</li>
        <li>Perform preventive maintenance tasks</li>
        <li>Troubleshoot mechanical and electrical issues</li>
        <li>Follow food safety and sanitation protocols</li>
        <li>Work with production team on equipment issues</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Millwright or Industrial Mechanic certification</li>
        <li>3+ years maintenance experience</li>
        <li>Food industry experience preferred</li>
        <li>Knowledge of food safety standards</li>
        <li>Ability to work in cold environments</li>
      </ul>
    `,
    requirements: [
      'Millwright/Mechanic Cert',
      'Food Industry Experience',
      'Safety Standards',
      '3+ years experience',
    ],
    benefits: [
      'Shift Premium',
      'Free Meals',
      'Health Benefits',
      'Employee Discounts',
    ],
    tags: ['Maintenance', 'Food Processing', 'Manufacturing', 'Sanitation'],
    shift: 'Rotating Shifts',
    experience: '3-5 years',
  },
  {
    id: 12,
    title: 'Controls Engineer',
    company: 'Automation Systems Inc.',
    location: 'Oakville, ON',
    country: 'Canada',
    state: 'Ontario',
    city: 'Oakville',
    type: 'Direct Placement',
    category: 'electrical',
    industry: 'Automation',
    salary: {
      min: 85000,
      max: 105000,
      currency: 'CAD',
    },
    postedDate: '2025-01-06',
    closingDate: '2025-02-28',
    urgent: false,
    featured: true,
    description: 'Design and implement control systems for automated manufacturing lines. Strong PLC, HMI, and SCADA experience required.',
    fullDescription: `
      <h3>About the Role</h3>
      <p>Automation Systems Inc. is seeking a Controls Engineer to design and implement automation solutions for our clients.</p>
      
      <h3>Key Responsibilities</h3>
      <ul>
        <li>Design control system architecture</li>
        <li>Program PLCs and HMIs</li>
        <li>Develop SCADA systems</li>
        <li>Commission automated systems</li>
        <li>Provide technical leadership on projects</li>
      </ul>
      
      <h3>Requirements</h3>
      <ul>
        <li>Bachelor's degree in Electrical or Mechatronics Engineering</li>
        <li>5+ years controls engineering experience</li>
        <li>Advanced PLC programming (AB, Siemens)</li>
        <li>SCADA and database experience</li>
        <li>P.Eng. designation an asset</li>
      </ul>
    `,
    requirements: [
      'Engineering Degree',
      'Advanced PLC Skills',
      'SCADA Experience',
      '5+ years experience',
    ],
    benefits: [
      'Competitive Salary',
      'Bonus Program',
      'Professional Development',
      'Flexible Work',
    ],
    tags: ['Controls', 'Engineering', 'PLC', 'SCADA', 'Automation'],
    shift: 'Day Shift',
    experience: '5+ years',
  },
];

export const filterOptions = {
  jobTypes: [
    { value: 'Direct Placement', label: 'Direct Placement', count: 12 },
  ],
  industries: [
    { value: 'Manufacturing', label: 'Manufacturing', count: 4 },
    { value: 'Automation', label: 'Automation', count: 3 },
    { value: 'Industrial Equipment', label: 'Industrial Equipment', count: 2 },
    { value: 'Construction', label: 'Construction', count: 1 },
    { value: 'HVAC', label: 'HVAC', count: 1 },
    { value: 'Food & Beverage', label: 'Food & Beverage', count: 1 },
  ],
  categories: [
    { value: 'technician', label: 'Technicians', count: 3 },
    { value: 'operator', label: 'Machine Operators', count: 2 },
    { value: 'electrical', label: 'Electrical', count: 4 },
    { value: 'maintenance', label: 'Maintenance', count: 2 },
    { value: 'leadership', label: 'Leadership', count: 1 },
  ],
  locations: [
    { value: 'Ontario', label: 'Ontario', count: 6 },
    { value: 'British Columbia', label: 'British Columbia', count: 2 },
    { value: 'Alberta', label: 'Alberta', count: 2 },
    { value: 'Quebec', label: 'Quebec', count: 1 },
    { value: 'Manitoba', label: 'Manitoba', count: 1 },
  ],
  cities: [
    { value: 'Toronto', label: 'Toronto', count: 1 },
    { value: 'Vancouver', label: 'Vancouver', count: 1 },
    { value: 'Calgary', label: 'Calgary', count: 1 },
    { value: 'Hamilton', label: 'Hamilton', count: 1 },
    { value: 'Mississauga', label: 'Mississauga', count: 1 },
    { value: 'Edmonton', label: 'Edmonton', count: 1 },
    { value: 'Montreal', label: 'Montreal', count: 1 },
    { value: 'Brampton', label: 'Brampton', count: 1 },
    { value: 'Winnipeg', label: 'Winnipeg', count: 1 },
    { value: 'Kitchener', label: 'Kitchener', count: 1 },
    { value: 'Surrey', label: 'Surrey', count: 1 },
    { value: 'Oakville', label: 'Oakville', count: 1 },
  ],
  experience: [
    { value: '0-2 years', label: 'Entry Level (0-2 years)', count: 0 },
    { value: '3-5 years', label: 'Mid Level (3-5 years)', count: 7 },
    { value: '5+ years', label: 'Senior (5+ years)', count: 5 },
  ],
};