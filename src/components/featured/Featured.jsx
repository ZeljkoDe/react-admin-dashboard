import {
	KeyboardArrowDownIcon,
	KeyboardArrowUpIcon,
	MoreVertIcon,
} from 'constants/icons';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './featured.scss';

export default function Featured() {
	return (
		<div className='featured'>
			<div className='top'>
				<h1 className='title'>Total Revenue</h1>
				<MoreVertIcon fontSize='small' />
			</div>
			<div className='bottom'>
				<div className='featured-chart'>
					<CircularProgressbar
						value={70}
						text={'70%'}
						strokeWidth={5}
					/>
				</div>
				<p className='title'>Total sales made today</p>
				<p className='amount'>$240</p>
				<p className='desc'>
					Previous transactions processing. Last payments may not be
					included.
				</p>
				<div className='summary'>
					<div className='item'>
						<div className='item-title'>Target</div>
						<div className='item-result negative'>
							<KeyboardArrowDownIcon fontSize='small' />
							<div className='result-amount'>$12.4k</div>
						</div>
					</div>
					<div className='item'>
						<div className='item-title'>Last Week</div>
						<div className='item-result positive'>
							<KeyboardArrowUpIcon fontSize='small' />
							<div className='result-amount'>$12.4k</div>
						</div>
					</div>
					<div className='item'>
						<div className='item-title'>Last Month</div>
						<div className='item-result positive'>
							<KeyboardArrowUpIcon fontSize='small' />
							<div className='result-amount'>$12.4k</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}