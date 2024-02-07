import customerCardStyles from "./CustomerCard_styles";
import cardStyles from "../../Styles/CardStyles";
import {Box, Button, Card, CardContent} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EditIcon from '@mui/icons-material/Edit';

function CustomerCard() {
    const classes = customerCardStyles();
    const cardClasses = cardStyles();

    return (
        <Box>
            <Box className={cardClasses.cardHeader}>
                <Box>Customer</Box>
                <Button variant="outlined" className={cardClasses.cardActionButton}>
                    <EditIcon className={cardClasses.actionButtonIcon}/> Edit
                </Button>
            </Box>
            <Card variant="outlined" className={cardClasses.card}>
                <CardContent>
                    <Box className={cardClasses.cardFirstElement}>
                        <AccountCircleIcon className={cardClasses.cardFirstIcon}/> Oleksandr
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <LocalPhoneIcon className={cardClasses.cardIcon}/> +000000
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <EmailIcon className={cardClasses.cardIcon}/> test@email.com
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <PlaceIcon className={cardClasses.cardIcon}/> Mazepy
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <LocationCityIcon className={cardClasses.cardIcon}/> Ivano-Frankivsk
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default CustomerCard;