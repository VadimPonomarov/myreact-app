import React from 'react';

function SpaceXLaunch({mission_name, launch_year, mission_patch}) {
    return (
        <div className={'d-flex m-2 p-2 border border-2'}>
            <div className={'card border-0 d-flex col-4 justify-content-center p-3'}>
                <h1 className={'col-12'}>
                    {mission_name}</h1>
                <div>{launch_year}</div>
            </div>
            <div className={'d-flex col-8 justify-content-center'}>
                <img src={mission_patch} style={{width: '150px', height: 'auto'}} alt='Mission-patch' />
            </div>

        </div>
    );
}

export default SpaceXLaunch;