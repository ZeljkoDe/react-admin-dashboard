import { Chart, Featured, Navbar, Sidebar, Widget } from 'components';
import './home.scss';

export default function Home() {
	return (
		<div className='home'>
			<Sidebar />
			<div className='home-container'>
				<Navbar />
				<div className='widgets'>
					<Widget type='user' />
					<Widget type='order' />
					<Widget type='earning' />
					<Widget type='balance' />
				</div>
				<div className='charts'>
					<Featured />
					<Chart />
				</div>
			</div>
		</div>
	);
}
