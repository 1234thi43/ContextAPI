// import viteLogo from '/vite.svg'
import './App.module.css';
import { useState, useEffect } from 'react';
import { Header } from './components/header/header';
import { UserBlock } from './components/user-block/user-block';
import { AppContext } from './context';
// import { AppContextProvider } from './app-component-provider';

const getUserFromServer = () => ({
	id: 'a11100',
	name: 'Danil',
	age: '20',
	email: 'email123@gmail.com',
	phone: 2283371,
});

const getAnotherUserFromServer = () => ({
	id: 'a11100',
	name: 'Vasya',
	age: '22',
	email: 'email123@gmail.com',
	phone: 2283371,
});

function App() {
	const [userData, setUserData] = useState({});

	// const reducer = (state, action) => {

	// }

	const dispatch = (action) => {
		const { type, payload } = action;

		switch (type) {
			case 'SET_USER_DATA': {
				setUserData(payload);
				break;
			}
			case 'SET_USER_AGE': {
				setUserData({
					...userData,
					age: payload,
				});
				break;
			}
			default:
			// nothing
		}
	};

	useEffect(() => {
		const userDataFromServer = getUserFromServer();

		setUserData(userDataFromServer);
	}, []);

	const onUserChange = () => {
		const anotherUserDataFromServer = getAnotherUserFromServer();

		setUserData(anotherUserDataFromServer);
	};

	return (
		<AppContext value={{ userData, dispatch }}>
			<>
				<Header />
				<hr />
				<UserBlock />
				<button onClick={onUserChange}>Сменить пользователя</button>
			</>
		</AppContext>
	);
}

export default App;
