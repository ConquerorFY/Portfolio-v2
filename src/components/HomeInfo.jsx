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
            Hi, I am <span className="font-semibold">Ryan Lim</span>👋
            <br />
            A Software Engineer from Malaysia
        </h1>
    ),
    2: (
        <InfoBox
            text="Worked with multiple individuals and companies over the years."
            link="/about"
            btnText="Learn more about me"
        />
    ),
    3: (
        <InfoBox
            text="Worked on multiple projects. Curious about them?"
            link="/projects"
            btnText="View my portfolio"
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