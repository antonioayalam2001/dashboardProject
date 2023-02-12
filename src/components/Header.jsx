import {Box, Typography, useTheme} from "@mui/material";
import {tokens} from "../theme.js";

export const Header = ({title, subtitle}) => {
    const {palette: {mode}} = useTheme();
    const colors = tokens(mode);
    return (
        <Box mb={'2rem'}>
            <Typography variant={'h2'} color={colors.grey[100]} fontWeight={'bold'} sx={{mb:"0.4rem"}}>{title}</Typography>
            <Typography variant={'h5'} color={colors.grey[100]} fontWeight={'bold'} sx={{mb:"0.4rem"}}>{subtitle}</Typography>
        </Box>
    );
}