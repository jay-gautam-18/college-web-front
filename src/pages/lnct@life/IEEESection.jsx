import  { useContext, useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import Home1 from '../../Components/HomeComponets/Home1'
import LnctFooter from '../../Components/LnctFooter'
import Loader from '../../Components/Loader'

const IEEESection = () => {
    const mentors = [
        {
            name: "Dr. Amrita Pahadia",
            role: "Head - IEEE, LNCT",
            image: "https://lnct.ac.in/wp-content/uploads/2025/05/Dr-Amrita-pahadia-768x995.png",
        },
        {
            name: "Dr. Soni Changlani",
            role: "Senior Member",
            image: "https://lnct.ac.in/wp-content/uploads/2023/02/Dr.-Soni-Changlani-Head-Mentor.jpg",
        },
        {
            name: "Dr. Tarun Varma",
            role: "Branch Counselor",
            image: "https://lnct.ac.in/wp-content/uploads/2025/05/Dr.-Tarun-Varma-196x300.png",
        },
    ];

    const team = [
        { name: "Sweti Raj", role: "Secretary", image: "https://lnct.ac.in/wp-content/uploads/2025/05/Swati-Raj-170x300.png" },
        { name: "Aditi Shrivastava", role: "Branch Club", image: "https://lnct.ac.in/wp-content/uploads/2025/05/Aditi-Shrivastava-300x188.png" },
        { name: "Pradeep Sahu", role: "Branch Club", image: "https://lnct.ac.in/wp-content/uploads/2025/05/image002-300x206.png" },
        { name: "Shubham Kumar Gupta", role: "Secretary", image: "https://lnct.ac.in/wp-content/uploads/2025/05/Shubham-Kumar-Gupta-300x295.png" },
        { name: "Shubh Kuchya", role: "Vice chair", image: "https://lnct.ac.in/wp-content/uploads/2025/05/Shubh-kuchya-300x255.png" },
    ];
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
        heading={"Join us on 14th & 15th April 2023 at LNCT GROUP for Central India's Largest Environmental, Cultural, Social, Science and Technology Festival!"}
        description={""}
        image={"https://lnct.ac.in/wp-content/uploads/2023/03/SRISHTI-2K23.jpg"}
        
        />
        <div className="px-6 py-12 max-w-7xl mx-auto text-gray-800">
            {/* Heading */}
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-gray-900">IEEE Xplore | LNCT Student Branch</h1>
                <p className="text-lg mt-4 text-blue-600">
                    Empowering innovation and excellence in engineering and technology.
                </p>
            </div>

            {/* About Section */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-8 text-base leading-relaxed">
                    <div>
                        <h3 className="font-bold text-xl text-gray-900 mb-2">About IEEE Xplore</h3>
                        <p className="text-gray-700">
                            IEEE is a leader in engineering and technology education, providing resources for
                            peer-reviewed content, publishing journals, and developing professional standards.
                            IEEE Xplore gives access to scientific and technical content including journals,
                            conference proceedings, and standards in electrical engineering, computer science,
                            and electronics.
                        </p>
                    </div>
                    <div>
                        <h3 className="font-bold text-xl text-gray-900 mb-2">About LNCT IEEE Student Branch</h3>
                        <p className="text-gray-700">
                            LNCT IEEE Student Branch connects its student members to IEEE resources, events, and
                            professional development opportunities. It aims to enhance learning and skills in
                            technical areas, leadership, and career development.
                        </p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img
                        src="https://viralspy.io/wp-content/uploads/2023/06/ssi-scaled.jpg"
                        alt="Target"
                        className="w-96 rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Benefits */}
            <div className="bg-blue-50 p-8 rounded-lg mb-16 text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Benefits of Membership</h3>
                <p className="text-gray-700 text-base max-w-3xl mx-auto">
                    IEEE Student membership offers access to the latest technology, scholarships, awards, and
                    professional development opportunities. It supports your growth with learning tools,
                    networking events, and collaboration opportunities.
                </p>
                <button className="mt-6 px-6 py-3 bg-blue-600 text-white text-base rounded-lg hover:bg-blue-700 transition">
                    Become a Member
                </button>
            </div>

            {/* Mentors */}
            <div className="text-center mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Mentors</h3>
                <div className="grid md:grid-cols-3 gap-12 justify-items-center">
                    {mentors.map((mentor, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={mentor.image}
                                alt={mentor.name}
                                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-lg"
                            />
                            <p className="font-semibold mt-4 text-lg text-gray-900">{mentor.name}</p>
                            <p className="text-sm text-gray-500">{mentor.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Core Team */}
            <div className="text-center mb-16">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Team</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 justify-items-center">
                    {team.map((member, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-28 h-28 rounded-full object-cover border-4 border-gray-100 shadow-lg"
                            />
                            <p className="font-semibold mt-4 text-lg text-gray-900">{member.name}</p>
                            <p className="text-sm text-gray-500">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* IEEE Members List Section */}
            <div className="max-w-4xl mx-auto py-12">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">IEEE Members List</h2>

                {/* Head of Department */}
                <div className="mb-12">
                    <h4 className="font-bold text-lg text-gray-900 mb-4">Head of Department – ECE LNCT</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border text-base text-gray-700">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border px-4 py-3">Member Name</th>
                                    <th className="border px-4 py-3">Membership Type</th>
                                    <th className="border px-4 py-3">Membership Number</th>
                                    <th className="border px-4 py-3">IEEE Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-3">Dr. Ananta Pandith</td>
                                    <td className="border px-4 py-3">Professional</td>
                                    <td className="border px-4 py-3">HOD, ECE</td>
                                    <td className="border px-4 py-3">HOD, ECE</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Faculty Coordinators */}
                <div className="mb-12">
                    <h4 className="font-bold text-lg text-gray-900 mb-4">Faculty Coordinators – IEEE Student Branch LNCT</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border text-base text-gray-700">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border px-4 py-3">Member Name</th>
                                    <th className="border px-4 py-3">Membership Type</th>
                                    <th className="border px-4 py-3">Membership Number</th>
                                    <th className="border px-4 py-3">IEEE Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border px-4 py-3">Dr. Tarun Verma</td>
                                    <td className="border px-4 py-3">Professional</td>
                                    <td className="border px-4 py-3">100088963</td>
                                    <td className="border px-4 py-3">Branch Counselor</td>
                                </tr>
                                <tr>
                                    <td className="border px-4 py-3">Dr. Soni Chouhan</td>
                                    <td className="border px-4 py-3">Professional</td>
                                    <td className="border px-4 py-3">92771782</td>
                                    <td className="border px-4 py-3">Senior Member</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Student Members */}
                <div>
                    <h4 className="font-bold text-lg text-gray-900 mb-4">IEEE Student Members – LNCT</h4>
                    <div className="overflow-x-auto">
                        <table className="min-w-full border text-base text-gray-700">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border px-4 py-3">Member Name</th>
                                    <th className="border px-4 py-3">Membership Type</th>
                                    <th className="border px-4 py-3">Membership Number</th>
                                    <th className="border px-4 py-3">IEEE Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Add rows dynamically */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <LnctFooter/>
        </>
    );
};

export default IEEESection;
