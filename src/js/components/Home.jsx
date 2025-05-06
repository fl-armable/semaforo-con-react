import Semaforo from "./semaforo.jsx";
import React, { useState, useEffect } from "react";

//create your first component
const Home = () => {
	const [colorLight, setColorLight] = useState('red');
	useEffect(() => {
		const timerId = setInterval(() => { 
            // Usamos la función de actualización para garantizar el estado más reciente
            setColorLight((prevColor) => {
                const setColor = ['red', 'green', 'yellow'];
                let index = setColor.indexOf(prevColor);
                return setColor[(index + 1) % setColor.length]; // Si el índice es 2, vuelve a 0
            });
		}, 3000);
		return () => clearInterval(timerId);
	}, []);
	return (
	<Semaforo
	color={colorLight}
	/>
	);
};


export default Home;