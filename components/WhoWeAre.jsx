import React from 'react';
import teamBackground from '../assets/images/teamBackgrond.png'; // Adjust path as necessary
import team from '../assets/images/team.png'
function WhoWeAre() {
    return (
        <div className="flex " style={{
            backgroundImage: `url(${teamBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'
        }}>
            <div className="flex flex-wrap xs:flex-col-reverse lg:flex-row md:flex-nowrap p-14">
                {/* Image Container */}
                <div className="xs:w-full lg:w-1/2 flex justify-center">
                    <img src={team} alt="Denning Team" className=" " />
                </div>

                {/* Content Container */}
                <div className="xs:w-full lg:w-1/2 flex items-center p-8">
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold mb-2">WHO WE ARE</h1>
                        <div className="w-24 h-1 bg-yellow-500 mb-4 my-5"></div> {/* Decorative underline */}
                        <p className="text-base md:text-lg">
                            Denning is one of the leading and largest recognised teaching centre of the
                            University of London offering multiple internationally recognised
                            qualifications at college, undergraduate and postgraduate level. Due to
                            quality academics, vibrant student life and a strong alumni network,
                            Denning has become one of the top choice for students pursuing world-class
                            and internationally recognised degrees and qualification whilst studying in Pakistan.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default WhoWeAre;
