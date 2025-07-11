// import viteLogo from '/vite.svg'
import './App.module.css';
import { Header } from './components/header/header';
import { UserBlock } from './components/user-block/user-block';
import { AppContext } from './context';

const getUserFromServer = () => ({
	id: 'a11100',
	name: 'Danil',
	age: '20',
	email: 'email123@gmail.com',
	phone: 2283371,
});

function App() {
	const userData = getUserFromServer();
	return (
		<AppContext value={userData}>
			<>
				<Header />
				<hr />
				<UserBlock />
			</>
		</AppContext>
	);
}

export default App;
