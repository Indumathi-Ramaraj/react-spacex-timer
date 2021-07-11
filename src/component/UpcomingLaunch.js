
import React, { useState, useEffect } from 'react';

function UpcomingLaunch() {

    const [data, setData] = useState([])
    const columns = [
        { title: "Mission", field: "name" },
        { title: "Date(UTC)", field: "date_utc" },
        { title: "LaunchPad", field: "launchpad" }

    ]
    useEffect(() => {
        fetch("https://api.spacexdata.com/v4/launches/upcoming")
            .then(resp => resp.json())
            .then(resp => {
                setData(resp)
            })
    }, [])

    return (

        <div className="bg-gradient-to-r from-pink-600  to-purple-900 flex flex-col items-center  p-16 ">
            <h1 class="text-6xl font-bold mb-16 text-white " >Upcoming Launch</h1>

            <table className="w-full bg-gray-800 text-center text-white max-w-4xl">

                <tr className="py-2 flex justify-between  border-green-800">
                    {columns.map(col => <th className="w-full h-full  " key={col.field}>{col.title}</th>)}
                </tr>


                <tr>
                    {data.map(da => (
                        <div className="flex justify-between  border-collapse-collapse border-2 border-gray-200 " >
                            <td className="w-full h-full  text-left "> {da.name}</td>
                            <td className="w-full h-full  ">{da.date_utc}</td>
                            <td className="w-full h-full ">{da.launchpad}</td>

                        </div>
                    ))}
                </tr>


            </table >
        </div >

    );
}

export default UpcomingLaunch;
