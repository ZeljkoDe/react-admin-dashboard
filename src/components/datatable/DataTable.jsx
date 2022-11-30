import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from 'constants/dataTableSource';
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
						<div className='view-button'>View</div>
						<div className='delete-button'>Delete</div>
					</div>
				);
			},
		},
	];
	return (
		<div className='data-table'>
			<DataGrid
				rows={userRows}
				columns={userColumns.concat(actionColumn)}
				pageSize={9}
				rowsPerPageOptions={[5]}
				checkboxSelection
			/>
		</div>
	);
}
