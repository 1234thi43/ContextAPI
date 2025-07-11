import { CurrentUser } from './components/current-user';

export const Header = ({ currentUser }) => {
	return (
		<>
			<div>Информация в шапке приложения</div>
			<CurrentUser currentUser={currentUser} />
		</>
	);
};
