import React from 'react';
import prulogoImage from '../prulogo.png';

function Footer() {


    const footerStyles = {
        backgroundColor: '#ffffff',
    };

    return (
        <div>
            <footer className="text-gray-600 body-font" style={footerStyles}>
                <div className="container px-5 py-24 md:w-1/2 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Advisors</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-xs">Financial Education</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-xs">Life Insurance</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-xs">Retirement</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-xs">Annuities</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-xs">Structured Settlements</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-xs">Investments</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-xs">Workplace Benefits</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Institutions</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-xs">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-xs">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-xs">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-xs">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Prudential</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-xs">First Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-xs">Second Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-xs">Third Link</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 text-xs">Fourth Link</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <img src={prulogoImage} alt="Pru Logo" className="h-20 w-auto" />
                        </div>
                    </div>
                </div>
                
            </footer>
        </div>
    );
};

export default Footer;
