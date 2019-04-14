import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
 
const Slider = () => (
    <div id="test-slider">
        <Nouislider range={{ min: 0, max: 10 }} start={[3, 7]} connect />
    </div>
);

export default Slider;