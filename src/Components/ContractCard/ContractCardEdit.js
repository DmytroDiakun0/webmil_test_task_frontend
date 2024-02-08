import cardStyles from "../../Styles/CardStyles";
import contractCardStyles from "./ContractCard_styles";
import {Box, Button, Card, CardContent, Grid, InputAdornment, TextField} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PropTypes from "prop-types";
import EditIcon from "@mui/icons-material/Edit";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import {DateField} from "@mui/x-date-pickers/DateField";
import dayjs from "dayjs";
import {getFormatDate} from "../../functions";
import {LocalizationProvider} from "@mui/x-date-pickers";

function ContractCardEdit(props) {
    const classes = contractCardStyles();
    const cardClasses = cardStyles();

    let editedContract = {
        name: props.contractDetails.name,
        id: props.contractDetails.id,
        totalPrice: props.contractDetails.totalPrice,
        duration: props.contractDetails.duration,
        distance: props.contractDetails.distance,
        customerPrice: props.contractDetails.customerPrice,
        startDate: props.contractDetails.startDate,
        odometerAtExpiration: props.contractDetails.odometerAtExpiration,
        endDate: props.contractDetails.endDate,
        startMileage: props.contractDetails.startMileage
    }

    const processResults = () => {
        const startDate = dayjs(editedContract.startDate, 'DD.MM.YYYY');
        const endDate = dayjs(editedContract.endDate, 'DD.MM.YYYY');

        editedContract.duration =
            (+endDate.get('year') - startDate.get('year')) * 12 +
            (+endDate.get('month') - startDate.get('month'));

        editedContract.customerPrice = (+editedContract.totalPrice / +editedContract.duration).toFixed(2);

        editedContract.odometerAtExpiration = +editedContract.startMileage + +editedContract.distance;

    }

    return (
        <Box>
            <Box className={cardClasses.cardHeader}>
                <Box>Contract</Box>
                <Button variant="outlined" className={cardClasses.cardActionButton}
                        onClick={() => {
                            processResults();
                            props.onClick(editedContract);
                            props.changeCardFunc();
                        }}>
                    <EditIcon className={cardClasses.actionButtonIcon}/> Save
                </Button>
            </Box>
            <Card variant="outlined" className={cardClasses.card + ' ' + classes.card}>
                <CardContent>
                    <Box className={cardClasses.cardFirstElement}>
                        <ContentCopyIcon className={cardClasses.cardFirstIcon + ' ' + classes.contractNameIcon}/>
                        <TextField
                            id="contractName"
                            defaultValue={editedContract.name}
                            variant="standard"
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                editedContract.name = event.target.value;
                            }}
                            sx={{marginLeft: '20px'}}/>
                    </Box>
                    <Grid container>
                        <Grid item xs={6} className={classes.contractDetail}>
                            <Box component='span' sx={{fontSize: '20px'}}>Total Price:</Box>
                            <TextField
                                id="totalPrice"
                                defaultValue={editedContract.totalPrice}
                                variant="standard"
                                size="small"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">$</InputAdornment>,
                                }}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    editedContract.totalPrice = event.target.value;
                                }}
                                sx={{marginLeft: '20px'}}/>
                        </Grid>
                        <Grid item xs={6} className={classes.contractDetail}>
                            <Box component='span' sx={{fontSize: '20px'}}>Distance:</Box>
                            <TextField
                                id="distance"
                                defaultValue={editedContract.distance}
                                variant="standard"
                                size="small"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">km</InputAdornment>,
                                }}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    editedContract.distance = event.target.value;
                                }}
                                sx={{marginLeft: '20px'}}/>
                        </Grid>
                        <Grid item xs={6} className={classes.contractDetail} sx={{marginTop: '20px', marginBottom: '15px'}}>
                            <Box component='span' sx={{fontSize: '20px'}}>Start Date:</Box>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateField
                                    id="startDate"
                                    defaultValue={dayjs(editedContract.startDate, 'DD.MM.YYYY')}
                                    format="DD.MM.YYYY"
                                    size="small"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        editedContract.startDate = getFormatDate(event.$d);
                                    }}
                                    sx={{marginLeft: '20px'}}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6} className={classes.contractDetail} sx={{marginTop: '20px', marginBottom: '15px'}}>
                            <Box component='span' sx={{fontSize: '20px'}}>End Date:</Box>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DateField
                                    id="endDate"
                                    defaultValue={dayjs(editedContract.endDate, 'DD.MM.YYYY')}
                                    format="DD.MM.YYYY"
                                    size="small"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        editedContract.endDate = getFormatDate(event.$d);
                                    }}
                                    sx={{marginLeft: '20px'}}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={6} className={classes.contractDetail}>
                            <Box component='span' sx={{fontSize: '20px'}}>StartMileage:</Box>
                            <TextField
                                id="startMileage"
                                defaultValue={editedContract.startMileage}
                                variant="standard"
                                size="small"
                                InputProps={{
                                    endAdornment: <InputAdornment position="end">km</InputAdornment>,
                                }}
                                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                    editedContract.startMileage = event.target.value;
                                }}
                                sx={{marginLeft: '20px'}}/>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}

ContractCardEdit.propTypes = {
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

export default ContractCardEdit;