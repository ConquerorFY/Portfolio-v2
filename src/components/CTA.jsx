import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
    return (
        <section className="cta">
            <p className="cta-text">
                Want to connect? <br className="sm:block hidden" />
                Let's get in touch right now!
            </p>
            <Link to="/contact" className="btn">
                Contact
            </Link>
        </section>
    )
}

export default CTA;