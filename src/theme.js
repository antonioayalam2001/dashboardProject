//color design tokens
import {createContext, useMemo, useState} from "react";
import {createTheme} from "@mui/material";

export const tokens = (mode) => ({
    ...(mode === 'dark'
            ? {
                grey: {
                    100: "#e0e0e0",
                    200: "#c2c2c2",
                    300: "#a3a3a3",
                    400: "#858585",
                    500: "#666666",
                    600: "#525252",
                    700: "#3d3d3d",
                    800: "#292929",
                    900: "#141414",
                },
                primary: {
                    100: "#343434",
                    200: "#414141",
                    300: "#4d4d4d",
                    400: "#5a5a5a",
                    500: "#676767",
                    600: "#747474",
                    700: "#747470",
                    800: "#8d8d8d",
                    900: "#9a9a9a",
                },
                blueAccent: {
                    100: "#7c9fc9",
                    200: "#6a92c1",
                    300: "#5884ba",
                    400: "#4977af",
                    500: "#416b9d",
                    600: "#3a5f8b",
                    700: "#325379",
                    800: "#2b4667",
                    900: "#233a55",
                },

                pinkAccent: {
                    100: "#ff9fb3",
                    200: "#ff859f",
                    300: "#ff6c8b",
                    400: "#ff5277",
                    500: "#ff3962",
                    600: "#ff1f4e",
                    700: "#ff063a",
                    800: "#eb0032",
                    900: "#d2002c",
                },

                lightPinkAccent: {
                    100: "#f7afbe",
                    200: "#f498ac",
                    300: "#f28199",
                    400: "#ef6a87",
                    500: "#ed5374",
                    600: "#ea3c61",
                    700: "#e8254f",
                    800: "#dc1742",
                    900: "#c5153b",
                },
            } :
            {
                grey: {
                    100: "#141414",
                    200: "#292929",
                    300: "#3d3d3d",
                    400: "#525252",
                    500: "#666666",
                    600: "#858585",
                    700: "#a3a3a3",
                    800: "#c2c2c2",
                    900: "#e0e0e0",
                },
                primary: {
                    900: "#9a9a9a",
                    800: "#8d8d8d",
                    700: "#747470",
                    600: "#747474",
                    500: "#676767",
                    400: "#5a5a5a",
                    300: "#cbcbcb",
                    200: "#414141",
                    100: "#343434",
                },
                blueAccent: {
                    900: "#233a55",
                    800: "#2b4667",
                    700: "#325379",
                    600: "#3a5f8b",
                    500: "#416b9d",
                    400: "#4977af",
                    300: "#5884ba",
                    200: "#6a92c1",
                    100: "#7c9fc9",
                },

                pinkAccent: {
                    900: "#d2002c",
                    800: "#eb0032",
                    700: "#ff063a",
                    600: "#ff1f4e",
                    500: "#ff3962",
                    400: "#ff5277",
                    300: "#ff6c8b",
                    200: "#ff859f",
                    100: "#ff9fb3",
                },

                lightPinkAccent: {
                    900: "#c5153b",
                    800: "#dc1742",
                    700: "#e8254f",
                    600: "#ea3c61",
                    500: "#ed5374",
                    400: "#ef6a87",
                    300: "#f28199",
                    200: "#f498ac",
                    100: "#f7afbe",
                }
            }
    )
})

//Mui Setting
export const themeSettings = (mode) => {
    const colors = tokens(mode);
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark'
                    ? {
                        primary: {main: colors.primary[500]},
                        secondary: {main: colors.blueAccent[500]},
                        neutral: {
                            dark: colors.grey[700],
                            main: colors.grey[500],
                            light: colors.grey[100],
                        },
                        background: {
                            default: colors.blueAccent[800]
                        }
                    } : {
                        primary: {main: colors.primary[100]},
                        secondary: {main: colors.blueAccent[500]},
                        neutral: {
                            dark: colors.grey[700],
                            main: colors.grey[500],
                            light: colors.grey[100],
                        },
                        background: {
                            default: "rgba(250,210,225,0.8)"
                        }
                    }
            )
        },
        typography: {
            fontFamily: ["Glory", "sans-serif"].join(','),
            fontSize: 12,
            h1: {
                fontFamily: ["Glory", "sans-serif"].join(','),
                fontSize: 40
            },
            h2: {
                fontFamily: ["Glory", "sans-serif"].join(','),
                fontSize: 32
            },
            h3: {
                fontFamily: ["Glory", "sans-serif"].join(','),
                fontSize: 24
            },
            h4: {
                fontFamily: ["Glory", "sans-serif"].join(','),
                fontSize: 20
            },
            h5: {
                fontFamily: ["Glory", "sans-serif"].join(','),
                fontSize: 16
            },
            h6: {
                fontFamily: ["Glory", "sans-serif"].join(','),
                fontSize: 14
            }
        }
    }
}

//Context for color mode
export const ColorModeContext = createContext({
        toggleColorMode: () => {
        }
    }
)

export const useMode = () => {

    const [mode, setMode] = useState("dark");
    const colorMode = useMemo(() => ({
        toggleColorMode: () => {
            setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
        }
    }), []);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
    return [theme, colorMode];
}