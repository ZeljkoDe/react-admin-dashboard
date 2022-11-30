import {
	DashboardIcon,
	PersonOutlineIcon,
	LocalShippingIcon,
	CreditCardIcon,
	StoreIcon,
	InsertChartIcon,
	SettingsApplicationsIcon,
	ExitToAppIcon,
	NotificationsNoneIcon,
	SettingsSystemDaydreamOutlinedIcon,
	PsychologyOutlinedIcon,
	AccountCircleOutlinedIcon,
} from 'constants/icons';
import './sidebar.scss';

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='top'>
				<div className='logo'>adminPanel</div>
			</div>
			<div className='center'>
				<ul>
					<p className='title'>MAIN</p>
					<li>
						<DashboardIcon className='icon' />
						<span>Dashboard</span>
					</li>
					<p className='title'>LISTS</p>
					<li>
						<PersonOutlineIcon className='icon' />
						<span>Users</span>
					</li>
					<li>
						<StoreIcon className='icon' />
						<span>Products</span>
					</li>
					<li>
						<CreditCardIcon className='icon' />
						<span>Orders</span>
					</li>
					<li>
						<LocalShippingIcon className='icon' />
						<span>Delivery</span>
					</li>
					<p className='title'>USEFUL</p>
					<li>
						<InsertChartIcon className='icon' />
						<span>Stats</span>
					</li>
					<li>
						<NotificationsNoneIcon className='icon' />
						<span>Notifications</span>
					</li>
					<p className='title'>SERVICE</p>
					<li>
						<SettingsSystemDaydreamOutlinedIcon className='icon' />
						<span>System Health</span>
					</li>
					<li>
						<PsychologyOutlinedIcon className='icon' />
						<span>Logs</span>
					</li>
					<li>
						<SettingsApplicationsIcon className='icon' />
						<span>Settings</span>
					</li>
					<p className='title'>USER</p>
					<li>
						<AccountCircleOutlinedIcon className='icon' />
						<span>Profile</span>
					</li>
					<li>
						<ExitToAppIcon className='icon' />
						<span>Logout</span>
					</li>
				</ul>
			</div>
			<div className='bottom'>
				<div className="color-option"></div>
				<div className="color-option"></div>
			</div>
		</div>
	);
}
