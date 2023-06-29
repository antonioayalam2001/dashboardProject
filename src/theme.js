//color design tokens
import { createTheme } from "@mui/material";
import { createContext, useMemo, useState } from "react";

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
                    100: "#ffe066",
                    200: "#ffd942",
                    300: "#ffd21e",
                    400: "#f9c700",
                    500: "#d6ab00",
                    600: "#b28e00",
                    700: "#8e7200",
                    800: "#6b5500",
                    900: "#473900"
                },
                secondary: {
                    100: "#d2d2d2",
                    200: "#a4a4a4",
                    300: "#777777",
                    400: "#d6ab00",
                    500: "#1c1c1c",
                    600: "#161616",
                    700: "#111111",
                    800: "#0b0b0b",
                    900: "#060606"
                },

                accentColor: {
                    100: "#66e5ff",
                    200: "#42dfff",
                    300: "#1ed8ff",
                    400: "#00cff9",
                    500: "#00b1d6",
                    600: "#0094b2",
                    700: "#00768e",
                    800: "#00586b",
                    900: "#003b47"
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
            // LightTheme
            {
                black: {
                    100: "#e0e0e0",
                    200: "#c2c2c2",
                    // Opcion del sidebar activa
                    300: "#c994d0",
                    //Texto header y footer de tablas
                    400: "#45204a",
                    // Utilizamos para fondos
                    500: "#FDC3C6",
                    600: "#525252",
                    //Fondos de tarjetas deñ dashboard
                    700: "#5d2b63",
                    800: "#292929",
                    900: "#141414",
                },
            primary: {
                    // Hover boton de eqquipos
                    100: "#864392",
                200: "#fbe8f7",
                    //Color label de grafica de pie
                300: "#2e1531",
                    //Background header y footer de tablas
                400: "#bd7bc5",
                    //Fondo de la nota
                    500: "#432149",
                    600: "#74367c",
                    700: "#94778c",
                    //Fondo boton de Team
                    800: "#45204a",
                    900: "#31282f"
                },
                secondary: {
                    100: "#282c2e",
                    //Fondo boton de Team
                    200: "#592c61",
                    300: "#778489",
                    //Color de las leyendas de las graficas
                    400: "#c994d0",
                    //izquierda de calendario fondo
                    500: "#ed779e",
                    600: "#d1e3e9",
                    700: "#ddeaef",
                    800: "#e8f1f4",
                    900: "#f4f8fa",
                },

                accentColor: {
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
                            default: "#FEDFE2"
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