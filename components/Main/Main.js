import React from "react";
import Link from "next/link";
import AssetKuning from '/components/Assets/AssetKuning';
import LingkaranKuning from '/components/Assets/LingkaranKuning';
import AssetPink from '/components/Assets/AssetPink';
import AssetGame from '/components/Assets/AssetGame';
import AssetBatu from '/components/Assets/AssetBatu';
import Navbar from "/components/Navbar/Navbar";
import Button from "/components/Navbar/Button/Button";

const Main = () => {
    return (
        <div className='bg-[#5956E9] no-repeat bg-cover w-screen font-body relative overflow-hidden'>
            <AssetKuning />
            <LingkaranKuning />
            <AssetPink />
            <AssetGame />
            <AssetBatu />
            <div className="container mx-auto px-[6%] overflow-y-hidden">
                <Navbar />
                <div className="xl:w-[55%] lg:w-[60%] md:w-[60%] sm:w-[100%] mt-[4%]">
                    <h1 className="text-white xl:text-8xl lg:text-7xl md:text-5xl sm:text-4xl xl:ml-[0] lg:ml-[0] md:ml-[0] sm:ml-[30%] font-bold font-body pr-32">
                        lets show your talent for game
                    </h1>

                    <div className="xl:ml-[0] lg:ml-[0] md:ml-[0] sm:ml-[40%] mt-[5%]">
                        <Button className="" variant="yellow">
                        Get Started
                        </Button>
                    </div>
                </div>
            </div>
            <div className="sticky">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#FFFFFF" fillOpacity="1" d="M0,160L48,170.7C96,181,192,203,288,218.7C384,235,480,245,576,224C672,203,768,149,864,144C960,139,1056,181,1152,208C1248,235,1344,245,1392,250.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </div>
    );
};

export default Main;