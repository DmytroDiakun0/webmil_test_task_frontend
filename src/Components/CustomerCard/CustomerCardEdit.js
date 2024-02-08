import cardStyles from "../../Styles/CardStyles";
import {Box, Button, Card, CardContent, InputAdornment, TextField} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EditIcon from '@mui/icons-material/Edit';
import PropTypes from "prop-types";

function CustomerCardEdit(props) {
    const cardClasses = cardStyles();

    let editedCustomer = {
        name: props.customer.name,
        phoneNumber: props.customer.phoneNumber,
        mail: props.customer.mail,
        street: props.customer.street,
        city: props.customer.city
    }

    return (
        <Box>
            <Box className={cardClasses.cardHeader}>
                <Box>Customer</Box>
                <Button variant="outlined" className={cardClasses.cardActionButton}
                        onClick={() => {
                            props.onClick(editedCustomer);
                            props.changeCardFunc();
                        }}>
                    <EditIcon className={cardClasses.actionButtonIcon}/> Save
                </Button>
            </Box>
            <Card variant="outlined" className={cardClasses.card}>
                <CardContent>
                    <Box className={cardClasses.cardFirstElement} sx={{verticalAlign: 'bottom'}}>
                        <AccountCircleIcon className={cardClasses.cardFirstIcon}/>
                        <TextField
                            id="name"
                            defaultValue={editedCustomer.name}
                            label="Name"
                            variant="standard"
                            size="small"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                editedCustomer.name = event.target.value;
                            }}
                            sx={{marginLeft: '10px'}}/>
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <LocalPhoneIcon className={cardClasses.cardFirstIcon}/>
                        <TextField
                            id="phoneNumber"
                            defaultValue={editedCustomer.phoneNumber}
                            label="Phone Number"
                            variant="standard"
                            size="small"
                            InputProps={{
                                startAdornment: <InputAdornment position="start">+</InputAdornment>,
                            }}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                editedCustomer.phoneNumber = event.target.value;
                            }}
                            sx={{marginLeft: '10px'}}/>
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <EmailIcon className={cardClasses.cardFirstIcon}/>
                        <TextField
                            id="mail"
                            defaultValue={editedCustomer.mail}
                            label="Mail"
                            variant="standard"
                            size="small"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                editedCustomer.mail = event.target.value;
                            }}
                            sx={{marginLeft: '10px'}}/>
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <PlaceIcon className={cardClasses.cardFirstIcon}/>
                        <TextField
                            id="street"
                            defaultValue={editedCustomer.street}
                            label="Street"
                            variant="standard"
                            size="small"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                editedCustomer.street = event.target.value;
                            }}
                            sx={{marginLeft: '10px'}}/>
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <LocationCityIcon className={cardClasses.cardFirstIcon}/>
                        <TextField
                            id="city"
                            defaultValue={editedCustomer.city}
                            label="City"
                            variant="standard"
                            size="small"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                editedCustomer.city = event.target.value;
                            }}
                            sx={{marginLeft: '10px'}}/>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

CustomerCardEdit.propTypes = {
    customer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        phoneNumber: PropTypes.string.isRequired,
        mail: PropTypes.string.isRequired,
        street: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired
    }).isRequired
};

export default CustomerCardEdit;