import React from "react";
import "./MandalaColorApp.css";

const ColorPanel = (props) => {
    
    const {currentColor, setCurrentColor, changeColor} = props
    const colors = ["#006975", "#6CC24A", "#FFCD00", "#EC7BA4", "#F9F048", "#00968F", "#00A3E1", "#ED9B33", "#003A79", "#0E56E9", "#C9A2FF", "#CA38DE"]

    return (
        <>
        <div className="colorPanel">
            <div className="colorButtons">
                {colors.map(color => {
                    const activeClass = currentColor === color ? 'color-swatch-active' : '';
                    return (
                    
                        <div onClick={() => {changeColor(color)}}>
                            <div key={color} className={`color-swatch ${activeClass}`}  style={{backgroundColor: color}}></div>
                        </div>
                    )
                })}
            </div>
            <div className="navColor">
                {/* <input type="color" className="colorSelector"  /> */}
                {/* value={currentColor} onChange={(e) => setCurrentColor(e.target.value)} */}
            </div>
            <div className="controlButtons">
                <button className="controlButton">Nuevo mandala</button>
                {/* <button className="controlButton">Limpiar</button> */}
            </div>
        </div>
        </>
    )
}

export default ColorPanel;