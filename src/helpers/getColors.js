import {useTheme} from "@mui/material";
import {tokens} from "../theme.js";

export const getColors = (word = "") => {
    // Returns an object with all the Theme properties from material UI
    const {palette:{mode}} = useTheme();
    if (word === 'theme') return mode
    // Getting our personal palette as we defined before
    return tokens(mode);
}