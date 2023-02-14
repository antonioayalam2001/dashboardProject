import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMore from "@mui/icons-material/ExpandMore";

import {getColors} from "../../helpers/index.js";
import {Header} from "../../components/Header.jsx";

export const FAQ = () => {
    const colors = getColors();
    return (
        <Box m={'1.4rem'}>
            <Header title={'FAQ'} subtitle={"Frequently asked questions"}/>
            <Accordion defaultExpanded={false}>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Typography color={colors.lightPinkAccent[600]} variant={'h5'}>
                        Question : 1
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, aliquam atque beatae corporis dolore dolorum facilis
                        labore laudantium minima modi nesciunt nihil non, praesentium reiciendis sapiente sequi sunt ullam vel?
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Box>
    );
}