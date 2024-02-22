import React from "react";
import "./Darkmode.css";

const DarkMode = () => {
    return (
        <div className='dark_mode'>

            <input
                className='dark_mode_input'
                type='checkbox'
                id='darkmode-toggle'
            />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'>

            </label>
        </div>
    );
};

export default DarkMode;
