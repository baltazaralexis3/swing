import React, { Component } from 'react';
import './EntryForm.css';
import Slider from '../Slider/Slider'
;
const EntryForm = (props) => {


    return(
        <div className='container'>
            <div className='row'>
                <div className='col s10'> 
                    <div className='card-panel teal lighten-5'>
                        <span className='white-text'>
                            <form className='entryForm'>
                                <h2>New Entry</h2>  
                                {/* date */}
                                <label>Today is</label>
                                <div className="input-field inline">
                                    <input type='date' />
                                </div>
                                <hr/>
                                <br/>
                                {/* sleep */}

                                <label>How much sleep did you get last night (hours)?</label>
                                <div>
                                    <input type="range" id="test5" min="0" max="15" step="0.5" defaultValue="0"/>
                                </div>
                                <hr/>
                                {/* meds */}
                                <div >
                                    <label>Took all doses of medication:</label>
                                    <div className="input-field inline">
                                        <div className="switch">
                                            <label>
                                                No
                                                <input type="checkbox"/>
                                                <span className="lever"></span>
                                                Yes
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <hr/>
                                <div>
                                    <label>From 0-10, rate the following:</label>
                                    <br/> <br/>
                                    {/* productivity/focus */}
                                    <label>Productivity and Focus</label>
                                    <p class="range-field">
                                        <input type="range" id="test5" min="0" max="10" defaultValue="5"/>
                                    </p>                
                                    {/* creativity/passion */}
                                    <label>Creativity and Passion</label>
                                    <p class="range-field">
                                        <input type="range" id="test5" min="0" max="10" defaultValue="5"/>
                                    </p>  
                                    {/* anxiety/distractedness */}
                                    <label>Anxiety and Preoccupation</label>
                                    <p class="range-field">
                                        <input type="range" id="test5" min="0" max="10" defaultValue="5"/>
                                    </p>  
                                    {/* dullness/indifference */}
                                    <label>Dullness and Indifference</label>
                                    <p class="range-field">
                                        <input type="range" id="test5" min="0" max="10" defaultValue="5"/>
                                    </p>  
                                    {/* energy level */}
                                    <label>Energy Level</label>
                                    <p class="range-field">
                                        <input type="range" id="test5" min="0" max="10" defaultValue="5"/>
                                    </p> 
                                </div>
                                <hr/>

                                {/* significant events */}
                                <div>
                                    <label>List a few of today's significant events:
                                    <input type='text'/></label>
                                    <input type='text'/>
                                    <input type='text'/>
                                </div>
                                <br/>
                                <hr/>
                                <br/>
                                
                                {/* mood range */}
                                <div>
                                    <label>Use the slider to select the range from your lowest to highest mood today (1-10):</label>
                                    <br/><br/>
                                    <Slider/>
                                </div>
                                <br/><br/>
                                <hr/><br/>
                                                
                                <div>
                                    {/* patient comments */}
                                    Notes:
                                    <br/><br/>

                                    <textarea></textarea>
                                    <br/><br/>
                                    {/* doctor comments */}
                                    Doctor Notes: 
                                    <br/>
                                    <label>Doctor Name</label>
                                    <div className="input-field inline">
                                        <input type='text'></input>
                                    </div>
                                    <textarea></textarea>
                                </div>
                            </form>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default EntryForm;


