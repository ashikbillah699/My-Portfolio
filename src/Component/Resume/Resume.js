import React from 'react';

const Resume = () => {
    const applications = [
        {
            title: 'My CV',
            type: 'You Can See My CV',
            pdf: 'https://drive.google.com/file/d/10E-_QuBUibvq0l7rMQ7HrrfCZh0j6OGV/view?usp=share_link',
        },
        {
            title: 'RESUME',
            type: 'You Can See My RESUME',
            pdf: 'https://drive.google.com/file/d/1-pv18IBoPYNzhaCJRhQLYO_iebqts3LA/view?usp=share_link',
        },
        {
            title: 'COVER LETTER',
            type: 'You Can See My C. LETTER',
            pdf: 'https://drive.google.com/file/d/12FBaTKXKsfWF-WPmqhSsvkKJMSvIHyKh/view?usp=share_link',
        }
    ]
    return (
        <div>
            <h1 className='text-4xl text-center mb-16 mt-24 text-white'>My Applications</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto'>
                {
                    applications.map((application, i) => <div key={i} className="card  bg-base-100 shadow-xl mx-auto">
                        <div className="card-body">
                            <h2 className="card-title mx-auto">{application.title}</h2>
                            <p></p>
                            <div className="card-actions justify-center">
                                <a href={application.pdf} target="_blank"> <button className="btn bg-slate-900 p-16 mx-auto">{application.type}</button></a>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>

    );
};

export default Resume;