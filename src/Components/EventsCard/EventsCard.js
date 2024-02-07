import cardStyles from "../../Styles/CardStyles";
import eventsCardStyles from "./EventsCard_styles";
import {Box, Card, CardContent, Grid} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function EventsCard() {
    const classes = eventsCardStyles();
    const cardClasses = cardStyles();

    return (
        <Box>
            <Box className={cardClasses.cardHeader}>
                <Box>Events</Box>
            </Box>
            <Card variant="outlined" sx={{padding: '0px'}} className={cardClasses.card + ' ' + classes.card}>
                <CardContent className={classes.eventsList}>
                    <Grid container className={classes.eventInfo}>
                        <Grid item xs={6}>
                            Date <PlayArrowIcon className={classes.dateColumnIcon}/>
                        </Grid>
                        <Grid item xs={6}>
                            Type / Comment
                        </Grid>
                    </Grid>
                    <Grid container className={classes.eventInfo}>
                        <Grid item xs={6}>
                            02.02.2024 14:22
                        </Grid>
                        <Grid item xs={6}>
                            Buy Now
                        </Grid>
                    </Grid>
                    <Grid container className={classes.eventInfo}>
                        <Grid item xs={6} >
                            01.02.2024 00:32
                        </Grid>
                        <Grid item xs={6}>
                            Created
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}

export default EventsCard;