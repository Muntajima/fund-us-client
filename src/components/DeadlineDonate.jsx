import React, { useState, useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router";

const DeadlineDonate = () => {

    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const currentTime = new Date();
            const lastDayOfMonth = new Date(currentTime.getFullYear(), currentTime.getMonth() + 1, 0); // Last day of current month

            const difference = lastDayOfMonth - currentTime;
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            setCountdown({
                days,
                hours,
                minutes,
                seconds,
            });
        };
        const intervalId = setInterval(calculateTimeLeft, 1000);

        calculateTimeLeft();

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Fade>
            <div className="flex flex-col md:flex-row items-center justify-between bg-slate-600 text-white p-8">
                <div>
                    <h1 className="text-4xl font-bold">
                        DONATION <span className="text-rose-700">DEADLINE</span>
                    </h1>
                    <p className="mt-4 text-lg font-light">Donate at FundUs before times out.</p>
                    <div className="flex justify-center md:justify-start gap-4 mt-6 text-center">
                        <div>
                            <p className="text-4xl font-bold ">{countdown.days}</p>
                            <p className="text-sm font-light">DAYS</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold">{countdown.hours}</p>
                            <p className="text-sm font-light">HOURS</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold">{countdown.minutes}</p>
                            <p className="text-sm font-light">MINS</p>
                        </div>
                        <div>
                            <p className="text-4xl font-bold ">{countdown.seconds}</p>
                            <p className="text-sm font-light">SECS</p>
                        </div>
                    </div>
                    <Link to="/all-campaign-card" className="btn mt-6 px-6 py-2 btn-outline bg-white transition">
                        See Details →
                    </Link>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 mt-8 md:mt-0"
                >
                    <img
                        src="https://i.ibb.co.com/yVYw3MM/med-1.webp"
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </Fade>

    );
};

export default DeadlineDonate;