import React, { useState, useEffect } from "react";

const NumberCounter = ({ startNumber, finalNumber, tiempo }) => {
    const [currentNumber, setCurrentNumber] = useState(startNumber);

    useEffect(() => {
        if (startNumber <= finalNumber) {
            const interval = setInterval(() => {
                if (currentNumber < finalNumber) {
                    setCurrentNumber((prevNumber) => prevNumber + 1);
                }
            }, tiempo);

            return () => {
                clearInterval(interval);
            };
        }
    }, [currentNumber, finalNumber, startNumber]);

    return (
        <div>
            <p>{currentNumber}+</p>
        </div>
    );
};

export default NumberCounter;
