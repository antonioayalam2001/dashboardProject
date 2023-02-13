import {getColors} from "../../helpers/getColors.js";
import {Box, Typography} from "@mui/material";
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";
import {Header} from "../../components/Header.jsx";
import {DataGrid, GridToolbarContainer, GridToolbarExport} from "@mui/x-data-grid";
import {mockDataTeam} from "../../data/mockData.js";

function CustomToolbar() {
    return (
        <GridToolbarContainer>
            <GridToolbarExport color={"secondary"}/>
        </GridToolbarContainer>
    );
}

export const Team = () => {
    const colors = getColors();
    const columns = [
        {field: "id", headerName: "ID"},
        {field: "name", headerName: "Name", flex: 1, cellClassName: 'name-column'},
        {field: "age", headerName: "Age", type: 'number', headerAlign: 'left', cellClassName: 'age-column'},
        {field: "phone", headerName: "Phone", flex: 1},
        {field: "email", headerName: "email", flex: 1},
        {
            field: "access", headerName: "access Level", flex: 1, renderCell: ({row: {access}}) => {
                return (<Box width={"50%"} margin={"0 auto"} p={'5px'} display={'flex'} justifyContent={'center'} bgcolor={
                    access === 'admin' ? colors.lightPinkAccent[200] : colors.blueAccent[100]
                } borderRadius={'10px'}
                >
                    {access === 'admin' && <AdminPanelSettingsOutlined/>}
                    {access === 'manager' && <SecurityOutlined/>}
                    {access === 'user' && <LockOpenOutlined/>}
                    <Typography color={colors.grey[100]} fontWeight={'bolder'} sx={{ml: '5px'}}>{access}</Typography>
                </Box>)
            }
        },
    ]
    return (
        <Box p={'1rem'} m={'20px'}>Team view
            <Header title={'TEAM BOARD'} subtitle={'Manage the whole team in just one place'}/>
            <Box m={'40px 0 0 0'} height={'65vh'} sx={{
                '& .MuiDataGrid-root': {border: 'none'},
                '& .MuiDataGrid-footerContainer': {backgroundColor: colors.blueAccent[200], textAlign: 'center'},
            }}>
                <DataGrid columns={columns} rows={mockDataTeam} components={{Toolbar: CustomToolbar}} sx={{
                    '@media print': {
                        '.MuiDataGrid-main': {
                            color: 'rgba(49,49,49,0.87)',
                        },
                        '& .MuiDataGrid-columnHeader': {color: colors.lightPinkAccent[200], textAlign: 'center', fontWeight: 'bolder'}
                    },
                    '& .MuiDataGrid-columnHeader': {backgroundColor: colors.blueAccent[200], textAlign: 'center'},
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