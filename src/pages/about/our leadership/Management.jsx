import React, { useContext, useEffect, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { mainContext } from '../../../Context/Maincontext';
import Nav from '../../../Components/Nav';
import LnctFooter from '../../../Components/LnctFooter';
import Home1 from '../../../Components/HomeComponets/Home1';
import Loader from '../../../Components/Loader';

const Management = () => {
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
            <Nav />
            <Home1
                image={
                    "https://scontent.fjlr2-1.fna.fbcdn.net/v/t1.6435-9/33540645_1707979459285011_7702319208746450944_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=c9lmBYZDMk0Q7kNvwGYtwrB&_nc_oc=AdkU_RSvcTXJCEQDup8AnepM_0sLQvXL9AQkIT8l29u6S6XRcpmg7JKZAgUT7S47nQHsZHGk-Jr3qzhVOk74vA32&_nc_zt=23&_nc_ht=scontent.fjlr2-1.fna&_nc_gid=eYavdw5AJ7uqtPAzp741UQ&oh=00_AfMHL6H0tb3XuwreRbDdm8E3go_uiArIpj91J9rCEcKtKQ&oe=68747587"
                }
                description={"We inspire innovation and discovery at LNCT Group of Colleges."}
                heading={"Our Leadership | LNCT Group of Colleges"}
            />

            <section className="px-2 sm:px-4 py-10 sm:py-16 flex flex-col justify-center items-center">
                <div className="text-center mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                        Our Leadership | LNCT Group of Colleges
                    </h2>
                </div>

                <div className="w-full">
                    <div
                        className="
                            grid 
                            grid-cols-1 
                            sm:grid-cols-2 
                            md:grid-cols-3 
                            lg:grid-cols-4 
                            gap-6 
                            items-center
                            justify-center
                        "
                    >
                        {leaders.map((leader, index) => (
                            <div
                                key={index}
                                className="rounded-lg shadow-md p-6 w-full max-w-xs text-center border border-gray-200 bg-white flex flex-col items-center"
                            >
                                <div className="mb-4 italic text-gray-700 text-sm">{leader.quote}</div>
                                <div className="flex justify-center mb-4">
                                    <div className="rounded-full overflow-hidden w-28 h-28 sm:w-32 sm:h-32">
                                        <img
                                            src={leader.image}
                                            alt={leader.name}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">{leader.name}</h3>
                                <p className="text-sm text-gray-600">{leader.position1}</p>
                                <p className="text-sm text-gray-600">{leader.position2}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <LnctFooter />
        </>
    );
};

export default Management;