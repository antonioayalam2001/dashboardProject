import {Menu, MenuItem, ProSidebar} from "react-pro-sidebar";
import 'react-pro-sidebar/dist/css/styles.css'
import {Box, IconButton, Typography} from "@mui/material";
import {useEffect, useState} from "react";
// IMAGES
import userImage from '../../assets/user_img.jpeg';
// ICONS

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import {NavBarOption} from "../../components/NavBarOption.jsx";
import {navBarLinks, getColors} from "../../helpers/index.js";
import {useWindowWidth} from "../../hooks/useWindowWidth.js";

export const Sidebar = () => {
    const colors = getColors();
    const theme = getColors('theme');
    // console.log(colors)
    const {isCollapsed, handleCollapsed} = useWindowWidth();
    const [selected, setSelected] = useState("Dashboard");
    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: ` ${colors.secondary[900]} !important`
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
                    color: ` ${colors.white[300]} !important`
                },
                // display:'none'
            }}>
            <ProSidebar collapsed={isCollapsed} width={"300px"} collapsedWidth={'60px'}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => handleCollapsed()}
                        icon={isCollapsed ? <MenuOutlinedIcon/> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.black[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box display={'flex'}
                                 width={"100%"}
                                 justifyContent={'space-between'}
                                 alignItems={'center'}
                            >
                                <Typography variant={'h4'} color={theme === 'dark' ? colors.black[100] : colors.black[700]} fontWeight={'bolder'}>Personal Dashboard</Typography>
                                <IconButton onClick={() => {
                                    handleCollapsed()
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
                                <Typography color={colors.primary[500]} variant={'h3'} mt={'1rem'} fontWeight={'bold'}>Antonio Ayala</Typography>
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