import {Header} from "../../components/Header.jsx";
import {Box} from "@mui/material";

export const Dashboard = () => {
    return (
        <Box m={'1.8rem'}>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Header title={'Antonio Dashboard'} subtitle={'Welcome'}></Header>
            </Box>
        </Box>
    );
}