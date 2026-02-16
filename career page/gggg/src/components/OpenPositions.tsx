import React from 'react';

const positions = [
    {
        title: 'Front Desk Executive',
        morningShift: '5.00 AM - 2.00 PM',
        eveningShift: '2.00 PM - 11.00 PM',
        vacancies: 3,
        salary: '₹12,000 – ₹15,000 + Incentives',
        active: false,
    },
    {
        title: 'Manager',
        morningShift: '5.00 AM - 2.00 PM',
        eveningShift: '2.00 PM - 11.00 PM',
        vacancies: 1,
        salary: '₹25,000 + Incentives',
    },
    {
        title: 'Head Coach',
        morningShift: '5.00 AM - 2.00 PM',
        eveningShift: '2.00 PM - 11.00 PM',
        vacancies: 1,
        salary: '₹18,000 + Incentives',
    },
    {
        title: 'Senior Coach',
        morningShift: '5.00 AM - 2.00 PM',
        eveningShift: '2.00 PM - 11.00 PM',
        vacancies: 2,
        salary: '₹15,000 + Incentives',
    },
    {
        title: 'Trainer',
        morningShift: '5.00 AM - 2.00 PM',
        eveningShift: '2.00 PM - 11.00 PM',
        vacancies: 5,
        salary: '₹12,000 + Incentives',
    },
];

const OpenPositions = () => {
    return (
        <section className="bg-white pt-40 pb-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-6xl font-extrabold text-center mb-16 text-black">
                    Open <span className="text-[#c41230]">Positions</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {positions.map((job, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 border transition-all duration-300 group cursor-pointer ${job.active
                                ? 'bg-[#c41230] border-[#c41230] text-white shadow-xl shadow-red-900/20'
                                : 'bg-white border-gray-200 text-black hover:bg-[#c41230] hover:border-[#c41230] hover:text-white hover:shadow-xl hover:shadow-red-900/20'
                                }`}
                        >
                            {/* Arrow Icon */}
                            <div
                                className={`absolute top-8 right-8 w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 ${job.active
                                    ? 'bg-white border-white text-[#c41230]'
                                    : 'bg-white border-black text-black group-hover:bg-white group-hover:border-white group-hover:text-[#c41230]'
                                    }`}
                            >
                                <svg
                                    className="w-6 h-6 transform -rotate-45"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </div>

                            <h3 className="text-2xl font-bold mb-6 mr-14">
                                {job.title}
                            </h3>

                            <div className="space-y-2 text-sm md:text-base opacity-90">
                                <p>
                                    <span className="font-semibold">Morning shift :</span> {job.morningShift}
                                </p>
                                <p>
                                    <span className="font-semibold">Evening shift :</span> {job.eveningShift}
                                </p>
                                <p>
                                    <span className="font-semibold">Vacancies :</span> {job.vacancies}
                                </p>
                                <p>
                                    <span className="font-semibold">Salary :</span> {job.salary}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-center space-x-3 mt-8">
                    <button className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#c41230] hover:text-[#c41230] transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button className="w-10 h-10 rounded bg-[#c41230] text-white flex items-center justify-center font-bold">
                        1
                    </button>
                    <button className="w-10 h-10 rounded border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#c41230] hover:text-[#c41230] transition-colors">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OpenPositions;
