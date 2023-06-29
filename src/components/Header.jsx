import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../theme.js";
import {getColors} from "../helpers/index.js";

export const Header = ({title, subtitle, styles = ''}) => {
    const {palette: {mode}} = useTheme();
    const colors = getColors();
    return (
        <Box mb={'2rem'} sx={{...styles}}>
            <Typography variant={'h2'} color={` ${mode === "dark" ? colors.white[100] : colors.white[800]}` } fontWeight={'bold'} sx={{mb:"0.4rem"}}>{title}</Typography>
            <Typography variant={'h5'} color={` ${mode === "dark" ? colors.white[100] : colors.white[800]}`} fontWeight={'bold'} sx={{mb:"0.4rem"}}>{subtitle}</Typography>
        </Box>
    );
}