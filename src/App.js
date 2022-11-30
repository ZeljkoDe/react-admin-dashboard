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
						<Route path='new' element={<New />} />
					</Route>
					<Route path='/products'>
						<Route index element={<List />} />
						<Route path=':productID' element={<Single />} />
						<Route path='new' element={<New />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}
