import {getColors} from "../../helpers/getColors.js";
import {Box, Typography} from "@mui/material";
import AdminPanelSettingsOutlined from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlined from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlined from "@mui/icons-material/SecurityOutlined";
import {Header} from "../../components/Header.jsx";
import {DataGrid} from "@mui/x-data-grid";
import {mockDataTeam} from "../../data/mockData.js";
import {CustomToolbarMUI} from "../../components/CustomToolbarMUI.jsx";
import { useWindowWidth } from "../../hooks/useWindowWidth.js";


export const Team = () => {
    const colors = getColors();
    const {graphicWidth} = useWindowWidth();
    const columns = [
        {field: "id", headerName: "ID"},
        {field: "name", headerName: "Name", flexShrink: 1, cellClassName: 'name-column'},
        {field: "age", headerName: "Age", type: 'number', headerAlign: 'left', cellClassName: 'age-column'},
        {field: "phone", headerName: "Phone", flex: 1},
        {field: "email", headerName: "email", flex: 1},
        {
            field: "access", headerName: "access Level", flex: 1, renderCell: ({row: {access}}) => {
                return (
                    <Box  minWidth={"100px"} flexShrink={1} p={'5px'} display={'flex'} justifyContent={'space-around'} bgcolor={
                    access === 'admin' ? colors.secondary[200] : colors.primary[800]
                } borderRadius={'10px'}
                    sx={{'&:hover': {backgroundColor: colors.primary[100]}, cursor: 'pointer', color: colors.black[100]}}
                >
                    {access === 'admin' && <AdminPanelSettingsOutlined/>}
                    {access === 'manager' && <SecurityOutlined/>}
                    {access === 'user' && <LockOpenOutlined/>}
                    <Typography color={colors.black[100]} fontWeight={'bolder'} sx={{ml: '5px'}}>{access}</Typography>
                </Box>)
            }
        },
    ]
    return (
        <Box p={'3rem'} m={'20px'} >
            <Header title={'TEAM BOARD'} subtitle={'Manage the whole team in just one place'}/>
            <Box m={'40px 0 0 0'} height={'65vh'} sx={{
                '& .MuiDataGrid-root': {border: 'none'},
                '& .MuiDataGrid-footerContainer': {
                    backgroundColor: colors.primary[400], textAlign: 'center',
                    '& .MuiTablePagination-root .MuiTablePagination-toolbar p': {textAlign: 'center', fontWeight: 'bolder', fontSize: '0.8rem',color: colors.black[400]}},
                '& .MuiDataGrid-toolbarContainer .MuiButton-text': {
                    color: colors.black[300], textAlign: 'center', padding: '1rem',
                },
            }}>
                <DataGrid columns={columns} rows={mockDataTeam} components={{Toolbar: CustomToolbarMUI}} sx={{
                    '@media print': {
                        '.MuiDataGrid-main': {
                            color: 'rgba(49,49,49,0.87)',
                        },
                        '& .MuiDataGrid-columnHeader': {color: colors.black[800], textAlign: 'center', fontWeight: 'bolder'}
                    },
                    '& .MuiDataGrid-columnHeader': {backgroundColor: colors.primary[400], textAlign: 'center'},
                    '& .MuiDataGrid-columnHeaderTitleContainer': {
                        justifyContent: 'center',
                        '& .MuiDataGrid-columnHeaderTitle': {textAlign: 'center', fontWeight: 'bold', fontSize: '0.8rem',color: colors.black[400]}
                    },
                    '& .MuiDataGrid-cell': {justifyContent: 'center', borderBottom: 'none'},
                }}/>
            </Box>
        </Box>
    );
}