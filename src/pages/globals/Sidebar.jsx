import {Menu, MenuItem, ProSidebar} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css'
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme.js";
import {useState} from "react";
// ICONS
import SearchIcon from "@mui/icons-material/Search";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

export const Sidebar = () => {
    // Returns an object with all the Theme properties from material UI
    const {palette: {mode}} = useTheme();
    // Getting our personal palette as we defined before
    const colors = tokens(mode);
    // console.log(colors)
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");
    return (
        <Box sx={{
            "& .pro-sidebar-inner": {
                background: ` ${colors.blueAccent[800]} !important`
            },
            "& .pro-icon-wrapper": {
                background: ` transparent !important`
            },
            "& .pro-inner-item": {
                padding: ` 0.2rem 2rem 0.2rem 1.2rem !important`
            },
            "& .pro-inner-item:hover": {
                color: ` ${colors.primary[900]} !important`,
                // background: ` ${colors.pinkAccent[700]} !important`
            },
            "& .pro-menu-item.active": {
                color: ` ${colors.lightPinkAccent[300]} !important`
            },
        }}>
            <ProSidebar collapsed={isCollapsed} width={"300px"}  collapsedWidth={'50px'}>
                    <Menu iconShape="square">
                        {/* LOGO AND MENU ICON */}
                        <MenuItem
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
                            style={{
                                margin: "10px 0 20px 0",
                                color: colors.grey[100],
                            }}
                        >
                            {!isCollapsed && (
                                <Box display={'flex'}
                                     width={"80%"}
                                     justifyContent={'space-between'}
                                     alignItems={'center'}
                                     ml={'1.2rem'}>
                                    <Typography variant={'h4'} color={colors.grey[900]}>Personal Dashboard</Typography>
                                    <IconButton onClick={() => {
                                        setIsCollapsed(!isCollapsed)
                                    }}> <MenuOutlinedIcon/></IconButton>
                                </Box>
                            )}
                        </MenuItem>
                    </Menu>
            </ProSidebar>
        </Box>
);
}