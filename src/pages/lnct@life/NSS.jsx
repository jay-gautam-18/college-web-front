import  { useContext, useEffect, useState } from 'react'
import Nav from '../../Components/Nav'
import Home1 from '../../Components/HomeComponets/Home1'
import LnctFooter from '../../Components/LnctFooter'
import Loader from '../../Components/Loader'

const NSS = () => {
  const reports = [ 
    { year: '2016-2017', link: 'https://lnct.ac.in/wp-content/uploads/2020/02/nss2016-17.pdf' },
    { year: '2017-2018', link: 'https://lnctbhopal.in/img/nss2017-18.pdf' },
    { year: '2018-2019', link: 'https://lnctbhopal.in/img/nss2018-19.pdf' },
  ];

  const achievements = [
    {
      title: 'Dene ka Sukh',
      description:
        'Collection of about 10 quintal grains (Wheat, Rice, Pulses, Khichdi) was done by NSS Volunteers from staff and students & was given to the vriddhaashrams, slums, & sos bal gram.'
    },
    {
      title: 'World AIDS Day',
      description:
        'NSS LNCT organized poster, debate, & quiz competition on the occasion of World AIDS Day.'
    },
    {
      title: 'Vriksha Ropan',
      description:
        'Plantation of different types of plants was done by NSS Volunteers in the campus & outside the campus as well.'
    },
    {
      title: 'NSS Camp',
      description:
        '7 Days NSS CAMP was organized in Adampur village. Volunteers worked hard to help needy people, learning to live a happy life in scarcity and contributing to societal development.'
    },
    {
      title: 'Debate Competition',
      description:
        'Ms. Ayushi Jain (IT V Sem) Won 2nd Prize, On State Level Debate Competition, Organized By NSS BU & Unicef.'
    },
    {
      title: 'NSS CAMP',
      description:
        'Repeated mention of NSS Camp activities.'
    }
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
      <div className="max-w-5xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">National Service Scheme</h1>
        </div>

        <ul className="list-disc list-inside text-blue-600 font-semibold">
          {reports.map((report) => (
            <li key={report.year}>
              <a href={report.link} className="hover:underline">
                NSS Activity Report {report.year}
              </a>
            </li>
          ))}
        </ul>

        <p className="text-gray-700">
          NSS LNCT is driven by a dedicated workforce of student and faculty volunteers. These volunteers actively involve
          themselves in social development activities.
        </p>

        <p className="text-gray-700">
          The motto of the National Service Scheme (N.S.S.) is <strong>"Not Me, But You"</strong>. This expresses the
          essence of democratic living and upholds the need for selfless services and appreciation of another man's point
          of view and also consideration for fellow human beings. NSS was launched in 1969 in 37 Universities and has
          grown to involve more than 3.2 million student volunteers across 298 universities and numerous institutions. NSS
          fosters personality development through community service.
        </p>

        <div>
          <h2 className="text-xl font-bold mb-3">Major Activities & Achievements (2012 - 2013)</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            {achievements.map((item, idx) => (
              <li key={idx}>
                <strong>{item.title}:</strong> {item.description}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">LNCT NSS UNIT, BHOPAL ORGANISED ONE DAY SPECIAL CAMP</h2>
          <p className="text-gray-700">
            On the 10th day of October, village Sagoni Kalan was witness to a one-day special camp of LNCT NSS unit. NSS
            volunteers undertook activities such as cleaning of drainage systems, repairing of hand pumps, and teaching
            local children. They worked on reducing plastic use and educated villagers on government policies and diseases.
            Eminent speakers encouraged volunteers to contribute regularly.
          </p>
        </div>
      </div>
      <LnctFooter/>
    </>
  );
}

export default NSS;