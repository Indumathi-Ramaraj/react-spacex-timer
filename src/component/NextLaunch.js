import React, { useState, useEffect } from "react";

const NextLaunch = () => {
    const [next, setNext] = useState({});
    const [isloaded, setIsloaded] = useState(false)
    const [day, setDay] = useState(0);
    const [hour, setHour] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v4/launches/upcoming')
            .then(res => res.json())
            .then(result => {
                setIsloaded(true);
                setNext(result[1]);
                // console.log(result);
            })
            .catch(error => console.log(error))
    }, []);

    function timer() {
        const nextDate = new Date(next.date_local)
        const currentDate = new Date();
        const totalSeconds = ((nextDate - currentDate) / 1000);
        // console.log(next)
        setDay(Math.floor(totalSeconds / 3600 / 24));
        setHour(Math.floor(totalSeconds / 3600) % 24);
        setMinutes(Math.floor(totalSeconds / 60) % 60);
        setSeconds(Math.floor(totalSeconds) % 60);
    }


    setTimeout(() => {
        timer();
    }, 1000);

    return (
        <div className="bg-gradient-to-r from-blue-500  to-gray-700   flex flex-col items-center py-24  ">
            <h1 className="font-bold text-6xl mb-24 text-white">Upcoming : {isloaded ? next.name : ''}</h1>
            <div className="bg-gray-700 px-56 py-16 rounded-lg text-center text-white font-mono ">
                <h1 className="text-8xl mb-2">{isloaded ? day : 0}</h1>
                <p className="border border-white rounded-lg px-2 mb-5 tracking-tight inline-block text-xl " >DAYS</p>
                <h1 className="text-8xl mb-2">{isloaded ? hour : 0}</h1>
                <p className="border border-white rounded-lg  px-2 mb-5 tracking-tight inline-block text-xl">HOURS</p>
                <h1 className="text-8xl mb-2">{isloaded ? minutes : 0}</h1>
                <p className="border border-white rounded-lg px-2 mb-5 tracking-tight inline-block text-xl">MINUTES</p>
                <h1 className="text-8xl mb-2">{isloaded ? seconds : 0}</h1>
                <p className="border border-white rounded-lg px-2 tracking-tight inline-block text-xl">SECONDS</p>
            </div>

        </div>
    )
}

export default NextLaunch;
