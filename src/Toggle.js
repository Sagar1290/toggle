import React, { useState } from 'react';
import './Toggle.css'

const BackgroundColorChanger = () => {
    const [bgColor, setBgColor] = useState('#ffffff'); // Initial background color

    const handleButtonClick = () => {
        // Generate a random color for the background (you can change this logic as needed)
        const randomColor = getRandomColor();
        setBgColor(randomColor);
    };

    // Helper function to generate a random color
    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    return (
        <div style={{ backgroundColor: bgColor, height: '100vh' }}>
            <div className='child'>
                <i className='fa-solid fa-play' onClick={handleButtonClick}></i>
                <h2>change background</h2>
            </div>
        </div>
    );
};

export default BackgroundColorChanger;
