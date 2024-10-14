import React from 'react'
import image1 from "@/public/image3.jpg";
import Image from "next/image";
import "./styles.css"
const WhyUs
 = () => {
  return (
    <>
<div id='whyUs' className=" bg-gradient-to-br from-[#000] to-[#C74501]   py-24 sm:py-32 overflow-hidden ">

  <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ">

      <div className="lg:pr-8 lg:pt-4 ">

        <div className="lg:max-w-lg">

          
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"> Why Our Platform?</p>
          <p className="mt-6 text-lg leading-8 main-color">Our platform is the first platform in Algeria that allows Algerian citizens to find lawyers and legal advisors online.</p>
          <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
            <div className="relative pl-9">
              <dt className="inline font-semibold main-color">
              <svg width={20} className='left ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
              By respecting the law
              </dt>
              <dd className="inline text-white"> Our platform respects Algerian law and has lawyers who monitor it.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold main-color">
              <svg width={20} className='left ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
              Find locations easily.
              </dt>
              <dd className="inline text-white"> With our platform, you can easily find the locations of all types of courts and lawyers through our website and mobile app. Lawyers can also send court locations to clients online. This is particularly useful for people who don&apos;t know the locations of specific courts.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold main-color">
              <svg width={20} className='left ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
A mobile application
              </dt>
              <dd className="inline text-white"> We offer a mobile app that can be very useful for receiving information about your case from your lawyer or legal advisor directly on your mobile phone.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold main-color">
              <svg width={20} className='left ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
equipe du Support
              </dt>
              <dd className="inline text-white"> We offer a support team to assist you. You can find answers to your most frequently asked questions about this platform.</dd>
            </div>
            <div className="relative pl-9">
              <dt className="inline font-semibold main-color">
              <svg width={20} className='left ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">{/* <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--> */}<path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
              Lawyer or legal advisor
              </dt>
              <dd className="inline text-white"> We will help you choose between a lawyer or a legal advisor.</dd>
            </div>

          </dl>
        </div>
      </div>

      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">

    </div>
      {/* <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="Product screenshot" className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432" height="1442"> */}

      <Image className="w-[92rem] max-w-none rounded-xl shadow-xl ring-1 overflow-hidden ring-gray-400/10    hidden lg:block" width={2432} height={1442} src={image1} alt='lawyer image' ></Image>

    </div>

  </div>
  <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">

    </div>

</div>


    </>
  )
}
export default WhyUs


