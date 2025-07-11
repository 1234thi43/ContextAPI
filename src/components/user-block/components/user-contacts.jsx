export const UserContacts = ({ email, phone }) => {
	return (
		<>
			<h3>Контакты: </h3>
			<div>Телефон: {phone}</div>
			<div>Почта: {email}</div>
		</>
	);
};
