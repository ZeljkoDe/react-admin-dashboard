import { DataTable, Navbar, Sidebar } from 'components';
import './list.scss';

export default function List() {
	return (
		<div className='list'>
			<Sidebar />
			<div className='list-container'>
				<Navbar />
				<DataTable />
			</div>
		</div>
	);
}
