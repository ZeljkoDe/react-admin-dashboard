import {
	KeyboardArrowUpIcon,
	PersonOutlineIcon,
	AccountBalanceWalletOutlinedIcon,
	ShoppingCartOutlinedIcon,
	MonetizationOnOutlinedIcon,
} from 'constants/icons';
import './widget.scss';

export default function Widget({ type }) {
	let data;

	// temporary
	const amount = 100;
	const diff = 20;

	switch (type) {
		case 'user':
			data = {
				title: 'USERS',
				isMoney: false,
				link: 'See all users',
				icon: (
					<PersonOutlineIcon
						className='icon'
						style={{
							color: 'crimson',
							backgroundColor: 'rgba(255,0,0,0.2)',
						}}
					/>
				),
			};
			break;
		case 'order':
			data = {
				title: 'ORDERS',
				isMoney: false,
				link: 'View all orders',
				icon: (
					<ShoppingCartOutlinedIcon
						className='icon'
						style={{
							backgroundColor: 'rgba(218, 165, 32, 0.2)',
							color: 'goldenrod',
						}}
					/>
				),
			};
			break;
		case 'earning':
			data = {
				title: 'EARNINGS',
				isMoney: true,
				link: 'View all earning',
				icon: (
					<MonetizationOnOutlinedIcon
						className='icon'
						style={{
							color: 'green',
							backgroundColor: 'rgba(0,128,0,0.2)',
						}}
					/>
				),
			};
			break;
		case 'balance':
			data = {
				title: 'BALANCE',
				isMoney: true,
				link: 'See details',
				icon: (
					<AccountBalanceWalletOutlinedIcon
						className='icon'
						style={{
							backgroundColor: 'rgba(128, 0, 128, 0.2)',
							color: 'purple',
						}}
					/>
				),
			};
			break;
		default:
			break;
	}

	return (
		<div className='widget'>
			<div className='left'>
				<span className='title'>{data.title}</span>
				<span className='counter'>
					{data.isMoney && '$'} {amount}
				</span>
				<span className='link'>{data.link}</span>
			</div>
			<div className='right'>
				<div className='percentage positive'>
					<KeyboardArrowUpIcon />
					{diff} %
				</div>
				{data.icon}
			</div>
		</div>
	);
}
