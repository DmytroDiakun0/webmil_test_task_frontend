import customerCardStyles from "./CustomerCard_styles";
import {Box, Button, Card, CardContent} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EditIcon from '@mui/icons-material/Edit';

function CustomerCard() {
    const classes = customerCardStyles();

    return (
        <Box>
            <Box className={classes.cardHeader}>
                <Box>Customer</Box>
                <Button variant="outlined" className={classes.cardActionButton}>
                    <EditIcon className={classes.actionButtonIcon}/> Edit
                </Button>
            </Box>
            <Card variant="outlined" className={classes.card}>

                <CardContent>
                    <Box className={classes.cardFirstElement}>
                        <AccountCircleIcon className={classes.cardFirstIcon}/> Oleksandr
                    </Box>
                    <Box className={classes.cardElement}>
                        <LocalPhoneIcon className={classes.cardIcon}/> +000000
                    </Box>
                    <Box className={classes.cardElement}>
                        <EmailIcon className={classes.cardIcon}/> test@email.com
                    </Box>
                    <Box className={classes.cardElement}>
                        <PlaceIcon className={classes.cardIcon}/> Mazepy
                    </Box>
                    <Box className={classes.cardElement}>
                        <LocationCityIcon className={classes.cardIcon}/> Ivano-Frankivsk
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default CustomerCard;