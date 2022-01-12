import {React, useState, useEffect} from 'react';

import Launche from '../spaceX_launche/Launch'


function Launches(props) {
    const [launches, setLaunches] = useState([])
    useEffect(() => {
        fetch(`https://api.spacexdata.com/v3/launches/`)
            .then(responce => responce.json())
            .then(launchesAll => {
                setLaunches(launchesAll.filter(item => item.launch_year !== '2020'))
            })
    }, [])
    const myLaunches = launches.map(item => {
        return (
            <Launche key={item.flight_number} mission_name={item.mission_name} launch_year={item.launch_year}
                     mission_patch={item.links.mission_patch}/>
        )
    })
    return (
        myLaunches
    );
}

export default Launches;