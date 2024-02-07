import appStyles from "./App_styles";
import Header from "../Header/Header";
import SideMenu from "../SideMenu/SideMenu";
import {Box, Grid} from "@mui/material";
import OverviewContent from "../OverviewContent/OverviewContent";

function App() {
    const classes = appStyles();

    return (
        <Box>
            <Header/>
            <Grid container>
                <Grid item>
                    <SideMenu/>
                </Grid>
                <Grid item xs>
                    <OverviewContent/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default App;