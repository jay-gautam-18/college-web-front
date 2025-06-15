import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  // Refs
  const topLineRef = useRef(null)
  const LefttopLineRef = useRef(null)
  const leftTextRef = useRef(null)
  const imageTopLineRef = useRef(null)
  const buttonRef = useRef(null)
  const imageContainerRef = useRef(null)
  
  // State for image transitions
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const imageTransitionInterval = useRef(null)
  
  // Add your image URLs here (replace these with your actual URLs)
  const images = [
    "https://imgs.search.brave.com/meDl4t68tFtX8gfYx4_JM1zU65prATCO_eyUEKJpRD8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sbmN0/LmFjLmluL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzA1L0xO/Q1QtR3JvdXAtb2Yt/Y29sbGVnZXMtMjQt/NzY4eDM4Ny5qcGc",
    "https://imgs.search.brave.com/K6ntGIwBWIsWrIIPQ94Vzrg2yqd_zuZJuRMzw2yze8w/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/Y29sbGVnZWJhdGNo/LmNvbS9zdGF0aWMv/Y2xnLWdhbGxlcnkv/bG5jdC11bml2ZXJz/aXR5LWJob3BhbC0y/MTg1NjguanBn", 
    "https://imgs.search.brave.com/sHWWhX0aTtLbNxQ0_YjcGP6THXBhJERoGr6Gf3zBr-c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sbmN0/LmFjLmluL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzA1L0xO/Q1QtR3JvdXAtb2Yt/Y29sbGVnZXMtMjEt/NzY4eDU3Ni5qcGc"
  ]

  useEffect(() => {
    // Animation setup
    gsap.fromTo(topLineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: topLineRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    )

    gsap.fromTo(LefttopLineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: LefttopLineRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      }
    )

    gsap.fromTo(leftTextRef.current,
      { y: 30, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: leftTextRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )

    gsap.fromTo(imageTopLineRef.current,
      { scaleX: 0, transformOrigin: "left center" },
      {
        scaleX: 1,
        duration: 1,
        delay: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imageTopLineRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(instance => instance.kill())
      clearInterval(imageTransitionInterval.current)
    }
  }, [])

  const startImageTransition = () => {
    // Show button
    gsap.to(buttonRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power1.out"
    })
    
    // Start image cycling
    imageTransitionInterval.current = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % images.length)
    }, 2000) // Change image every 2 seconds
  }

  const stopImageTransition = () => {
    // Hide button
    gsap.to(buttonRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.2
    })
    
    // Stop image cycling
    clearInterval(imageTransitionInterval.current)
    imageTransitionInterval.current = null
  }

  // Touch events for mobile
  const handleTouchStart = () => {
    startImageTransition()
    setTimeout(() => {
      stopImageTransition()
    }, 6000) // Show transitions for 6 seconds on mobile
  }

  return (
    <div className='h-screen w-full bg-[#f8f6ef]  p-4 md:p-[2%]'>
      {/* Top horizontal line */}
      <div 
        ref={topLineRef} 
        className='w-[80%] h-[1px] bg-black mx-auto my-[6%] scale-x-0'
      ></div>

      <div className='h-[75%] w-full gap-2 justify-around items-center space-y-10 flex flex-col md:flex-row'>
        {/* Left section */}
        <div className='h-full p-2 md:p-[1%] w-full md:w-2/5 border-l border-r border-black flex flex-col gap-4 md:gap-10 justify-center'>
          <div 
            ref={leftTextRef}
            className='w-full h-[60%] text-xl sm:text-2xl md:text-4xl lg:text-5xl flex justify-center items-center opacity-0'
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, laudantium.
          </div>

          <div 
            ref={LefttopLineRef} 
            className='w-[80%] h-[1px] bg-black mx-auto my-[6%] scale-x-0'
          ></div>
          
          <div className='w-full h-[30%] flex justify-around p-2 md:p-[2%] items-center'>
            <button className='bg-black text-white px-4 py-2 text-sm md:text-base md:w-[20%] rounded-3xl hover:bg-gray-800 transition-colors duration-300'>
              click 
            </button> 
            <button className='bg-black text-white px-4 py-2 text-sm md:text-base md:w-[20%] rounded-3xl hover:bg-gray-800 transition-colors duration-300'>
              click
            </button>
          </div>
        </div>

        {/* Right section */}
        <div className='h-full w-full md:w-2/5 border border-black rounded-3xl flex justify-center items-center gap-4 flex-col'>
          {/* Top line above image */}
          <div 
            ref={imageTopLineRef}
            className='w-[80%] h-[1px] bg-black scale-x-0'
          ></div>
          
          <div 
            ref={imageContainerRef}
            className='h-[80%] w-[90%] md:w-[80%] rounded-3xl overflow-hidden relative'
            onMouseEnter={startImageTransition}
            onMouseLeave={stopImageTransition}
            onTouchStart={handleTouchStart}
          >
            {/* Image slideshow */}
            {images.map((img, index) => (
              <img 
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
              />
            ))}
            
            <button
              ref={buttonRef}
              className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white text-black px-6 py-2 rounded-full opacity-0 translate-y-[20px] hover:bg-gray-100 transition-colors duration-300 shadow-md md:px-6 md:py-2 sm:px-4 sm:py-1'
            >
              View More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header