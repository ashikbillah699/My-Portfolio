import React from 'react';

const MyProject = () => {
    const projects = [
        {
            title: "Optic Thirst",
            link: 'https://optic-thirst.web.app/?fbclid=IwAR1KSEa93x7Wj6vf9X6UCExUIG8s-rHociunjxryrEO5wknOAjXgPCl0pCY',
            feature: 'React router,tooltip,toggle button,bootstrap,favicon, dynamic api,rect fontawasome icon, mongodb etc..',
            Websitepurpose: "Photographers use a variety of photographic equipment to capture events,people, objects or scenes for records, art or commercial use.Many photographers begin theircareers as photographic assistants, setting up lights and stands, arranging transport and occasionally acting as a second shooter."

        },
        {
            title: "Laptop Corner",
            link: 'https://laptop-corner.web.app/',
            feature: 'install react router,tooltip,used tailwind and daisyUi ,used many component,used favicon,used title,used dynamic- API,react fontawsome Icon,used node server,Mongodb, use duserd ,firebase, React Query',
            Websitepurpose: "Laptop shall be the property of the Company at all times and the employee will not have any right or interest in the said asset except using such asset during the employment or for such duration as may be decided by the Company. Laptops must compulsorily be protected by a username and password."

        },
        {
            title: "Online Programming Lerning",
            link: 'https://online-programming-learning.web.app/',
            feature: 'react router, tooltip,bootstrap,favicon, dynamic api,rect fontawasome icon etc..',
            Websitepurpose: "Knowledge becomes power only when we put it into some use.so let's honorour knowledge by answering some simple questions. Knowledge has a beginning but no end ... solet's keep ourselves going"

        }
    ]
    return (
        <div>
            <h1 className='text-4xl text-center mb-16 text-white'>My Projects</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto'>
                {
                    projects.map((projrct, i) => <div key={i} className="card w-96 bg-slate-900 shadow-xl ">
                        <div className="card-body text-center text-white">
                            <h2 className="card-title mx-auto">{projrct.title}</h2>
                            <p className='py-3'><small className='font-bold text-1xl'>Feature</small> : {projrct.feature}</p>
                            <p ><small className='font-bold'>Website Purepose</small> : {projrct.Websitepurpose}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-sm btn-info mx-auto"><a href={projrct.link} target="_blank">Live site</a></button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MyProject;