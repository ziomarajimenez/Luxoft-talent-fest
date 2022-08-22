import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import ColorPanel from "./ColorPanel";
import MandalaOne from "./Mandala_1";
import MandalaTwo from "./Mandala_2";
import MandalaThree from "./Mandala_3";


function MandalaColorApp() {

    const [fillColors, setFillColors] = useState(Array(74).fill('white'))
    const [currentColor, setCurrentColor] = useState(" ")

    const onFillColor = (i) => {  
        let newFillColors = fillColors.slice(0)
        newFillColors[i] = currentColor
        setFillColors(newFillColors)
        }

    return (
        <div className="appContainer">
            <div className="mandala">
                <MandalaThree fillColors={fillColors} onFill={onFillColor} />
            </div>
            <div className="panel">
                <ColorPanel currentColor={currentColor} changeColor={setCurrentColor} />
            </div>
        </div>
    )
}

export default MandalaColorApp;