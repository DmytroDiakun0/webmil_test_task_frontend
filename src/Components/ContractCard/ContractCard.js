import cardStyles from "../../Styles/CardStyles";
import contractCardStyles from "./ContractCard_styles";
import {Box, Card, CardContent, Grid} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PropTypes from "prop-types";

function ContractCard(props) {
    const classes = contractCardStyles();
    const cardClasses = cardStyles();

    return (
        <Box>
            <Box className={cardClasses.cardHeader}>
                <Box>Contract</Box>
            </Box>
            <Card variant="outlined" className={cardClasses.card + ' ' + classes.card}>
                <CardContent>
                    <Box className={cardClasses.cardFirstElement}>
                        <ContentCopyIcon className={cardClasses.cardFirstIcon + ' ' + classes.contractNameIcon}/> New vehicle contract
                    </Box>
                    <Grid container>
                        <Grid item container xs={6} className={classes.contractDetail}>
                            <Grid item xs={9} className={classes.contractDetailTitle}>
                                ID #:
                            </Grid>
                            <Grid item xs={3} className={classes.contractDetailValue}>
                                {props.contractDetails.id}
                            </Grid>
                        </Grid>
                        <Grid item container xs={6} className={classes.contractDetail}>
                            <Grid item xs={9} className={classes.contractDetailTitle}>
                                Total Price:
                            </Grid>
                            <Grid item xs={3} className={classes.contractDetailValue}>
                                {props.contractDetails.totalPrice} $
                            </Grid>
                        </Grid>
                        <Grid item container xs={6} className={classes.contractDetail}>
                            <Grid item xs={9} className={classes.contractDetailTitle}>
                                Duration / Distance:
                            </Grid>
                            <Grid item xs={3} className={classes.contractDetailValue}>
                                {props.contractDetails.duration} months / {props.contractDetails.distance} km
                            </Grid>
                        </Grid>
                        <Grid item container xs={6} className={classes.contractDetail}>
                            <Grid item xs={9} className={classes.contractDetailTitle}>
                                Customer Price/mth.:
                            </Grid>
                            <Grid item xs={3} className={classes.contractDetailValue}>
                                {props.contractDetails.customerPrice} $
                            </Grid>
                        </Grid>
                        <Grid item container xs={6} className={classes.contractDetail}>
                            <Grid item xs={9} className={classes.contractDetailTitle}>
                                Start Date:
                            </Grid>
                            <Grid item xs={3} className={classes.contractDetailValue}>
                                {props.contractDetails.startDate}
                            </Grid>
                        </Grid>
                        <Grid item container xs={6} className={classes.contractDetail}>
                            <Grid item xs={9} className={classes.contractDetailTitle}>
                                Odometer at expiration:
                            </Grid>
                            <Grid item xs={3} className={classes.contractDetailValue}>
                                {props.contractDetails.odometerAtExpiration} km
                            </Grid>
                        </Grid>
                        <Grid item container xs={6} className={classes.contractDetail}>
                            <Grid item xs={9} className={classes.contractDetailTitle}>
                                End Date:
                            </Grid>
                            <Grid item xs={3} className={classes.contractDetailValue}>
                                {props.contractDetails.endDate}
                            </Grid>
                        </Grid>
                        <Grid item container xs={6} className={classes.contractDetail}>
                            <Grid item xs={9} className={classes.contractDetailTitle}>
                                Start Mileage:
                            </Grid>
                            <Grid item xs={3} className={classes.contractDetailValue}>
                                {props.contractDetails.startMileage} km
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}

ContractCard.propTypes = {
    contractDetails: PropTypes.shape({
        id: PropTypes.string.isRequired,
        totalPrice: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        distance: PropTypes.string.isRequired,
        customerPrice: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        odometerAtExpiration: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        startMileage: PropTypes.string.isRequired
    }).isRequired
};

export default ContractCard;