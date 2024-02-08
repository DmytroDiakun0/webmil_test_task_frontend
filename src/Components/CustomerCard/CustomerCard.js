import customerCardStyles from "./CustomerCard_styles";
import cardStyles from "../../Styles/CardStyles";
import {Box, Button, Card, CardContent} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EditIcon from '@mui/icons-material/Edit';
import PropTypes from "prop-types";

function CustomerCard(props) {
    const classes = customerCardStyles();
    const cardClasses = cardStyles();

    return (
        <Box>
            <Box className={cardClasses.cardHeader}>
                <Box>Customer</Box>
                <Button variant="outlined" className={cardClasses.cardActionButton} onClick={props.changeCardFunc}>
                    <EditIcon className={cardClasses.actionButtonIcon}/> Edit
                </Button>
            </Box>
            <Card variant="outlined" className={cardClasses.card}>
                <CardContent>
                    <Box className={cardClasses.cardFirstElement}>
                        <AccountCircleIcon className={cardClasses.cardFirstIcon}/> {props.customer.name}
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <LocalPhoneIcon className={cardClasses.cardIcon}/> +{props.customer.phoneNumber}
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <EmailIcon className={cardClasses.cardIcon}/> {props.customer.mail}
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <PlaceIcon className={cardClasses.cardIcon}/> {props.customer.street}
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <LocationCityIcon className={cardClasses.cardIcon}/> {props.customer.city}
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

CustomerCard.propTypes = {
    customer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        mail: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired
    }).isRequired
};

export default CustomerCard;