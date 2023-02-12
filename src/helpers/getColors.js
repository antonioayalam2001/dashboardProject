import {useTheme} from "@mui/material";
import {tokens} from "../theme.js";

export const getColors = () => {
    // Returns an object with all the Theme properties from material UI
    const {palette:{mode}} = useTheme();
    // Getting our personal palette as we defined before
    return tokens(mode);
}