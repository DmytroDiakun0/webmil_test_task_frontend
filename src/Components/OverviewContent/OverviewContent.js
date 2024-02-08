import overviewContentStyles from "./OverviewContent_styles";
import {Box, Grid} from "@mui/material";
import CustomerContainer from "../../Store/Containers/CustomerContainer";
import VehicleContainer from "../../Store/Containers/VehicleContainer";
import ContractContainer from "../../Store/Containers/ContractContainer";
import EventsContainer from "../../Store/Containers/EventsContainer";

function OverviewContent() {
    const classes = overviewContentStyles();

    return (
        <Grid container className={classes.overviewContent}>
            <Grid item xs={6}>
                <Box className={classes.gridItemContent}>
                    <CustomerContainer/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className={classes.gridItemContent}>
                    <VehicleContainer/>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.gridItemContent}>
                    <ContractContainer/>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.gridItemContent}>
                    <EventsContainer/>
                </Box>
            </Grid>
        </Grid>
    );
}

export default OverviewContent;