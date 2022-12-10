import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";


const Footer = () => {
    return (
        <div className='mt-20 mx-auto '>
            <footer className=" mx-auto  p-20 bg-slate-900 text-neutral-content">
                <div className='flex justify-around'>
                    <div>
                        <p>Md Ashik Billah<br />Full Stack Web Developer</p>
                    </div>
                    <div>
                        <span className="footer-title">Social</span>
                        <div className="grid grid-flow-col gap-4">
                            <a href='https://www.facebook.com/profile.php?id=100076411937353' target="_blank"><FaFacebook className='text-2xl'></FaFacebook></a>
                            <a href='https://twitter.com/Ashik58227984' target="_blank"><FaTwitter className='text-2xl'></FaTwitter></a>
                            <a href="https://www.linkedin.com/in/md-ashik-billah/" target="_blank"><FaLinkedin className='text-2xl'></FaLinkedin></a>
                        </div>
                    </div>
                    <div>
                        <span className="footer-title">Contact</span>
                        <div className="grid grid-flow-col">
                            <a href='https://www.facebook.com/profile.php?id=100076411937353' target="_blank"><FaFacebook className='text-2xl'></FaFacebook></a>
                        </div>
                        <p>Phone : 01739963260</p>
                        <p>ashikbillah699@gmail.com</p>
                    </div>
                </div >
            </footer >
        </div >
    );
};

export default Footer;