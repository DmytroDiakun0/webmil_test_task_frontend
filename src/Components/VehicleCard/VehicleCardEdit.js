import cardStyles from "../../Styles/CardStyles";
import {Box, Button, Card, CardContent, InputAdornment, TextField} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ExtensionIcon from '@mui/icons-material/Extension';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PowerIcon from '@mui/icons-material/Power';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { DateField } from '@mui/x-date-pickers/DateField';
import PropTypes from "prop-types";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from "@mui/x-date-pickers";
import {getFormatDate} from "../../functions";

function VehicleCardEdit(props) {
    const cardClasses = cardStyles();

    let editedVehicle = {
        carNumber: props.vehicle.carNumber,
        serialNumber: props.vehicle.serialNumber,
        releaseDate: props.vehicle.releaseDate,
        brand: props.vehicle.brand,
        fuelType: props.vehicle.fuelType,
        battery: props.vehicle.battery
    }

    return (
        <Box>
            <Box className={cardClasses.cardHeader}>
                <Box>Vehicle</Box>
                <Button variant="outlined" className={cardClasses.cardActionButton}
                        onClick={() => {
                            props.onClick(editedVehicle);
                            props.changeCardFunc();
                        }}>
                    <EditIcon className={cardClasses.actionButtonIcon}/> Save
                </Button>
            </Box>
            <Card variant="outlined" className={cardClasses.card}>
                <CardContent>
                    <Box className={cardClasses.cardFirstElement}>
                        <DirectionsCarIcon className={cardClasses.cardFirstIcon}/>
                        <TextField
                            id="carNumber"
                            defaultValue={editedVehicle.carNumber}
                            label="Car Number"
                            variant="standard"
                            size="small"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                editedVehicle.carNumber = event.target.value;
                            }}
                            sx={{marginLeft: '10px'}}/>
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <EditIcon className={cardClasses.cardFirstIcon}/>
                        <TextField
                            id="serialNumber"
                            defaultValue={editedVehicle.serialNumber}
                            label="Serial Number"
                            variant="standard"
                            size="small"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                editedVehicle.serialNumber = event.target.value;
                            }}
                            sx={{marginLeft: '10px'}}/>
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <CalendarTodayIcon className={cardClasses.cardFirstIcon}/>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DateField
                                id="releaseDate"
                                defaultValue={dayjs(editedVehicle.releaseDate, 'DD.MM.YYYY')}
                                label="Release Date"
                                format="DD.MM.YYYY"
                                size="small"
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    editedVehicle.releaseDate = getFormatDate(event.$d);
                                }}
                                sx={{marginLeft: '10px'}}
                            />
                        </LocalizationProvider>
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <ExtensionIcon className={cardClasses.cardFirstIcon}/>
                        <TextField
                            id="brand"
                            defaultValue={editedVehicle.brand}
                            label="Brand"
                            variant="standard"
                            size="small"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                editedVehicle.brand = event.target.value;
                            }}
                            sx={{marginLeft: '10px'}}/>
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <LocalGasStationIcon className={cardClasses.cardFirstIcon}/>
                        <TextField
                            id="fuelType"
                            defaultValue={editedVehicle.fuelType}
                            label="Fuel Type"
                            variant="standard"
                            size="small"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                editedVehicle.fuelType = event.target.value;
                            }}
                            sx={{marginLeft: '10px'}}/>
                    </Box>
                    <Box className={cardClasses.cardElement}>
                        <PowerIcon className={cardClasses.cardFirstIcon}/>
                        <TextField
                            id="battery"
                            defaultValue={editedVehicle.battery}
                            label="Battery"
                            variant="standard"
                            size="small"
                            InputProps={{
                                endAdornment: <InputAdornment position="end">kW</InputAdornment>,
                            }}
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                editedVehicle.battery = event.target.value;
                            }}
                            sx={{marginLeft: '10px'}}/>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
}

VehicleCardEdit.propTypes = {
    vehicle: PropTypes.shape({
        carNumber: PropTypes.string.isRequired,
        serialNumber: PropTypes.string.isRequired,
        releaseDate: PropTypes.string.isRequired,
        brand: PropTypes.string.isRequired,
        fuelType: PropTypes.string.isRequired,
        battery: PropTypes.string.isRequired
    }).isRequired
};

export default VehicleCardEdit;