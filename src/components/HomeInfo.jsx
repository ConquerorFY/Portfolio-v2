import React from "react";
import { Link } from "react-router-dom";
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        <p className="font-medium sm_text-xl text-center">{text}</p>
        <Link to={link} className="neo-brutalism-white neo-btn">
            {btnText}
            <img src={arrow} className="w-4 h-4 object-contain" />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className="font-semibold">Ryan</span>👋
            <br />
            A <span className="underline">Software</span> & <span className="underline">Network Engineer</span> based in Singapore
        </h1>
    ),
    2: (
        <InfoBox
            text="Collaborated with individuals and companies over the years."
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Worked on various projects--curious to know more?"
            link="/projects"
            btnText="View them"
        />
    ),
    4: (
        <InfoBox
            text="Want to connect? I'm just a few clicks away."
            link="/contact"
            btnText="Let's connect"
        />
    ),
};

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo;