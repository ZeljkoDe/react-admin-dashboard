import { useContext } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { productInputs, userInputs } from 'constants/formSource';
import { DarkModeContext } from 'context/darkModeContext';
import { Home, List, Login, New, Single } from './pages';
import './style/dark.scss';

export default function App() {
	const { darkMode } = useContext(DarkModeContext);
	console.log(darkMode);
	const className = `app ${darkMode ? 'dark' : ''}`;
	return (
		<div className={className}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/users'>
						<Route index element={<List />} />
						<Route path=':userId' element={<Single />} />
						<Route
							path='new'
							element={
								<New inputs={userInputs} title='Add New User' />
							}
						/>
					</Route>
					<Route path='/products'>
						<Route index element={<List />} />
						<Route path=':productID' element={<Single />} />
						<Route
							path='new'
							element={
								<New
									inputs={productInputs}
									title='Add New Product'
								/>
							}
						/>
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}
