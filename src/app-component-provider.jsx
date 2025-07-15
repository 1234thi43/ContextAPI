import { ThemeContext } from './ThemeContext';
import { UserDataContext } from './UserDataContext';
import { AppConfig } from './AppConfig';

export const AppContextProvider = ({
	themeValue,
	userValue,
	appConfigValue,
	children,
}) => {
	return (
		<ThemeContext.Provider value={themeValue}>
			<UserDataContext.Provider value={userValue}>
				<AppConfig.Provider value={appConfigValue}>{children}</AppConfig.Provider>
			</UserDataContext.Provider>
		</ThemeContext.Provider>
	);
};
