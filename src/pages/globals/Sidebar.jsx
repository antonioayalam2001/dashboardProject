import {Menu, MenuItem, ProSidebar} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css'
import {Box, IconButton, Typography, useTheme} from "@mui/material";
import {tokens} from "../../theme.js";
import {useState} from "react";
// IMAGES
import userImage from '../../assets/user_img.jpeg';
// ICONS

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {NavBarOption} from "../../components/NavBarOption.jsx";
import {navBarLinks} from "../../helpers/constants.js";
import {getColors} from "../../helpers/getColors.js";

export const Sidebar = () => {
    const colors = getColors();
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
            <ProSidebar collapsed={isCollapsed} width={"300px"} collapsedWidth={'60px'}>
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
                                 width={"100%"}
                                 justifyContent={'space-between'}
                                 alignItems={'center'}
                            >
                                <Typography variant={'h4'} color={colors.grey[100]} fontWeight={'bolder'}>Personal Dashboard</Typography>
                                <IconButton onClick={() => {
                                    setIsCollapsed(!isCollapsed)
                                }}> <MenuOutlinedIcon/></IconButton>
                            </Box>
                        )}
                    </MenuItem>

                    {/*USer container */}
                    {!isCollapsed && (
                        <Box
                            display={'flex'}
                            flexDirection={'column'}
                            alignItems={'center'}
                        >
                            {/*USER IMAGE*/}
                            <Box width={'150px'} height={'150px'} borderRadius={'100%'} overflow={'hidden'}
                                 margin={'0 auto'}
                            >
                                <img src={userImage} alt="user_image" width={'100%'} style={{
                                    margin: '0 auto'
                                }}/>

                            </Box>
                            <Box textAlign={'center'}>

                                {/*    USER INFO*/}
                                <Typography variant={'h3'} mt={'1rem'} fontWeight={'bold'}>Antonio Ayala</Typography>
                                <Typography>Welcome</Typography>

                            </Box>
                        </Box>

                    )
                    }

                    {/*    Menu Items*/}
                    <Box pl={isCollapsed ? undefined : "10%"}>
                        {
                            navBarLinks.map(({title, to, icon}, index) => (
                                    <NavBarOption key={title} title={title} to={to} selected={selected} setSelected={setSelected} icon={icon} index={index} isCollapsed={isCollapsed}/>
                                )
                            )
                        }
                    </Box>

                </Menu>
            </ProSidebar>
        </Box>
    );
}