//objetivo: memoriza la instancia de una función
//hace que un hijo no renderice

import { useCallback, memo, useState } from "react";

//ejemplo: imagina que tienes un numero al que llamas con frecuencia
//en vez de marcarlo continuamente lo guardamos en los contactos del teléfono
//a menos que el numero cambie utilizare el mismo contacto

interface Contact {
	id: number;
	name: string;
	phone: string;
}

interface ContactsProps {
	contact: Contact;
	onCall: (name: string) => void;
}

//memo: evita el re-renderizado de un componente si su contenido no cambia
const ContactCard = memo(({ contact, onCall }: ContactsProps) => {
	console.log(`Renderizando ${contact.name}`);

	return (
		<div>
			<h3>{contact.name}</h3>
			<p>{contact.phone}</p>
			<button onClick={() => onCall(contact.name)}>Llamar</button>
		</div>
	);
});

export const PhoneBook = () => {
	const [contacts, setContacts] = useState<Contact[]>([
		{ id: 1, name: "manzana", phone: "123-456-7489" },
		{ id: 2, name: "Pera", phone: "132-789-8420" },
		{ id: 3, name: "Fresa", phone: "564-356-4174" },
	]);

	const [log, setLog] = useState<string>("");

	const makeCall = useCallback((name: string) => setLog(`Llamando al contacto ${name} `), [setLog]);

	const makePhone = (): string =>
		`${Math.floor(100 * Math.random() * 10)}-${Math.floor(100 * Math.random() * 10)}-${Math.floor(
			100 * Math.random() * 100
		)}`;

	const addContact = () => {
		const newContact = {
			id: contacts.length + 1,
			name: `Contacto ${contacts.length + 1}`,
			phone: makePhone(),
		};

		setContacts([...contacts, newContact]);
	};

	return (
		<>
			<h2>Agenda de contacto</h2>
			{contacts.map((item) => (
				<ContactCard key={item.id} contact={item} onCall={makeCall} />
			))}
			<button onClick={addContact}>Agregar contacto</button>
			<p>{log}</p>
		</>
	);
};
