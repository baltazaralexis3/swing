import React from "react";
import "./WelcomePage.css";
 
const Welcome = () => {
    return(
        <div className= 'container'>
            <div className='align-left'>
                <h1 className='teal-text text-accent-1'>welcome to swing.</h1>
                    <h5>
                        track your moods. pinpoint your triggers. prepare for swings.
                    </h5>
                    <button className='grey lighten-2 btn'>get started</button>
            </div>   
        </div>
    )
};


export default Welcome;