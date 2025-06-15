import Loader from '../../Components/Loader';
import { useEffect, useState } from 'react'
import Slider from 'react-slick';
import Nav from '../../Components/Nav';
import Home1 from '../../Components/HomeComponets/Home1';
import LnctFooter from '../../Components/LnctFooter';

const pdfLinks = [
    { year: '2023-24', url: '/pdfs/2023-24.pdf' },
    { year: '2022-23', url: '/pdfs/2022-23.pdf' },
    { year: '2021-22', url: 'https://lnct.ac.in/wp-content/uploads/2021/07/LNCT-GROUP-PLACEMENT-RECOARD-2020-21-BATCH.pdf' },
    { year: '2020-21', url: 'https://lnct.ac.in/wp-content/uploads/2021/07/LNCT-GROUP-PLACEMENT-RECOARD-2020-21-BATCH.pdf' },
    { year: '2019-20', url: 'https://lnct.ac.in/wp-content/uploads/2021/05/LNCT-GROUP-PLACEMENT-RECORD-2019-20.pdf' },
    { year: '2018-19', url: 'https://lnct.ac.in/wp-content/uploads/2019/05/PLACEMENT-RECORD-2018-19-BATCH.pdf' },
];

const images = [
    'https://lnct.ac.in/wp-content/uploads/2025/05/1.jpg',
    'https://lnct.ac.in/wp-content/uploads/2025/05/3.jpg',
    'https://lnct.ac.in/wp-content/uploads/2025/05/2.jpg',
    'https://lnct.ac.in/wp-content/uploads/2025/05/4.jpg',
    'https://lnct.ac.in/wp-content/uploads/2025/05/5.jpg',
    'https://lnct.ac.in/wp-content/uploads/2025/04/1-1.jpg',
    'https://lnct.ac.in/wp-content/uploads/2025/04/2-1.jpg',
    'https://lnct.ac.in/wp-content/uploads/2025/04/3-1.jpg',
    'https://lnct.ac.in/wp-content/uploads/2025/04/4-1.jpg',
    'https://lnct.ac.in/wp-content/uploads/2025/04/5.jpg',
    'https://lnct.ac.in/wp-content/uploads/2025/04/6.jpg',
    'https://lnct.ac.in/wp-content/uploads/2025/04/7.jpg',
    'https://lnct.ac.in/wp-content/uploads/2025/04/8.jpg',
];

const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 640,
            settings: { slidesToShow: 1 }
        }
    ]
};

const stats = [
    { label: 'Highest Package', value: '1 CRORE/Annum', color: 'text-blue-600' },
    { label: 'Average Package', value: '6.5 LPA', color: 'text-green-600' },
    { label: 'Placement Rate', value: '90%+', color: 'text-purple-600' },
    { label: 'Companies Visited', value: '200+', color: 'text-orange-600' }
];

const PlacementRecords = () => {
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
                image="https://lnct.ac.in/wp-content/uploads/2022/04/Highest-Package.png"
                heading="Placement Records"
                description="Our Success Stories and Industry Readiness"
            />
            <section className="px-6 md:px-20 py-10 bg-gradient-to-br from-white to-blue-50 text-gray-800">
                <h2 className="text-4xl font-bold text-center mb-2">Placement Records</h2>
                <p className="text-center text-sm text-gray-600 mb-8">Our Success Stories and Industry Readiness</p>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center transform hover:scale-105 transition-transform">
                            <h3 className="text-lg font-semibold text-gray-600 mb-2">{stat.label}</h3>
                            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                        </div>
                    ))}
                </div>

                <p className="max-w-4xl mx-auto text-center text-gray-700 leading-relaxed mb-10">
                    LNCT Group of Colleges sets a benchmark with record-breaking ₹1 Cr+ offers and over 650+ dream placements in 2022-2025. 
                    Our students are placed in leading companies including <strong>TCS, Infosys, Wipro, Cognizant, EPAM, Capgemini, Accenture, Amazon, Microsoft, Google, IBM, Oracle, Deloitte, PwC, KPMG, EY</strong> and many more.
                </p>

                <div className="mb-12">
                    <Slider {...sliderSettings}>
                        {images.map((img, idx) => (
                            <div key={idx} className="px-3">
                                <img
                                    src={img}
                                    alt={`Placement ${idx + 1}`}
                                    className="rounded-xl shadow-md w-full h-96 object-cover hover:shadow-xl transition-shadow"
                                />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* Batch Links */}
                <div className="text-center my-10">
                    <h3 className="text-2xl font-semibold mb-6">Batch-wise Placement Reports</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {pdfLinks.map(({ year, url }) => (
                            <a
                                key={year}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-blue-100 text-blue-700 px-6 py-3 rounded-lg shadow hover:bg-blue-200 transition transform hover:scale-105"
                            >
                                {`BATCH ${year}`}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Distinctive Features */}
                <div className="bg-white rounded-xl shadow-md p-8 max-w-5xl mx-auto mb-10">
                    <h4 className="text-2xl font-bold mb-6 text-blue-800">Distinctive Features</h4>
                    <ul className="grid md:grid-cols-2 gap-4">
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span>90%+ placement ratio, with students often serving 3+ years in companies</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span>Ranked in Top 10 Private Engineering Colleges (Outlook survey)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span>Outstanding Return-on-Investment through industry connections</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span>Strong corporate loyalty – Single Job Policy</span>
                        </li>
                    </ul>
                </div>

                {/* Industry Readiness */}
                <div className="bg-white rounded-xl shadow-md p-8 max-w-5xl mx-auto">
                    <h4 className="text-2xl font-bold mb-6 text-blue-800">Industry Readiness</h4>
                    <ul className="grid md:grid-cols-2 gap-4">
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span>Oracle Certification & rigorous aptitude + soft skills training</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span>Hands-on exposure in AI, ML, Cyber Security, Cloud, Blockchain, IoT</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span>Global Certifications through Pearson VUE</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-blue-600 mr-2">✓</span>
                            <span>GATE, GRE, GMAT & higher studies support</span>
                        </li>
                    </ul>
                </div>
            </section>
            <LnctFooter />
        </>
    );
}
export default PlacementRecords;
