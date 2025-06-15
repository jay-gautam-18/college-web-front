import React, { useEffect, useState } from 'react'
import Nav from '../../../Components/Nav'
import LnctFooter from '../../../Components/LnctFooter'
import Home1 from '../../../Components/HomeComponets/Home1'
import Loader from '../../../Components/Loader';

const PersonVue = () => {
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
    <Home1 heading={"Pearson Vue Select Testing Center | LNCT Group of Colleges"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/04/Student-Contect-1-768x544.png"}
    description={"Learn, achieve and excel with LNCT Group of colleges"} />
     <div className="max-w-6xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold text-center mb-4">
        Pearson Vue Select Testing Center | LNCT Group of Colleges
      </h1>

      <h2 className="text-lg font-bold mb-4 uppercase text-gray-700">
        LNCT Group of Colleges joins Pearson Vue Select Network to offer accessible and highly secure certification testing
      </h2>

      <p className="mb-4">
        <strong>LNCT Group of Colleges</strong> has signed an agreement with Pearson VUE, the computer-based testing (CBT)
        business of Pearson, to become a Pearson VUE Authorised Test Centre Select. The Test Centre is established in
        <strong> LNCTE</strong> building. This means <strong>LNCTE</strong> will be able to deliver exams for leading IT
        certification programmes such as Cisco, CompTIA, EMC, HP, LPI, Oracle and VMware. <strong>LNCTE</strong> will also
        have the ability to deliver the <strong>Graduate Management Admission Test® (GMAT®)</strong> – the most widely used
        assessment for graduate management admissions, as well as exams for other select Pearson VUE clients in the
        certification, licensure and academic admissions markets.
      </p>

      <p className="mb-4">
        <strong>LNCTE</strong> was chosen as a Pearson VUE Authorised Test Centre Select in part because of its high quality
        standards and outstanding customer service. Test centres that become a part of this network offer enhanced security and
        monitoring services. The Pearson VUE Authorised Test Centre Select network provides Pearson VUE clients with the
        option of having their exams delivered in premier authorised test centres around the world.
      </p>

      <p className="mb-4">
        <strong>Secretary, LNCT Group of colleges, Dr. Anupam Chouksey</strong> said:{' '}
        <em>
          “Becoming a Pearson VUE Authorised Test Centre Select will allow us to expand our offering and deliver some of the
          world’s most prominent certification exams. It’s a privilege to be chosen by Pearson VUE to be a part of its Select
          test centre network, and we look forward to delivering exams which aid career development and help to further increase
          the prestige of global test programmes.”
        </em>
      </p>

      <p className="mb-4">
        <strong>Robert Whelan, President of Pearson VUE</strong>, said:{' '}
        <em>
          “LNCT Group of Colleges has been selected to represent our exclusive network because of its excellent service and
          reputation. Thanks to Select test centers like LNCT Group, our clients can be assured that their candidates will
          receive an exceptional experience each and every time they test.”
        </em>
      </p>

      <h3 className="text-lg font-bold mt-8 mb-2">About Pearson VUE</h3>
      <p>
        Pearson VUE (<a href="https://www.pearsonvue.com" className="text-blue-600 underline">www.pearsonvue.com</a>) is the global leader in computer-based
        testing for high-stakes certification and licensure exams in the healthcare, finance, information technology,
        academic and admissions markets. We offer a full suite of services to develop, manage, deliver and grow test
        programmes for over 450 clients via the world’s most comprehensive network of highly secure test centers in 180
        countries, and through online solutions. Pearson VUE owns Certiport, the global leader in foundational IT
        certification solutions, and is a business of the world’s leading learning company Pearson (NYSE: PSO; LSE: PSON).
      </p>
    </div>
    <LnctFooter/>
    </>
  )
}

export default PersonVue