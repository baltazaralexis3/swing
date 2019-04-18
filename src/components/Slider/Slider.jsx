import React from "react";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
 
const Slider = () => (
        <Nouislider range={{ min: 0, max: 10 }} start={[0, 10]} step={0.5} connect />
);

export default Slider;