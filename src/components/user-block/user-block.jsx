import { UserPersonalInfo } from './components/user-personal-info';
import { UserContacts } from './components/user-contacts';

export const UserBlock = () => {
	return (
		<>
			<h3>Пользователь: </h3>
			<UserPersonalInfo />
			<UserContacts />
		</>
	);
};
