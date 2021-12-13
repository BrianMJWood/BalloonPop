import React, { useState } from "react";
import './BalloonStyle.css';

const Balloon = (props) => {

    const [balloonHeight, setBalloonHeight] = useState(145);
    const [balloonWidth, setBalloonWidth] = useState(120);
    const [popped, setPopped] = useState(false);
    const [popValue, setPopValue] = useState(0.1)

    const inflateBalloon = () => {

        setBalloonHeight(balloonHeight + 25);
        setBalloonWidth(balloonWidth + 25);
        setPopValue(Math.random() + popValue + 0.1);

        if (popValue > 1) {
            setPopped(true);
            props.updateParent();
        }

    }
    return <div className="balloon" onClick={inflateBalloon} style={{height: balloonHeight + "px", width: balloonWidth + "px", display: popped ? "none" : "auto"}}></div>
}


export default Balloon;