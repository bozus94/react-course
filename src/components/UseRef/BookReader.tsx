//Objetivo 1: Nos permite crear una referencia mutable que persiste durante el ciclo de vida de un componente
//objetivo 2: Hacer referencia a un elemento del DOM

//al usar ref no visualizamos los cambios ya que react no los detecta de modo que ref no realiza un commit para por tanto no se ejecuta el re-render 

import { useRef, useState } from "react";

/* 
    ejemplo:
    - Un marcador de un libro lo utilizamos para guardar la ultima posición de lectura
    - Sim embargo no modifica el contenido del libro
*/

export const BookReader = () => {
	const currentPage = useRef<number>(0);
	const totalPage = 100;

	const [current, setCurrent] = useState(0);

	const nextPage = () => {
		currentPage.current += 1;
		console.log(`has avazando a la pagina ${currentPage.current}`);
	};

	const previousPage = () => {
		if (currentPage.current === 1) {
			console.log("No se puede retroceder, Ya estas en la primer pagina");
			return;
		}

		currentPage.current -= 1;
		console.log(`has retrocedido a la pagina ${currentPage.current}`);
	};

	const goToPage = (page: number) => {
		if (page < 1 || page > totalPage) {
			console.log("La pagina no existe");
			return;
		}

		currentPage.current = page;
		setCurrent(page);
		console.log(`has saltado a la pagina ${currentPage.current}`);
	};

	return (
		<div>
			<h2>Lectura de libro</h2>
			<p>Pagina actual: {currentPage.current}</p>
			<p>Pagina actual [ STATE ]: {current}</p>
			<button onClick={nextPage}>Pagina siguiente</button>
			<button onClick={previousPage}>Pagina anterior</button>
			<button
				onClick={() => {
					goToPage(50);
				}}
			>
				Avanzar pagina 50
			</button>
		</div>
	);
};
