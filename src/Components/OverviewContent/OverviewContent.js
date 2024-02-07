import overviewContentStyles from "./OverviewContent_styles";
import {Box, Grid} from "@mui/material";
import CustomerCard from "../CustomerCard/CustomerCard";

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
                    <Box sx={{backgroundColor: 'grey', height: '100px'}}/>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.gridItemContent}>
                    <Box sx={{backgroundColor: 'grey', height: '100px'}}/>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.gridItemContent}>
                    <Box sx={{backgroundColor: 'grey', height: '100px'}}/>
                </Box>
            </Grid>
        </Grid>
    );
}

export default OverviewContent;