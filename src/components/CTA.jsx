import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section className="cta">
            <p className="cta-text dark:text-slate-200">
                Want to connect? <br className="sm:block hidden" />
                Let's get in touch right now!
            </p>
            <Link to="/contact" className="btn">
                Contact Me
            </Link>
        </section>
    )
}

export default CTA;