import appStyles from "./App_styles";
import SideMenu from "../SideMenu/SideMenu";
import {Box, Grid} from "@mui/material";
import OverviewContent from "../OverviewContent/OverviewContent";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Statistics from "../Statistics/Statistics";
import Customers from "../Customers/Customers";
import Administration from "../Administration/Administration";
import HeaderContainer from "../../Store/Containers/HeaderContainer";

function App() {
    const classes = appStyles();

    return (
        <Box>
            <HeaderContainer/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<OverviewComp/>}/>
                    <Route path="/statistics" element={<Statistics/>}/>
                    <Route path="/general/overview" element={<OverviewComp/>}/>
                    <Route path="/general/customers" element={<CustomersComp/>}/>
                    <Route path="/general/administration" element={<AdministrationComp/>}/>
                </Routes>
            </BrowserRouter>
        </Box>
    );
}

const OverviewComp = () => {
    return (
        <Grid container>
            <Grid item>
                <SideMenu/>
            </Grid>
            <Grid item xs>
                <OverviewContent/>
            </Grid>
        </Grid>
    )
}

const CustomersComp = () => {
    return (
        <Grid container>
            <Grid item>
                <SideMenu/>
            </Grid>
            <Grid item xs>
                <Customers/>
            </Grid>
        </Grid>
    )
}

const AdministrationComp = () => {
    return (
        <Grid container>
            <Grid item>
                <SideMenu/>
            </Grid>
            <Grid item xs>
                <Administration/>
            </Grid>
        </Grid>
    )
}

export default App;
