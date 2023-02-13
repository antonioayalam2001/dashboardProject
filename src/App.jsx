import {ColorModeContext, useMode} from "./theme.js";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {TopBar} from "./pages/globals/TopBar.jsx";
import {Route, Routes} from "react-router-dom";
import {Dashboard} from "./pages/dashboard/Dashboard.jsx";
import {Sidebar} from "./pages/globals/Sidebar.jsx";
import {Team} from "./pages/Team/Team.jsx";
import {Contacts} from "./pages/contacts/Contacts.jsx";
import {Invoices} from "./pages/invoices/Invoices.jsx";

function App() {
    const [theme, colorMode] = useMode();
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline>
                    <div className="app">
                        <Sidebar/>
                        <main className="content">
                            {/*TOBPAR will always be visible in all the elements of our app*/}
                            <TopBar/>
                            <Routes>
                                <Route path={'/'} element={<Dashboard/>}/>
                                <Route path={'/team'} element={<Team/>}/>
                                <Route path={'/contacts'} element={<Contacts/>}/>
                                <Route path={'/form'} element={<Dashboard/>}/>
                                <Route path={'/invoices'} element={<Invoices/>}/>
                                <Route path={'/bar'} element={<Dashboard/>}/>
                                <Route path={'/pie'} element={<Dashboard/>}/>
                                <Route path={'/line'} element={<Dashboard/>}/>
                                <Route path={'/geography'} element={<Dashboard/>}/>
                                <Route path={'/calendar'} element={<Dashboard/>}/>
                            </Routes>
                        </main>
                    </div>
                </CssBaseline>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
