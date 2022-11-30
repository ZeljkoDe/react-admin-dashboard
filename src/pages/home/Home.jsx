import { Chart, Featured, Navbar, Sidebar, Table, Widget } from 'components';
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
					<Chart aspect={2 / 1} title='Last 6 Months (Revenue)' />
				</div>
				<div className='lists'>
					<div className='list-title'>Latest Transactions</div>
					<Table />
				</div>
			</div>
		</div>
	);
}
