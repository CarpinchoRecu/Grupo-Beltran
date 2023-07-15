import React, { useEffect } from "react";

const NotesNav = () => {

    // Animacion de las notas
    useEffect(() => {
        let currentText = 1;

        const noteAnimate = () => {
            const text1 = document.querySelector(".note1");
            const text2 = document.querySelector(".note2");

            if (currentText === 1) {
                text1.style.display = "none";
                text2.style.display = "block";
                currentText = 2;
            } else {
                text1.style.display = "block";
                text2.style.display = "none";
                currentText = 1;
            }
        };

        const intervalId = setInterval(noteAnimate, 5600);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="note">
            <h2 className="note1">
                Elegimos la mejor opcion
            </h2>
            <h2 className="note2">Asesoría y Seguimiento</h2>
        </div>
    );
};

export default NotesNav;
