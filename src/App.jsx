import {ColorModeContext, useMode} from "./theme.js";
import {CssBaseline, ThemeProvider} from "@mui/material";
import {TopBar} from "./pages/globals/TopBar.jsx";
import {Route, Routes} from "react-router-dom";
import {Dashboard} from "./pages/dashboard/Dashboard.jsx";
import {Sidebar} from "./pages/globals/Sidebar.jsx";
import {Team} from "./pages/Team/Team.jsx";
import {Contacts} from "./pages/contacts/Contacts.jsx";
import {Invoices} from "./pages/invoices/Invoices.jsx";
import {Form} from "./pages/form/Form.jsx";
import {Calendar} from "./pages/calendar/Calendar.jsx";
import {FAQ} from "./pages/faq/FAQ.jsx";
import { Bar } from "./pages/bar/index.jsx";
import { Pie } from "./pages/pie/index.jsx";
import { Line } from "./pages/line/index.jsx";
import { Geo } from "./pages/geo/index.jsx";

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
                                <Route path={'/form'} element={<Form/>}/>
                                <Route path={'/invoices'} element={<Invoices/>}/>
                                <Route path={'/calendar'} element={<Calendar/>}/>
                                <Route path={'/faq'} element={<FAQ/>}/>
                                <Route path={'/bar'} element={<Bar/>}/>
                                <Route path={'/pie'} element={<Pie/>}/>
                                <Route path={'/line'} element={<Line/>}/>
                                <Route path={'/geography'} element={<Geo/>}/>
                            </Routes>
                        </main>
                    </div>
                </CssBaseline>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}

export default App
