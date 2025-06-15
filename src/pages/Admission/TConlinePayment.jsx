import React, { useEffect, useState }  from 'react'
import Nav from '../../Components/Nav'
import LnctFooter from '../../Components/LnctFooter'
import Home1 from '../../Components/HomeComponets/Home1'
import Loader from '../../Components/Loader';
const TConlinePayment = () => {
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
       < Nav/> 

  <Home1
    image={"https://lnct.ac.in/wp-content/uploads/2022/05/LNCT-Group-of-Colleges-3-1024x682.jpeg"}
    description={"Learn, achieve and excel with LNCT Group of colleges"}
    heading={"Admission Process | Central India's No. 1 Engineering Institute - Bhopal"}
    />


       {/* part-1 */}
        <div className="px-4 md:px-16 lg:px-32 py-10 text-justify font-serif">
      <h1 className="text-2xl md:text-4xl font-extrabold text-center mb-4">
        TERMS AND CONDITIONS FOR ONLINE REGISTRATION FEES AND PROVISIONAL ADMISSION FEE PAYMENT
      </h1>

      {/* Button Section */}
      <div className="flex justify-center items-center space-x-4 my-6">
        <a href='https://portal.lnct.ac.in/accsoft2/AdmissionRegistration.aspx' className="bg-gradient-to-r from-black to-black text-white font-semibold px-6 py-2 rounded-full">
          Registration Form
        </a>
        <span className="font-bold text-gray-700">OR</span>
        <a href='https://portal.lnct.ac.in/accsoft2/admissionregpayment.aspx' className="bg-gradient-to-r from-black to-black text-white font-semibold px-6 py-2 rounded-full">
          Make Payment
        </a>
      </div>

      <h2 className="text-xl md:text-2xl font-bold text-center mb-6">ONLINE REGISTRATION FEES</h2>

      {/* Sectioned Paragraphs */}
      <div className="space-y-4 text-[16px] leading-relaxed">
        <p>These Terms and Conditions are applicable for all Colleges under LNCT Group (LNCT, LNCT&S, JNCT,LNCTE, LNCP,LNCT MBA,LNCT MCA). These terms and conditions apply to the use of the online service for payment of Registration Fee/Provisional Admission Fee. Please read the terms and conditions carefully. You will be deemed to have accepted these terms and conditions by authorizing a payment through the online payment service. LNCT Group of Colleges at Bhopal, reserves the right to amend these terms and conditions at any time without notice. You should therefore re-read the terms and conditions each time that this service is used.
 </p>

        <p> LNCT Group of Colleges at Bhopal enables Students/Parents to pay registration or provisional fee online through ERP portal of LNCT Group. Online Services are provided through a secure website using Paytm and Bill Desk Online Payment Service provider. All such Online Services shall be subject to these Terms and Conditions for Online Services, and the Terms of Use of the LNCT Group of Colleges at Bhopal, which are incorporated herein by reference. LNCT Group of Colleges at Bhopal shall be entitled at any time without prior notice or any liability to you, to cancel or suspend the Online fee payment services and/or to substitute alternative services, which may or may not be interactive or transactional in nature.  </p>

        <p>
         The credit card information supplied when using this service is processed by the payment gateway of the service provider and is not supplied to the College. The only information supplied to the College is the name of the payer, the bill number and the amount of the payment. It is the sole responsibility of the user of this service to ensure that the information entered in the relevant fields is correct. It is recommended that you take and retain a copy of the transaction for record keeping purposes, and to assist with the resolution of any disputes that may arise from use of this service.  The Fee deposited through Credit Card/Debit Card/Net Banking /Paytm will normally reach the respective College account after 2 working days. College shall not be responsible for any not settled payment due to any reason. The college is also shall not be responsible, if the payment is refused or declined by the credit/debit card supplier for any reason.  The college does not warranty the availability of online Payment System every time.
   </p>

        <p>
         Online Transaction charges are not part of the payment. The amount to be paid by the Students/Parent shall be computed and paid as specified in the payment page provided by service provider.  In respect of any failed transactions of any of the Customers, processed through this service, the transaction failure charges payable if any to the Participating Banks, in respect of the failed transactions shall be charged additionally.  While availing any of the payment method/s offered by us, The College is not responsible and will take no liability of whatsoever nature in respect of any loss or damage arising directly or indirectly to you out of the decline due to Lack of authorization for any transaction/s, Exceeding the preset limit mutually agreed by you and between your “Bank/s”, Any payment issues arising out of the transaction, Decline of transaction for any other reason/s.
        </p>

        <p>
        LNCT Group of Colleges at Bhopal does not charge any processing fee or service charges from the students for online payment. However, the students have to pay the transaction processing charges as applicable by the Payment gateway Service provider.  GST and other tax / taxes if any applicable, will be charged in addition. (to be collected from customer)  </p>

        <p><strong>Technical issue:</strong> In case of any technical issue due to which the payment gets deducted...</p>
        <p><strong>Multiple Payments Case:</strong> If double or multiple payments happen and the payment gateway service clearly mentions it...</p>
        <p><strong>Other Payments Case:</strong> In all other cases where there is a discrepancy in the fee paid...</p>
      </div>

      {/* Refund / Cancellation Policy */}
      <div className="mt-10">
        <h3 className="text-lg font-bold underline mb-2">Refund / Cancellation Policy</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>The amount of fees received along with the application form (Rs. 300) is not refundable.</li>
          <li>The payment at the time of registration does not confirm the seat in the said choice.</li>
          <li>The full fees must be paid before the date finalized by the admission team...</li>
          <li>In case the full fee is not paid by the due date, the amount paid towards the provisional admission shall stand forfeited...</li>
          <li>Fees is payable in advance for all courses.</li>
          <li>All refund requests must be submitted in writing to the Principal...</li>
          <li>If refund is approved by College authority, Minimum Rs. 1000/- will be deducted...</li>
          <li>The College reserves the right to modify and amend refund policies...</li>
          <li>All disputes are subject to legal jurisdiction of District Bhopal, Madhya Pradesh, India.</li>
        </ul>
      </div>

      
    </div>

       < LnctFooter/> 
    </div>
  )
}

export default TConlinePayment