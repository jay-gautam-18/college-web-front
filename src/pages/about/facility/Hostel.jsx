import React, { useEffect, useState } from 'react'
import Nav from '../../../Components/Nav'
import LnctFooter from '../../../Components/LnctFooter'
import Home1 from '../../../Components/HomeComponets/Home1'
import Loader from '../../../Components/Loader';

const Hostel = () => {
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
    heading={"Hostel | LNCT Group of Colleges"}
    description={"We offer separate hostels for boys and girls with all the modern facilities! Join us and create memories that will last a lifetime."}
    image={"https://lnct.ac.in/wp-content/uploads/2021/04/best-hostels-for-students-7-768x512.jpeg"}
    />
    <div className="max-w-5xl mx-auto p-6 text-gray-800 space-y-6">
      <h1 className="text-3xl font-bold text-center">Hostel</h1>
      <h2 className="text-lg text-center">LNCT Group of Colleges</h2>

      <p>
        College has two Boys and one Girls hostel. All required facilities for comfortable stay are available in hostel for students.
        Both are attached to the College campus. There are resident Hostel Wardens to look into student’s problems, provide quick
        redressal along with hostel care. Both are connected to the Wi-Fi and are available to association host. Housekeeping
        services are provided on a daily basis. Dispensary Facility is available for Hostellers. A Doctor visits the hostel, in case
        of need to conduct medical check-ups.
      </p>
      <p>
        Hostel accommodation is allotted to students strictly on a merit basis during the new session.
      </p>

      <h3 className="text-2xl font-semibold text-center">Facilities Provided in Hostel</h3>
      <div className="flex flex-wrap justify-center gap-2">
        {[
          'Internet With Wi-Fi',
          'Laundry',
          'Gymnasium',
          'Indoor Games',
          'Football Ground',
          'Basketball Court',
          'Badminton Court',
          'Volleyball Court',
          '3-Dope, Air Theatre',
          'Cricket Ground',
        ].map((facility) => (
          <span
            key={facility}
            className="px-4 py-2 border rounded-full text-sm bg-gray-100"
          >
            {facility}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <img src="/path/to/image1.jpg" alt="Hostel Image 1" className="rounded shadow" />
        <img src="/path/to/image2.jpg" alt="Hostel Image 2" className="rounded shadow" />
        <img src="/path/to/image3.jpg" alt="Hostel Image 3" className="rounded shadow" />
        <img src="/path/to/image4.jpg" alt="Hostel Image 4" className="rounded shadow" />
        <img src="/path/to/image5.jpg" alt="Hostel Image 5" className="rounded shadow md:col-span-2" />
      </div>

      <h3 className="text-2xl font-semibold">General Rules</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Allotted room will not be changed/surrendered without permission of the Warden. No change in the position of the furniture is allowed in the room.</li>
        <li>The student shall be responsible for all the articles issued to him/her.</li>
        <li>The student will be held responsible and will be suitably penalized if a damage is done to any hostel property or to the property of other students living in the hostel.</li>
        <li>Students are required to keep their rooms clean and tidy and take care of the furniture and other articles issued to them.</li>
        <li>Students should not use any type of electric heating appliances, iron, immersion rod etc. in their room. Defaulters will be penalized.</li>
        <li>Students are not allowed to keep any valuables in the room. They are responsible for the safety of their belongings.</li>
        <li>Students should maintain proper discipline and decorum in the hostel premises failing which they will be punished or may be expelled.</li>
        <li>Students should avoid making noise and maintain silence in the hostel.</li>
        <li>Cooking inside the hostel room is strictly prohibited.</li>
        <li>Guests and visitors are not allowed to stay in the hostel without prior permission of the Warden.</li>
      </ul>

      <h3 className="text-2xl font-semibold">Attendance Rules</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Students must return to their hostel before 10:00 PM.</li>
        <li>Roll call is taken at 10:00 PM sharp by the hostel warden.</li>
        <li>Students failing to return in time may face disciplinary action.</li>
      </ul>

      <h3 className="text-2xl font-semibold">Mess Rules</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Every student seeking admission to hostel is provided a pass for the mess.</li>
        <li>Only the registered hostel students are allowed to eat in the mess.</li>
        <li>Mess without charges is not provided.</li>
      </ul>

      <h3 className="text-2xl font-semibold">Guests And Visitors</h3>
      <p>
        Hostel parents and guests are not allowed to stay in hostel overnight. Visitors will be allowed to the hostel premises from 4:30 pm to 6:30 pm only.
      </p>
    </div>
    <LnctFooter/>
    </>
  )
}

export default Hostel