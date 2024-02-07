import cardStyles from "../../Styles/CardStyles";
import vehicleCardStyles from "./VehicleCard_styles";
import {Box, Button, Card, CardContent} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExtensionIcon from '@mui/icons-material/Extension';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PowerIcon from '@mui/icons-material/Power';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';

function VehicleCard() {
    //const classes = vehicleCardStyles();
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
                        <DirectionsCarIcon className={cardClasses.cardFirstIcon}/> AT0000AK
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <EditIcon className={cardClasses.cardIcon}/> AMLMEA
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <CalendarTodayIcon className={cardClasses.cardIcon}/> 24.02.2022
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <ExtensionIcon className={cardClasses.cardIcon}/> Volvo V40
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <LocalGasStationIcon className={cardClasses.cardIcon}/> Diesel
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <PowerIcon className={cardClasses.cardIcon}/> 140 kW
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

export default VehicleCard;