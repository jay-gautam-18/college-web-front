import Loader from '../../Components/Loader';
import { useEffect, useState } from 'react'
import Nav from '../../Components/Nav';
import Home1 from '../../Components/HomeComponets/Home1';
import LnctFooter from '../../Components/LnctFooter';

const industryItems = [
    {
        title: "CISCO NETACAD",
        description: [
            "AICTE Cisco Virtual Internship: 1250+ certified students, 2000+ participants.",
            "**CISCO IDEATHON**: 1000+ students trained in CCNA with Python and DevNet.",
            "**CISCO SKILLATHON**: 1000+ students undergoing CCNA training."
        ],
        image: "https://specials-images.forbesimg.com/imageserve/63527dfb4278dc5233dbbaa4/960x0.jpg"
    },
    {
        title: "COURSERA FOR CAMPUS",
        description: [
            "Collaboration under LNCT LEARNING PROGRAMME – 2021.",
            "Access to 5+ key technologies: **AI/ML**, **Cloud**, **Cyber**, **Database**, etc.",
            "Students earn professional certificates from top global universities."
        ],
        image: "https://149357281.v2.pressablecdn.com/wp-content/uploads/2019/10/C4C-blog-post-img.png"
    },
    {
        title: "WIPRO TALENT NEXT",
        description: [
            "Wipro-trained 3rd-year students in **Core & Advanced JAVA**.",
            "300+ students trained by **Wipro Certified Professionals**."
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsWyltkvZvmf61x3FuGJZ5z24wDLfzT70v2Q&s"
    },
    {
        title: "NASSCOM - FUTURESKILLS",
        description: [
            "Government-backed program promoting **Salesforce training**.",
            "400+ LNCT students trained in Future Ready tech."
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3AYXBp_i1zHk7Ln4LWfHOjl3P1ZVgdyyIFg&s"
    },
    {
        title: "PERSISTENT",
        description: [
            "**Polaris Program**: Hands-on training on new technologies with placement advantage.",
            "**Martian Training**: Interview prep & industry exposure before placement season."
        ],
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOAkB-KiX575GjoUjNc8Qez_9iMB-59D0-pQ&s"
    },
    {
        title: "COGNIZANT DIGITAL NURTURE",
        description: [
            "3-month modules + 1-month live project on **JAVA**, **Cloud Tech**, etc.",
            "Led by **Cognizant Industry Experts**."
        ],
        image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1668519140020/_mAkZVbtb.jpg"
    },
    {
        title: "INFOSYS INFYTQ",
        description: [
            "Certification + Competitive Programming Round.",
            "Internship & PPI opportunities based on assessments."
        ],
        image: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220720121457/infosys-2.jpg"
    }
];

const IndustryInteraction = () => {
  const [isLoading, setIsLoading] = useState(true);
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
                heading="Industry Interaction | LNCT Group of Colleges"
                description="Connecting students with industry leaders and real-world experiences."
                image="https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-3-1024x682.jpeg"
            />
            <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-16 px-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-6">
                        Industry Interaction
                    </h2>
                    <p className="text-center text-indigo-700 font-medium text-lg mb-14">
                        LNCT Group of Colleges | Career Development Cell
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {industryItems.map((item, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl transition duration-300 group"
                            >
                                {item.image && (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                )}
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                        {item.title}
                                    </h3>
                                    <ul className="list-disc pl-5 space-y-3 text-gray-600">
                                        {item.description.map((point, i) => (
                                            <li
                                                key={i}
                                                dangerouslySetInnerHTML={{
                                                    __html: point.replace(
                                                        /\*\*(.*?)\*\*/g,
                                                        "<strong class='text-indigo-700'>$1</strong>"
                                                    )
                                                }}
                                            />
                                        ))}
                                    </ul>
                                    <button className="mt-6 inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <LnctFooter />
        </>
    );
};

export default IndustryInteraction;
