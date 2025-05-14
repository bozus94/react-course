//objetivo: memorizar (cache) el resultado de una función costosa que se vuelve a llamar
//compara si el beneficio de memorizarlo es mayor al de recalcularlo

import { useMemo, useState } from "react";

//ejemplo:
// tenemos una lista de compra y ya calculaste el costo total de toda la compra
//si no agregamos nada ni cambiamos nada , cual es el costo total?

interface ItemsPros {
	id: number;
	name: string;
	price: number;
}

export const ShoppingCart = () => {
	const [items, setItems] = useState<ItemsPros[]>([
		{ id: 1, name: "manzana", price: 2 },
		{ id: 2, name: "Pera", price: 1 },
		{ id: 3, name: "Fresa", price: 1.5 },
	]);

	const [discount, setDiscount] = useState<number>(0);

	const totalCost = useMemo(() => items.reduce((total, item) => (total = total + item.price), 0), [items]);

	const finalCost = useMemo(() => totalCost - discount, [totalCost, discount]);

	const addItem = () => {
		const newItem = {
			id: items.length + 1,
			name: `Product${Math.random() * 100}`,
			price: Math.random() * 5,
		};

		setItems([...items, newItem]);
	};

	return (
		<>
			<h1>Shopping Cart</h1>
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						{item.name}: {item.price.toFixed(2)}
					</li>
				))}
			</ul>

			<p>Subtotal: {totalCost.toFixed(2)} </p>

			<p>
				Descuento: $
				<input
					type="number"
					value={discount}
					name="discount"
					onChange={(e) => setDiscount(parseFloat(e.target.value) | 0)}
				/>
			</p>

			<p>Total: $ ${finalCost.toFixed(2)}</p>

			<button onClick={addItem}>Agregar item </button>
		</>
	);
};
