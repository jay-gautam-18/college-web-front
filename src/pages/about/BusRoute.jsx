import React, { useEffect, useState }  from 'react'
import Nav from '../../Components/Nav'
import LnctFooter from '../../Components/LnctFooter'
import Home1 from '../../Components/HomeComponets/Home1'
import { Link } from 'react-router-dom'
import Loader from '../../Components/Loader';
const BusRoute = () => {
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
    heading={"Bus Route | LNCT Group of Colleges"}
    description={"LNCT Group of Colleges is committed to set new benchmarks in academics and technological innovation!"}
    image={"https://lnct.ac.in/wp-content/uploads/2024/12/Transportation-LNCT-Group-of-Colleges-5-768x508-1.jpeg"}
/>
     <div className="p-6 max-w-4xl mx-auto">
      {/* Title Section */}
      <h1 className="text-2xl font-semibold text-center mb-4">
        Bus Routes | LNCT Group of Colleges
      </h1>

      <div className="flex items-center justify-center mb-6">
        <span className="flex-1 border-t-2 mr-2 border-gray-400"></span>
        <span className="text-gray-500 font-semibold">
          Routes
        </span>
        <span className="flex-1 border-t-2 ml-2 border-gray-400"></span>
      </div>

      {/* Table Section */}
      <table className="min-w-full table-auto border-collapse">
        <thead>
          <tr>
            <th className="border p-2 font-semibold text-gray-700">
              Bus Shift
            </th>
            <th className="border p-2 font-semibold text-gray-700">
              Shifts
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            {
                shift:"Shift 1",
                link:"https://lnct.ac.in/wp-content/uploads/2022/10/Bus-Route-1st-Shift.pdf",
            },
            {
                shift:"Shift 2",
                link:"https://lnct.ac.in/wp-content/uploads/2022/10/Bus-Route-2nd-Shift.pdf",
            }
            
          ].map((hostel, idx) => (
            <tr key={idx}>
              <td className="border p-2">{hostel.shift}</td>
              <td className="border p-2 text-blue-500">
                <Link
                    to={hostel.link}
                   className="hover:underline"
                 >
                   Click here to view list
                  </Link>
              </td>
            </tr>)
          )}

        </tbody>
      </table>

      
    </div>
    <LnctFooter/>
    </>
  )
}

export default BusRoute