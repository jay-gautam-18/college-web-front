import LnctFooter from '../../../Components/LnctFooter';
import Nav from '../../../Components/Nav';
import Home1 from '../../../Components/HomeComponets/Home1';
import Loader from '../../../Components/Loader'
import  { useEffect, useState } from 'react'

const events = [
  { sn: 1, name: 'AI Showcase', dept: 'LNCTU CS & AIML', venue: 'LNCTE Class Room - 217', date: '14 April', faculty: 'Prof. Purvee Kashyap', student: 'Chikki Kumar', contact: '8677994451' },
  { sn: 2, name: 'Antakshari', dept: 'Dept. of Humanities', venue: 'LNCTS New Block T-28', date: '14 April', faculty: 'Dr. Shraddha Gaud', student: 'Muskan Gite', contact: '7049018866' },
  { sn: 3, name: 'Automobile Quiz', dept: 'Mechanical Engineering', venue: 'LNCT F-17', date: '14 April', faculty: 'Prof. Neetu Singh', student: 'Sachi Nashine', contact: '8269284573' },
  { sn: 4, name: 'Best Out Of Waste', dept: 'LNCTE‑CSE‑Data Science', venue: 'Open Corridor in front of LNCTE CSE Deptt.', date: '14 April', faculty: 'Prof. Vineeta Shrivastava', student: 'Ishan Ishu', contact: '9939990200' },
  { sn: 5, name: 'Beyond Colors (Rangoli)', dept: 'LNCT/Engg. Mathematics Deptt.', venue: 'LNCT Top Floor in front of NCC office', date: '14 April', faculty: 'Dr. Rituja Nighojkar', student: 'Yahika Tomar', contact: '9343304525' },
  { sn: 6, name: 'Brainiacs (Environmental Quiz)', dept: 'LNCT/Engg. Physics Deptt.', venue: 'LNCT T-39', date: '14 April', faculty: 'Dr. Meeto Singh', student: 'Apurv Raj', contact: '9113175872' },
  { sn: 7, name: 'Chhatra Sansad (Debate)', dept: 'MBA', venue: 'LNCTE - 306', date: '15 April', faculty: 'Dr. Bhavana Likhithar', student: 'Abhay Shrivastava', contact: '7999459560' },
  { sn: 8, name: 'CINEMATOGRAPHY', dept: 'LNCT-IOT', venue: 'LNCT Seminar Hall', date: '15 April', faculty: 'Prof. Devendra Singh Rathore', student: 'Sujal Chourasia', contact: '8319447256' },
  { sn: 9, name: 'Click with Trick (Photography)', dept: 'QNC', venue: 'LNCTS New Block Class G‑02', date: '14 April', faculty: 'Prof. Prashant Pandey', student: 'Vijay Patidar', contact: '8770444429' },
  { sn: 10, name: 'Code Beta', dept: 'CSE, LNCTE', venue: 'LNCTE Lab 119/120/121', date: '14 April', faculty: 'Prof. Satish Kumar Choudhary', student: 'Bhuvnesh Singh', contact: '8770428395' },
  { sn: 11, name: 'Color Collision (Poster Making)', dept: 'LNCTS/Engg Mathematics Deptt.', venue: 'LNCTS Old Block – S10 ED Hall', date: '15 April', faculty: 'Dr. Santosh Jain', student: 'Vaishnavi Nema', contact: '7224046580' },
  { sn: 12, name: 'Comedy Day with LNCT', dept: 'LNCTS/EC', venue: 'LNCTE – 306', date: '15 April', faculty: 'Dr. Aparna Gupta', student: 'Shruti Shukla', contact: '9752489088' },
  { sn: 13, name: 'Eco-Council', dept: 'LNCTU BBA', venue: 'LNCTE Class Room – 218', date: '15 April', faculty: 'Dr. Hemant Serotiya', student: 'Shreyansh Shukla', contact: '8085282715' },
  { sn: 14, name: 'Eco-Friendly Model Making', dept: 'LNCT/Engineering Chemistry Deptt.', venue: 'LNCT-T-31', date: '14 April', faculty: 'Prof. Atul Tiwari', student: 'Aashi Vishwakarma', contact: '7999578447' },
  { sn: 15, name: 'Face Painting', dept: 'BCA', venue: 'MCA Block 305', date: '14 April', faculty: 'Prof. Shilpa Jaiswar', student: 'Aditya Jha', contact: '6202347589' },
  { sn: 16, name: 'Fancy Dress', dept: 'MCA', venue: 'LNCTS – S21', date: '15 April', faculty: 'Prof. Diksha Tripathi', student: 'Rishu Kumar', contact: '8750985603' },
  { sn: 17, name: 'Impearl the World (Sketches)', dept: 'LNCTS CSE Cyber Security', venue: 'LNCT-S-18', date: '14 April', faculty: 'Prof. Parag Sohoni', student: 'Aditya Shukla', contact: '9179276577' },
  { sn: 18, name: 'Kavi Sammelan', dept: 'LNCTU / Agriculture', venue: 'LNCTS-T-28', date: '15 April', faculty: 'Dr. Mahendra Jadia', student: 'Abhishek Udeniya', contact: '8700656997' },
  { sn: 19, name: 'LAN Gaming', dept: 'Dept. of Computer Science', venue: 'Computer Lab LNCT', date: '14 April', faculty: 'Prof. Aditya Patel', student: 'Chirag Rawat', contact: '7000791799' },
  { sn: 20, name: 'Mehndi', dept: 'LNCTS/Engg Mathematics Deptt.', venue: 'LNCTS Old Block Open Hall Third Floor', date: '14 April', faculty: 'Dr. Bhupendra Tripathi', student: 'Jigyasa Yadav', contact: '6232412100' },
  { sn: 21, name: 'ModelsMaking Competition (Civil)', dept: 'Civil Engineering Department', venue: 'Civil Lab CME', date: '14 April', faculty: 'Prof. Shubha Agarwal', student: 'Prachi Dubey', contact: '8085312643' },
  { sn: 22, name: 'Nail Art', dept: 'LNCTE/Engg Mathematics Deptt.', venue: 'LNCTS Old Block Open Hall Third Floor', date: '15 April', faculty: 'Dr. Uma Sahu', student: 'Sughanda Sharma', contact: '6265503230' },
  { sn: 23, name: 'Nukkad Natak', dept: 'NSS', venue: 'In front of LNCTE Garden', date: '14 April', faculty: 'Prof. Nandkishore', student: 'Prachi Upadhayay', contact: '9993516149' },
  { sn: 24, name: 'Paper Presentation', dept: 'LNCTS & LNCTE / Engineering Chemistry Deptt.', venue: 'LNCTS New Block Classroom F-2', date: '14 April', faculty: 'Dr. Shraddha Sharma', student: 'Prachi Patel', contact: '8461853661' },
  { sn: 25, name: 'Rhythm Beats (Instrumental)', dept: 'AIDS, LNCT', venue: 'LNCTE Auditorium', date: '15 April', faculty: 'Prof. Umesh Gera', student: 'Monesh Kahar', contact: '9516082136' },
  { sn: 26, name: 'Robotics', dept: 'LNCT/EC', venue: 'Corridor LNCT EC Deptt', date: '14 April', faculty: 'Dr. Vijay Yadav', student: 'Kartik Bakshi', contact: '7024244005' },
  { sn: 27, name: 'Role the Reel', dept: 'LNCTE AIML', venue: 'LNCTE Class Room-218', date: '14 April', faculty: 'Prof. Siju George', student: 'Pawanraj Kushwah', contact: '9340853980' },
  { sn: 29, name: 'Voice of LNCT (Singing)', dept: 'EX/EE', venue: 'LNCTS – S21', date: '14 April', faculty: 'Prof. Vikas Kumar', student: 'Asly Mery Saji', contact: '9926490116' },
  { sn: 30, name: 'SKIT', dept: 'Pharmacy', venue: 'LNCTE Auditorium', date: '15 April', faculty: 'Prof. Priyanka Namdeo', student: 'Rachit Singh Thakur', contact: '9784655744' },
  { sn: 31, name: 'Solo Dance', dept: 'LNCTS/CSE', venue: 'LNCTE Auditorium', date: '14 April', faculty: 'Prof. Khushbu Rai', student: 'Himanshu Kr. Tiwari', contact: '8235083336' },
  { sn: 32, name: 'Technical Workshop', dept: 'LNCT AIML', venue: 'LNCT Seminar Hall', date: '14 April', faculty: 'Dr. Anju Singh', student: 'Praveen Patel', contact: '9589461904' },
  { sn: 33, name: 'Treasure Hunt on web via Google/Bing', dept: 'Information Technology', venue: 'IT Lab', date: '14 April', faculty: 'Prof. Abhishek Dwivedi', student: 'Manas Pandey', contact: '8103226862' },
  { sn: 34, name: 'Nature\'s Web Collage Making', dept: 'LNCTS CSE', venue: 'LNCTS Old Block – G9', date: '14 April', faculty: 'Prof. Vishwa Gupta', student: 'Nishant Devendra Khatri', contact: '7999495761' },
];

