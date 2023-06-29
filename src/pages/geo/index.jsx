import { Box } from "@mui/material"
import { Header } from "../../components/Header"
import { GeoChart } from "../../components/GeoChart"
import { ProgressCircle } from "../../components/ProgressCircle"

export const Geo = () => {
    return (
        <Box sx={{ width: '100%', height: "80%" }} p={"3rem 0 0 3rem"}>
            <Header title="Geography" styles={{ paddingLeft: "2rem" }} />
            <Box sx={{ width: '100%', height: "80dvh" }}>
                <GeoChart />
            </Box>
        </Box>
    )
}
