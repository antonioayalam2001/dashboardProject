//color design tokens
import {createContext, useMemo, useState} from "react";
import {createTheme} from "@mui/material";

export const tokens = (mode) => ({
    ...(mode === 'dark'
            ? {
                black: {
                    100: "#d2d2d2",
                    200: "#a4a4a4",
                    300: "#777777",
                    400: "#494949",
                    500: "#1c1c1c",
                    600: "#161616",
                    700: "#111111",
                    800: "#0b0b0b",
                    900: "#060606"
                },
                primary: {
                    100: "#fecdf5",
                    200: "#fc9beb",
                    300: "#fb6ae0",
                    400: "#f938d6",
                    500: "#f806cc",
                    600: "#c605a3",
                    700: "#95047a",
                    800: "#630252",
                    900: "#320129"
                },
                secondary: {
                    100: "#eecfe4",
                    200: "#dd9fc9",
                    300: "#cb70af",
                    400: "#ba4094",
                    500: "#a91079",
                    600: "#870d61",
                    700: "#650a49",
                    800: "#440630",
                    900: "#220318"
                },

                pinkAccent: {
                    100: "#edf4f4",
                    200: "#dbe9ea",
                    300: "#c9dfdf",
                    400: "#b7d4d5",
                    500: "#a5c9ca",
                    600: "#84a1a2",
                    700: "#637979",
                    800: "#425051",
                    900: "#212828"
                },

                white: {
                    100: "#fcfcfc",
                    200: "#f9f9f9",
                    300: "#f5f5f5",
                    400: "#f2f2f2",
                    500: "#efefef",
                    600: "#bfbfbf",
                    700: "#8f8f8f",
                    800: "#606060",
                    900: "#303030"
                },
            } :
            {
                black: {
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
                    100: "#fdf4fb",
                    200: "#fbe8f7",
                    300: "#faddf2",
                    400: "#f8d1ee",
                    500: "#f6c6ea",
                    600: "#c59ebb",
                    700: "#94778c",
                    800: "#624f5e",
                    900: "#31282f"
                },
                secondary: {
                    100: "#282c2e",
                    200: "#4f585b",
                    300: "#778489",
                    400: "#9eb0b6",
                    500: "#c6dce4",
                    600: "#d1e3e9",
                    700: "#ddeaef",
                    800: "#e8f1f4",
                    900: "#f4f8fa",
                },

                pinkAccent: {
                    100: "#fcf6f6",
                    200: "#faeded",
                    300: "#f7e3e3",
                    400: "#f5dada",
                    500: "#f2d1d1",
                    600: "#c2a7a7",
                    700: "#917d7d",
                    800: "#615454",
                    900: "#302a2a"
                },

                white: {
                    100: "#fcfcfc",
                    200: "#f9f9f9",
                    300: "#f5f5f5",
                    400: "#f2f2f2",
                    500: "#efefef",
                    600: "#bfbfbf",
                    700: "#8f8f8f",
                    800: "#606060",
                    900: "#303030"
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
                        secondary: {main: colors.secondary[500]},
                        neutral: {
                            dark: colors.black[700],
                            main: colors.black[500],
                            light: colors.black[100],
                        },
                        background: {
                            default: colors.secondary[800]
                        }
                    } : {
                        primary: {main: colors.primary[100]},
                        secondary: {main: colors.secondary[500]},
                        neutral: {
                            dark: colors.black[700],
                            main: colors.black[500],
                            light: colors.black[100],
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