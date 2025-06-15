import  { useEffect, useState } from 'react'
import LnctFooter from '../../../Components/LnctFooter'
import Home1 from '../../../Components/HomeComponets/Home1'
import Nav from '../../../Components/Nav'
import Loader from '../../../Components/Loader'

const LNCTLiteraryClub = () => {
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
        heading={"Life@LNCT | LNCT Literary Club"}
    description={"Dream, explore and discover with LNCT Group of Colleges and step into a world of endless possibilities!"}
    image={"https://lnct.ac.in/wp-content/uploads/2021/05/Cisco-Net-Acc-768x494.jpg"}/>
    <div className="bg-white min-h-screen py-10 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="border-b-4 border-purple-700 pb-4 mb-8">
          <h1 className="text-3xl font-bold text-center tracking-wide mb-2">
            CLUB NAME: <span className="text-purple-700">KHAYAAL</span>
          </h1>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-purple-700 mb-2">Introduction</h2>
          <p className="text-gray-700 leading-relaxed">
            Khayaal is a literary club started in the year 2018 by an organized student of LNCT. Since its inception, Prashil Mishra Mishra, Abhishek Nigam, Isha, Pranjal Singhal, and Prakriti Mishra, etc., have contributed to the club's growth and success. Khayaal is a platform for students to express their thoughts and emotions through words, poetry, and stories. It aims to enhance the confidence and creativity of students by providing a medium of self-expression and learning.
          </p>
        </section>

        {/* Vision */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-purple-700 mb-2">Vision</h2>
          <p className="text-gray-700 leading-relaxed">
            Our vision strives to go beyond literature by building an ethos of promoting literature and providing platforms to students through various events. Khayaal wants to encourage students to express themselves by confidence in public speaking. We also want to provide platforms for all those who want to convey their writings to audiences and help them grow as individuals.
          </p>
        </section>

        {/* Benefits */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-purple-700 mb-2">Benefits</h2>
          <p className="text-gray-700 leading-relaxed">
            Khayaal organizes various programs and activities for students at LNCT. They focus on improving their communication skills, reading, and writing, and enhancing children's imagination and creativity. The club also provides a platform for students to showcase their talents and learn from each other. Many students have found a voice in Khayaal and have built confidence to perform on stage and develop strong personalities. The club encourages students to keep writing and reading and to excel in both.
          </p>
        </section>

        {/* Our Efforts */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold text-purple-700 mb-2">Our Efforts</h2>
          <p className="text-gray-700 leading-relaxed">
            The Khayaal knowledge series brings together extraordinary, determined and creative minds. With this we organize open mics for performing art events and lectures, workshops, and competitions. We also encourage students to participate in national and international events to expose them to new techniques and working methods of the medium.
            <br /><br />
            Khayaal also manages blogs, holds the entire catalogue of club events and activities, and actively works towards the growth of poetry, story, essays, reports, portfolios amongst the students. We create a space for everyone to express themselves.
          </p>
        </section>

        {/* Events Section */}
        <section>
          {/* Event 1 */}
          <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
            <img src="https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Literary-Club-3-300x186.jpg" alt="Event 1" className="rounded-lg shadow-lg w-full md:w-1/3 object-cover" />
            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-1">Orientation</h3>
              <p className="text-gray-700">
                Orientation day is organized every year by the Student Council to let freshers know about the Literary club of the college named as Khayaal.
              </p>
            </div>
          </div>

          {/* Event 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12 gap-8">
            <img src="https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Literary-Club-4-300x223.jpg" alt="Event 2" className="rounded-lg shadow-lg w-full md:w-1/3 object-cover" />
            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-1">Khayaalo se pano tak ka safar</h3>
              <p className="text-gray-700">
                Khayaal organizes poetic talk club with many successful open mic event, workshops, and literary fests. The club has given a platform to many students to express their thoughts and emotions through poetry, stories, and articles. The club has also invited chief guests and guest performers from professional fields to motivate and share their experience of literature and art with members and the professional club.
              </p>
            </div>
          </div>

          {/* Event 3 */}
          <div className="flex flex-col md:flex-row items-center mb-12 gap-8">
            <img src="https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Literary-Club-1-217x300.jpg" alt="Event 3" className="rounded-lg shadow-lg w-full md:w-1/3 object-cover" />
            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-1">ARS Poetica</h3>
              <p className="text-gray-700">
                During the college fest "Srijan", Khayaal organized another greatly successful open mic event, ARS Poetica. The event saw the participation of students from various branches and batches. Some excellent creative works by the participants were also published online.
              </p>
            </div>
          </div>

          {/* Event 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center mb-12 gap-8">
            <img src="https://lnct.ac.in/wp-content/uploads/2021/04/LNCT-Literary-Club-2-201x300.jpg" alt="Event 4" className="rounded-lg shadow-lg w-full md:w-1/3 object-cover" />
            <div>
              <h3 className="text-lg font-bold text-purple-700 mb-1">ARS Poetica</h3>
              <p className="text-gray-700">
                During the college fest "Srijan", Khayaal organized another greatly successful open mic event, ARS Poetica. The event saw the participation of students from various branches and batches. Some excellent creative works by the participants were also published online.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
    <LnctFooter/>
    </>
  )
}


export default LNCTLiteraryClub