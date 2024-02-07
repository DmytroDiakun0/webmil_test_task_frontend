import overviewContentStyles from "./OverviewContent_styles";
import {Box, Grid} from "@mui/material";
import CustomerCard from "../CustomerCard/CustomerCard";
import VehicleCard from "../VehicleCard/VehicleCard";
import ContractCard from "../ContractCard/ContractCard";
import EventsCard from "../EventsCard/EventsCard";

function OverviewContent() {
    const classes = overviewContentStyles();

    return (
        <Grid container className={classes.overviewContent}>
            <Grid item xs={6}>
                <Box className={classes.gridItemContent}>
                    <CustomerCard/>
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className={classes.gridItemContent}>
                    <VehicleCard/>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.gridItemContent}>
                    <ContractCard/>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.gridItemContent}>
                    <EventsCard/>
                </Box>
            </Grid>
        </Grid>
    );
}

export default OverviewContent;