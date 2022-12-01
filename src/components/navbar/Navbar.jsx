import { useContext } from 'react';
import { DarkModeContext } from 'context/darkModeContext';
import {
	LanguageOutlinedIcon,
	SearchOutlinedIcon,
	DarkModeOutlinedIcon,
	FullscreenExitOutlinedIcon,
	NotificationsNoneOutlinedIcon,
	ChatBubbleOutlineOutlinedIcon,
	ListOutlinedIcon,
} from 'constants/icons';
import './navbar.scss';

export default function Navbar() {
	const { dispatch } = useContext(DarkModeContext);

	return (
		<div className='navbar'>
			<div className='wrapper'>
				<div className='search'>
					<input type='text' placeholder='Search...' />
					<SearchOutlinedIcon />
				</div>
				<div className='items'>
					<div className='item'>
						<LanguageOutlinedIcon className='icon' />
						English
					</div>
					<div
						className='item'
						onClick={() => dispatch({ type: 'TOGGLE' })}
					>
						<DarkModeOutlinedIcon className='icon' />
					</div>
					<div className='item'>
						<FullscreenExitOutlinedIcon className='icon' />
					</div>
					<div className='item'>
						<NotificationsNoneOutlinedIcon className='icon' />
						<div className='counter'>1</div>
					</div>
					<div className='item'>
						<ChatBubbleOutlineOutlinedIcon className='icon' />
						<div className='counter'>1</div>
					</div>
					<div className='item'>
						<ListOutlinedIcon className='icon' />
					</div>
					<div className='item'>
						<img
							src='https://picsum.photos/30'
							alt='user avatar'
							className='avatar'
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
