"use client"
import Image from "next/image";
import { useState } from "react";
import Hero from "@/Components/Hero";
import Footer from "@/Components/Footer";
import JobSec from "@/Components/JobSec";
import JobDescri from "@/Components/JobDescri";
import AboutUs from "@/Components/AboutUs";
import Login from "@/Components/Login";

export default function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [showLogin, setShowLogin] = useState(false);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };


  return (
    <div className=" bg-[#f2f7fc] min-h-screen absolute ">
      <nav className="flex rounded-full justify-between z-50 p-6 fixed w-full bg-transparent border-b border-blue-600 backdrop-blur-xl py-3">
        <Image src={"/vercel.svg"} width={90} height={90} alt="image" />
        <div className="flex justify-between">
          <button
            className={`px-4 text-base font-medium focus:outline-none ${activeTab === 'home'
              ? ' text-black font-semibold'
              : 'text-gray-500 hover:text-black'
              }`}
            onClick={() => handleTabClick('home')}
          >
            Home
          </button>
          <button
            className={`px-4 text-base font-medium focus:outline-none ${activeTab === 'jobs'
              ? ' text-black font-semibold'
              : 'text-gray-500 hover:text-black'
              }`}
            onClick={() => handleTabClick('jobs')}
          >
            Jobs
          </button>
          <button
            className={`px-4 text-base font-medium  focus:outline-none ${activeTab === 'refer'
              ? ' text-black font-semibold'
              : 'text-gray-500 hover:text-black'
              }`}
            onClick={() => handleTabClick('refer')}
          >
            Refer & Earn
          </button>
          <button
            className={`px-4 text-base font-medium focus:outline-none ${activeTab === 'aboutus'
              ? ' text-black font-semibold'
              : 'text-gray-500 hover:text-black'
              }`}
            onClick={() => handleTabClick('aboutus')}
          >
            About Us
          </button>
        </div>

        <div className="flex justify-between gap-5">
          <button className=" text-base font-semibold" onClick={() => setShowLogin(true)} >Login</button>
          <button className="rounded-[8px] bg-[#0A65CC] text-white w-[101px] h-[40px] text-base font-semibold">Register</button>
        </div>


      </nav>

      {showLogin && <Login onClose={() => setShowLogin(false)}  />
      }

      <div className="pt-16  ">
        {activeTab === 'home' && (
          <div className="">
            <Hero />

          </div>
        )}
        {activeTab === 'jobs' && (
          <div>
            <JobSec />
          </div>
        )}
        {activeTab === 'refer' && (
          <div>
            <JobDescri />
          </div>
        )}
        {activeTab === 'aboutus' && (
          <div>
            <AboutUs />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
