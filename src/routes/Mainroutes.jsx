import React, { lazy } from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import CareerDevelopment from '../pages/Placement/CareerDevelopment';
import Clubs from '../pages/Placement/Clubs';
import RegularActivities from '../pages/Placement/RegularActivities';
import PlacementRecords from '../pages/Placement/PlacementRecords';
import IndustryInteraction from '../pages/Placement/IndustryInteraction';
import CiscoAcademy from '../pages/Placement/CiscoAcademy';
import Achievements from '../pages/Placement/Achievements';
import StudentTestimonials from '../pages/Placement/StudentTestimonials';
import KlicSection from '../pages/Placement/KlicSection';
import LnctMun2022 from '../pages/Placement/LnctMun2022';
import TriumphCelebration from '../pages/Placement/TriumphCelebration';
import TopperWall from '../pages/lnct@life/TopperWall';
import EngineersOlympic from '../pages/lnct@life/EngineersOlympic';
import Srishti2k23 from '../pages/lnct@life/Club@lnct/Srishti2k23';
import IEEESection from '../pages/lnct@life/IEEESection';
import LNCTLiteraryClub from '../pages/lnct@life/Club@lnct/LNCT Literary Club';
import QuestNatureClub from '../pages/lnct@life/Club@lnct/QuestNatureClub';
import LNCTPhotographyClub from '../pages/lnct@life/Club@lnct/LNCTPhotographyClub';
import LNCTMusicClub from '../pages/lnct@life/Club@lnct/LNCTMUSICCLUB';
import Testimonial from '../pages/lnct@life/Testimonial';
import ActivityClasses from '../pages/lnct@life/ActivityClasses';
import CurricularAndEvents from '../pages/lnct@life/CurricularAndEvents';
import Sports from '../pages/lnct@life/Sports';
import NSS from '../pages/lnct@life/NSS';
import EminentAlumni from '../pages/Alumni/AlumniAffair.jsx/EminetAlumni';
import AboutAlumni from '../pages/Alumni/AboutAlumni';
import AlumniNews from '../pages/Alumni/AlumniAffair.jsx/AlumniNews';

