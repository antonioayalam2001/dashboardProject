import {getColors} from "../../helpers/getColors.js";
import {Box, Typography} from "@mui/material";
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";
import {Header} from "../../components/Header.jsx";
import {DataGrid} from "@mui/x-data-grid";
import {mockDataTeam} from "../../data/mockData.js";


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
                return (<Box width={"60%"} margin={"0 auto"} p={'5px'} display={'flex'} justifyContent={'center'} bgcolor={
                    access === 'admin' ? colors.lightPinkAccent[200] : colors.blueAccent[100]
                } borderRadius={'10px'}
                >
                    {access === 'admin' && <AdminPanelSettingsOutlined/>}
                    {access === 'manager' && <SecurityOutlined/>}
                    {access === 'user' && <LockOpenOutlined/>}
                    <Typography color={colors.grey[600]} sx={{ml: '5px'}}>{access}</Typography>
                </Box>)
            }
        },
    ]
    return (
        <Box p={'1rem'} m={'20px'}>Team view
            <Header title={'TEAM BOARD'} subtitle={'Manage the whole team in just one place'}/>
                <Box m={'40px 0 0 0'} height={'75vh'} >
                    <DataGrid columns={columns} rows={mockDataTeam}/>
                </Box>
        </Box>
    );
}