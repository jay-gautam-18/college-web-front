import Loader from '../../../Components/Loader'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Home1 from '../../../Components/HomeComponets/Home1';
import Nav from '../../../Components/Nav';
import LnctFooter from '../../../Components/LnctFooter';

const alumniTestimonials = [
  {
    name: "Shaiqurrab Ansari",
    company: "Wipro Technologies",
    img: "https://lnct.ac.in/wp-content/uploads/2023/10/image003.jpg",
    text: `I decided to choose the best private engineering college for my future growth. We all look for some good features/qualities in our institute i.e. it should give us best knowledge both theoretical as well practical. Another feature that we look at in the institute is that after investing four years of our life we should get good job opportunity and yes as it rightly said that "dreams do come true", finally my search ended when I got admission to the best private engineering college of Central India i.e. in Lakshmi Narain College of Technology (LNCT Group), Bhopal, M.P.
    
Choosing LNCT Group, without any doubt proved to be the best decision of my life. I did Bachelor of Engineering in the field of Electronics & Communication from this college. This college provided me the best education facility. All the teachers here are experienced with lots of theoretical & practical knowledge and they convey the same knowledge to students as well. Not only theoretical knowledge but also practical knowledge is also provided by doing lots of lab experiments. The best thing about LNCT Group is placement offers. It again proved to be the wise choice for me to select LNCT Group for the carrier. I have seen people of other institutes struggling to get jobs. But that is not the case if you have chosen LNCT Group as your institute. LNCT Group offers you an opportunity to work with different MNCs like Amazon, Wipro Technology, Cognizant, Capgemini, & many more.

The Placement cell of LNCT Group is also very supportive. Placement cell holds upon the various preparation classes for written exam of different MNCs and conduct the mock interview sessions to guide us and get placed in MNCs with great packages. I got placed in Wipro Technologies Pvt. Ltd. in the year 2018 i.e. a year before my degree gets completed. LNCT Group helped in making my future bright. As being from the Electronics & Communication branch I am currently working in Wipro Technologies as an Application Specific Integrated Circuit (ASIC) Verification Engineer in VLSI field. As LNCT Group proved best for my future, I would recommend this to the freshers that without any doubt choose LNCT Group for your carrier as to when you give your 4 years to LNCT Group it will give you best 40 years of future for sure.

Thanks`
},
{
  name: "Ayush Chopra",
  company: "VMWARE, India",
  img: "https://lnct.ac.in/wp-content/uploads/2023/10/image011.jpg",
  text: `My time at LNCT College, Bhopal, was truly transformative. The dedicated faculty provided not only excellent education but also personal guidance. The campus boasts modern facilities and a rich library. LNCT emphasizes holistic development, offering diverse extracurricular activities. Industry-focused initiatives, like guest lectures and workshops, enhanced practical knowledge. The college's strong sense of community, along with a diverse student body, created a welcoming environment. As an alumnus, I credit LNCT with equipping me academically and personally, setting the stage for my successful career. I wholeheartedly recommend LNCT College to those seeking a top-tier education in Bhopal. Thanks.`
},
{
  name: "Dharmita Kaithwas",
  company: "Rang Technologies, USA",
  img: "https://lnct.ac.in/wp-content/uploads/2023/10/image005.jpg",
  text: `Luckily I got admission in LNCT College, and from here, the second phase of my life started, where I have learned a lot. LNCT gave me many opportunities to learn, build confidence and explore better options for myself. Even after being from the core branch, we always got opportunities from outside. In my 2nd semester, I got the chance to join AIESEC, which is an international youth firm. Here students across the world work together to help in providing international and national internships. Later in the 6th semester, we had our campus placements wherein all I.T. and core companies came in. The best part I found about LNCT Group was that it is never biased when providing opportunities to their students and giving them the right platform. During Campus placements, I got a chance to explore I.T. companies, and then I was interviewed for a U.S. Recruitment company named Rang Technologies, and I got selected. From that moment, I was self-reliant and gratified. I am thankful to LNCT Group for giving me the platform which helped me reach this level. LNCT is one of the best colleges where you can explore yourself to the best, and hence, I suggested my younger brother to choose the same college. We should not limit ourselves to the core stream and always keep our options open. We must identify our core strengths and choose the right opportunity which will amplify our strengths and dreams. Being a civil engineer, I picked the chance with an I.T company and gave my 100% to be successful. I am and will always be thankful to LNCT, which has provided me with a platform to reach where I am today wherein I am self-assured well pleased and most importantly, contended. Thanks`
},
{
  name: " Mr. Harshit Raj",
  company: "DRDO, Hyderabad",
  img: "https://lnct.ac.in/wp-content/uploads/2023/10/image007.jpg",
  text: `I am a 2019 batch passout from CSE branch, LNCT Bhopal. I was placed in an IT company through on-campus drive, but I got selected in Defence Research Development Organisation (DRDO) and I accepted the offer from DRDO over the IT job. Through my initial days in college, all Professors, T&P department, Management helped me a lot and guided me in studies and with the result of that I was able to compete at All India Level and cleared the DRDO examination. Finally with God's grace and blessing of parents and teachers, I am currently doing my job in DRDO Hyderabad happily. Thanks`
},
{
  name: " Mr. Napendra Kumar Chourey",
  company: "Indian Para Athlete",
  img: "https://lnct.ac.in/wp-content/uploads/2023/10/image001.jpg",
  text: `I was born safely in the world, but at the age of nine months, a serious illness made me a victim. I had become very weak after being ill for several months. After prolonged treatment, I finally recovered from death, but both my legs and back stopped working. After completing his schooling, he took admission to BE Computer Science in LNCT College, Bhopal in 2012. After completion of the BE degree he did M.Tech Honors from LNCT in 2016-18. During this, when the OSD of the group told Ashok Rai Sir about him going into athletics, he was very happy. He said that "a well-educated person becomes successful in any field quickly". "Continue your studies along with sports". This advice proved to be very important in life. Rai sir has always been my good guide. All the teachers of the LNCT group kept encouraging me. The benefit of his experience was always there.
  
  `
}
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 6000,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

const AlumniNews = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Simulate loading time or wait for data
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust time as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
    <Nav/>
     <Home1
        heading={"Alumni Cell - LNCT Bhopal | Central India's No. 1 Engineering Institute - Bhopal"}
    description={"Group of 50,000+ engineers, technologists, scientists, managers, and entrepreneurs and more."}
    image={"https://lnct.ac.in/wp-content/uploads/2021/04/Student-Contect-1-300x212.png"}/>

    <div className="w-full max-w-4xl mx-auto py-6 sm:py-10 px-4 sm:px-6">
      {/* News and Updates Section */}
      <div className="w-full flex flex-col justify-center items-center max-w-4xl mx-auto px-4 mb-12 sm:mb-20">
        <h2 className="text-xl sm:text-2xl font-bold text-blue-900 mb-3 text-center">News and Updates</h2>
        <a
          href="https://lnct.ac.in/wp-content/uploads/2023/10/Alumni-News-Updates.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-black text-white px-4 py-2 rounded-lg hover:bg-blue-900 hover:text-white border-2 border-black transition-all duration-300 transform hover:scale-105"
        >
          View Latest News & Updates
        </a>
      </div>

      {/* Testimonials Section */}
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-blue-900">Alumni Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
          {alumniTestimonials.map((alum, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300 h-full"
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="relative mb-4">
                  <img
                    src={alum.img}
                    alt={alum.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
                  />
                </div>
                <div className="flex-1 w-full">
                  <p className="text-gray-700 text-sm sm:text-base mb-4 italic leading-relaxed h-[200px] sm:h-[250px] scrollbar-hidden overflow-y-auto px-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
                    "{alum.text}"
                  </p>
                  <div className="mt-auto">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-blue-800 mb-1">{alum.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-500">{alum.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <LnctFooter/>
    </>
  );
};

export default AlumniNews;
