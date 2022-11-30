import { Navbar, Sidebar } from 'components';
import './home.scss';

export default function Home() {
	return (
		<div className='home'>
			<Sidebar />
			<div className='home-container'>
				<Navbar />
			</div>
		</div>
	);
}
