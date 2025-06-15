import Nav from '../../Components/Nav';
import Home1 from '../../Components/HomeComponets/Home1';
import LnctFooter from '../../Components/LnctFooter';
import { useEffect, useState } from 'react'
import Loader from '../../Components/Loader';


const Achievements = () => {
  const achievementCards = [
    {
      title: "No. 1 Private Engineering College in Madhya Pradesh & Central India",
      description: "Lakshmi Narain College of Technology, Bhopal has achieved the #1 ranking among Private Engineering Colleges in Madhya Pradesh and Central India, and an impressive 35th All India by Outlook Magazine 2024.",
      image: "https://lnct.ac.in/wp-content/uploads/2024/07/outlook-768x768.jpeg",
      bgColor: "bg-yellow-200",
    },
    {
      title: "No. 1 Private Engineering College by India Today & The Week",
      description: "We are delighted to share that Lakshmi Narain College of Technology, Bhopal has achieved the #1 ranking among Private Engineering Colleges in Madhya Pradesh and secured an impressive 46th spot nationwide by India Today Magazine 2024 and 13th by The Week Magazine 2024.",
      image: "https://lnct.ac.in/wp-content/uploads/2021/05/No-1-India-Today-768x768.jpeg",
      bgColor: "bg-blue-200",
    },
    {
      title: "5th Time NBA Accredited",
      description: "Congratulations to LNCT on its 5th accreditation by the NBA! It's a testament to the excellent quality of Computer Science & Engineering, Electronics and Communication Engineering, Electrical and Electronics Engineering, Mechanical Engineering, and Civil Engineering programs.",
      image: "https://lnct.ac.in/wp-content/uploads/2021/05/NBA-768x768.jpg",
      bgColor: "bg-orange-200",
    },
    {
      title: "NBA Accredited for Electronics & Computer Science",
      description: "Congratulations to Lakshmi Narain College of Technology & Science (LNCTS) for obtaining NBA accreditation for its Electronics and Communication Engineering and Computer Science Engineering departments, underscoring our commitment to quality education.",
      image: "https://lnct.ac.in/wp-content/uploads/2021/05/LNCP-NBA-768x768.jpeg",
      bgColor: "bg-red-200",
    },
    {
      title: "No. 1 Ranked Pharmacy College in Madhya Pradesh",
      description: "LNCT has secured the No. 1 rank in Pharmacy education by The Times, reflecting our excellence in pharmaceutical studies.",
      image: "https://lnct.ac.in/wp-content/uploads/2024/04/Lakshmi-Narain-College-of-Technology-Science-LNCTS-for-obtaining-NBA-Accreditation-768x768.jpg",
      bgColor: "bg-green-200",
    },
    {
      title: "No. 1 Ranked MCA Program",
      description: "LNCT's MCA program is ranked No. 1 in Madhya Pradesh, offering top-tier education in computer applications.",
      image: "https://lnct.ac.in/wp-content/uploads/2021/05/Top-5-Institutions-in-India-for-Salesforce-768x960.jpg",
      bgColor: "bg-purple-200",
    },
  ];

  const achievementsList = [
    "LNCT's 5th NBA Accreditation - Congratulations to LNCT on its 5th accreditation by the NBA! It's a testament to the excellent quality of Computer Science & Engineering, Electronics and Communication Engineering, Electrical and Electronics Engineering, Mechanical Engineering, and Civil Engineering programs. This accreditation opens up limitless opportunities for students to soar high and achieve success in their careers.",
    "LNCT Ranked No. 1 in Madhya Pradesh & Central India - Lakshmi Narain College of Technology, Bhopal has achieved the #1 ranking among Private Engineering Colleges in Madhya Pradesh and Central India, and an impressive 35th All India by Outlook Magazine 2024.",
    "NBA Accreditation for Electronics & Computer Science - Lakshmi Narain College of Technology & Science (LNCTS) has obtained NBA accreditation for its Electronics and Communication Engineering and Computer Science Engineering departments, underscoring our commitment to quality education.",
    "LNCT Awarded AAA+ Ranking - LNCT GROUP OF COLLEGES has been awarded AAA+ ranking by Careers360, recognizing our excellence in higher education.",
    "LNCT Science Awarded AAA Ranking - Awarded AAA ranking among the Top 5 Institutions in India for Science & Engineering by Careers360.",
    "18th Consecutive Year of LNCT Bhopal - 54 brilliant students from LNCT Group have been awarded with Gold & Silver Medals by Lakshmi Narain College of Technology, Bhopal ranked No. 35 in India and No. 1 in Madhya Pradesh & Central India by Outlook's Best Private Professional Colleges in India.",
    "Top Ranked Private Engineering College in Madhya Pradesh - Recognized by India Today and The Week as the No. 1 Private Engineering College in Madhya Pradesh, 46th in India by India Today 2024, and 13th by The Week 2024.",
    "Achieving 159th place in The Week All India Engineering Ranking 2024 and 47th in India Today All India Ranking 2024 - LNCT Group shines in the Education Excellence Awards 2024.",
    "LNCT Group of Colleges in Bhopal and INDORE have collectively achieved the prestigious NBA accreditation for its B.Tech programs in Computer Science, Electronics & Communication Engineering, Mechanical, Chemical, and Civil Engineering - Recognized by The National Board of Accreditation 2023.",
    "In the survey by India Today, LNCT Bhopal secures the 46th position among Engineering Colleges in India - Outlook Magazine 2023 places LNCT Bhopal as an all India rank of 35 among Engineering Colleges.",
    "According to Outlook Magazine 2023 survey, LNCT Bhopal is not only ranked No. 1 in Madhya Pradesh but also in Chhattisgarh - OPEN Magazine 2023 survey highlights LNCT Bhopal as the No. 1 Engineering College in Madhya Pradesh.",
    "OPEN Magazine 2023 survey ranks LNCT as the No. 1 Pharmacy College in Madhya Pradesh - LNCT Bhopal has been recognized by The Times.",
    "Received Platinum rating in AICTE-CII Survey 2023, Times, Outlook - LNCT Bhopal has been awarded the Platinum rating in the AICTE-CII Survey 2023.",
    "Delhi 2022 - LNCT Group of Colleges has been awarded the best educational group in Madhya Pradesh - Received the Global Education Achievement Awards 2022.",
    "LNCT Group has been awarded for Excellence in nation building - OUTLOOK 2022 - Ranked No. 1 Private Engineering College in Central India by Outlook 2022.",
    "All India Ranked No. 1 Private Engineering College in Central India by Economic Education Summit & Awards 2021 on 29th June 2021 - LNCT Group has been awarded as 'Best Private Engineering College' by Outlook 2021.",
    "The Week and Hansa Research Rankings 2021 - LNCT Bhopal has been recognized as the 'Private Engineering Colleges of India' - Ranked 10th in Private Engineering Colleges.",
    "LNCT has been selected by AICTE for establishing AICTE-IDEA LAB 2021 - LNCT Group has ranked as No. 1 Private Engineering College of Madhya Pradesh and No. 50 in all India Private Engineering Colleges by renowned magazine.",
    "LNCT Bhopal is the Top Private Engineering College of MP as per a rank of NIHF 2021 ranking with the rank of the state of MP - LNCT has been recognized as the Top Private Engineering College of the state of MP.",
    "LNCT signed MoU with various renowned MNC's - LNCT Bhopal has signed MoU with various MNC's for the development of its students and the state of MP.",
    "LNCT has collaborated with Oracle under WDP - LNCT has collaborated with Oracle under Workforce Development Program to enhance the skills of its students.",
    "Unique and distinguished training program by the industry - 48 students of ETA Dept. who underwent training at various reputed industries have been selected for jobs.",
    "LNCT has been awarded a grant in the form of free International training to help students learn in-demand industry skills - LNCT Group of Colleges has been awarded as 'Top Educational Group in Central India' at National Education Excellence Awards 2021 by Praxis Media.",
    "LNCT clinched the TOP rank among Engineering Colleges in Madhya Pradesh - The Week - Hansa Research Survey INDIA TODAY BEST COLLEGE RANKING 2020 - LNCT ranked Top 20% best Institutes in India by The Week 2020.",
    "LNCT Group has been awarded as the 'Most Trusted Institute of Madhya Pradesh' as well as in other awards - LNCT Group has been recognized by various reputed organizations.",
    "LNCT Group has been awarded the 'Excellence in Education' at National Education Excellence Awards 2020 - LNCT Group has been recognized by various reputed organizations.",
    "LNCT has also been ranked 10th 'Top Private Engineering Colleges Across North India' by India Today (May 2019 Edition) - LNCT Group has been recognized by various reputed organizations.",
  ];

   useEffect(() => {
    // Simulate loading time or wait for data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);
  if (isLoading) {
    return <Loader />;
  }



  return (
    <>
      <Nav />
      <Home1 
        heading="Achievements | LNCT Group of Colleges"
        description="Celebrating the achievements and milestones of LNCT Group of Colleges."
        image="https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-3-1024x682.jpeg"
      />
      <div className="min-h-screen bg-white font-sans py-12">
        {/* Header Section */}
        <header className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <img src="https://lnct.ac.in/wp-content/uploads/2021/04/lnct-g-logo.png" alt="LNCT Logo" className="h-16 mb-4 mx-auto" />
          <h1 className="text-2xl font-bold text-center text-gray-800 uppercase">Achievements of LNCT</h1>
          <p className="text-center text-gray-600 mt-4 text-sm">
            Lakshmi Narain College of Technology, Bhopal has climbed to the top, securing the No. 1 spot among Private Engineering Colleges in Madhya Pradesh and Central India, and an impressive 35th All India by Outlook Magazine 2024. A heartfelt thanks to our staff, students, and faculty members for their unwavering support and dedication.
          </p>
        </header>

        {/* Achievement Cards Section */}
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {achievementCards.map((card, index) => (
                <div
                  key={index}
                  className={`${card.bgColor} rounded-2xl shadow-lg p-8 flex flex-col items-center text-center transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200`}
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-40 w-40 object-cover rounded-xl border-4 border-white shadow-md mb-6 bg-white"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-serif tracking-wide">
                    {card.title}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements List Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Our Achievements</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600 text-sm">
              {achievementsList.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
      <LnctFooter />
    </>
  );
};

export default Achievements;