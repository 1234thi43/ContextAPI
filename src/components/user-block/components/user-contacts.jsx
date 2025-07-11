import { useContext } from 'react';
import { AppContext } from '../../../context';

export const UserContacts = () => {
	const { email, phone } = useContext(AppContext);

	return (
		<>
			<h3>Контакты: </h3>
			<div>Телефон: {phone}</div>
			<div>Почта: {email}</div>
		</>
	);
};
