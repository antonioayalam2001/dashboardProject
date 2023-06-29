import { Box, Typography } from "@mui/material";
import { getColors } from "../helpers";
import { ProgressCircle } from "./ProgressCircle";

export const StatBox = ({ title, subtitle, icon, progress, increase }) => {
    const colors = getColors();
    const angle = progress * 360;
    return (
        <Box width={"100%"} m={"0 30px"} >
            <Box display={"flex"} justifyContent={"space-between"}>
                <Box>
                    {icon}
                    <Typography variant="h5" component="div" sx={{ fontWeight: "bold" }}>
                        {title}
                    </Typography>
                </Box>
                <Box>
                    <ProgressCircle progress={progress} size={40} />
                </Box>
            </Box>
                <Box display={"flex"} justifyContent={"space-between"}>
                    <Typography variant="h6" component="div" sx={{ fontWeight: "regular", fontStyle:"italic" }}>
                        {subtitle}
                </Typography>
                
                    <Typography variant="h6" component="div" sx={{ fontWeight: "regular" }}>
                        {increase}
                    </Typography>
                </Box>
        </Box>
    )
}
