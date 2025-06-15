import React, { createContext, useState } from 'react';

export const mainContext = createContext(null);

const Maincontext = (props) => {
  const [Nav, setNav] = useState([
    {
      title: 'About',
      path:'/about',
      description: 'General overview and institutional details of LNCT.',
      links: [
        {
          label: 'LNCT-GROUP',
          path: '/about/lnct-group',
          subLinks: [
            { label: 'Our Vision/Mission', path: '/about/lnct-group/vision-mission' },
            { label: 'Trust', path: '/about/lnct-group/trust' },
            { label: 'Creedo', path: '/about/lnct-group/creedo' },
          ],
        },
        {
          label: 'Our Leadership',
          path: '/about/our-leadership',
          subLinks: [
            { label: 'Management', path: '/about/our-leadership/management' },
            { label: 'OSD', path: '/about/our-leadership/osd' },
            { label: 'Principal/Director/Dean', path: '/about/our-leadership/principal' },
            { label: 'Expert Faculties', path: 'https://lnct.ac.in/eminent-faculties' },
            { label: 'Advisor', path: '/about/our-leadership/advisor' },
          ],
        },
        {
          label: 'Infrastructure',
          path: '/about/infrastructure',
          subLinks: [
            { label: 'Auditorium', path: '/about/infrastructure/auditorium' },
            { label: 'Seminar Hall', path: '/about/infrastructure/seminar-hall' },
          ],
        },
        {
          label: 'Facility',
          path: '/about/facility',
          subLinks: [
            { label: 'Person Jiv Select Center', path: '/about/facility/person-jiv' },
            { label: 'Digital Library', path: '/about/facility/digital-library' },
            { label: 'Digital Classroom', path: '/about/facility/digital-classroom' },
            { label: 'Health Care', path: '/about/facility/health-care' },
            { label: 'Hostel', path: '/about/facility/hostel' },
            { label: 'Transportation', path: '/about/facility/transportation' },
          ],
        },
        {
          label: 'Innovation',
          path: '/about/innovation',
          subLinks: [
            { label: 'LNCT NISP', path: '/about/innovation/lnct-nisp' },
            { label: 'LNCT CSR NISP', path: '/about/innovation/lnct-csr-nisp' },
            { label: 'LNCT MBA NISP', path: '/about/innovation/lnct-mba-nisp' },
          ],
        },
        {
          label: 'Committee',
          path: '/about/committee',
          subLinks: [
            { label: 'Disciplinary Committee', path: '/about/committee/disciplinary' },
            { label: 'Other Committee', path: '/about/committee/other' },
            { label: 'Anti-Ragging Committee', path: '/about/committee/anti-ragging' },
          ],
        },
        {
          label: 'AICTE',
          path: '/about/aicte',
          subLinks: [
            { label: 'EOA 2024-28', path: '/about/aicte/eoa-2024-28' },
            { label: 'Approval', path: '/about/aicte/approval' },
            { label: 'PMKVY guidlines', path: 'https://lnct.ac.in/wp-content/uploads/2019/05/PMKVY.pdf' },
            { label: 'AICTE Mo Us', path: '/about/aicte/aictemous' },
            { label: 'aicte pragati', path: '/about/aicte/aictepragati' },
            { label: 'pmkvy course details', path: '/about/aicte/pmkvycoursedetails' },
          ],
        },
        { label: 'Accredited by NBA', path: '/about/accredited-by-nba', subLinks: [] },
        {
          label: 'RGPV',
          path: '/about/rgpv',
          subLinks: [{ label: 'MOU Courses with Coursera', path: 'https://lnct.ac.in/wp-content/uploads/2019/12/MOOC-Courses-with-credits-for-B.Tech-RGPV-students.pdf' }],
        },
        { label: 'Academic Calendar', path: '/about/academic-calendar', subLinks: [] },
        { label: 'Hostel Allotment', path: '/about/hostel-allotment', subLinks: [] },
        {
          label: 'Bus Routes',
          path: '/about/bus-routes',
          subLinks: [
            { label: 'Shift 1', path: '/about/bus-routes/shift-1' },
            { label: 'Shift 2', path: '/about/bus-routes/shift-2' },
          ],
        },
        { label: 'International Journal of LNCT', path: 'https://www.ijlnct.org/', subLinks: [] },
      ],
    },
    {
      title: 'Colleges',
      description: 'Different campuses and branches under LNCT group.',
      links: [
        { label: 'LNCT', path: '/colleges/lnct', subLinks: [] },
        { label: 'LNCT&S', path: '/colleges/lnct-and-s', subLinks: [] },
        { label: 'LNCTE', path: '/colleges/lncte', subLinks: [] },
        { label: 'MBA', path: '/colleges/mba', subLinks: [] },
        { label: 'MCA', path: '/colleges/mca', subLinks: [] },
        { label: 'LNCT Indore', path: '/colleges/lnct-indore', subLinks: [] },
        { label: 'LNCT Vidhyapeeth University', path: 'https://lnctvu.ac.in/', subLinks: [] },
        { label: 'LNCT Jabalpur', path: 'https://lnctuj.com/', subLinks: [] },
        { label: 'LNCT Bhopal', path: 'https://www.jnctbhopal.ac.in/', subLinks: [] },
        { label: 'LNCTU', path: 'https://lnctu.ac.in/?_gl=1*zvohrq*_gcl_au*MTM0NDI4MzE4OC4xNzQ5NTQ4MDQx*_ga*ODY4NzMwODE0LjE3NDkxNDI4MjI.*_ga_KVSH19Y64K*czE3NDk5MzA2NzgkbzE5JGcxJHQxNzQ5OTM1NDg3JGo3JGwwJGgxNjE3OTUzMjE2', subLinks: [] },
        { label: 'LNCT Shrihansh', path: 'https://www.lnctrishiraj.ac.in/', subLinks: [] },
        { label: 'CEC Bilaspur', path: 'https://cecbilaspur.ac.in/', subLinks: [] },
        { label: 'LNCT Pharmacy', path: '/colleges/lnct-pharmacy', subLinks: [] },
      ],
    },
    {
      title: 'Departments',
      description: 'Academic departments offered under LNCT.',
      links: [
        { label: 'Civil Engineering', path: '/departments/civil-engineering', subLinks: [] },
        { label: 'Electrical and Electronic', path: '/departments/electrical-and-electronic', subLinks: [] },
        { label: 'Mechanical', path: '/departments/mechanical', subLinks: [] },
        { label: 'Electrical', path: '/departments/electrical', subLinks: [] },
        { label: 'Department of Electronic and Communication', path: '/departments/department-of-electronic-and-communication', subLinks: [] },
        { label: 'Computer Science Engineering', path: '/departments/computer-science-engineering', subLinks: [] },
        { label: 'Department of Information Technology', path: '/departments/department-of-information-technology', subLinks: [] },
        {
          label: 'Department of Basic Science',
          path: '/departments/department-of-basic-science',
          subLinks: [
            { label: 'Department of Humanity', path: '/departments/department-of-basic-science/humanity' },
            { label: 'Department of Physics', path: '/departments/department-of-basic-science/physics' },
            { label: 'Department of Chemistry', path: '/departments/department-of-basic-science/chemistry' },
            { label: 'Department of Mathematics', path: '/departments/department-of-basic-science/mathematics' },
          ],
        },
      ],
    },
   {
    title: 'Admission',
    description: 'Details and procedures related to admission at LNCT.',
    links: [
      { label: 'Admission Process', path: '/admission/admission-process' },
      { label: 'Admission Enquiry', path: '/admission/admission-enquiry' },
      { label: 'T&C Online Payment', path: '/admission/t-and-c-online-payment' },
      { label: 'Fee Refund Policy', path: '/admission/fee-refund-policy' },
      { label: 'Download Prospectus', path: 'https://lnct.ac.in/wp-content/uploads/2025/03/LNCT-Brochure.pdf' },
      { label: 'Fee Structure', path: 'https://lnct.ac.in/wp-content/uploads/2024/07/LNCT-fee-structure.pdf' },
    ],
  },
    {
      title: 'Placement',
      description: 'Placement cell and student career opportunities.',
      links: [
        { label: 'Career Development Cell', path: '/placement/career-development-cell', subLinks: [] },
        {
          label: 'Clubs',
          path: '/placement/clubs',
          subLinks: [
            { label: 'IIC Club', path: '/placement/clubs/iic-club' },
            { label: 'Hackathon', path: '/placement/clubs/hackathon' },
            { label: 'Artificial Intelligence Club', path: '/placement/clubs/ai-club' },
            { label: 'LNCT Literacy Club', path: '/placement/clubs/literacy-club' },
            { label: 'Quest Nature Club', path: '/placement/clubs/quest-nature-club' },
            { label: 'LNCT Music Club', path: '/placement/clubs/music-club' },
            { label: 'LNCT Photo Club', path: '/placement/clubs/photo-club' },
          ],
        },
        { label: 'Regular Activities', path: '/placement/regular-activities', subLinks: [] },
        { label: 'Placement Records', path: '/placement/placement-records', subLinks: [] },
        { label: 'Industry Interaction', path: '/placement/industry-interaction', subLinks: [] },
        { label: 'Cisco Academy', path: '/placement/cisco-academy', subLinks: [] },
        { label: 'Achievements', path: '/placement/achievements', subLinks: [] },
        { label: 'Coursera for LNCT', path: '/placement/coursera-for-lnct', subLinks: [] },
        { label: 'Student Testimonial', path: '/placement/student-testimonial', subLinks: [] },
        { label: 'Placement Brochure', path: '/placement/placement-brochure', subLinks: [] },
        { label: 'Kalchuri LNCT Group Incubation', path: '/placement/kalchuri-lnct-group-incubation', subLinks: [] },
        { label: 'LNCT Model United Nation', path: '/placement/lnct-model-united-nation', subLinks: [] },
        { label: 'Triumph', path: '/placement/triumph', subLinks: [] },
      ],
    },
    {
      title: 'Life @ LNCT',
      description: 'Events, achievements, and activities that shape campus life at LNCT.',
      links: [
        { label: 'Garba Night', path: '/life-at-lnct/garba-night', subLinks: [] },
        { label: 'LN Gyanarambh', path: '/life-at-lnct/ln-gyanarambh', subLinks: [] },
        { label: 'Toppers Wall', path: '/life-at-lnct/toppers-wall', subLinks: [] },
        { label: 'Engineering Olympic', path: '/life-at-lnct/engineering-olympic', subLinks: [] },
        { label: 'LN Universe', path: '/life-at-lnct/ln-universe', subLinks: [] },
        { label: 'Shristi 2k23', path: '/life-at-lnct/shristi-2k23', subLinks: [] },
        { label: 'IEEE Explore', path: '/life-at-lnct/ieee-explore', subLinks: [] },
        { label: 'Research and Development', path: '/life-at-lnct/research-and-development', subLinks: [] },
        { label: 'CLUB@LNCT', path: '/club-at-lnct', subLinks: [
          { label: 'Techvilla Club', path: 'https://techvillalnct.vercel.app/' },
          { label: 'IIC Club', path: '#' },
          { label: 'Hackathon Club', path: 'https://hackathonclub.lnct.ac.in/' },
          { label: 'Artificial Intelligence Group', path: '/club-at-lnct/ai-group' },
         
    
          { label: 'LNCT Literary Club', path: '/club-at-lnct/literary-club' },
          { label: 'Quest Nature Club', path: '/club-at-lnct/nature-club' },
          { label: 'LNCT Photography Club', path: '/club-at-lnct/photo-club' },
          { label: 'LNCT Music Club', path: '/club-at-lnct/music-club' },
          { label: 'LNCT Gender Club', path: '/club-at-lnct/gender-club' },
          ]},
          { label: 'Testimonial', path: '/testimonial', subLinks: [] },
          { label: 'IDEA LAB', path: 'https://idea-lab.vercel.app/', subLinks: [] },
          { label: 'KLIC', path: 'life-at-lnct/klic', subLinks: [] },
          { label: 'Activity Classes', path: '/activity-classes', subLinks: [] },
          { label: 'Curricular and Technical Events', path: '/curricular-and-technical-events', subLinks: [] },
          { label: 'LNCT Group all Clubs', path: 'https://lnct.ac.in/lnct-group-all-clubs/', subLinks: [] },
          { label: 'Sports', path: '/sports', subLinks: [] },
          { label: 'NSS', path: '/nss', subLinks: [] },
          { label: 'NCC', path: '/ncc', subLinks: [] },
          { label: 'LNCT Radio', path: 'https://lnct.ac.in/lnct-radio/', subLinks: [] },
      ],
    },
    {
      title: "Alumni",
      description: "Connecting with the LNCT alumni network and their achievements.",
      links: [
          { label: "Alumni Cell", path: "/alumni/alumni-cell", subLinks: [] },
          { 
              label: "Alumni Affairs", 
              path: "/alumni/alumni-affairs", 
              subLinks: [
                  { label: "News", path: "/alumni/alumni-affairs/news", subLinks: [] },
                  { label: "Community Event", path: "/alumni/alumni-affairs/community-event", subLinks: [] },
                  { label: "Services", path: "/alumni/alumni-affairs/services", subLinks: [] },
                  { label: "Contact US", path: "/alumni/alumni-affairs/contact-us", subLinks: [] }
              ]
          },
          { label: "ALMA Connect", path: "/alumni/alma-connect", subLinks: [
            { label: "GALA", path: "/alumni/almaconnects/alma", subLinks: [] }
          ] },
          { label: "Alumni Letter", path: "/alumni/alumni-letter", subLinks: [] },
          { label: "Eminent Alumni", path: "/alumni/eminent-alumni", subLinks: [] }
      ]
    },
    {
      title: 'Login',
      description: 'Access to student and faculty portals.',
      links: [
        { label: 'Student Login', path: 'https://portal.lnct.ac.in/Accsoft2/studentlogin.aspx', subLinks: [] },
        { label: 'Faculty Login', path: 'https://portal.lnct.ac.in/Accsoft2/login.aspx', subLinks: [] },
        { label: 'New student registration', path: '/login/registration', subLinks: [] },
        { label: 'Online Payment', path: '/login/online-payment', subLinks: [] },
        { label: 'Registration procedure', path: 'https://www.youtube.com/watch?v=dGFmh_fYKTg', subLinks: [] },
        { label: 'Lnct Hall Booking', path: 'https://hallbooking.lnct.ac.in/', subLinks: [] },
      ],
    },
    {
      title: 'Contact Us',
      description: 'Get in touch with LNCT for queries and support.',
      links: [
        { label: 'Contact', path: '/contact-us/contact', subLinks: [] },
        { label: 'Career', path: 'https://portal.lnct.ac.in/Accsoft2/career.aspx', subLinks: [] },
      ],
    },
  ]);

  const [data, setdata] = useState([]);
  const [values, setvalues] = useState([
    {
      number: '1200+',
      title: 'Publish',
      desc: 'Publications in National & International Journals',
    },
    {
      number: '20+',
      title: 'Innovation',
      desc: 'Industry Sponsored Advanced Research Labs',
    },
    {
      number: '54+',
      title: 'Departments',
      desc: 'Departmental Research Groups',
    },
    {
      number: '191+',
      title: 'Patents',
      desc: 'Patents filed Successfully by LNCT Group',
    },
  ]);

 const [blogs, setblogs] = useState([
  {
    id: 'a1f8xk',
    img: 'https://lnct.ac.in/wp-content/uploads/2024/02/How-Will-Artificial-Intelligence-Affect-1024x1024.jpeg',
    tag: 'BLOG',
    title: 'How Will Artificial Intelligence Affect Career Opportunities for MCA Graduates 2025-30',
  },
  {
    id: 'b7q2lm',
    img: 'https://lnct.ac.in/wp-content/uploads/2023/08/ROBOTICS-AUTOMATION-1024x1024.jpeg',
    tag: 'BLOG',
    title: 'Robotics & Automation Trends and Innovations to Watch in 2025',
  },
  {
    id: 'c9z5rt',
    img: 'https://lnct.ac.in/wp-content/uploads/2023/08/AGRICULTURE-SECTOR-1024x1024.jpeg',
    tag: 'BLOG',
    title: 'Why should you make your career in the agriculture sector?',
  },
  {
    id: 'd4w8yu',
    img: 'https://lnct.ac.in/wp-content/uploads/2024/02/SCOPE-OF-VLSI-DESIGN-AFTER-AI-EVOLUTION-2025-1024x1024.jpeg',
    tag: 'BLOG',
    title: 'Scope of VLSI Design After AI Evolution',
  },
  {
    id: 'e6p3nv',
    img: 'https://lnct.ac.in/wp-content/uploads/2024/02/Bard-vs-Gemini-1024x1024.jpeg',
    tag: 'BLOG',
    title: 'Google’s Bard has transformed into Gemini What’s Different?',
  },
  {
    id: 'f2k7sb',
    img: 'https://lnct.ac.in/wp-content/uploads/2021/04/Future-of-Blockchain-Technology-by-2025-1-1024x1024.jpeg',
    tag: 'BLOG',
    title: 'Exploring Biotechnology: Innovations in Health and Agriculture',
  },
  {
    id: 'g5m9qh',
    img: 'https://lnct.ac.in/wp-content/uploads/2023/08/AYURVEDA-FOR-MENTAL-HEALTH-1024x1024.jpeg',
    tag: 'BLOG',
    title: 'Ayurveda for Mental Health Addressing Mental Health Stigma, Promoting Awareness and Support',
  },
  {
    id: 'h8v1cz',
    img: 'https://lnct.ac.in/wp-content/uploads/2023/08/ARTIFICIAL-INTELLIGENCE-IN-CYBER-SECURITY-1024x1024.jpeg',
    tag: 'BLOG',
    title: 'Artificial Intelligence in Cybersecurity Enhancing Digital Defense',
  },
]);
  const [leaders, setleaders] = useState( [
  {
    name: 'Shri Jai Narayan Chouksey',
    position1: 'Chancellor - LNCT University',
    position2: 'Founder & Chairman - LNCT Group',
    image: 'https://lnct.ac.in/wp-content/uploads/2021/04/Jai-Narain-Chouksey.png', // Replace with your actual path
    quote: 'Education is what remains after one has forgotten what one has learned in school”. At LNCT University/LNCT Group of Colleges, the purpose of life is taught.',
  },
  {
    name: 'Smt. Poonam Chouksey',
    position1: 'Chancellor - LNCT Vidhyapeeth University',
    position2: 'Vice Chairperson - LNCT Group',
    image: 'https://lnct.ac.in/wp-content/uploads/2021/04/Poonam-Chouksey-.png', // Replace with your actual path
    quote: 'I welcome you to this campus of higher learning which is being the prime unit of LNCT Group of Colleges. In my considered view your decision to choose LNCT is right and wise.',
  },
  {
    name: 'Dr. Anupam Chouksey',
    position1: 'Chancellor JNCT Professional University',
    position2: 'Secretary - LNCT Group',
    image: 'https://lnct.ac.in/wp-content/uploads/2021/04/Anupam-Chouksey.png', // Replace with your actual path
    quote: 'I believe learning is the only tool for success of individual, irrespective of the age. At LNCT, we are committed for betterment of society through development of students in every stage.',
  },
  // Add more leaders if needed
])

const osdList =   [
    {
  college: 'GROUP OSD',
  name: 'Dr. SUNIL KUMAR SINGH',
  content: (
    <div className="space-y-3">
        <img src="https://lnct.ac.in/wp-content/uploads/2019/12/DR.-Sunil-Kumar-Singh-OSD-199x300.jpg" alt="" />
      <p><strong>Full name:</strong> Dr. Sunil Kumar Singh</p>
      <p><strong>Ph.D. Topic:</strong> Physics – Study of Very Low Frequency Phenomena at Antarctica: Coordinated Observations and Analysis</p>
      <p><strong>Specialization:</strong> Space and Atmospheric Science</p>
      <p>
        <strong>Research Work Summary:</strong> The doctoral work focused on Very Low Frequency (VLF) Phenomena at Antarctica through coordinated observations and analysis. Studies were carried out at several low-latitude Indian stations (Bhopal, Varanasi, Jammu, Agra) and high-latitude Maitri station in Antarctica. He participated in the XIX (1999–2000) and XXVII (2007–2008) Indian Antarctic Expeditions. He also collaborated with Prof. A. R. W. Hughes in South Africa under DST's Science & Technology Programme.
      </p>
      <p><strong>Research Papers Published:</strong> International – 04 / National – 11</p>
      <p><strong>Books Published:</strong> 2</p>
      <p><strong>Patents:</strong> –</p>
      <p><strong>Foreign Visits:</strong></p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Antarctica – Twice (1999–2000 and 2007–08)</li>
        <li>Cape Town & Durban, South Africa – Three times (1999, 2003, 2007)</li>
      </ul>
      <p><strong>Achievements and Awards:</strong></p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Organizing Secretary: National Workshop on Remote Sensing in Disaster Management, OGI Bhopal (2010)</li>
        <li>Co-convener: National Conference on Knowledge Management, OGI Bhopal (2009)</li>
        <li>Fast Track Young Scientist Award – DST, New Delhi (2005–2008)</li>
        <li>Research Associate – CSIR (April–Nov. 2005)</li>
        <li>Visiting Fellow – Vikram Sarabhai Space Centre, ISRO (Nov. 2003)</li>
        <li>Visiting Scientist – University of Natal, Durban (Oct. 2003)</li>
        <li>Doctoral Degree awarded by Barkatullah University (July 2003)</li>
        <li>Senior Research Fellowship – CSIR (2002–2004)</li>
        <li>Senior Research Fellowship – Dept. of Ocean Development (2000–2002)</li>
        <li>Junior Research Fellowship – Dept. of Ocean Development (1998–2000)</li>
        <li>Visiting Scientist – XIX and XXVII Indian Antarctic Expeditions (1999–2000, 2007–2008)</li>
      </ul>
      <p><strong>Total Experience:</strong> 20 Years (Teaching / Research / Administration)</p>
      <p><strong>Projects:</strong></p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Study of VLF Phenomena at Antarctica – DST funded (Rs. 13,75,000)</li>
        <li>MODROBS Scheme – AICTE funded (Rs. 15,00,000), 2010–11, as Chief Coordinator, Thakral College of Technology</li>
        <li>Staff Development Programme on EDA – AICTE funded (Rs. 2,00,000), 2011–12, as Coordinator, OIST</li>
      </ul>
    </div>
  ),
},

    {
  college: 'LNCT S',
  name: 'Dr. AMITBODH UPADHYAYA',
  content: (
    <div className="space-y-3">
        <img src="https://lnct.ac.in/wp-content/uploads/2019/12/DR.-Amit-Bodh-Upadhyay-OSD-LNCTS-199x300.jpg" alt="" />
      <p><strong>Full name:</strong> Dr. Amitbodh Upadhyaya</p>
      <p><strong>Ph.D. Topic:</strong> Organic Chemistry – Photolysis of some organic compounds by UV Light</p>
      <p><strong>Specialization:</strong> Organic Chemistry, Engg. Chemistry, Environmental Chemistry, Analytical Chemistry</p>
      <p>
        <strong>Research Work Summary:</strong> Photolysis of some organic compounds by UV light.
        Organic photochemistry is crucial for transforming compounds, including rare natural products.
        His thesis focused on UV light-induced phototransformation of nicotine, quinine, atropine, etc.,
        potentially affecting pharmacological properties of these substances.
      </p>
      <p><strong>Research Papers Published:</strong> More than 30 (National/International)</p>
      <p><strong>Books Published:</strong> One</p>
      <p><strong>Patents:</strong> –</p>
      <p><strong>Foreign Visits:</strong> –</p>
      <p><strong>Achievements and Awards:</strong></p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>Felicitated as “ACTIVE SPOC” by NPTEL at Noida (2018) for significant role in the local chapter.</li>
        <li>Completed 12-week online NPTEL Certification in Analytical Chemistry with 3 credits.</li>
        <li>Invited speaker at various universities and colleges.</li>
        <li>“Green Idol Award” by Dainik Bhaskar Group for environmental awareness and plantation drives.</li>
        <li>Felicitated by WWF-I (Delhi and MP-CG) for 18+ years of work in environmental education.</li>
        <li>Felicitated by Kautilya Academy and Dainik Bhaskar for academic and social contributions.</li>
        <li>Global Teacher Award 2018 by AKS Education Awards (for promoting online learning).</li>
        <li>Recognized as NPTEL SPOC with Grade “A” and five-time NPTEL STAR awardee (2019).</li>
        <li>Awarded by ISA for Student Development (2019).</li>
        <li>Recognized in NPTEL categories: Motivated Learners, Believers, Discipline Star, Evangelists (2019–2020).</li>
        <li>‘SEWA SAMMAN PATRA’ by Nagar Palik Nigam, Bhopal for Clean India Mission (2020).</li>
      </ul>
      <p><strong>Total Experience:</strong> 23 Years (Teaching + Industrial)</p>
      <p><strong>Awards & Projects:</strong></p>
      <ul className="list-disc list-inside ml-4 space-y-1">
        <li>“Green Idols Award” from Dainik Bhaskar for tree plantation and awareness campaigns.</li>
        <li>Teacher’s Day Honor by Dainik Bhaskar for academic excellence and social causes.</li>
        <li>Felicitated by Kautilya Academy for teaching excellence.</li>
        <li>Honored by “RUN BHOPAL RUN” for notable contribution.</li>
        <li>Honored by MP Govt. for contribution to “Narmada Yatra & River Conservation”.</li>
      </ul>
    </div>
  ),
},
    {
      college: 'LNCT E',
      name: 'Ms. Usha Singh',
      content: (
        <div className="space-y-3">
          <p><strong>Full name:</strong> Ms. Usha Singh</p>
          <p><strong>Role:</strong> Officer on Special Duty (LNCT E)</p>
          <p>
            <strong>Responsibilities:</strong> Manages student services, academic operations, and grievance redressal.
            Actively promotes inclusive education and student welfare policies.
          </p>
          <p><strong>Experience:</strong> 15+ years in education management</p>
        </div>
      ),
    },
  ];

  const principalList =  [
    {
  college: 'Administration',
  name: 'Dr. ASHOK KUMAR RAI',
  content: (
    <div className="space-y-3">
        <img src="https://lnct.ac.in/wp-content/uploads/2019/12/DR.Ashok-Rai-199x300.jpg" alt="" />
      <p><strong>Full name:</strong> Dr. Ashok Kumar Rai</p>
      <p><strong>Ph.D. Topic:</strong> Management – Study of Problems & Prospects of Tourism Industry with Special Reference to the State of Madhya Pradesh</p>
      <p><strong>Specialization:</strong> Management</p>
      <p>
        <strong>Research Work Summary:</strong> The research investigates various problems associated with the tourism industry in Madhya Pradesh and proposes practical, viable solutions to enhance the sector's growth and sustainability.
      </p>
      <p><strong>Research Papers Published:</strong> 03 (National/International)</p>
      <p><strong>Books Published:</strong> –</p>
      <p><strong>Patent:</strong> Automatic Appliances Controller</p>
      <p><strong>Foreign Visits:</strong> –</p>
      <p><strong>Achievements and Awards:</strong> NIL</p>
      <p><strong>Total Experience:</strong> 24 Years</p>
      <p><strong>Projects / Recognitions:</strong> NIL</p>
    </div>
  ),
    },
    {
    college: 'LNCT',
    name: 'Vinay Kumar Sahu',
    content: (
        <div className="space-y-3">
        <p><strong>Full name:</strong> Vinay Kumar Sahu</p>
        <img src="https://lnct.ac.in/wp-content/uploads/2019/12/DR.-vinay-Kumar-Sahu-199x300.jpg" alt="" />
        <p><strong>Ph.D. Topic:</strong> Total Quality Management, Department of Mechanical Engineering</p>
        <p><strong>Specialization:</strong> Industrial Engineering and Management</p>
        <p>
            <strong>Research Work Summary:</strong> Focused on Total Quality Management and Engineering Support Planning (ESP) and indigenization of imported equipment. His research emphasizes the critical need for specialized workshops for repair and maintenance through system learning, reverse engineering, and deep understanding. The study identifies key dimensions for optimizing efficiency and effectiveness in repair organizations, particularly under resource-constrained environments.
        </p>
        <p><strong>Research Papers Published:</strong> 16</p>
        <p><strong>Books Published:</strong> NIL</p>
        <p><strong>Patent:</strong> 01 (Energy efficient funeral pyre system)</p>
        <p><strong>Foreign Visits:</strong> Hungary, Switzerland, Austria</p>
        <p>
            <strong>Achievements and Awards:</strong> 
            <ul className="list-disc list-inside">
            <li>Alumnus of IIT Chennai, IIM Indore, and MANIT Bhopal</li>
            <li>Specialization in Computer Technology, Communication Engineering, Missile Tech (DRDO), and Electronic Warfare (Hungary)</li>
            <li>Trained numerous personnel while serving in high-tech defense environments</li>
            </ul>
        </p>
        <p><strong>Total Experience:</strong> 36 Years</p>
        <p>
            <strong>Projects / Recognitions:</strong> 
            <ul className="list-disc list-inside">
            <li>Project ‘Suraj’ & ‘Sanyukta’ – ESP and indigenization of Electronic Warfare systems</li>
            <li>TQM implementation in Specialized Repair Organizations</li>
            <li>Over 12 projects in Data Mining, Machine Learning, Time Series Analysis</li>
            <li>Best Project Award – Officer’s Advanced Computer Technology Course (Military College of EME)</li>
            </ul>
        </p>
        </div>
    ),
    },
    {
    college: 'LNCT S',
    name: 'Dr. Vishvendra Nath Bartaria',
    content: (
        <div className="space-y-3">
        <p><strong>Full Name:</strong> Dr. Vishvendra Nath Bartaria</p>
        <img src="https://lnct.ac.in/wp-content/uploads/2019/05/Dr.-Vishvendra-Nath-Bartaria.png" alt="" />
        <p><strong>Ph.D. Topic:</strong> Air Conditioning – “Investigations on Air Distribution Systems in the Air Conditioned Spaces”</p>
        <p><strong>Specialization:</strong> Air Conditioning, Fluid Flow, Heat Transfer, and Computational Fluid Dynamics</p>
        <p>
            <strong>Research Work Summary:</strong> His doctoral work involved numerical investigations to determine the thermal and flow characteristics of conditioned air using both conventional and alternative air distribution systems. Emphasis was placed on energy conservation and predicting the potential energy savings of alternative air distribution methods.
        </p>
        <p><strong>Research Papers Published:</strong> International – 89 | National – 17 | SCI – 4</p>
        <p>
            <strong>Books Published:</strong>
            <ul className="list-disc list-inside">
            <li>One book on Wood Working Hand Tools (MHRD Skill Development Programme)</li>
            <li>Book on Turbo Machinery (under publication)</li>
            </ul>
        </p>
        <p><strong>Patent:</strong> 1 Published</p>
        <p><strong>Foreign Visits:</strong> Worked in Bhutan as Planning Engineer (Mechanical) in a 1020 MW underground hydro power project (Tala Hydro Electric Project, Govt. of India)</p>
        <p>
            <strong>Achievements:</strong>
            <ul className="list-disc list-inside">
            <li>Member of Institution of Engineers (India)</li>
            <li>Chartered Engineer (Mechanical)</li>
            <li>Served at Class I level in MP State Govt. Service</li>
            <li>Guided 64 M.Tech dissertations and 2 Ph.D. scholars</li>
            <li>Registered Ph.D. Supervisor at RGPV and other universities</li>
            </ul>
        </p>
        <p><strong>Total Experience:</strong> 20 Years</p>
        <p>
            <strong>Awards / Projects:</strong>
            <ul className="list-disc list-inside">
            <li>Completed AICTE-MODROB Project worth Rs. 15 Lakhs as Principal Investigator</li>
            <li>Best Teacher Award at OIST, Bhopal</li>
            <li>Consultancy in Heat Exchanger and Fan Design</li>
            <li>Received “Vikas Ratna Shiromani Award” at National Conference, Hyderabad (2005)</li>
            </ul>
        </p>
        </div>
    ),
    },
    {
    college: 'LNCT E',
    name: 'Dr. Anil Kumar Saxena',
    content: (
        <div className="space-y-3">
        <p><strong>Full Name:</strong> Dr. Anil Kumar Saxena</p>
        <img src="https://lnct.ac.in/wp-content/uploads/2019/12/Dr.-Anil-Kumar-Saxena-LNCT-Civil-199x300.jpg" alt="" />
        <p><strong>Ph.D. Topic:</strong> Ph.D. in Civil Engineering – “Experimental and Computational Studies of CBR from Routine Subgrade Soil Properties”</p>
        <p><strong>Specialization:</strong> Geotechnical Engineering</p>
        <p>
            <strong>Research Work Summary:</strong> His research is interdisciplinary, combining experimental geotechnical work with soft computing techniques. The study simulated experimental data using Artificial Neural Networks with four algorithms (GRNN, MLPN, RBFN, and GDNN) in MATLAB to analyze the California Bearing Ratio (CBR) from common subgrade soil properties.
        </p>
        <p><strong>Research Papers Published:</strong> 54 papers in International Journals</p>
        <p><strong>Books Published:</strong> Nil</p>
        <p><strong>Patents:</strong> Nil</p>
        <p><strong>Foreign Visits:</strong> Nil</p>
        <p>
            <strong>Achievements:</strong>
            <ul className="list-disc list-inside">
            <li>Guided 38 M.Tech students</li>
            <li>Participated in 2 QIP programs at IIT Bombay and IIT Roorkee</li>
            <li>Attended 5 SDP programs at MANIT Bhopal, RGPV Bhopal, and SATI Vidisha</li>
            </ul>
        </p>
        <p><strong>Total Experience:</strong> 23 Years</p>
        <p><strong>Award:</strong> Best Teacher Award by Bhopal Collector on Teachers’ Day in 2016</p>
        </div>
    ),
    },
    {
    college: 'LNCT BPL Indore Campus',
    name: 'Dr. Prashant Purohit',
    content: (
        <div className="space-y-3">
        <p><strong>Full Name:</strong> Dr. Prashant Purohit</p>
        <img src="https://lnct.ac.in/wp-content/uploads/2024/08/LBIC-Princple-300x212.jpeg" alt="" />g
        <p><strong>Ph.D. Topic:</strong> Analytical Modeling and Fabrication of Hybrid Open Slot Patch Antenna for Wideband Applications</p>
        <p><strong>Specialization:</strong> Microstrip Antenna Design, Digital Communication</p>
        <p>
            <strong>Research Work Summary:</strong> Dr. Purohit's research focuses on hybrid open slot antennas designed to enhance bandwidth for wideband applications. His study explores the effects of hybridizing different slot shapes—such as elliptical and rectangular slots—and integrating them with L-shaped slots and parasitic elements on the same ground plane. The research demonstrates that bandwidth can be significantly improved through these hybrid configurations.
        </p>
        <p><strong>Research Papers Published:</strong> 19 (National/International)</p>
        <p><strong>Books Published:</strong> Nil</p>
        <p><strong>Patents:</strong> 2</p>
        <p><strong>Foreign Visits:</strong> Nil</p>
        <p>
            <strong>Achievements:</strong>
            <ul className="list-disc list-inside">
            <li>Qualified GATE with 97.98 percentile in Electronics & Communication Engineering</li>
            <li>Guided 14 PG students in Electronics and Communication Engineering</li>
            </ul>
        </p>
        <p><strong>Total Experience:</strong> 17 Years</p>
        <p>
            <strong>Awards & Projects:</strong>
            <ul className="list-disc list-inside">
            <li>Certificate of Appreciation for outstanding performance in Admission & Counseling at LNCT Bhopal</li>
            <li>1st position in National Level Patent Online Quiz organized by SLRTCE</li>
            </ul>
        </p>
        </div>
    ),
    },
    {
    college: 'T & P',
    name: 'Dr. Anuj Garg',
    content: (
        <div className="space-y-3">
        <p><strong>Full Name:</strong> Dr. Anuj Garg</p>
        <img src="https://lnct.ac.in/wp-content/uploads/2020/01/Anuj-Garg-TP-218x300.jpg" alt="" />
        <p><strong>Ph.D. Topic:</strong> Solar Energy Harvesting Method by MPPT for Telecom Industry</p>
        <p><strong>Specialization:</strong> Electronics & Communication</p>
        <p>
            <strong>Research Work Summary:</strong> Dr. Garg's research centers on solar energy harvesting using a hybrid LCASF MPPT technique. His work involves implementing a digital controller with fractional short-circuit current and an adaptive perturb & observe method. This approach enables faster and more efficient tracking of maximum power output in photovoltaic systems, particularly under fluctuating radiation conditions, with relevance to the telecom sector.
        </p>
        <p><strong>Research Papers Published:</strong> 3</p>
        <ul className="list-disc list-inside">
            <li>Communications on Applied Electronics 5(7):1-4, July 2016</li>
            <li>Wulfenia (Austria), Volume 23, No. 7, July 2016</li>
            <li>Jokull Journal (Iceland), Volume 66, Issue 4, 2016</li>
        </ul>
        <p><strong>Books Published:</strong> 1</p>
        <p><strong>Patents:</strong> 1</p>
        <p><strong>Foreign Visits:</strong> 1</p>
        <p>
            <strong>Achievements:</strong>
            <ul className="list-disc list-inside">
            <li>Chapter Chair, CII – Yi Bhopal (2020–21)</li>
            </ul>
        </p>
        <p><strong>Total Experience:</strong> 19+ Years</p>
        <p><strong>Award/Project:</strong> —</p>
        </div>
    ),
    },
    {
    college: 'R & D',
    name: 'Dr. Abhineet A Goyal',
    content: (
        <div className="space-y-3">
        <p><strong>Full Name:</strong> Dr. Abhineet A Goyal</p>
        <img src="https://lnct.ac.in/wp-content/uploads/2024/11/Dr.-Goyal-263x300.jpg" alt="" />
        <p><strong>Ph.D.:</strong> University of Turin, Italy (2008–2011)<br />
            <strong>Thesis:</strong> Engineering Cytochrome P450 BM3 (CYP102A1) for Biocatalysis and Xenobiotics Degradation</p>
        <p><strong>Postdoc:</strong> The Johns Hopkins University, USA (2012–2013)<br />
            <strong>Project:</strong> Proton Coupled Electron Tunneling (PCET) in Human COX-2 Mutant Y348F</p>
        <p><strong>Specialization:</strong> Mechanistic Enzymology, Cancer Biology, Human Drug Metabolism, Artificial/Directed Evolution, R-DNA Technology, Microbial Technology</p>
        <p>
            <strong>Research Summary:</strong> Dr. Goyal’s extensive research spans biocatalysis, cancer epidemiology, and mechanistic enzymology. His current work focuses on cervical cancer prevalence and HPV association in low-resource settings, promoting early detection and public health solutions. During his postdoctoral studies at Johns Hopkins, he examined isoform-specific COX-2 inhibition mechanisms, aiming to develop safer anti-inflammatory drugs. His doctoral work centered around engineering Cytochrome P450 BM3 variants for drug metabolism and biodegradation of xenobiotics. His pre-doctoral experience includes microbial ecology and bioremediation, with hands-on work in microbial diversity, genomics, and bioinformatics.
        </p>
        <p><strong>Research Papers Published:</strong> 9 (International/National)</p>
        <p><strong>Books Published:</strong> 3</p>
        <p><strong>Patents:</strong> —</p>
        <p><strong>Foreign Visits:</strong> 17 Countries</p>
        <p><strong>Education Abroad:</strong> University of Turin, Italy; The Johns Hopkins University, USA</p>
        <p>
            <strong>Achievements:</strong>
            <ul className="list-disc list-inside">
            <li>Health & Dental Chair, Homewood Campus Postdoctoral Association, Johns Hopkins University</li>
            </ul>
        </p>
        <p><strong>Total Experience:</strong> 20 Years</p>
        <p>
            <strong>Awards/Projects:</strong>
            <ul className="list-disc list-inside">
            <li>Italia/India Fellowship for Doctoral Studies, University of Turin</li>
            <li>Italian Govt. Scholarship for Specialized MS, University of Turin</li>
            </ul>
        </p>
        </div>
    ),
    },
    {
    college: 'MBA',
    name: 'Prof. (Dr.) Arvind Singh',
    content: (
        <div className="space-y-3">
        <p><strong>Full Name:</strong> Prof. (Dr.) Arvind Singh</p>
        <p><strong>Ph.D.:</strong> Commerce & Business Administration<br />
            <strong>Thesis Topic:</strong> MIS in Maruti Udyog Ltd – A Case Study</p>
        <p><strong>Specialization:</strong> Finance</p>
        <p>
            <strong>Research Summary:</strong> Dr. Singh’s research explores Management Information Systems (MIS) and its impact on organizational efficiency, using Maruti Udyog Ltd as a case study. Key insights include how MIS enhances inventory control, department integration through a unified database, reduction in operational errors, improved visibility, and real-time CRM functionality. His work reflects a deep interest in using technology to drive business service and productivity.
        </p>
        <p><strong>Research Papers Published:</strong> 8 (National), 4 (International)</p>
        <p><strong>Books/Editorial Roles:</strong> 
            <ul className="list-disc list-inside">
            <li><em>SAARANSH – RKG Journal of Management</em> (ISSN 0975-4601) – 20 issues published, listed in Cabell’s Directory and Ulrich’s Periodicals, USA</li>
            <li><em>ARASH – Journal of ISMDR</em> (ISSN 2231-2072) – International refereed journal, also listed in Cabell’s and Ulrich’s</li>
            </ul>
        </p>
        <p><strong>Patents:</strong> —</p>
        <p><strong>Foreign Visits:</strong> —</p>
        <p>
            <strong>Achievements:</strong>
            <ul className="list-disc list-inside">
            <li>Coordinated MBA subject video lectures for national broadcast via SWAYAM PRABHA (AKTU)</li>
            <li>Organizer, Grand Finale Smart India Hackathon 2019 at RKGIT</li>
            <li>Organizer, MSME-EXPO 2014, funded by Ministry of MSME, Govt. of India</li>
            <li>Board of Studies Member – Management, Dr. APJ Abdul Kalam Technical University (since Jan 2016)</li>
            </ul>
        </p>
        <p><strong>Total Work Experience:</strong> 36 Years (24 Years in Academia + 12 Years Industry)</p>
        <p>
            <strong>Awards/Projects:</strong>
            <ul className="list-disc list-inside">
            <li>“Lifetime Achievement Award” by International United Education Fraternity, Calcutta (2019)</li>
            <li>Mentor for DST-funded research project on fellowship analysis in S&T (Rs. 13 Lakhs, 2014–2015)</li>
            <li>Guided MBA & M.Phil dissertations on working capital, mutual funds, and comparative financial management</li>
            </ul>
        </p>
        </div>
    ),
    },
    {
    college: 'MCA',
    name: 'Dr. Sanjay Bajpai',
    content: (
        <div className="space-y-3">
        <p><strong>Full Name:</strong> Dr. Sanjay Bajpai</p>
        <img src="https://lnct.ac.in/wp-content/uploads/2019/12/DR.-Sanjay-bajpai-199x300.jpg" alt="" />
        <p><strong>Ph.D.:</strong> Computer Science<br />
            <strong>Thesis Topic:</strong> Enhancement of Image Steganography Algorithms and Steganalysis Techniques for Data Security</p>
        <p><strong>Specialization:</strong> Image Processing, Data Security, Artificial Intelligence, Analysis & Design of Algorithms</p>
        <p>
            <strong>Research Summary:</strong> Dr. Bajpai’s work focuses on improving data security through advanced steganography techniques. Unlike traditional cryptography, steganography conceals the existence of information. His research enhances embedding capacity and security by integrating compression methods and pixel manipulation. He also developed a pre-processor and classifier to guide users in selecting the best combination of compression and embedding based on image features, significantly boosting the adaptability and effectiveness of secure image-based communication.
        </p>
        <p><strong>Research Papers Published:</strong> 9 (International), 14 (National)</p>
        <p><strong>Books Published:</strong> 1 – <em>Artificial Intelligence</em> (Deepak Prakashan)</p>
        <p><strong>Patents:</strong> —</p>
        <p><strong>Foreign Visits:</strong> —</p>
        <p>
            <strong>Achievements:</strong>
            <ul className="list-disc list-inside">
            <li>Selected by AICTE among 100 participants nationwide for the UK-India Education Research Initiative (UKIERI) workshops (2017–18) held across New Delhi, Bhubaneshwar, Jaipur, and Mumbai</li>
            </ul>
        </p>
        <p><strong>Total Work Experience:</strong> 25.5 Years (24 Years Teaching, 1.5 Years IT Industry)</p>
        <p>
            <strong>Awards/Projects:</strong>
            <ul className="list-disc list-inside">
            <li>CMI Level 5 Certificate in Management and Leadership</li>
            <li>Teachers Excellence Award</li>
            </ul>
        </p>
        </div>
    ),
    },
    {
    college: 'Student Welfare',
    name: 'Dr. Amit Shrivastava',
    content: (
        <div className="space-y-3">
        <p><strong>Full Name:</strong> Dr. Amit Shrivastava</p>
        <img src="https://lnct.ac.in/wp-content/uploads/2019/12/Dr.-Amit-Shrivastava-199x300.jpg" alt="" />
        <p><strong>Ph.D.:</strong> Power System<br />
            <strong>Thesis Topic:</strong> “Improvement of Power System Stability Using Artificial Intelligence Based Power System Stabilizers”</p>
        <p><strong>Specialization:</strong> Power System</p>
        <p>
            <strong>Research Summary:</strong> Dr. Shrivastava's research focuses on enhancing power system stability using Artificial Intelligence-based stabilizers. The work compares conventional Delta-Omega and multiband PSS for interconnected systems and employs Artificial Bee Colony (ABC) and Interactive Artificial Bee Colony (IABC) algorithms for tuning their parameters. These AI-based techniques are computationally efficient and highly effective in improving stability for both single-machine and multimachine systems under small and large disturbances. The algorithms were tested across various operating conditions and demonstrated significant performance improvement.
        </p>
        <p><strong>Research Papers Published:</strong> 45 (International), 1 (National)</p>
        <p><strong>Books Published:</strong> <em>Basic Electrical Engineering</em> – Satya Prakashan, New Delhi</p>
        <p><strong>Patents:</strong> —</p>
        <p><strong>Foreign Visits:</strong> —</p>
        <p>
            <strong>Achievements:</strong>
            <ul className="list-disc list-inside">
            <li>Silver Medal for First Class Second Position in M.Tech (2002)</li>
            <li>State Merit Scholarship from Govt. of M.P. for high school board merit rank (1991)</li>
            <li>Best Paper Award – First Conference of Sagar Society of Interdisciplinary Research & Technology (2014)</li>
            <li>Faculty Appreciation Award by SRIJAN (2016)</li>
            <li>Faculty Appreciation Award by Dainik Bhaskar on Teachers’ Day (2016)</li>
            </ul>
        </p>
        <p><strong>Total Work Experience:</strong> 18 Years</p>
        <p><strong>Awards/Projects:</strong> Silver Medal for First Class Second Position in M.Tech</p>
        </div>
    ),
    },

  ];
  return (
    <mainContext.Provider value={{ Nav, setNav, data, setdata, values, setvalues, blogs ,leaders, osdList , principalList }}>
      {props.children}
    </mainContext.Provider>
  );
};

export default Maincontext;
