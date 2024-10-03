"use client";
import React from "react";
import "./styles.css";
import Image from "next/image";
import image2 from "@/public/image2.jpg";

import { useRouter } from "next/navigation";

const LeadtosignuporUpOrIn = () => {
  const router = useRouter();
  const navigate = (page) => {
    router.push(page);
  };
  return (
    <>
     
     

     
<div  class=" landing " id="signUp">
<div className="overlay"></div> 
        <div class="">
          <Image
            className=" w-[100rem] h-[50rem]  "
            src={image2}
            alt="lawyer image 2"
          ></Image>
          <div class="text z-30">
            <div class="content ">
              <h1 className="main-color lg:text-7xl text-2xl pt-10 pb-10">
              How can I use this platform?
              </h1>
              <p className="text-xl text-white font-bold ">
              First, you need to create an account like
                <span className="main-color"> A lawyer</span> or like{" "}
                <span className="main-color">A client</span> or like{" "}
                <span className="main-color" >A legal advisor </span>
                <span className="text-black">
                If you have an account 
                </span>
                 <span  className="text-black font-bold underline cursor-pointer z-20" onClick={() => navigate("signinclient")}> Clicker Ici   </span>
                 Next, clients will find themselves on a page where they can search for legal advice or lawyers. Legal advisors will have a page to receive clients, modify their personal information, and the same goes for lawyers as soon as they sign up. We will guide you through the process.
              </p>
              <div className="buttons-Sign-Up">
                <button
                  className=" w-[10rem] lg:w-[10rem] bg-gradient-to-br from-[#222221] to-[#ff4d00] "
                  onClick={() => navigate("signupclient")}
                >
                  Sign Up like a client
                </button>

                <button
                  className="w-[10rem] lg:w-[10rem] bg-gradient-to-br from-[#222221] to-[#C74501] "
                  onClick={() => navigate("signuplawer")}
                >
                  Sign Up like a lawyer
                </button>

                <button
                  className="w-[10rem] lg:w-[10rem] bg-gradient-to-br from-[#222221] to-[#C74501] "
                  onClick={() => navigate("signuplawer")}
                >
                  Sign Up like a legal advisor
                </button>
              </div>
            </div>

          </div>

        </div>

        {/* <ul class="bullets">
        <li></li>
        <li class="active-bullet"></li>
        <li></li>
      </ul> */}
      </div>
    </>
  );
};

export default LeadtosignuporUpOrIn;
