import {getColors} from "../../helpers/getColors.js";
import {Box} from "@mui/material";
import {Header} from "../../components/Header.jsx";
import {DataGrid} from "@mui/x-data-grid";
import {mockDataContacts} from "../../data/mockData.js";
import {CustomToolbarMUI} from "../../components/CustomToolbarMUI.jsx";

export const Contacts = () => {
    const colors = getColors();
    const columns = [
        {field: "id", headerName: "ID"},
        {field: "registrarId", headerName: "Registrar Id"},
        {field: "name", headerName: "Name", cellClassName: 'name-column', flex: 1},
        {field: "age", headerName: "Age", type: 'number', cellClassName: 'age-column'},
        {field: "phone", headerName: "Phone"},
        {field: "email", headerName: "email", flex: 1},
        {field: "address", headerName: "Address", flex: 1},
        {field: "city", headerName: "City", flex: 0},
        {field: "zipCode", headerName: "ZIP", flex: 0},
    ]
    return (
        <Box p={'1rem'} m={'20px'}>
            <Header title={'Contacts'} subtitle={'Contacts List'}/>
            <Box m={'40px 0 0 0'} height={'65vh'} sx={{
                '& .MuiDataGrid-root': {border: 'none'},
                '& .MuiDataGrid-footerContainer': {backgroundColor: colors.secondary[200], textAlign: 'center'},
                '& .MuiDataGrid-toolbarContainer .MuiButton-text': {color: 'white', textAlign: 'center', padding: '1rem'},
            }}>
                <DataGrid columns={columns} rows={mockDataContacts} components={{Toolbar: CustomToolbarMUI}} sx={{
                    width: 'auto',
                    margin: '0 auto',
                    '@media print': {
                        '.MuiDataGrid-main': {
                            color: 'rgba(49,49,49,0.87)',
                        },
                        '& .MuiDataGrid-toolbarContainer': {display: 'none'},
                        '& .MuiDataGrid-cell': {minWidth: '100px !important', },
                        '& .MuiDataGrid-columnHeader': {minWidth: '100px !important',maxWidth: '100px !important'},
                    },
                    '& .MuiDataGrid-columnHeader': {backgroundColor: colors.secondary[200], textAlign: 'center'},
                    '& .MuiDataGrid-columnHeaderTitleContainer': {
                        justifyContent: 'center',
                    },
                    '& .MuiDataGrid-cell': {borderBottom: 'none', minWidth: 'fit-content'},
                    '& .age-column': {justifyContent: 'center', flexShrink: 10},

                }}/>
            </Box>
        </Box>
    );
}