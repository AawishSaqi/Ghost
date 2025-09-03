'use client'
import React, { useEffect, useState } from 'react';
import './globals.css';



export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [monthly, setMonthly] = useState(false)

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


  return (
    <div className="w-full relative bg-[#201D20]">
      {/* /////////////////////////////Navbar////////////////////////////////////// */}
      <div className={`z-[100] w-[100%] px-[10%] py-2 flex  justify-between fixed top-0 ${scrolled? 'bg-red-900':'bg-transparent'}`}>
        <div className="w-37 items-center">
          <img src="/images/ghost.png"/>
        </div>
        <div className="nav flex items-center gap-3 text-[.95vw]">
          <a href='#aboutus'  className="li px-5 py-[.8vw] rounded-xl cursor-pointer  hover:-translate-y-1  transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(0,0,0,0.6)] hover:bg-red-900 hover:text-black ">About Us</a>
          <a href='#ourtechnology' className="li px-5 py-[.8vw] rounded-xl cursor-pointer  hover:-translate-y-1  transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(0,0,0,0.6)] hover:bg-red-900 hover:text-black ">Our Technology</a>
          <a href='#pricing' className="li px-5 py-[.8vw] rounded-xl cursor-pointer  hover:-translate-y-1  transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(0,0,0,0.6)] hover:bg-red-900 hover:text-black ">Pricing</a>
          <a href='#buyback' className="li px-5 py-[.8vw] rounded-xl cursor-pointer  hover:-translate-y-1  transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(0,0,0,0.6)] hover:bg-red-900 hover:text-black ">Buy Back</a>
          <a href='#roadmap' className="li px-5 py-[.8vw] rounded-xl cursor-pointer  hover:-translate-y-1  transition-all duration-500 hover:shadow-[0_0_30px_10px_rgba(0,0,0,0.6)] hover:bg-red-900 hover:text-black ">Roadmap</a>

          <div className="py-[.75vw] px-8 border-1 hover:border-black border-white rounded-2xl  transition-all duration-300 
               hover:-translate-y-1 hover:shadow-[0_0_30px_10px_rgba(250,204,21,0.6)] hover:bg-black">
            <h1 className="font-semibold text-sm">Chart</h1>
          </div>
        </div>
      </div>
      {/* ///////////////////main/////////////////////////////// */}
      <div className="flex w-[100%] pr-[10%]">
        <div className="fading w-235 h-screen absolute  " >
          <img className="" src="/images/ghostt.png"/>
        </div>
        <div className="h-200  pl-[67%] pt-50  items-center">
          <div className="flex flex-col gap-4">
            <h1 className="text-lg font-semibold ">THE FUTURE OF CRYPTPCURRENCY ENGAGEMENT</h1>
            <h1 className="text-6xl font-extrabold font-blood  pb-3">WELCOME TO GHOST!!</h1>
            <p className="text-sm leading-7 ">Unleash the power of the Ghost Sniper Bot, an innovative tool that uses High-Frequency 
                Trading principles to capitalize on new crypto projects. As holders of the Ghost 
                token (BOO), you are not just investing in an asset - you're unlocking access to a 
                groundbreaking, dynamic world of crypto opportunities.</p>
            <div className="relative pt-3">
              <img src="/images/buyback.png" className="w-35"/>
              <h1 className="absolute text-sm font-semibold text-black absolute top-8 left-9 ">Buy Now</h1>
            </div>
          </div>
        </div>
      </div>
      {/* ///////////////ABOUT US/////////////////////////// */}
      <div id='aboutus' className='h-screen flex items-center justify-center'> 
        <div className="w-[55%] flex flex-col justify-self-center border-2 border-red-900 rounded-xl ">
          <div className="flex gap-2 py-4 pl-5 border-b border-red-900 w-full ">
            <div className="w-[.9vw] h-[.9vw] bg-red-900 rounded-full"></div>
            <div className="w-[.9vw] h-[.9vw] bg-red-900 rounded-full"></div>
            <div className="w-[.9vw] h-[.9vw] bg-red-900 rounded-full"></div>
          </div>
          <div className="flex flex-col gap-8 justify-center items-center px-20 py-17">
            <div className="">
              <h1 className="text-[2.9vw] font-extrabold">About Us</h1>
            </div>
            <p className="justify-center leading-5 text-center">Stepping into the digital landscape, Ghost (BOO) stands as a unique proposition. 
                We're not merely a crypto token; we are a key to pioneering technology. Ghost Sniper
                Bot, exclusively accessible to Ghost (BOO) holders, enables you to be at the forefront
                  of newly deployed projects.</p>
          </div>
        </div>
      </div>
{/* //////////////////////OUR Technology/////////////////// */}
      <div id='ourtechnology' className="flex gap-1 px-[10%] h-200 items-center">
        <div className="w-[40%] flex flex-col gap-5">
          <h1 className="text-[3vw]  font-extrabold">Our Technology</h1>
          <div className="flex flex-col gap-7 text-sm">
            <p>At the core of Ghost (BOO) lies our secret weapon – the Ghost Sniper Bot. 
              This advanced software employs High-Frequency Trading (HFT) principles, 
              allowing for ultra-fast, automated transactions.</p>
            <p>With the Ghost Sniper Bot, our holders can engage with new projects at 
              unrivaled speeds, and maximize potential gains from these early-stage 
              ventures. Available exclusively to Ghost (BOO) holders, the Sniper Bot 
              outpaces the market and defines its own league of efficiency</p>
          </div>
        </div>
        <div className="fading absolute left-138">
          <img src="/images/ghost2.png" className="w-[84%] h-full"/>
        </div>
      </div>
      {/* ///////////////////////////PRICING AND PACKAGES///////////////////// */}
      <div id='pricing' className="w-[60%] justify-self-center flex flex-col gap-8 ">
        <div className="px-5 flex flex-col gap-6">
          <h1 className="text-center text-[2.8vw] font-extrabold">Pricing and Packages</h1>
          <p className="text-center">Each package offers exclusive access to our Ghost Sniper Bot. Feel the pulse of the
            dynamic crypto world and never miss a beat with our premium subscriptions. Experience 
            the power of the Ghost Sniper Bot with our flexible and competitively priced subscription plans.</p>
        </div>
      </div>
      <div className='pb-13 pt-10'>
        <div className=" justify-self-center">
          <div className="flex border border-white px-2 py-[.4vw] rounded-xl w-max cursor-pointer gap-1 ">
            <h1 onClick={()=>setMonthly(true)} className={`px-8 py-[.8vw] rounded-xl ${monthly? 'bg-red-900 text-black':'bg-none'}`}>Monthly</h1>
            <h1 onClick={()=> setMonthly(false)} className={`px-8 py-[.8vw] rounded-xl ${monthly?'bg-none':'bg-red-900 text-black'}`}>Weekly</h1>
          </div>
        </div>
        <div className='pricing px-[20%]'>
          <div className="container weekly">
              <div className="box box1">
                  <div className="bg">
                      <div className="price-box">
                          <h3 className='text-xl font-bold opacity-70'>Standard</h3>
                          <h2 className='text-5xl font-extrabold opacity-70'>{monthly? '@175':'$50'}</h2>
                      </div>
                  </div>
              </div>
              <div className="box box2">
                  <div className="bg">
                      <div className="price-box">
                          <h3 className='text-xl font-bold opacity-70'>Platinum</h3>
                          <h2 className='text-5xl font-extrabold opacity-70'>{monthly? '$310':'$90'}</h2>
                      </div>
                  </div>
              </div>
              <div className="box box3">
                  <div className="bg">
                      <div className="price-box">
                          <h3 className='text-xl font-bold opacity-70'>Gold</h3>
                          <h2 className='text-5xl font-extrabold opacity-70'>{monthly?'$525':'$150'}</h2>
                      </div>
                  </div>
              </div>
          </div>

        </div>
      </div>

      {/* ////////////////////////////////Buyback & Sustainablity////////////////////////////// */}
      <div id='buyback' className='pr-[10%] pt-60 pb-70 relative'>
        <div className=' plane w-[60%] absolute  '>
          <img src='/images/ghostplane.png' alt='ghost'/>
        </div>
        <div className="flex flex-col gap-4 w-[40%] justify-self-end">
          <h1 className="text-[2.9vw] leading-none font-extrabold">Buyback & Sustainability</h1>
          <div>
            <p className="text-[.95vw] leading-7 ">At Ghost, we’re committed to enhancing value for our 
              token holders. We channel 50% of the revenues generated by our Ghost Sniper Bot towards 
              buyback every two weeks, amplifying liquidity and the value of our tokens. The remaining 50% 
              is reinvested into marketing initiatives that enhance project visibility and foster growth.</p>
            <p className='text-[.95vw] leading-7'>Furthermore, we uphold a 0% tax policy to safeguard our investor’s interest. Our revenue 
              streams, generated by the bot, ensure that we maintain a thriving community while promoting 
              project growth and sustainability.</p>
          </div>
          <div className="relative pt-3">
            <img src="/images/buyback.png" className="w-38"/>
            <h1 className="absolute text-sm font-semibold text-black absolute top-9 left-10 ">Buy Now</h1>
          </div>
        </div>
      </div>
      {/* ///////////////////////////Roadmap////////////////////////// */}
      <div id='roadmap' className='h-400 pt-35 '>
        <div className='flex flex-col px-[27%] justify-center items-center gap-7 pb-30'>
          <h1 className='text-4xl font-extrabold '>ROADMAP</h1>
          <p className='text-center'>This roadmap assumes a target delivery in 8 weeks, with a demo launchpad ready in 2 weeks. 
            It is important to note that the actual timeline may vary depending on the complexity of the 
            launchpad and the resources available.</p>
        </div>
        <div className='relative'>
          <div className='w-[.5vw] bg-[#282828] h-290 absolute left-[50%] rounded-full top-30 '></div>
          <div className='relative'>
            <div className='flex justify-center items-center absolute right-[50%]'>
              <div className=' w-40 h-78  rounded-xl border-4 border-red-900  relative'>
                <div className='weekbg w-90 h-74 absolute right-2 top-1 rounded-3xl flex flex-col justify-center  gap-3'>
                  <h1 className='pl-11 text-3xl font-extrabold'>Week 1-2 :</h1>
                  <ul itemType='' className='px-12 text-sm list-disc'>
                    <li>Define the technical architecture and infrastructure required to support the launchpad</li>
                    <li>Set up the necessary hardware and software systems</li>
                    <li>Establish the development environment</li>
                  </ul>
                </div>
              </div>
              <div className='w-9 h-[.5vw] bg-[#282828]'></div>
            </div>
            <div className='flex justify-center items-center absolute left-[50%] top-90'>
              <div className='w-9 h-[.5vw] bg-[#282828]'></div>
              <div className=' w-40 h-78  rounded-xl border-4 border-red-900  relative'>
                <div className='weekbg w-90 h-74 absolute left-2 top-1 rounded-3xl flex flex-col justify-center gap-3'>
                  <h1 className='pl-11 text-3xl font-extrabold'>Week 3-4 :</h1>
                  <ul itemType='' className='px-12 text-sm list-disc'>
                    <li>Define the technical architecture and infrastructure required to support the launchpad</li>
                    <li>Set up the necessary hardware and software systems</li>
                    <li>Establish the development environment</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='flex justify-center items-center absolute right-[50%] top-180'>
              <div className=' w-40 h-85  rounded-xl border-4 border-red-900  relative'>
                <div className='weekbg w-90 h-81 absolute right-2 top-1 rounded-3xl flex flex-col justify-center  gap-3'>
                  <h1 className='pl-11 text-3xl font-extrabold'>Week 4-5 :</h1>
                  <ul itemType='' className='px-12 text-sm list-disc'>
                    <li>Develop the AI algorithms and technologies required for the launchpad, such as NLP, ML, DL, RPA, and blockchain</li>
                    <li>Integrate the AI algorithms and technologies into the launchpad</li>
                    <li>Test and validate the AI algorithms and technologies to ensure they are working as expected</li>
                  </ul>
                </div>
              </div>
              <div className='w-9 h-[.5vw] bg-[#282828]'></div>
            </div>
            <div className='flex justify-center items-center absolute left-[50%] top-270'>
              <div className='w-9 h-[.5vw] bg-[#282828]'></div>
              <div className=' w-40 h-78  rounded-xl border-4 border-red-900  relative'>
                <div className='weekbg w-90 h-74 absolute left-2 top-1 rounded-3xl flex flex-col justify-center gap-3'>
                  <h1 className='pl-11 text-3xl font-extrabold'>Week 7-8 :</h1>
                  <ul itemType='' className='px-12 text-sm list-disc'>
                    <li>Conduct user testing of the demo launchpad to validate the functionality and performance of the AI algorithms and technologies</li>
                    <li>Refine the launchpad based on user feedback</li>
                    <li>Prepare the launchpad for deployment</li>
                  </ul>
                </div>
              </div>
            </div>



          </div>
        </div>

      </div>
      {/* ///////////////////////////////JOIN US TODAY////////////////////////// */}
      <div className='pt-60'>
        <div className='join w-[57%] px-25 py-17 text-black flex flex-col gap-5 justify-center items-center  justify-self-center rounded-4xl'>
          <h1 className='text-4xl font-extrabold'>Join Us Today</h1>
          <p>Unlock the door to unprecedented opportunities in the crypto space. By investing in Ghost (BOO), 
            you're not just buying a token, but you’re also securing access to the fastest, most efficient 
            sniper bot on the market. Become a part of a community that's innovating crypto engagement. Make 
            the smart choice – Invest in Ghost.</p>
        </div>
      </div>
      {/* //////////////////////Contact////////////// */}
      <div className='flex justify-between  px-[10%] py-30 items-center'>
        <div className='w-[42%] '>
          <img className='w-80' src='/images/conghost.png'/>
          <p>Unleash the power of the Ghost Sniper Bot, an innovative tool that uses High-Frequency 
            Trading principles to capitalize on new crypto projects</p>
        </div>
        <div className='flex w-[50%]  justify-between '>
          <div>
            <h1 className='text-xl pb-1 font-extrabold'>Quick links</h1>
            <ul className='flex flex-col gap-1'>
              <li>About Us</li>
              <li>Our technology</li>
              <li>Pricing</li>
              <li>Buyback</li>
              <li>Roadmap</li>
            </ul>
          </div>
          <div>
            <h1 className='text-xl pb-1 font-extrabold'>Roadmap</h1>
            <ul className='flex flex-col gap-1'>
              <li>WhitePaper</li>
              <li>Roadmap</li>
            </ul>
          </div>
          <div>
            <h1 className='text-xl pb-1 font-extrabold'>Socials</h1>
            <div className='flex gap-5'>
              <img className='w-10 hover:rounded-full hover:p-[.1vw] hover:border-[.1vw] border-white' src='/images/twitter.png'/>
              <img className='w-10 hover:rounded-full hover:p-[.1vw] hover:border-[.1vw] border-white' src='/images/telle.png'/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
