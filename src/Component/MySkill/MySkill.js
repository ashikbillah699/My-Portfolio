import React from 'react';

const MySkill = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl text-center mb-16 mt-24 text-white'>My Skills</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 '>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <div className="card-body mx-auto">
                        <h2 className="card-title mx-auto mb-3">Frontend Development</h2>
                        <div className='flex flex-auto  text-white rounded-lg'>
                            <div className='text-center bg-slate-900 border-r pr-4 rounded-lg '>
                                <p className='py-7'>★<strong>HTML</strong> (Experienced)</p>
                                <p className='py-7'>★<strong>CSS</strong><br />(Experienced)</p>
                                <p className='py-7'>★<strong>JavaScript</strong>  (Experienced)</p>

                            </div>
                            <div className='text-center border-l bg-slate-900 text-white rounded-lg'>
                                <p className='py-7'>★<strong>React JS</strong> (Experienced)</p>
                                <p className='py-7'>★<strong>Bootstrap</strong> (Intermediate)</p>
                                <p className='py-7'>★<strong>Tailwind CSS</strong> (Experienced)</p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                    <div className="card-body">
                        <h2 className="card-title mx-auto mb-3">Backend Development</h2>
                        <div className='flex flex-auto text-white'>
                            <div className='text-center  bg-slate-900 border-r pr-4 rounded-lg'>
                                <p className='py-7'>★<strong>Node JS</strong> (Experienced)</p>
                                <p className='py-7'>★<strong>Express JS</strong><br />(Intermediate)</p>

                            </div>
                            <div className='text-center border-l bg-slate-900 border-r text-white  rounded-lg'>
                                <p className='py-7'>★<strong>MongoDB</strong>  (Intermediate)</p>
                                <p className='py-7'>★<strong>Firebase</strong> (Experienced)</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkill;