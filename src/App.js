import { productInputs, userInputs } from 'constants/formSource';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, List, Login, New, Single } from './pages';

export default function App() {
	return (
		<>
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
		</>
	);
}
