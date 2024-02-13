import cardStyles from "../../Styles/CardStyles";
import vehicleCardStyles from "./VehicleCard_styles";
import {Box, Button, Card, CardContent} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExtensionIcon from '@mui/icons-material/Extension';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PowerIcon from '@mui/icons-material/Power';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PropTypes from "prop-types";

function VehicleCard(props) {
    const classes = vehicleCardStyles();
    const cardClasses = cardStyles();

    return (
        <Box>
            <Box className={cardClasses.cardHeader}>
                <Box>Vehicle id: {props.vehicle.id}</Box>
                <Button variant="outlined" className={cardClasses.cardActionButton} onClick={props.changeCardFunc}>
                    <EditIcon className={cardClasses.actionButtonIcon}/> Edit
                </Button>
            </Box>
            <Card variant="outlined" className={cardClasses.card}>

                <CardContent>
                    <Box className={cardClasses.cardFirstElement}>
                        <DirectionsCarIcon className={cardClasses.cardFirstIcon}/> {props.vehicle.carNumber}
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <EditIcon className={cardClasses.cardIcon}/> {props.vehicle.serialNumber}
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <CalendarTodayIcon className={cardClasses.cardIcon}/> {props.vehicle.releaseDate}
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <ExtensionIcon className={cardClasses.cardIcon}/> {props.vehicle.brand}
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <LocalGasStationIcon className={cardClasses.cardIcon}/> {props.vehicle.fuelType}
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <PowerIcon className={cardClasses.cardIcon}/> {props.vehicle.battery} kW
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

VehicleCard.propTypes = {
    vehicle: PropTypes.shape({
        carNumber: PropTypes.string.isRequired,
        serialNumber: PropTypes.string.isRequired,
        releaseDate: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        fuelType: PropTypes.string.isRequired,
        battery: PropTypes.string.isRequired
    }).isRequired
};

export default VehicleCard;