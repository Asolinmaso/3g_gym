import React from 'react';
import Image from 'next/image';

const ApplyNow = () => {
    return (
        <section className="bg-white py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center lg:items-start">
                {/* Left Column: Contact Info */}
                <div className="flex-1 w-full flex flex-col justify-center">
                    <div className="mb-8 overflow-hidden rounded-xl shadow-lg">
                        <Image
                            src="/gym-group.png"
                            alt="3rd Generation Team"
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold mb-2 text-black border-l-4 border-[#c41230] pl-4">Address</h3>
                            <p className="text-gray-500 text-base leading-relaxed max-w-sm ml-5">
                                10, Alamadhi Rd, Vetrivel Nagar, ganesh Nagar, New Vellanur, Tamil Nadu 600062
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-2 text-black border-l-4 border-[#c41230] pl-4">Contact</h3>
                            <p className="text-gray-500 text-base ml-5">
                                +91-8190895694
                            </p>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-2 text-black border-l-4 border-[#c41230] pl-4">E-mail</h3>
                            <p className="text-gray-500 text-base ml-5">
                                Contact@3rdgenerationfitnessstudio.com
                            </p>
                        </div>

                        <p className="text-gray-400 italic text-base pt-2 ml-5">
                            Immediate joining preferred. Salary based on experience & performance.
                        </p>
                    </div>
                </div>

                {/* Right Column: Application Form */}
                <div className="flex-1 w-full max-w-xl relative">
                    {/* Form Card */}
                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-[0_40px_100px_rgba(0,0,0,0.2)] hover:shadow-[0_50px_120px_rgba(0,0,0,0.25)] transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative z-10">
                        <h2 className="text-3xl font-extrabold text-[#c41230] text-center mb-6">Apply Now !</h2>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full px-5 py-3 rounded-lg border border-gray-200 focus:border-[#c41230] focus:ring-1 focus:ring-[#c41230]/20 outline-none transition-all text-black text-sm"
                            />

                            <div className="flex gap-3">
                                <div className="relative w-24">
                                    <select className="w-full px-3 py-3 rounded-lg border border-gray-200 bg-white appearance-none outline-none text-black text-sm">
                                        <option>+91</option>
                                    </select>
                                    <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                                <input
                                    type="text"
                                    placeholder="Contact"
                                    className="flex-1 px-5 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#c41230] text-black text-sm"
                                />
                            </div>

                            <input
                                type="email"
                                placeholder="E-mail"
                                className="w-full px-5 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#c41230] text-black text-sm"
                            />

                            <div className="grid grid-cols-2 gap-3">
                                <input
                                    type="text"
                                    placeholder="Job Position"
                                    className="w-full px-5 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#c41230] text-black text-sm"
                                />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className="w-full px-5 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#c41230] text-black text-sm"
                                />
                            </div>

                            <textarea
                                placeholder="Message"
                                rows={2}
                                className="w-full px-5 py-3 rounded-lg border border-gray-200 outline-none focus:border-[#c41230] resize-none text-black text-sm"
                            />

                            <div className="space-y-1">
                                <div className="flex items-center w-full px-3 py-2 rounded-lg border border-gray-200 group cursor-pointer hover:border-gray-300">
                                    <button type="button" className="px-3 py-1 rounded border border-gray-300 text-xs text-gray-500 mr-3">Upload File</button>
                                    <span className="text-gray-400 text-xs flex-1">No File Chosen</span>
                                </div>
                                <p className="text-[9px] text-gray-400 px-1">
                                    Max size: 5MB (PDF, DOCX, JPG, PNG)
                                </p>
                            </div>

                            <div className="flex justify-center pt-2">
                                <button className="bg-[#c41230] text-white px-10 py-3 rounded-full text-lg font-bold shadow-[0_15px_30px_rgba(196,18,48,0.4)] hover:shadow-[0_20px_40px_rgba(196,18,48,0.5)] hover:scale-105 transition-all duration-300">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Decorative Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#c41230]/5 blur-3xl -z-10 rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default ApplyNow;
