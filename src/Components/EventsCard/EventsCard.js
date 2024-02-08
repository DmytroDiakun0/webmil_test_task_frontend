import cardStyles from "../../Styles/CardStyles";
import eventsCardStyles from "./EventsCard_styles";
import {Box, Card, CardContent, Grid} from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

function EventsCard(props) {
    const classes = eventsCardStyles();
    const cardClasses = cardStyles();

    const eventslist = () => {
        const components = [];

        for(let i = 0; i < props.events.length; i++) {
            components.push(
                <Grid container className={classes.eventInfo}>
                    <Grid item xs={6}>
                        {props.events[i].time}
                    </Grid>
                    <Grid item xs={6}>
                        {props.events[i].type}
                    </Grid>
                </Grid>
            )
        }

        return components;
    }

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
                    {eventslist()}
                </CardContent>
            </Card>
        </Box>
    );
}

export default EventsCard;