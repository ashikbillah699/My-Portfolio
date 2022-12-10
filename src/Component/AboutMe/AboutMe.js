import React from 'react';
import About from "../../img/About.png"
import { FaLongArrowAltRight } from "react-icons/fa";

const AboutMe = () => {
    return (
        <div className="hero min-h-screen w-9/12 mx-auto">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt='' src={About} className=" rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold text-white">I'm a Full Stack Web Developer</h1>
                    <p className="py-6 text-white">I am experienced and adept in multiple stages of web development. I have strong knowledge of
                        User interface, user experience, testing,debugging, maintenance of web systems, client-side
                        development, and server-side development. I am equipped with a diverse and promising skill set
                        and am proficient in an assortment of technologies, including React, JavaScript, TailwindCSS,
                        Bootstrap, HTML5, and CSS3 for client-side development. I am comfortable with
                        Node.js,Express.js, and MongoDB for server-side development. I am also familiar with Next.js, the
                        relational database MySQL, data structure, and algorithms. I have good programming and problem-
                        solving skills.</p>
                    <button className="text-white"><FaLongArrowAltRight></FaLongArrowAltRight></button>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;