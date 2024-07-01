import React from 'react';
import admissionBanner from '../assets/images/admissionBanner.png';

function AdmissionBanner() {
    return (
        <div className="relative bg-cover bg-center text-center text-white py-16 "
            style={{
                backgroundImage: `url(${admissionBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}>
            <div className="absolute inset-0 bg-[#59566c] bg-opacity-50"></div>
            <div className="relative">
                <h1 className="text-4xl md:text-5xl font-semibold">ADMISSIONS OPEN</h1>
                <p className="text-xl md:text-[115px] my-12 font-bold">2024-2025</p>
                <a href="/apply" className="mt-6 inline-block bg-yellow-500 text-black font-bold py-3 px-8 rounded-full transition-colors hover:bg-yellow-600">
                    APPLY NOW
                </a>
            </div>
        </div>
    );
}

export default AdmissionBanner;


