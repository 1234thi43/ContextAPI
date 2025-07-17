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

const reducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_USER_DATA': {
			return payload;
		}
		case 'SET_USER_AGE': {
			return {
				...state,
				age: payload,
			};
		}
		default:
			return state;
	}
};

function App() {
	const [userData, setUserData] = useState({});

	const dispatch = (action) => {
		const newState = reducer(userData, action);

		setUserData(newState);
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