const Srishti2k23 = () => {
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
    return(
    <>
    <Nav/>
        <Home1
        heading={"Join us on 14th & 15th April 2023 at LNCT GROUP for Central India's Largest Environmental, Cultural, Social, Science and Technology Festival!"}
    description={""}
    image={"https://lnct.ac.in/wp-content/uploads/2023/03/SRISHTI-2K23.jpg"}/>

  <div className="font-sans bg-gray-50 text-gray-800">
    {/* Hero */}
    <header className="bg-white py-12 text-center">
      <h1 className="text-4xl font-bold mb-1">SRISHTI 2K23</h1>
      <p className="text-black uppercase text-xs tracking-wide mb-2">7th Edition</p>
      <p className="max-w-2xl mx-auto">📣 The wait is finally over! 🎉 SRISHTI 2K23, LNCT GROUP is back... 🔥🔥</p>
      
    </header>

    {/* Featured Artist */}
    <section className="py-12 flex flex-col lg:flex-row items-center max-w-6xl mx-auto px-4 space-y-8 lg:space-y-0 lg:space-x-8">
      <div className="lg:w-1/2 rounded-lg overflow-hidden shadow-lg">
        <img src="https://lnct.ac.in/wp-content/uploads/2023/04/Gajendra-Verma-Night-1019x1024.jpg" alt="Gajendra Verma" className="w-full object-cover"/>
      </div>
      <div className="lg:w-1/2 text-center lg:text-left">
        <h2 className="text-2xl font-semibold text-black mb-3">Gajendra Verma Night</h2>
        <p className="mb-4">Groove to the sensational beats of Gajendra Verma on 14th April 2023, from 6 PM onwards...</p>
        <button className="px-6 py-2 bg-black text-white  rounded hover:bg-transparent border  hover:text-black transition">14 April 2023</button>
      </div>
    </section>

    {/* Event Schedule */}
    <section className="py-12 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <h3 className="text-2xl font-bold text-center mb-6">Event Schedule</h3>
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full bg-white">
            <thead className="bg-black text-white">
              <tr>{['S.N.','Event','Department','Venue','Date','Faculty Coordinator','Student Coordinator','Contact No.']
                  .map(h => <th key={h} className="py-3 px-4 text-left text-sm">{h}</th>)}
              </tr>
            </thead>
            <tbody>
              {events.map(e => (
                <tr key={e.sn} className="border-b">
                  <td className="py-2 px-4">{e.sn}</td>
                  <td className="py-2 px-4">{e.name}</td>
                  <td className="py-2 px-4">{e.dept}</td>
                  <td className="py-2 px-4">{e.venue}</td>
                  <td className="py-2 px-4">{e.date}</td>
                  <td className="py-2 px-4">{e.faculty}</td>
                  <td className="py-2 px-4">{e.student}</td>
                  <td className="py-2 px-4">{e.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <footer className="py-8 text-center text-gray-600 text-sm">&copy; 2023 Srishti 2K23, LNCT Group</footer>
  </div>
  <LnctFooter/>
  </>
  )
};

export default Srishti2k23;
