import React, { useEffect, useState } from 'react'
import Home1 from '../../Components/HomeComponets/Home1'
import LnctFooter from '../../Components/LnctFooter'
import Nav from '../../Components/Nav'
import Loader from '../../Components/Loader';


const FeeRefundPolicy = () => {
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
    <div>
<Nav/>
   <Home1
    image={"https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-3-1024x682.jpeg"}
    description={"We envision ourselves as a pace-setting Colleges of Academic Excellence focused on education, research and development in established and emerging profession"}
    heading={"Cancellation & Fee Refund Policy | LNCT Group of Colleges"}
    />
        {/* part-1 */}
        <div className="px-4 md:px-16 lg:px-32 py-10 font-serif text-justify">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
    Cancellation & Fee Refund Policy
  </h2>
  <hr className="border-gray-400 mb-6 w-24 mx-auto" />

  <ul className="list-disc pl-6 space-y-2 text-[16px] leading-relaxed">
    <li>Fees once paid are refundable as per College policies but are not transferable.</li>
    <li>
      All refund requests must be submitted by the student/parents in writing addressed to the Principal, in person,
      by regular mail, or by email. The Principal shall acknowledge the receipt of the same. Telephone messages are NOT acceptable.
    </li>
    <li>All dues need to be paid in order for the formalities of withdrawal to be completed.</li>
    <li>
      The fee refund is solely based on the balance amount in the student’s account after all applicable dues owed to the
      College are deducted. Discounts or concessions provided may be void and may not apply upon withdrawal.
    </li>
    <li>
      The excess payment received through technical or other reasons will be refunded only after due verification and/or
      within 30 days after receipt of written complaint by the parent/student.
    </li>
    <li>
      The mode of refund will be electronic/physical and will be refunded in the account from where the transaction was made.
    </li>
    <li>
      The parents/students need to pay the payment gateway processing/convenience charges over and above the fees/dues
      payable to the College.
    </li>
    <li>
      Service tax rate applicable will be as notified by the Government from time to time will also be added to the
      charges payable to the online payment gateway.
    </li>
    <li>The net amount refunded will be after deduction of transaction processing charges paid to the online payment gateway.</li>
    <li>No interest is paid on a refund of any fees/deposit.</li>
    <li>Student should contact College authorities first, regarding any excess or double payment made by them.</li>
    <li>
      The refund of any fee is subject to the refund policy prevailing at the time of seeking a refund.
    </li>
    <li>
      The College reserves the right to modify and amend refund policies at any time by uploading the same in the College’s website.
    </li>
    <li>All disputes are subject to the legal jurisdiction of District Bhopal, Madhya Pradesh, (India).</li>
  </ul>
</div>


<LnctFooter/>
    </div>
  )
}

export default FeeRefundPolicy