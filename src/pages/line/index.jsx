import { Box } from "@mui/material"
import { Header } from "../../components/Header"
import { LineChart } from "../../components/LineChart"

export const Line = () => {
    return (
        <Box sx={{ width: '100%', height: "80%" }} p={"3rem 0 0 3rem"}>
            <Header title="Line Chart" styles={{ paddingLeft: "2rem" }} />
            <Box sx={{ width: '100%', height: "80dvh" }}>
                <LineChart />
            </Box>
        </Box>
    )
}