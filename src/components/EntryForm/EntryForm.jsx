import React, { Component } from 'react';
import './EntryForm.css';
import Slider from '../Slider/Slider'
;
const EntryForm = (props) => {


    return(
        <div className='entryFo'>
            <h1>New Entry</h1>
           <form className='entryForm'>
                {/* date */}
                {/* sleep */}
                <div classname='input-field-inline'>
                    How much sleep did you get last night?
                    <input type='text'/>
                </div>
                {/* meds */}
                Took all doses of medication?
                <div class="switch">
                    <label>
                        No
                    <input type="checkbox"/>
                    <span class="lever"></span>
                        Yes
                    </label>
                </div>
                From 0-10, rate the following:
                <hr/>
                {/* productivity/focus */}
                <label>Productivity and Focus</label>
                <p class="range-field">
                    <input type="range" id="test5" min="0" max="10"/>
                </p>                
                {/* creativity/passion */}
                <label>Creativity and Passion</label>
                <p class="range-field">
                    <input type="range" id="test5" min="0" max="10" />
                </p>  
                {/* anxiety/distractedness */}
                <label>Anxiety and Preoccupation</label>
                <p class="range-field">
                    <input type="range" id="test5" min="0" max="10" />
                </p>  
                {/* dullness/indifference */}
                <label>Dullness and Indifference</label>
                <p class="range-field">
                    <input type="range" id="test5" min="0" max="10" />
                </p>  
                {/* energy level */}
                <label>Energy Level</label>
                <p class="range-field">
                    <input type="range" id="test5" min="0" max="10" />
                </p> 
                {/* significant events */}
                What events marked today?
                <input type='text'/>
                <input type='text'/>
                <input type='text'/>
                {/* mood range */}
                Use the slider to select the range from your lowest to highest mood today (1-10):
                <Slider/>
                {/* patient comments */}
                Notes:
                <textarea></textarea>
                {/* doctor comments */}
                Doctor Notes:
                <textarea></textarea>
           </form>
        </div>
    )

}
export default EntryForm;


