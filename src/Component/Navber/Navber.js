import React from 'react';
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Navber = () => {
    return (
        <div className='bg-slate-900'>
            <div className="navbar  container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='/' className="text-white ">Home</a></li>
                            <li><a href='/' className="text-white ">About</a></li>
                            <li><a href='/' className="text-white ">Experience</a></li>
                            <li><a href='/' className="text-white ">Contect</a></li>
                        </ul>
                    </div>
                    <a href='/' className="btn btn-ghost font-light text-3xl italic text-white">Ashik</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a href='/' className="text-white ">Home</a></li>
                        <li><a href='/' className="text-white ">About</a></li>
                        <li><a href='/' className="text-white ">Experience</a></li>
                        <li><a href='/' className="text-white ">Contect</a></li>
                    </ul>

                </div>
                <div className='navbar-end gap-2'>
                    <a href="https://www.linkedin.com/in/md-ashik-billah/" target="_blank"><FaLinkedin className='text-2xl font-bold text-white'></FaLinkedin></a>
                    <a href='https://www.facebook.com/profile.php?id=100076411937353' target="_blank"><FaFacebook className='text-2xl font-bold text-white'></FaFacebook></a>
                    <a href='https://github.com/ashikbillah699' target="_blank"><FaGithub className='text-2xl font-bold text-white'></FaGithub></a>
                </div>
            </div>
        </div>
    );
};

export default Navber;