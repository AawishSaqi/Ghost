'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import './globals.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark } from '@fortawesome/free-solid-svg-icons';



export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [monthly, setMonthly] = useState(null)
  const [menu , setMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {   // adjust scroll distance
        setScrolled(true);
        console.log('itelsdjfal')
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function togglemenu(){
    setMenu(!menu)
    console.log(menu)
  }



  return (
    <div className="w-full relative bg-[#201D20]">
      {/* /////////////////////////////Navbar////////////////////////////////////// */}
      <div className={`nav z-[100] w-[100%] px-[10%] lg:py-1 xl:py-2 md:py-2 py-1 flex  items-center 
          justify-between fixed top-0 ${menu ? 'bg-red-900':'bg-transparent'} 
            ${scrolled? '!bg-red-900':'bg-transparent'}`}>
        <div className="xl:w-37 lg:w-29 md:w-32  w-27 items-center">
          <img alt="img" src="/images/ghost.png"/>
        </div>

        <div className={`nav flex lg:flex-row items-center xl:gap-3 lg:gap-0 lg:text-[.95vw] ${menu ? 'flex-col justify-between w-full text-black absolute md:top-20 top-17 left-0 h-95 bg-red-900  font-semibold text-2xl md:py-4 py-7':'hidden lg:flex'}`}>
          <a href='#aboutus'       className="li px-5 py-[.8vw] rounded-xl cursor-pointer  hover:-translate-y-1  transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(0,0,0,0.6)] xl:hover:bg-red-900  md:hover:text-white md:hover:bg-black xl:hover:text-black ">About Us</a>
          <a href='#ourtechnology' className="li px-5 py-[.8vw] rounded-xl cursor-pointer  hover:-translate-y-1  transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(0,0,0,0.6)] xl:hover:bg-red-900  md:hover:text-white md:hover:bg-black xl:hover:text-black ">Our Technology</a>
          <a href='#pricing' className="li px-5   py-[.8vw] rounded-xl cursor-pointer  hover:-translate-y-1  transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(0,0,0,0.6)] xl:hover:bg-red-900 md:hover:text-white md:hover:bg-black xl: hover:text-black ">Pricing</a>
          <a href='#buyback' className="li px-5   py-[.8vw] rounded-xl cursor-pointer  hover:-translate-y-1  transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(0,0,0,0.6)] xl:hover:bg-red-900 md:hover:text-white md:hover:bg-black xl: hover:text-black ">Buy Back</a>
          <a href='#roadmap' className="li px-5   py-[.8vw] rounded-xl cursor-pointer  hover:-translate-y-1  transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(0,0,0,0.6)] xl:hover:bg-red-900 md:hover:text-white md:hover:bg-black xl: hover:text-black ">Roadmap</a>

          <div className="hidden lg:flex xl:py-[.75vw] lg:py-[.8vw] xl:px-8 lg:px-4 border-1 hover:border-black border-white xl:rounded-2xl  lg:rounded-xl rounded-xl
              transition-all duration-300  hover:-translate-y-1 hover:shadow-[0_0_30px_10px_rgba(250,204,21,0.6)] hover:bg-black">
            <h1 className="font-semibold xl:text-sm lg:text-xs">Chart</h1>
          </div>
        </div>
        <div className='md:flex lg:hidden justify-center items-center'>
          <FontAwesomeIcon onClick={togglemenu} className={`text-white text-2xl md:text-4xl ${menu ? '!hidden' : '!visible'} `} icon={faBars}/>
          <FontAwesomeIcon onClick={togglemenu} className={`text-white text-2xl md:text-4xl ${menu ? '!visible' : '!hidden'}`} icon={faXmark}/>
        </div>
      </div>
      {/* ///////////////////main/////////////////////////////// */}
      <div id='menu' className="flex max-[600px]:flex-col max-[600px]:h-full flex-row w-[100%] max-[600px]:justify-center max-[600px]:items-center justify-end max-[600px]:px-0 xl:px-[10%] md:px-[8%] px-[10%] h-100 md:h-auto">
        <div className="fading xl:w-210 lg:w-160  md:w-130  w-100  max-[600px]:w-[100%] max-[600px]:h-max   h-screen absolute max-[600px]:static left-1 xl:left-0 " >
          <img alt="img" className="xl:w-[100%]" src="/images/ghostt.png"/>
        </div>
        <div className=" max-[600px]:h-max max-[600px]:pt-0 max-[600px]:pt-0 max-[600px]:px-18 max-[600px]:w-full max-[600px]:h-full
            xl:h-200 md:h-125 lg:w-80  md:w-71 w-54   xl:w-110 flex flex-col  xl:pt-50 lg:pt-38 md:pt-20 pt-17">
          <div className="flex flex-col xl:gap-4 md:gap-2 sm:gap-1 gap-0 max-[600px]:gap-2 max-[600px]:text-center max-[600px]:items-center  text-start">
            <h1 className="xl:text-lg lg:text-xs lg:leading-5 xl:leading-6 md:text-sm max-[600px]:text-lg text-xs xl:font-semibold md:font-extrabold font-semibold">THE FUTURE OF CRYPTPCURRENCY ENGAGEMENT</h1>
            <h1 className="xl:text-6xl lg:text-[4.2vw] md:text-4xl text-[4vw] max-[600px]:text-5xl  px-0 font-extrabold font-blood  pb-3">WELCOME TO GHOST!!</h1>
            <p className="xl:text-sm lg:text-xs md:text-xs text-[1.6vw] max-[600px]:text-[2.6vw] max-[600px]:leading-5 max-[600px]:opacity-70 opacity-100 xl:leading-7 lg:leading-5 md:leading-4 leading-3 ">Unleash the power of the Ghost Sniper Bot, an innovative tool that uses High-Frequency 
                Trading principles to capitalize on new crypto projects. As holders of the Ghost 
                token (BOO), you are not just investing in an asset - you&apos;re unlocking access to a 
                groundbreaking, dynamic world of crypto opportunities.</p>
            <div className="relative pt-3">
              <img alt="img" src="/images/buyback.png" className="xl:w-35 md:w-22 w-17 max-[600px]:w-30"/>
              <h1 className=" xl:text-sm md:text-xs text-[1.3vw] max-[600px]:text-lg max-[600px]:top-7 max-[600px]:left-5 font-semibold text-black absolute xl:top-8 md:top-6 top-5 xl:left-9 left-4 ">Buy Now</h1>
            </div>
          </div>
        </div>
      </div>
      {/* ///////////////ABOUT US/////////////////////////// */}
      <div id='aboutus' className='sm:h-120 h-90 lg:h-140 max-[600px]:h-115 flex items-center justify-center'> 
        <div className="xl:w-[55%] w-[58%] max-[600px]:w-[80%]  flex flex-col justify-self-center border-2 border-red-900 rounded-xl ">
          <div className="flex md:gap-2 gap-1 xl:py-4 py-2 max-[600px]:py-3  md:pl-5 pl-3 border-b border-red-900 w-full ">
            <div className="lg:w-[.9vw] lg:h-[.9vw] md:w-[1.2vw] md:h-[1.2vw] w-[1vw] h-[1vw] max-[600px]:w-3 max-[600px]:h-3 bg-red-900 rounded-full"></div>
            <div className="lg:w-[.9vw] lg:h-[.9vw] md:w-[1.2vw] md:h-[1.2vw] w-[1vw] h-[1vw] max-[600px]:w-3 max-[600px]:h-3 bg-red-900 rounded-full"></div>
            <div className="lg:w-[.9vw] lg:h-[.9vw] md:w-[1.2vw] md:h-[1.2vw] w-[1vw] h-[1vw] max-[600px]:w-3 max-[600px]:h-3 bg-red-900 rounded-full"></div>
          </div>
          <div className="flex flex-col xl:gap-8 lg:gap-6 gap-3 max-[600px]:gap-7 justify-center items-center xl:px-20 lg:px-19 md:px-12 px-11 xl:py-17 md:py-10 py-8">
            <div className="">
              <h1 className="lg:text-[2.9vw] md:text-[3.1vw] text-2xl max-[600px]:text-5xl font-extrabold">About Us</h1>
            </div>
            <p className="justify-center lg:leading-5  md:leading-4 leading-3  sm:text-[1.5vw] text-[1.6vw] max-[600px]:text-[2.7vw] max-[600px]:leading-5 lg:text-[1.14vw] text-center">Stepping into the digital landscape, Ghost (BOO) stands as a unique proposition. 
                We&apos;re not merely a crypto token; we are a key to pioneering technology. Ghost Sniper
                Bot, exclusively accessible to Ghost (BOO) holders, enables you to be at the forefront
                  of newly deployed projects.</p>
          </div>
        </div>
      </div>
      {/* //////////////////////OUR Technology/////////////////// */}
      <div id='ourtechnology' className="w-[100%] flex max-[600px]:flex-col flex-row gap-1 px-[10%] xl:h-200 lg:h-160 md:h-130 h-110  max-[600px]:h-full items-center relative max-[600px]:pb-20 pb-0">
        <div className="order-1 xl:w-[40%] md:w-[42%] w-[41%] max-[600px]:w-full max-[600px]:px-1 flex flex-col gap-5">
          <h1 className="xl:text-[3vw] md:text-[3.7vw] text-2xl max-[600px]:text-[7vw] max-[600px]:text-center text-start font-extrabold">Our Technology</h1>
          <div className="flex flex-col gap-7 lg:text-[.99vw] md:text-xs text-[1.5vw] max-[600px]:text-lg max-[600px]:leading-5 xl:leading-7 lg:leading-5  leading-4 max-[600px]:text-center text-start">
            <p>At the core of Ghost (BOO) lies our secret weapon  the Ghost Sniper Bot. 
              This advanced software employs High-Frequency Trading (HFT) principles, 
              allowing for ultra-fast, automated transactions.</p>
            <p>With the Ghost Sniper Bot, our holders can engage with new projects at 
              unrivaled speeds, and maximize potential gains from these early-stage 
              ventures. Available exclusively to Ghost (BOO) holders, the Sniper Bot 
              outpaces the market and defines its own league of efficiency</p>
          </div>
        </div>
        <div className="fading order-0 xl:w-[48%] md:w-[50%] w-[55%] max-[600px]:w-full max-[600px]:static  absolute xl:left-[42%] md:left-[44%] right-1 top-0  ">
          <img alt="img" src="/images/ghost2.png" className="w-[100%]"/>
        </div>
      </div>
      {/* ///////////////////////////PRICING AND PACKAGES///////////////////// */}
      <div id='pricing' >
        <div  className="xl:w-[60%] lg:w-[60.8%] md:w-[61.5%] w-[60%] max-[600px]:w-full  justify-self-center flex flex-col gap-8   ">
          <div className="px-5 flex flex-col xl:gap-6  gap-4">
            <h1 className="text-center lg:text-[2.8vw] md:text-[4vw] text-2xl max-[600px]:text-4xl font-extrabold">Pricing and Packages</h1>
            <p className="text-center lg:text-md lg:leading-5 md:text-xs text-[1.43vw] max-[600px]:text-lg max-[600px]:px-10">Each package offers exclusive access to our Ghost Sniper Bot. Feel the pulse of the
              dynamic crypto world and never miss a beat with our premium subscriptions. Experience 
              the power of the Ghost Sniper Bot with our flexible and competitively priced subscription plans.</p>
          </div>
        </div>
        <div className='pb-13  md:pt-10 pt-4 max-[600px]:pt-20'>
          <div className=" justify-self-center">
            <div className="flex border border-white/50   xl:px-2 md:px-1 xl:py-[.4vw] md:py-[.5vw] p-[.6vw] max-[600px]:p-1   md:rounded-xl rounded-lg w-max cursor-pointer gap-1 ">
              <h1 onClick={()=>setMonthly(true)} className={`xl:px-8 lg:px-6 xl:text-md md:text-sm text-[1.4vw] max-[600px]:text-sm max-[600px]:px-7 max-[600px]:py-2 md:px-3 md:py-[.5vw] px-4 py-[.4vw] xl:py-[.8vw] rounded-lg ${monthly? 'bg-[#282828] lg:bg-red-900 text-black':'bg-none'}`}>Monthly</h1>
              <h1 onClick={()=> setMonthly(false)} className={`xl:px-8 lg:px-6 xl:text-md md:text-sm  text-[1.4vw] max-[600px]:text-sm max-[600px]:px-7 max-[600px]:py-2 md:px-3 md:py-[.5vw] px-4 py-[.4vw] xl:py-[.8vw] rounded-lg ${monthly?'bg-none':'bg-[#282828] lg:bg-red-900 text-black'}`}>Weekly</h1>
            </div>
          </div>
          <div className='pricing px-[20%] max-[600px]:px-[10%] max-[600px]:pt-15 pt-0'>
            <div className="container weekly">
                <div className="box box1">
                    <div className="bg">
                        <div className="price-box">
                            <h3 className='xl:text-xl md:text-md font-bold opacity-80'>Standard</h3>
                            <h2 className='xl:text-5xl md:text-4xl text-3xl font-extrabold opacity-80'>{monthly? '@175':'$50'}</h2>
                        </div>
                    </div>
                </div>
                <div className="box box2">
                    <div className="bg">
                        <div className="price-box">
                            <h3 className='xl:text-xl  md:text-md font-bold opacity-80'>Platinum</h3>
                            <h2 className='xl:text-5xl md:text-4xl text-3xl font-extrabold opacity-80'>{monthly? '$310':'$90'}</h2>
                        </div>
                    </div>
                </div>
                <div className="box box3">
                    <div className="bg">
                        <div className="price-box">
                            <h3 className='xl:text-xl md:text-[md] font-bold opacity-80'>Gold</h3>
                            <h2 className='xl:text-5xl md:text-4xl text-3xl font-extrabold opacity-80'>{monthly?'$525':'$150'}</h2>
                        </div>
                    </div>
                </div>
            </div>

          </div>
        </div>
      </div>
      {/* ////////////////////////////////Buyback & Sustainablity////////////////////////////// */}
      <div id='buyback' className='md:pr-[10%] pr-[8%] max-[600px]:pr-0 flex max-[600px]:flex-col flex-row  xl:pt-60 lg:pt-40 lg:pb-10 md:pt-30 pt-20 max-[600px]:pt-0  md:pb-70 pb-40  justify-end relative'>
        <div className=' plane w-[60%] max-[600px]:w-[80%] flex max-[600px]:items-center max-[600px]:justify-center max-[600px]:ml-[10%] ml-0 absolute left-1 max-[600px]:static  '>
          <img src='/images/ghostplane.png' alt='ghost'/>
        </div>
        <div className="flex flex-col pr-6 md:pr-0 gap-4 lg:w-[38%] xl:w-[40%] w-[42%] max-[600px]:w-[100%] max-[600px]:px-20   max-[600px]:items-center items-start justify-end">
          <h1 className="md:text-[2.9vw] text-2xl max-[600px]:text-[6vw]  leading-none max-[600px]:text-center font-extrabold">Buyback & Sustainability</h1>
          <div className='lg:text-[.95vw] md:text-[1.6vw] text-[1.45vw] max-[600px]:text-[2.6vw] max-[600px]:text-center text-start md:leading-4 xl:leading-7 lg:leading-5 flex flex-col gap-3 '>
            <p className="">At Ghost, we&apos;re committed to enhancing value for our 
              token holders. We channel 50% of the revenues generated by our Ghost Sniper Bot towards 
              buyback every two weeks, amplifying liquidity and the value of our tokens. The remaining 50% 
              is reinvested into marketing initiatives that enhance project visibility and foster growth.</p>
            <p className=''>Furthermore, we uphold a 0% tax policy to safeguard our investor&apos;s interest. Our revenue 
              streams, generated by the bot, ensure that we maintain a thriving community while promoting 
              project growth and sustainability.</p>
          </div>
          <div className="relative pt-3 ">
            <img src="/images/buyback.png" className="xl:w-38 md:w-25 w-20 max-[600px]:w-30"/>
            <h1 className="absolute xl:text-sm  md:text-xs text-[1.5vw] lg:font-semibold md:font-extrabold max-[600px]:text-[2.8vw] 
              font-semibold text-black absolute xl:top-9 xl:left-10 md:left-6 left-5 top-6 md:top-7 max-[600px]:top-7 max-[600px]:left-6 ">Buy Now</h1>
          </div>
        </div>
      </div>
      {/* ///////////////////////////Roadmap////////////////////////// */}
      <div id='roadmap' className='xl:h-400 md:h-330 max-[600px]:h-360 sm:h-260 h-280  lg:pt-35  md:pt-0 sm:pt-30'>
        <div className='flex flex-col xl:px-[27%] lg:px-[27.2%] md:px-[24%] px-[23.5%] max-[600px]:px-18 max-[600px]:w-[100%] justify-center items-center gap-7 pb-30'>
          <h1 className='xl:text-4xl md:text-3xl text-2xl max-[600px]:text-5xl font-extrabold '>ROADMAP</h1>
          <p className='text-center xl:text-md lg:text-[1.12vw] md:text-xs text-[1.6vw] max-[600px]:text-[1.8vw] '>This roadmap assumes a target delivery in 8 weeks, with a demo launchpad ready in 2 weeks. 
            It is important to note that the actual timeline may vary depending on the complexity of the 
            launchpad and the resources available.</p>
        </div>
        <div className='relative'>
          <div className='lg:w-[.5vw] w-[.8vw] bg-[#282828] xl:h-290 md:h-210 h-170 max-[600px]:h-265 absolute left-[50%] max-[600px]:left-[98%] rounded-full xl:top-30 md:top-20 top-16 max-[600px]:top-0 '></div>
          <div className='relative'>
            <div className='flex justify-center items-center absolute right-[50%] max-[600px]:right-2'>
              <div className=' xl:w-40 xl:h-78 lg:w-30 md:w-25 md:h-60 w-24 h-50 max-[600px]:w-50 max-[600px]:h-60  rounded-xl xl:border-4 lg:border-3 border-2 max-[600px]:border-3 border-red-900  relative'>
                <div className='weekbg xl:w-90 lg:w-72 xl:h-74 md:w-60 md:h-57 w-52 h-47 max-[600px]:w-100 max-[600px]:h-56 max-[600px]:pl-5 pl-0 absolute xl:right-2 top-1 right-1  
                  xl:rounded-3xl rounded-xl flex flex-col justify-center  xl:gap-3 gap-2'>
                  <h1 className='lg:pl-11 pl-7 xl:text-3xl lg:text-xl md:text-2xl text-xl max-[600px]:text-3xl font-extrabold'>Week 1-2 :</h1>
                  <ul className='xl:px-12 lg:px-10 pl-7 pr-6 xl:text-sm lg:text-[1.1vw] max-[600px]:text-[2.3vw] text-[1.4vw] list-disc opacity-90'>
                    <li>Define the technical architecture and infrastructure required to support the launchpad</li>
                    <li>Set up the necessary hardware and software systems</li>
                    <li>Establish the development environment</li>
                  </ul>
                </div>
              </div>
              <div className='xl:w-9 lg:w-5 md:w-7 w-5 h-[.5vw] bg-[#282828]'></div>
            </div>
            <div className='flex justify-center items-center absolute left-[50%] max-[600px]:right-2 xl:top-90 md:top-60 top-50 max-[600px]:top-70 '>
              <div className='max-[600px]:order-0 order-1 xl:w-40 xl:h-78 lg:w-30 md:w-25 md:h-60 w-24 h-50 max-[600px]:w-50 max-[600px]:h-60  rounded-xl xl:border-4 lg:border-3 border-2 max-[600px]:border-3 border-red-900  relative'>
                <div className='weekbg xl:w-90 lg:w-72 xl:h-74 md:w-60 md:h-57 w-52 h-47 max-[600px]:w-100 max-[600px]:h-56 max-[600px]:pl-5 pl-0 absolute xl:left-2 left-1 max-[600px]:left-auto max-[600px]:right-1   top-1 
                  xl:rounded-3xl rounded-xl flex flex-col justify-center xl:gap-3 gap-2'>
                  <h1 className='lg:pl-11 xl:text-3xl pl-7 md:text-2xl text-xl max-[600px]:text-3xl font-extrabold'>Week 3-4 :</h1>
                  <ul  className='xl:px-12 lg:px-10 pl-7 pr-6 lg:text-[1.1vw] text-[1.4vw] max-[600px]:text-[2.3vw] xl:text-sm list-disc opacity-90'>
                    <li>Define the technical architecture and infrastructure required to support the launchpad</li>
                    <li>Set up the necessary hardware and software systems</li>
                    <li>Establish the development environment</li>
                  </ul>
                </div>
              </div>
              <div className='max-[600px]:order-1 order-0 xl:w-9 lg:w-5 md:w-7 w-5 h-[.5vw] bg-[#282828]'></div>

            </div>
            <div className='flex justify-center items-center absolute right-[50%] max-[600px]:right-2 xl:top-180 md:top-120 top-98 max-[600px]:top-140'>
              <div className=' xl:w-40 xl:h-85 lg:w-30 md:w-25 md:h-70 w-24 h-60 max-[600px]:w-50 max-[600px]:h-73  rounded-xl xl:border-4 lg:border-3 max-[600px]:border-3 border-2 border-red-900  relative'>
                <div className='weekbg xl:w-90 lg:w-72 xl:h-81 md:w-60 md:h-67 w-52 h-57 max-[600px]:w-100 max-[600px]:h-70 max-[600px]:pl-5 pl-0 absolute xl:right-2 
                  right-1 top-1 xl:rounded-3xl rounded-xl flex flex-col justify-center  xl:gap-3 gap-2'>
                  <h1 className='lg:pl-11 xl:text-3xl pl-7 md:text-2xl text-xl max-[600px]:text-3xl font-extrabold'>Week 4-5 :</h1>
                  <ul  className='xl:px-12 lg:px-10 xl:text-sm  pl-7 pr-7 lg:text-[1.1vw] text-[1.4vw] max-[600px]:text-[2.3vw] list-disc opacity-90'>
                    <li>Develop the AI algorithms and technologies required for the launchpad, such as NLP, ML, DL, RPA, and blockchain</li>
                    <li>Integrate the AI algorithms and technologies into the launchpad</li>
                    <li>Test and validate the AI algorithms and technologies to ensure they are working as expected</li>
                  </ul>
                </div>
              </div>
              <div className=' xl:w-9 lg:w-6 md:w-7 w-5 h-[.5vw] bg-[#282828]'></div>
            </div>
            <div className='flex justify-center items-center absolute left-[50%] max-[600px]:right-2 xl:top-270 md:top-190 top-152 max-[600px]:top-225'>
              <div className='max-[600px]:order-0 order-1  xl:w-40 xl:h-78 lg:w-30 md:w-25 md:h-60 w-24 h-50 max-[600px]:w-50 max-[600px]:h-60  rounded-xl max-[600px]:border-3 xl:border-4 lg:border-3 border-2 border-red-900  relative'>
                <div className='weekbg xl:w-90 lg:w-72 xl:h-74 md:w-60 md:h-57 w-52 h-47 max-[600px]:w-100 max-[600px]:h-56 absolute max-[600px]:pl-5 pl-0  xl:left-2 left-1 max-[600px]:left-auto max-[600px]:right-1 top-1 xl:rounded-3xl rounded-xl
                   flex flex-col justify-center xl:gap-3 gap-2'>
                  <h1 className='lg:pl-11 xl:text-3xl pl-7 md:text-2xl max-[600px]:text-3xl text-xl font-extrabold'>Week 7-8 :</h1>
                  <ul className='xl:px-12 lg:px-10 xl:text-sm pl-7 pr-6 lg:text-[1.1vw] max-[600px]:text-[2.3vw] text-[1.4vw] list-disc opacity-90'>
                    <li>Conduct user testing of the demo launchpad to validate the functionality and performance of the AI algorithms and technologies</li>
                    <li>Refine the launchpad based on user feedback</li>
                    <li>Prepare the launchpad for deployment</li>
                  </ul>
                </div>
              </div>
              <div className='max-[600px]:order-1 order-0 xl:w-9 md:w-7 lg:w-5 w-5 h-[.5vw] bg-[#282828]'></div>
            </div> 
      
      
      
          </div>
        </div>
      
      </div>
      {/* ///////////////////////////////JOIN US TODAY////////////////////////// */}
      <div className='xl:pt-160 md:pt-30 sm:pt-50 p-20 max-[600px]:p-0 xl:h-230 lg:h-100 md:h-90 sm:h-110 h-75 max-[600px]:py-10 max-[600px]:h-auto  '>
        <div className='join xl:w-[57%] lg:w-[56%] md:w-[65%] sm:w-[64%] w-[85%] max-[600px]:w-[85%] xl:px-25 lg:px-20 md:px-15 px-[8vw] max-[600px]:px-10 max-[600px]:py-10 xl:py-17  lg:py-15 md:py-10 py-7 pt-4 md:pt-7 text-black 
            flex flex-col xl:gap-5 md:gap-4 gap-3 justify-center items-center  justify-self-center xl:rounded-4xl rounded-3xl'>
          <h1 className='xl:text-4xl md:text-3xl text-2xl max-[600px]:text-5xl font-extrabold'>Join Us Today</h1>
          <p className='md:text-xs lg:text-md text-[1.5vw] text-center max-[600px]:text-[2.3vw] xl:text-start'>Unlock the door to unprecedented opportunities in the crypto space. By investing in Ghost (BOO), 
            yor&apos;re not just buying a token, but you&apos;re also securing access to the fastest, most efficient 
            sniper bot on the market. Become a part of a community that&apos;s innovating crypto engagement. Make 
            the smart choice  Invest in Ghost.</p>
        </div>
      </div>
      {/* //////////////////////Contact////////////// */}
      <div className='flex  lg:flex-row flex-col gap-9  justify-between  md:px-[14%] lg:px-[10%] lg:py-15 max-[600px]:py-10 xl:py-30  items-center'> 
        <div className='max-[600px]:order-1 order-0 xl:w-[39%] lg:w-[40%] md:w-[70%] w-[55%] max-[600px]:w-[76%] flex flex-col lg:gap-9 gap-4 md:gap-0 justify-center items-center lg:justify-start  lg:items-start '>
          <img alt="img" className='lg:w-55 md:w-80 w-60 max-[600px]:w-80' src='/images/conghost.png'/>
          <p className='xl:text-[1.1vw] lg:text-[1.15vw] md:text-[1.8vw] max-[600px]:text-[2.9vw] text-[2vw] text-center lg:text-start opacity-80'>Unleash the power of the Ghost Sniper Bot, an innovative tool that uses High-Frequency 
            Trading principles to capitalize on new crypto projects</p>
        </div>
        <div className='flex max-[600px]:order-0 order-1 max-[600px]:flex-col max-[600px]:gap-4 gap-0 flex-row xl:w-[50%] lg:w-[50%]  w-[70%] md:pt-10 py-5  lg:pt-0  justify-between '>
          <div className='text-center lg:text-start'>
            <h1 className='md:text-xl lg:text-sm xl:text-md text-lg max-[600px]:text-3xl pb-1 font-extrabold'>Quick links</h1>
            <ul className='flex flex-col gap-1 max-[600px]:pt-2 pt-0 opacity-70 text-sm max-[600px]:text-[2.9vw] lg:text-xs xl:text-sm'>
              <li>About Us</li>
              <li>Our technology</li>
              <li>Pricing</li>
              <li>Buyback</li>
              <li>Roadmap</li>
            </ul>
          </div>
          <div className='sm:text-center lg:text-start max-[600px]:text-center'>
            <h1 className='md:text-xl lg:text-sm pb-1 sm:text-lg max-[600px]:text-3xl font-extrabold'>Roadmap</h1>
            <ul className='flex flex-col gap-1 max-[600px]:pt-2 pt-0 sm:text-sm lg:text-xs xl:text-sm opacity-70'>
              <li>WhitePaper</li>
              <li>Roadmap</li>
            </ul>
          </div>
          <div className='flex flex-col max-[600px]:items-center items-start'>
            <h1 className='mdtext-xl lg:text-sm sm:text-lg pb-1 max-[600px]:text-3xl  font-extrabold sm:text-center lg:text-start'>Socials</h1>
            <div className='flex gap-5 max-[600px]:pt-2 pt-0'>
              <img alt="img" className='w-10 lg:w-8 xl:w-10 hover:rounded-full hover:p-[.1vw] hover:border-[.1vw] border-white' src='/images/twitter.png'/>
              <img alt="img" className='w-10 lg:w-8 xl:w-10 hover:rounded-full hover:p-[.1vw] hover:border-[.1vw] border-white' src='/images/telle.png'/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

