import { Chart, Navbar, Sidebar, Table } from 'components';
import './single.scss';

export default function Single() {
	return (
		<div className='single'>
			<Sidebar />
			<div className='single-container'>
				<Navbar />
				<div className='top'>
					<div className='left'>
						<div className='edit-button'>Edit</div>
						<h1 className='title'>Information</h1>
						<div className='item'>
							<img
								src='https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
								alt=''
								className='item-img'
							/>
							<div className='details'>
								<h1 className='item-title'>Jana Doe</h1>
								<div className='detail-item'>
									<span className='item-key'>Email:</span>
									<span className='item-value'>
										test@gmail.com
									</span>
								</div>
								<div className='detail-item'>
									<span className='item-key'>Phone:</span>
									<span className='item-value'>
										+367 8237 238
									</span>
								</div>
								<div className='detail-item'>
									<span className='item-key'>Address:</span>
									<span className='item-value'>
										Test 2, New York
									</span>
								</div>
								<div className='detail-item'>
									<span className='item-key'>Country:</span>
									<span className='item-value'>USA</span>
								</div>
							</div>
						</div>
					</div>
					<div className='right'>
						<Chart
							aspect={3 / 1}
							title='User Spending (Last 6 Months)'
						/>
					</div>
				</div>
				<div className='bottom'>
					<h1 className='title'>Last Transactions</h1>
					<Table />
				</div>
			</div>
		</div>
	);
}