const Home = lazy(() => import('../pages/Home'));
const RegistrationForm = lazy(() => import('../Components/RegistrationForm'));
const Trust = lazy(() => import('../pages/about/lnct-group/Trust'));
const OurVision = lazy(() => import('../pages/about/lnct-group/OurVision'));
const Credo = lazy(() => import('../pages/about/lnct-group/Credo'));
const Management = lazy(() => import('../pages/about/our leadership/Management'));
const Osd = lazy(() => import('../pages/about/our leadership/Osd'));
const Principal = lazy(() => import('../pages/about/our leadership/Principal'));
const Advisor = lazy(() => import('../pages/about/our leadership/Advisor'));
const Auditorium = lazy(() => import('../pages/about/infrastructure/Auditorium'));
const Seminarhall = lazy(() => import('../pages/about/infrastructure/Seminarhall'));
const PersonVue = lazy(() => import('../pages/about/facility/PersonVue'));
const DigitalLibrary = lazy(() => import('../pages/about/facility/DigitalLibrary'));
const DigitaCLassroom = lazy(() => import('../pages/about/facility/DigitaCLassroom'));
const HealthCare = lazy(() => import('../pages/about/facility/HealthCare'));
const Hostel = lazy(() => import('../pages/about/facility/Hostel'));
const Transportation = lazy(() => import('../pages/about/facility/Transportation'));
const Innovation = lazy(() => import('../pages/about/Innovation'));
const DiciplinaryCommities = lazy(() => import('../pages/about/committies/DiciplinaryCommities'));
const Antiragging = lazy(() => import('../pages/about/committies/Antiragging'));
const Eoa = lazy(() => import('../pages/about/AICTE/Eoa'));
const Approval = lazy(() => import('../pages/about/AICTE/Approval'));
const Mous = lazy(() => import('../pages/about/AICTE/Mous'));
const AictePragati = lazy(() => import('../pages/about/AICTE/AictePragati'));
const Acreditation = lazy(() => import('../pages/about/Acreditation'));
const AcademicCalendar = lazy(() => import('../pages/about/AcademicCalendar'));
const HostelAllot = lazy(() => import('../pages/about/HostelAllot'));
const BusRoute = lazy(() => import('../pages/about/BusRoute'));
const Civil = lazy(() => import('../pages/departments/Civil'));
const EEEPage = lazy(() => import('../pages/departments/EEEPage'));
const MEPage = lazy(() => import('../pages/departments/MEPage'));
const ElectricalEngineering = lazy(() => import('../pages/departments/ElectricalEngineering'));
const ElectronicsAndCommunicationPage = lazy(() => import('../pages/departments/ElectronicsAndCommunicationPage'));
const ComputerScienceEngineering = lazy(() => import('../pages/departments/ComputerScienceEngineering'));
const IT = lazy(() => import('../pages/departments/IT'));
const CollegeLnct = lazy(() => import('../pages/college/CollegeLnct'));
const CollegeLnctScience = lazy(() => import('../pages/college/CollegeLnctScience'));
const CollegeLNCTEecellence = lazy(() => import('../pages/college/CollegeLNCTEecellence'));
const CollegeLNCTMBA = lazy(() => import('../pages/college/CollegeLNCTMBA'));
const CollegeLNCTMCA = lazy(() => import('../pages/college/CollegeLNCTMCA'));
const CollegeIndoreCmpus = lazy(() => import('../pages/college/CollegeIndoreCmpus'));
const CollegeLnctPharmacy = lazy(() => import('../pages/college/CollegeLnctPharmacy'));
const Humanities = lazy(() => import('../pages/departments/Humanities'));
const Physics = lazy(() => import('../pages/departments/Physics'));
const Chemistry = lazy(() => import('../pages/departments/Chemistry'));
const Mathematics = lazy(() => import('../pages/departments/Mathematics'));
const AdmissionEnquiry = lazy(() => import('../pages/Admission/AdmissionEnquiry'));
const FeeRefundPolicy = lazy(() => import('../pages/Admission/FeeRefundPolicy'));
const TConlinePayment = lazy(() => import('../pages/Admission/TConlinePayment'));
const Admission = lazy(() => import('../pages/Admission/Admission'));
const AdmissionProcess = lazy(() => import('../pages/Admission/AdmissionProcess'));
const Contact = lazy(() => import('../pages/contact/Contact'));
const Blogs = lazy(() => import('../pages/Blogs'));
const Mainroutes = () => {
  return (
    <div className="p-5">
      <div className='w-full h-full border-1 rounded-xl'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/blogs/:id' element={<Blogs/>}/>
        {/* About section links */}
        <Route path="/about" element={<Outlet />}>
          <Route index element={<Home />} /> {/* Render Home for /about */}
          <Route path="lnct-group" element={<Home />} />
          <Route path="lnct-group/vision-mission" element={<OurVision/>} />
          <Route path="lnct-group/trust" element={<Trust/>} />
          <Route path="lnct-group/creedo" element={<Credo/>} />
          <Route path="our-leadership" element={<Home />} />
          <Route path="our-leadership/management" element={<Management/>} />
          <Route path="our-leadership/osd" element={<Osd/>} />
          <Route path="our-leadership/principal" element={<Principal/>} />
          <Route path="our-leadership/advisor" element={<Advisor/>} />
          <Route path="infrastructure" element={<Home />} />
          <Route path="infrastructure/auditorium" element={<Auditorium />} />
          <Route path="infrastructure/seminar-hall" element={<Seminarhall />} />
          <Route path="facility" element={<Home />} />
          <Route path="facility/person-jiv" element={<PersonVue/>} />
          <Route path="facility/digital-library" element={<DigitalLibrary/>} />
          <Route path="facility/digital-classroom" element={<DigitaCLassroom/>} />
          <Route path="facility/health-care" element={<HealthCare/>} />
          <Route path="facility/hostel" element={<Hostel />} />
          <Route path="facility/transportation" element={<Transportation />} />
          <Route path="innovation" element={<Innovation/>} />
          <Route path="innovation/lnct-nisp" element={<Innovation/>} />
          <Route path="innovation/lnct-csr-nisp" element={<Innovation/>} />
          <Route path="innovation/lnct-mba-nisp" element={<Innovation/>} />
          <Route path="committee" element={<Home />} />
          <Route path="committee/disciplinary" element={<DiciplinaryCommities />} />
          <Route path="committee/other" element={<DiciplinaryCommities />} />
          <Route path="committee/anti-ragging" element={<Antiragging/>} />
          <Route path="aicte" element={<Home />} />
          <Route path="aicte/eoa-2024-28" element={<Eoa/>} />
          <Route path="aicte/pmkvygudlines" element={<Home />} />
          <Route path="aicte/aictemous" element={<Mous />} />
          <Route path="aicte/aictepragati" element={<AictePragati />} />
          <Route path="aicte/pmkvycoursedetails" element={<Home />} />
          <Route path="aicte/approval" element={<Approval />} />
          <Route path="accredited-by-nba" element={<Acreditation />} />
          <Route path="rgpv" element={<Home />} />
          <Route path="rgpv/mou-courses" element={<Home />} />
          <Route path="academic-calendar" element={<AcademicCalendar/>} />
          <Route path="hostel-allotment" element={<HostelAllot />} />
          <Route path="bus-routes" element={<Home />} />
          <Route path="bus-routes/shift-1" element={<BusRoute/>} />
          <Route path="bus-routes/shift-2" element={<BusRoute/>} />
          <Route path="international-journal-of-lnct" element={<Home />} />
        </Route>

        {/* Colleges section links */}
        <Route path="/colleges" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="lnct" element={<CollegeLnct/>} />
          <Route path="lnct-and-s" element={<CollegeLnctScience />} />
          <Route path="lncte" element={<CollegeLNCTEecellence />} />
          <Route path="mba" element={<CollegeLNCTMBA />} />
          <Route path="mca" element={<CollegeLNCTMCA />} />
          <Route path="lnct-indore" element={<CollegeIndoreCmpus />} />
          <Route path="lnct-vidhyapeeth-university" element={<Home />} />
          <Route path="lnct-jabalpur" element={<Home />} />
          <Route path="lnct-bhopal" element={<Home />} />
          <Route path="lnctu" element={<Home />} />
          <Route path="lnct-shrihansh" element={<Home />} />
          <Route path="cec-bilaspur" element={<Home />} />
          <Route path="lnct-pharmacy" element={<CollegeLnctPharmacy/>} />
        </Route>

        {/* Departments section links */}
        <Route path="/departments" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="civil-engineering" element={<Civil />} />
          <Route path="electrical-and-electronic" element={<EEEPage />} />
          <Route path="mechanical" element={<MEPage />} />
          <Route path="electrical" element={<ElectricalEngineering />} />
          <Route path="department-of-electronic-and-communication" element={<ElectronicsAndCommunicationPage />} />
          <Route path="computer-science-engineering" element={<ComputerScienceEngineering />} />
          <Route path="department-of-information-technology" element={<IT />} />
          <Route path="department-of-basic-science" element={<Home />} />
          <Route path="department-of-basic-science/humanity" element={<Humanities />} />
          <Route path="department-of-basic-science/physics" element={<Physics />} />
          <Route path="department-of-basic-science/chemistry" element={<Chemistry />} />
          <Route path="department-of-basic-science/mathematics" element={<Mathematics />} />
        </Route>

        {/* Admission section links */}
        <Route path="/admission" element={<Outlet />}>
          <Route index element={<Admission />} />
          <Route path="admission-process" element={<AdmissionProcess />} />
          <Route path="admission-enquiry" element={<AdmissionEnquiry />} />
          <Route path="t-and-c-online-payment" element={< TConlinePayment/>} />
          <Route path="fee-refund-policy" element={<FeeRefundPolicy />} />
          <Route path="download-prospectus" element={<Home />} />
          <Route path="fee-structure" element={<Home />} />
        </Route>

        {/* Placement section links */}
        <Route path="/placement" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="career-development-cell" element={< CareerDevelopment />} />
          <Route path="clubs" element={<Clubs />} />
          <Route path="regular-activities" element={<RegularActivities />} />
          <Route path="placement-records" element={<PlacementRecords />} />
          <Route path="industry-interaction" element={<IndustryInteraction />} />
          <Route path="cisco-academy" element={<CiscoAcademy />} />
          <Route path="achievements" element={<Achievements />} />
          <Route path="coursera-for-lnct" element={<Home />} />
          <Route path="student-testimonial" element={<StudentTestimonials />} />
          <Route path="placement-brochure" element={<Home />} />
          <Route path="kalchuri-lnct-group-incubation" element={<KlicSection />} />
          <Route path="lnct-model-united-nation" element={<LnctMun2022 />} />
          <Route path="triumph" element={<TriumphCelebration />} />
        </Route>

        {/* Life @ LNCT section links */}
        <Route path="/life-at-lnct" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="garba-night" element={<Home />} />
          <Route path="ln-gyanarambh" element={<Home />} />
          <Route path="toppers-wall" element={<TopperWall />} />
          <Route path="engineering-olympic" element={<EngineersOlympic />} />
          <Route path="ln-universe" element={<Home />} />
          <Route path="shristi-2k23" element={<Srishti2k23 />} />
          <Route path="ieee-explore" element={<IEEESection />} />
          <Route path="research-and-development" element={<Home />} />
          <Route path='club-at-lnct' element={<Home />} />
          <Route path='club-at-lnct/techvilla-club' element={<Home />} />
          <Route path='club-at-lnct/iic-club' element={<Home />} />
          <Route path='club-at-lnct/hackathon-club' element={<Home />} />
          <Route path='club-at-lnct/ai-group' element={<Home />} />
          <Route path='club-at-lnct/literary-club' element={<LNCTLiteraryClub />} />
          <Route path='club-at-lnct/nature-club' element={<QuestNatureClub />} />
          <Route path='club-at-lnct/photo-club' element={<LNCTPhotographyClub />} />
          <Route path='club-at-lnct/music-club' element={<LNCTMusicClub />} />
          <Route path='club-at-lnct/gender-club' element={<Home />} />
          <Route path='testimonial' element={<Testimonial />} />
          <Route path='idea-lab' element={<Home />} />
          <Route path='klic' element={<KlicSection />} />
          <Route path='activity-classes' element={<ActivityClasses />} />
          <Route path='curricular-and-technical-events' element={<CurricularAndEvents />} />
          <Route path='lnct-group-all-clubs' element={<Home />} />
          <Route path='sports' element={<Sports />} />
          <Route path='nss' element={<NSS />} />
          <Route path='ncc' element={<Home />} />
          <Route path='lnct-radio' element={<Home />} />
          <Route path='alumni-cell' element={<Home />} />
          <Route path='alumni-affairs' element={<Home />} />
          <Route path='alma-connect' element={<Home />} />
          <Route path='alumni-letter' element={<Home />} />
          <Route path='eminent-alumni' element={<EminentAlumni />} />
        </Route>

        {/* Alumni section links */}
        <Route path="/alumni" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="alumni-cell" element={<AboutAlumni />} />
          <Route path="alumni-affairs" element={<Home />} />
          <Route path="alumni-affairs/news" element={<AlumniNews />} />
          <Route path="alumni-affairs" element={<Home />} />
          <Route path="alma-connect" element={<Home />} />
          <Route path="alumni-letter" element={<Home />} />
          <Route path="eminent-alumni" element={<EminentAlumni />} />
        </Route>

        <Route path='/login' element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="online-payment" element={<TConlinePayment />} />
          <Route path="registration" element={<Admission/>} />
        </Route>
        <Route path='/contact-us' element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        {/* Add a 404 route */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
      </div>
    </div>
  );
};

export default Mainroutes;