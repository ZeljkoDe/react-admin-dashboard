import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from 'constants/dataTableSource';
import { Link } from 'react-router-dom';
import './data-table.scss';

export default function DataTable() {
	const actionColumn = [
		{
			filed: 'action',
			headerName: 'Action',
			width: 200,
			renderCell: () => {
				return (
					<div className='cell-action'>
						<div className='view-button'>
							<Link
								to='/users/test'
								style={{ textDecoration: 'none' }}
							>
								View
							</Link>
						</div>
						<div className='delete-button'>Delete</div>
					</div>
				);
			},
		},
	];
	return (
		<div className='data-table'>
			<div className='data-table-title'>
				Add New User
				<Link to='/users/new' className='link'>
					Add New
				</Link>
			</div>
			<DataGrid
				className='data-grid'
				rows={userRows}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
}
