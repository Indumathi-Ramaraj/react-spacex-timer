import React, { useState, useEffect } from 'react';

import MaterialTable from 'material-table';
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

        <div className="App">

            <h1 align="center">Upcoming Launch</h1>
            <MaterialTable
                title="Upcoming Launch"
                data={data}
                columns={columns}

            />
        </div>

    );
}

export default UpcomingLaunch;
