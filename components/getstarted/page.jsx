"use client"
import React from 'react'

import './styles.css'

import { useRouter } from "next/navigation";
const Getstarted = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
  };
  return (
    <>
     <div className="bg-black">
  <header className="absolute inset-x-0 top-0 z-50">
    <nav className="flex  justify-center lg:grid" aria-label="Global">
      <div className="flex justify-between  lg:flex lg:gap-x-12 ">
        <a href="#hero" className="text-sm font-semibold leading-6 text-white p-4 ">Hero</a>
        <a href="#whyJustise" className="text-sm font-semibold leading-6 text-white p-4 " >Why a platform for justise</a>
        <a href="#whyUs" className="text-sm font-semibold leading-6 text-white p-4 ">Why Us</a>
        <a href="#signUp" className="text-sm font-semibold leading-6 text-white p-4 ">Sign up</a>
        
        <a href="#signUp" className="text-sm font-semibold leading-6 text-white p-4 " onClick={() => navigate("signinclient")}>
        Sign In
        </a>
      </div>

    </nav>


    {/* <!-- Mobile menu, show/hide based on menu open state. --> */}


  </header>

  <div id='hero' className="relative isolate px-6 pt-14 lg:px-8 ">
    <div className="absolute inset-x-0  -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff4d00] to-[#ff4d00] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] style1" ></div>
    </div>
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">

      </div>
      <div className="text-center ">
        <div className='w-full h-full'>
        <h1 className="lg:text-4xl md:text-4xl text-xl font-bold  main-color sm:text-6xl">Welcome to Avocat Enligne, the first platform to find lawyers and legal advisors in Algeria.</h1>
        <p className="mt-6 text-lg leading-8 text-white">On this platform, you can find lawyers and legal advisors online. Additionally, lawyers and legal advisors can find clients from anywhere in Algeria.</p>
        </div>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a href="#whyJustise" className="rounded-md main-color px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Learn more →</a>
          
        </div>
      </div>
    </div>
    <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
      <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff4d00] to-[#ff4d00] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] style2" ></div>
    </div>
  </div>
</div>


    </>
  )
}

export default Getstarted