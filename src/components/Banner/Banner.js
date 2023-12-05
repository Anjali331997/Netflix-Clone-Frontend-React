import React from 'react';
import './Banner.css'

function Banner() {
    return (
        <div className='banner'>
            <div className='content'>
                <h1 className='title'> Movie Name</h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My list</button>
                </div>
                <div className='description'>
                    A criminal mastermind who goes by "The Professor" has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor. As more time elapses, the robbers prepare for a showdown with the police.
                </div>
                
                <div className="fade_botton">
                    

                </div>
            </div>
        </div>
    )
}

export default Banner