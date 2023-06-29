import { Box } from "@mui/material";
import { getColors } from "../helpers";

export const ProgressCircle = ({ progress = "0.75", size = 40 }) => {
    const colors = getColors();
    const angle = progress * 360;
    return (
        <Box sx={{
            width: `${size}px`,
            height: `${size}px`,
            borderRadius: "50%",
            position: "relative",
            background: ` radial-gradient(${colors.white[900]} 55%, transparent 56%),
                conic-gradient(transparent 0deg ${angle}deg, ${colors.white[500]} ${angle}deg 360deg) ${colors.primary[400]}`,
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}>
        </Box>
    )
}
