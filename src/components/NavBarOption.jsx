import {Icon, Typography, useTheme} from "@mui/material";
import {tokens} from "../theme.js";
import {MenuItem} from "react-pro-sidebar";
import {Link} from "react-router-dom";
import {getColors} from "../helpers/getColors.js";


export const NavBarOption = ({title, to, icon, selected, setSelected, index, isCollapsed}) => {
    const colors = getColors();
    const {palette: {mode}} = useTheme();
    const stylesCollapsed = {
        display: 'none',
        padding: 0,
    }
    return (
        <>
            {index === 1 && (<Typography variant={'h4'} sx={isCollapsed ? stylesCollapsed : {}}> Dashboard</Typography>)}
            {(index === 4) && <Typography variant={'h4'} pr={'0.5rem'} sx={isCollapsed ? stylesCollapsed : {}}> Pages</Typography>}
            {(index === 7) && <Typography variant={'h4'} pr={'0.5rem'} sx={isCollapsed ? stylesCollapsed : {}}> Charts</Typography>}
            <MenuItem active={title === selected} onClick={() => setSelected(title)} style={{color: ` ${mode === "dark" ? colors.white[100] : colors.white[900]}`, display: "flex"}}>
                <Typography display={'flex'} alignItems={'center'} p={'0.5rem'}> <Icon style={{paddingRight: "2rem", marginRight: "0.5rem"}}>{icon}</Icon> {title}</Typography>
                <Link to={to}></Link>
            </MenuItem>
        </>
    );
}