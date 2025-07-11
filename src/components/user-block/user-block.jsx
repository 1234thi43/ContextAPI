import { UserPersonalInfo } from './components/user-personal-info';
import { UserContacts } from './components/user-contacts';

export const UserBlock = ({ name, age, email, phone }) => {
	return (
		<>
			<h3>Пользователь: </h3>
			<UserPersonalInfo name={name} age={age} />
			<UserContacts email={email} phone={phone} />
		</>
	);
};
