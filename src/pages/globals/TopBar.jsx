import {Box, IconButton, InputBase, useTheme} from "@mui/material";
import {useContext} from "react";
import {ColorModeContext, tokens} from "../../theme.js";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

export const TopBar = () => {
    // Allows access to the theme context that we provided before``
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const colorContext = useContext(ColorModeContext);
    return (
        // Box its like a DIV
        <Box display={'flex'} justifyContent={'space-between'} p={2}>
            {/*SERACHBAR*/}
            <Box
                display={'flex'}
                border={ `2px solid  ${colors.primary[100]}`}
                borderRadius={'0.3rem'}
                p={'0.2rem'}
                flex={1}
            >

                <InputBase sx={{ml: 2, flex: 1}} placeholder={"Search"}/>
                <IconButton type={'button'} sx={{p: 1}}>
                    <SearchIcon/>
                </IconButton>

            </Box>
            {/*ICONS*/}
            <Box display={'flex'}>
                <IconButton>
                    <NotificationsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <SettingsOutlinedIcon/>
                </IconButton>
                <IconButton>
                    <PersonOutlinedIcon/>
                </IconButton>

                <IconButton onClick={()=>colorContext.toggleColorMode()}>
                    {theme.palette.mode === 'dark' ? <LightModeOutlinedIcon/>  : <DarkModeOutlinedIcon/> }
                </IconButton>
            </Box>

        </Box>
    );
}