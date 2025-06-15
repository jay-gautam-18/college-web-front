import React, { useContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { mainContext } from '../Context/Maincontext';
import Nav from './Nav';
import { TbRefresh } from 'react-icons/tb';
import SuccessAnimation from './SuccessAnimation';
import { AnimatePresence } from 'framer-motion';

function generateCaptcha(length = 6) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

const RegistrationForm = ({heading}) => {
    const {data, setdata} = useContext(mainContext);
    const [showSuccess, setShowSuccess] = useState(false);
    const [Captcha, setCaptcha] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setCaptcha(generateCaptcha());
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const onSubmit = async (formData) => {
        const fullPhoneNumber = `${formData.countryCode}${formData.phone}`;
        const registration = {
            id: nanoid(),
            ...formData,
            phone: fullPhoneNumber,
            submittedAt: new Date().toISOString()
        };
        setdata([...data, registration]);
        
        try {
            const res = await axios.post('http://localhost:5000/api/submit', registration, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            reset();
            setShowSuccess(true);
            // Store the current path for redirection
            sessionStorage.setItem('returnPath', location.pathname);
        } catch (error) {
            console.error('Submission error:', error);
            if (error.response) {
                alert(error.response.data.error || 'Submission failed');
            } else if (error.request) {
                alert('No response from server. Please check your internet connection.');
            } else {
                alert('An error occurred while submitting the form.');
            }
        }
    };

    const handleSuccessClose = () => {
        setShowSuccess(false);
        // Redirect to the stored path or default to home
        const returnPath = sessionStorage.getItem('returnPath') || '/';
        navigate(returnPath);
    };

    return (
        <>
            <div className="w-full max-w-2xl mx-auto border rounded-xl p-6 mt-10 shadow-xl">
                <h2 className="text-3xl font-bold text-center mb-6 text-black">{heading}</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        type="text"
                        {...register('name', { required: 'Name is required' })}
                        className="w-full p-3 border rounded-md"
                        placeholder="Your Name *"
                    />
                    {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                    <input
                        type="email"
                        {...register('email', { required: 'Email is required' })}
                        className="w-full p-3 border rounded-md"
                        placeholder="Email Address *"
                    />
                    {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    <div className="flex gap-3">
                        <select
                            {...register('countryCode', { required: 'Country code is required' })}
                            className="w-1/4 p-3 border rounded-md"
                        >
                            <option value="+91">🇮🇳 +91</option>
                            <option value="+1">🇺🇸 +1</option>
                            <option value="+44">🇬🇧 +44</option>
                            <option value="+61">🇦🇺 +61</option>
                            <option value="+81">🇯🇵 +81</option>
                            <option value="+49">🇩🇪 +49</option>
                            <option value="+971">🇦🇪 +971</option>
                            <option value="+880">🇧🇩 +880</option>
                            {/* Add more as needed */}
                        </select>

                        <input
                            type="tel"
                            {...register('phone', { required: 'Mobile number is required' })}
                            className="w-3/4 p-3 border rounded-md"
                            placeholder="Mobile Number *"
                        />
                    </div>
                    {(errors.countryCode || errors.phone) && (
                        <p className="text-red-500">
                            {errors.countryCode?.message || errors.phone?.message}
                        </p>
                    )}

                    <div className="flex gap-3">
                        <select {...register('state', { required: 'State is required' })} className="w-1/2 p-3 border rounded-md">
                            <option value="andhra-pradesh">Andhra Pradesh</option>
                            <option value="arunachal-pradesh">Arunachal Pradesh</option>
                            <option value="assam">Assam</option>
                            <option value="bihar">Bihar</option>
                            <option value="chhattisgarh">Chhattisgarh</option>
                            <option value="goa">Goa</option>
                            <option value="gujarat">Gujarat</option>
                            <option value="haryana">Haryana</option>
                            <option value="himachal-pradesh">Himachal Pradesh</option>
                            <option value="jharkhand">Jharkhand</option>
                            <option value="karnataka">Karnataka</option>
                            <option value="kerala">Kerala</option>
                            <option value="madhya-pradesh">Madhya Pradesh</option>
                            <option value="maharashtra">Maharashtra</option>
                            <option value="manipur">Manipur</option>
                            <option value="meghalaya">Meghalaya</option>
                            <option value="mizoram">Mizoram</option>
                            <option value="nagaland">Nagaland</option>
                            <option value="odisha">Odisha</option>
                            <option value="punjab">Punjab</option>
                            <option value="rajasthan">Rajasthan</option>
                            <option value="sikkim">Sikkim</option>
                            <option value="tamil-nadu">Tamil Nadu</option>
                            <option value="telangana">Telangana</option>
                            <option value="tripura">Tripura</option>
                            <option value="uttar-pradesh">Uttar Pradesh</option>
                            <option value="uttarakhand">Uttarakhand</option>
                            <option value="west-bengal">West Bengal</option>
                            <option value="andaman-nicobar">Andaman and Nicobar Islands</option>
                            <option value="chandigarh">Chandigarh</option>
                            <option value="dadra-nagar-haveli">Dadra and Nagar Haveli and Daman and Diu</option>
                            <option value="delhi">Delhi</option>
                            <option value="jammu-kashmir">Jammu and Kashmir</option>
                            <option value="ladakh">Ladakh</option>
                            <option value="lakshadweep">Lakshadweep</option>
                            <option value="puducherry">Puducherry</option>
                        </select>
                        <select {...register('city', { required: 'City is required' })} className="w-1/2 p-3 border rounded-md">
                            <option value="">Select City *</option>
                            <option value="agartala">Agartala</option>
                            <option value="agra">Agra</option>
                            <option value="ahmedabad">Ahmedabad</option>
                            <option value="aizawl">Aizawl</option>
                            <option value="ajmer">Ajmer</option>
                            <option value="aligarh">Aligarh</option>
                            <option value="allahabad">Allahabad</option>
                            <option value="amravati">Amravati</option>
                            <option value="amritsar">Amritsar</option>
                            <option value="asansol">Asansol</option>
                            <option value="aurangabad">Aurangabad</option>
                            <option value="bareilly">Bareilly</option>
                            <option value="belgaum">Belgaum</option>
                            <option value="bhavnagar">Bhavnagar</option>
                            <option value="bhilai">Bhilai</option>
                            <option value="bhiwandi">Bhiwandi</option>
                            <option value="bhopal">Bhopal</option>
                            <option value="bhubaneswar">Bhubaneswar</option>
                            <option value="bikaner">Bikaner</option>
                            <option value="bilaspur">Bilaspur</option>
                            <option value="bokaro">Bokaro</option>
                            <option value="chandigarh">Chandigarh</option>
                            <option value="chennai">Chennai</option>
                            <option value="coimbatore">Coimbatore</option>
                            <option value="cuttack">Cuttack</option>
                            <option value="dehradun">Dehradun</option>
                            <option value="dhanbad">Dhanbad</option>
                            <option value="dibrugarh">Dibrugarh</option>
                            <option value="durgapur">Durgapur</option>
                            <option value="erode">Erode</option>
                            <option value="faridabad">Faridabad</option>
                            <option value="firozabad">Firozabad</option>
                            <option value="ghaziabad">Ghaziabad</option>
                            <option value="gorakhpur">Gorakhpur</option>
                            <option value="gulbarga">Gulbarga</option>
                            <option value="guntur">Guntur</option>
                            <option value="gurgaon">Gurgaon</option>
                            <option value="guwahati">Guwahati</option>
                            <option value="gwalior">Gwalior</option>
                            <option value="hyderabad">Hyderabad</option>
                            <option value="imphal">Imphal</option>
                            <option value="indore">Indore</option>
                            <option value="jabalpur">Jabalpur</option>
                            <option value="jaipur">Jaipur</option>
                            <option value="jalandhar">Jalandhar</option>
                            <option value="jalgaon">Jalgaon</option>
                            <option value="jammu">Jammu</option>
                            <option value="jamnagar">Jamnagar</option>
                            <option value="jamshedpur">Jamshedpur</option>
                            <option value="jhansi">Jhansi</option>
                            <option value="jodhpur">Jodhpur</option>
                            <option value="kakinada">Kakinada</option>
                            <option value="kanpur">Kanpur</option>
                            <option value="kochi">Kochi</option>
                            <option value="kolhapur">Kolhapur</option>
                            <option value="kolkata">Kolkata</option>
                            <option value="kollam">Kollam</option>
                            <option value="kozhikode">Kozhikode</option>
                            <option value="kurnool">Kurnool</option>
                            <option value="latur">Latur</option>
                            <option value="ludhiana">Ludhiana</option>
                            <option value="lucknow">Lucknow</option>
                            <option value="madurai">Madurai</option>
                            <option value="malappuram">Malappuram</option>
                            <option value="mangalore">Mangalore</option>
                            <option value="mathura">Mathura</option>
                            <option value="meerut">Meerut</option>
                            <option value="moradabad">Moradabad</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="muzaffarnagar">Muzaffarnagar</option>
                            <option value="muzaffarpur">Muzaffarpur</option>
                            <option value="mysore">Mysore</option>
                            <option value="nagpur">Nagpur</option>
                            <option value="nanded">Nanded</option>
                            <option value="nashik">Nashik</option>
                            <option value="nellore">Nellore</option>
                            <option value="noida">Noida</option>
                            <option value="patna">Patna</option>
                            <option value="pondicherry">Pondicherry</option>
                            <option value="pune">Pune</option>
                            <option value="purulia">Purulia</option>
                            <option value="raipur">Raipur</option>
                            <option value="rajahmundry">Rajahmundry</option>
                            <option value="rajkot">Rajkot</option>
                            <option value="ranchi">Ranchi</option>
                            <option value="rourkela">Rourkela</option>
                            <option value="salem">Salem</option>
                            <option value="sangli">Sangli</option>
                            <option value="shillong">Shillong</option>
                            <option value="shimla">Shimla</option>
                            <option value="siliguri">Siliguri</option>
                            <option value="solapur">Solapur</option>
                            <option value="srinagar">Srinagar</option>
                            <option value="surat">Surat</option>
                            <option value="thane">Thane</option>
                            <option value="thiruvananthapuram">Thiruvananthapuram</option>
                            <option value="thrissur">Thrissur</option>
                            <option value="tiruchirappalli">Tiruchirappalli</option>
                            <option value="tirunelveli">Tirunelveli</option>
                            <option value="tiruppur">Tiruppur</option>
                            <option value="ujjain">Ujjain</option>
                            <option value="vadodara">Vadodara</option>
                            <option value="varanasi">Varanasi</option>
                            <option value="vasai">Vasai</option>
                            <option value="vijayawada">Vijayawada</option>
                            <option value="visakhapatnam">Visakhapatnam</option>
                            <option value="warangal">Warangal</option>
                        </select>
                    </div>
                    {(errors.state || errors.city) && (
                        <p className="text-red-500">
                            {errors.state?.message || errors.city?.message}
                        </p>
                    )}

                    <input
                        type="text"
                        {...register('course', { required: 'Course is required' })}
                        className="w-full p-3 border rounded-md"
                        placeholder="Course Applying For *"
                    />
                    {errors.course && <p className="text-red-500">{errors.course.message}</p>}

                    <div className="flex gap-3">
                        <input
                            type="text"
                            {...register('department', { required: 'Department is required' })}
                            className="w-1/2 p-3 border rounded-md"
                            placeholder="Department *"
                        />
                        <input
                            type="text"
                            {...register('specialization', { required: 'Specialization is required' })}
                            className="w-1/2 p-3 border rounded-md"
                            placeholder="Specialization *"
                        />
                    </div>
                    {(errors.department || errors.specialization) && (
                        <p className="text-red-500">
                            {errors.department?.message || errors.specialization?.message}
                        </p>
                    )}
                    {/* Captcha Field */}
                    <div className="flex items-center gap-3">
                        <input
                            type="text"
                            value={Captcha}
                            readOnly
                            className="w-1/3 p-3 border rounded-md text-center font-mono font-bold select-none"
                            tabIndex={-1}
                            aria-label="Captcha"
                        />
                        <button
                            type="button"
                            className="px-3 py-2 text-2xl border rounded-md  hover:bg-black hover:text-white"
                            onClick={() => setCaptcha(generateCaptcha())}
                            tabIndex={0}
                        >
                            <TbRefresh />
                        </button>
                        <input
                            type="text"
                            {...register('captchaInput', { 
                                required: 'Enter the captcha',
                                validate: value => value === Captcha || 'Captcha does not match'
                            })}
                            className="w-1/3 p-3 border rounded-md"
                            placeholder="Enter Captcha *"
                            autoComplete="off"
                        />
                    </div>
                    {errors.captchaInput && (
                        <p className="text-red-500">{errors.captchaInput.message}</p>
                    )}
                    <div className="flex items-center gap-2">
                        <input type="checkbox" className="accent-red-600" {...register('agree', { required: true })} />
                        <label>I agree to the terms and conditions.</label>
                    </div>
                    {errors.agree && <p className="text-red-500">You must agree before submitting.</p>}

                    <button type="submit" className="bg-black border text-white w-full py-3 rounded-md hover:bg-transparent hover:text-black font-semibold">
                        Register
                    </button>
                </form>
            </div>
            <AnimatePresence>
                {showSuccess && <SuccessAnimation onClose={handleSuccessClose} />}
            </AnimatePresence>
        </>
    );
};

export default RegistrationForm;