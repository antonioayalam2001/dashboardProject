import { Box } from "@mui/material"
import { Header } from "../../components/Header"
import { BarChart } from "../../components/BarChart"

export const Bar = () => {
    return (
        <Box sx={{ width: '100%', height: "80%" }} p={"3rem 0 0 3rem"}>
            <Header title="Bar Chart" styles={{ paddingLeft: "2rem" }} />
            <Box sx={{ width: '100%', height: "80dvh" }}>
                <BarChart />
            </Box>
        </Box>
    )
}