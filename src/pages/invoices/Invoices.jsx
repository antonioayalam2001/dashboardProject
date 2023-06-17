import {Header} from "../../components/Header.jsx";
import {DataGrid} from "@mui/x-data-grid";
import {CustomToolbarMUI} from "../../components/CustomToolbarMUI.jsx";
import {getColors} from "../../helpers/getColors.js";
import {Box, Typography} from "@mui/material";
import {mockDataInvoices,} from "../../data/mockData.js";

export const Invoices = () => {
    const colors = getColors();
    const columns = [
        {field: "id", headerName: "ID"},
        {field: "name", headerName: "Name", cellClassName: 'name-column', flex: 1},
        {field: "email", headerName: "Email", flex: 1},
        {
            field: "cost", headerName: "Cost", type: 'number',

            renderCell: (params) => {
                const value = params.row.cost;
                const colorStyle = value>50 ? colors.pinkAccent[700] : colors.secondary[200]
                return <Typography fontWeight={'bold'} color = {colorStyle}>{value}</Typography>
            }
        },
        {field: "phone", headerName: "Phone"},
        {field: "date", headerName: "Date", flex: 1},
    ]

    return (
        <Box p={'1rem'} m={'20px'}>
            <Header title={'TEAM BOARD'} subtitle={'Manage the whole team in just one place'}/>
            <Box m={'40px 0 0 0'} height={'65vh'} sx={{
                '& .MuiDataGrid-root': {border: 'none'},
                '& .MuiDataGrid-footerContainer': {backgroundColor: colors.secondary[200], textAlign: 'center'},
                '& .MuiDataGrid-toolbarContainer .MuiButton-text': {color: 'white', textAlign: 'center', padding: '1rem'},
                '& .MuiCheckBox-root': {color: 'white', textAlign: 'center', padding: '1rem'},

            }}>
                <DataGrid checkboxSelection={true} columns={columns} rows={mockDataInvoices} components={{Toolbar: CustomToolbarMUI}} sx={{
                    '@media print': {
                        '.MuiDataGrid-main': {
                            color: 'rgba(49,49,49,0.87)',
                        },
                        '& .MuiDataGrid-columnHeader': {color: colors.white[200], textAlign: 'center', fontWeight: 'bolder'}
                    },
                    '& .MuiDataGrid-columnHeader': {backgroundColor: colors.secondary[200], textAlign: 'center'},
                    '& .MuiDataGrid-columnHeaderTitleContainer': {
                        justifyContent: 'center',
                        '& .MuiDataGrid-columnHeaderTitle': {textAlign: 'center', fontWeight: 'bold', fontSize: '0.8rem'}
                    },
                    '& .MuiDataGrid-cell': {justifyContent: 'center', borderBottom: 'none'},
                }}/>
            </Box>
        </Box>
    );
}