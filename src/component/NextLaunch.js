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

    // timer();
    // setTimeout(() => {
    //     timer();
    // }, 1000);

    return (
        <div className="container">
            <h1>Upcoming : {isloaded ? next.name : ''}</h1>
            <div className="contain">
                <h1>{isloaded ? day : 0}</h1>
                <p>DAYS</p>
                <h1>{isloaded ? hour : 0}</h1>
                <p>HOURS</p>
                <h1>{isloaded ? minutes : 0}</h1>
                <p>MINUTES</p>
                <h1>{isloaded ? seconds : 0}</h1>
                <p>SECONDS</p>
            </div>

        </div>
    )
}

export default NextLaunch;
