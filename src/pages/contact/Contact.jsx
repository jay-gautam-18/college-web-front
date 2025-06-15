import React, { useEffect, useState } from 'react'
import LnctFooter from '../../Components/LnctFooter'
import Home1 from '../../Components/HomeComponets/Home1'
import Nav from '../../Components/Nav'
import Loader from '../../Components/Loader'

const Contact = () => {
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
    heading={"LNCT Bhopal | Central India's No. 1 Engineering Institute - Bhopal"}
    description={"Learn, achieve and excel with LNCT Group of colleges"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/04/Student-Contect-1.png"}
    />
    <div className="p-8  text-gray-800">
      <h1 className="text-2xl font-bold text-center mb-6">
        LNCT Group of Colleges
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Main Head Office Info */}
        <div className="border p-4 rounded shadow-lg hover:bg-black hover:text-white transition duration-300">
          <p><span className="font-semibold text-pink-600">RECEPTION :</span> 0755-6185300,0755-6185300/1/2/3/4/5</p>
          <p><span className="font-semibold text-pink-600">ADMISSION CELL :</span> 7440777771, 7201800001, 0755-6185350, 0755-6685400</p>
          <p><span className="font-semibold text-pink-600">TRAINING & PLACEMENT CELL :</span> 9826062730, 0755-6185341</p>
          <p><span className="font-semibold">EMAIL ID:</span> info@lnct.ac.in, admission@lnct.ac.in, jobs@lnct.ac.in</p>
          <p>📍 LNCT Campus, Kalchuri Nagar, (P.O. Kolua) Raisen Road, Bhopal - 462022 (M.P.)</p>
        </div>

        {/* REWA & PATNA */}
        <div className="border p-4 rounded shadow-lg hover:bg-black hover:text-white transition duration-300">
          <p><span className="font-semibold text-purple-700">REWA:</span> Shop No -4, First Floor, Radhe Tower Near, Hotel Landmark, Ratahara, Rewa MP-486001. Contact: Mr. Yatendra 9109971007</p>
          <p><span className="font-semibold text-purple-700">PATNA:</span> K- 93 Hanuman Nagar Near HDFC Bank ATM Patna (Bihar)-800020. Contact: Mr. Ajeet Singh 9109971002</p>
        </div>

        {/* University Campus */}
        <div className="border p-4 rounded shadow-lg hover:bg-black hover:text-white transition duration-300">
          <p className="font-semibold">LNCT UNIVERSITY CAMPUS</p>
          <p>J K Town, Kolar Road Bhopal – 462042, Madhya Pradesh</p>
          <p>Phone: 0755-4065666</p>
          <p>Admission Helpline: 910991021/3/5/8/12</p>
          <p>Toll Free No: 7440772222</p>
          <p>Email: admission@lnctu.ac.in</p>
          <p><a href="http://www.lnctu.ac.in" className="text-blue-600">www.lnctu.ac.in</a></p>
        </div>

        {/* LNCT Indore */}
        <div className="border p-4 rounded shadow-lg hover:bg-black hover:text-white transition duration-300">
          <p className="font-semibold">LNCT VIDYAPEETH UNIVERSITY INDORE</p>
          <p>LNCT Campus Kanadia Indore, MP - 452016</p>
          <p>Admission Helpline: 7440779999</p>
          <p>Toll Free No: 744077999/222/233</p>
          <p>Email: admission@lnctvu.ac.in</p>
          <p><a href="http://www.lnctv.ac.in" className="text-blue-600">www.lnctvu.ac.in</a></p>
        </div>

        {/* LNCT Professional Bhopal */}
        <div className="border p-4 rounded shadow-lg hover:bg-black hover:text-white transition duration-300">
          <p className="font-semibold">LNCT PROFESSIONAL UNIVERSITY BHOPAL</p>
          <p>Bairasia Road Lambakheda, Chouksey Nagar, Bhopal, MP</p>
          <p>Phone: 0755-6615600</p>
          <p>Admission Helpline: 9109910271</p>
          <p>Toll Free No: 7201800001</p>
          <p><a href="http://www.jnctbhopal.ac.in" className="text-blue-600">www.jnctbhopal.ac.in</a></p>
        </div>

        {/* Jabalpur */}
        <div className="border p-4 rounded shadow-lg hover:bg-black hover:text-white transition duration-300">
          <p className="font-semibold">LNCT JABALPUR CAMPUS</p>
          <p>Near BhimGhat Chowk, N12, Jabalpur (M.P.)</p>
          <p>Phone: 7024286888</p>
          <p>Admission: 9981992222</p>
          <p>Email: lnctjabalpur@lnct.ac.in</p>
          <p><a href="http://www.lnctujc.ac.in" className="text-blue-600">www.lnctujc.ac.in</a></p>
        </div>

        {/* CEC Bilaspur */}
        <div className="border p-4 rounded shadow-lg hover:bg-black hover:text-white transition duration-300">
          <p className="font-semibold">CEC BILASPUR CAMPUS</p>
          <p>Chouksey Group of Colleges, Lal Khadan, Masturi Road, Bilaspur(C.G.) – 495004</p>
          <p>Phone: +91-9752401581</p>
          <p>Email: info@cecbilaspur.ac.in</p>
          <p><a href="http://www.cecbilaspur.ac.in" className="text-blue-600">www.cecbilaspur.ac.in</a></p>
        </div>

        {/* LNCT Bhopal Campus */}
        <div className="border p-4 rounded shadow-lg hover:bg-black hover:text-white transition duration-300">
          <p className="font-semibold">LNCT BHOPAL CAMPUS</p>
          <p>Kalchuri Nagar, Raisen Road, Bhopal (M.P.)</p>
          <p>Phone: 0755-6185300/1/2/3/4/5/6</p>
          <p>Admission Helpline: 910991021/3/4/5/6</p>
          <p>Toll Free: 7440777771</p>
        </div>

        {/* RCDS Campus */}
        <div className="border p-4 rounded shadow-lg hover:bg-black hover:text-white transition duration-300">
          <p className="font-semibold">RCDS BHOPAL CAMPUS</p>
          <p>Opposite Raja Bhoj Airport, Gandhinagar, Bhopal (M.P.)</p>
          <p>Phone: +91-7440777333, 6269405418</p>
          <p>Toll Free: 7024300003</p>
          <p>Email: info@lnctsrishiraj.ac.in</p>
          <p><a href="http://www.lnctsrishiraj.ac.in" className="text-blue-600">www.lnctsrishiraj.ac.in</a></p>
        </div>

        {/* LNCT World School */}
        <div className="border p-4 rounded shadow-lg hover:bg-black hover:text-white transition duration-300">
          <p className="font-semibold">LNCT WORLD SCHOOL CAMPUS</p>
          <p>New Chouksey Nagar, Bairasia Rd, Bhopal</p>
          <p>Phone: 0755-6615604 (Bhopal)</p>
        </div>
      </div>


    </div>
    <LnctFooter/>
    </>

  )
}

export default Contact