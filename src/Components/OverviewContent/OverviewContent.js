import {Box, Grid} from "@mui/material";
import overviewContentStyles from "./OverviewContent_styles";
import CustomerContainer from "../../Store/Containers/CustomerContainer";
import VehicleContainer from "../../Store/Containers/VehicleContainer";
import ContractContainer from "../../Store/Containers/ContractContainer";
import EventsContainer from "../../Store/Containers/EventsContainer";
import CustomerCardEditContainer from "../../Store/Containers/CustomerCardEditContainer";
import {useState} from "react";
import VehicleCardEditContainer from "../../Store/Containers/VehicleCardEditContainer";
import ContractCardEditContainer from "../../Store/Containers/ContractCardEditContainer";

function OverviewContent() {
    const classes = overviewContentStyles();

    const [customerMode, setCustomerMode] = useState('view');
    const [vehicleMode, setVehicleMode] = useState('view');
    const [contractMode, setContractMode] = useState('view');

    const changeCustomerMode = () => {
        if(customerMode === 'view') {
            setCustomerMode('edit')
        } else {
            setCustomerMode('view')
        }
    }

    const changeVehicleMode = () => {
        if(vehicleMode === 'view') {
            setVehicleMode('edit')
        } else {
            setVehicleMode('view')
        }
    }

    const changeContractMode = () => {
        if(contractMode === 'view') {
            setContractMode('edit')
        } else {
            setContractMode('view')
        }
    }

    const customerCard = () => {
        if(customerMode === 'edit') {
            return (<CustomerCardEditContainer changeCardFunc={changeCustomerMode}/>)
        } else if(customerMode === 'view') {
            return (<CustomerContainer changeCardFunc={changeCustomerMode}/>)
        }
    }

    const vehicleCard = () => {
        if(vehicleMode === 'edit') {
            return (<VehicleCardEditContainer changeCardFunc={changeVehicleMode}/>)
        } else if(vehicleMode === 'view') {
            return (<VehicleContainer changeCardFunc={changeVehicleMode}/>)
        }
    }

    const contractCard = () => {
        if(contractMode === 'edit') {
            return (<ContractCardEditContainer changeCardFunc={changeContractMode}/>)
        } else if(contractMode === 'view') {
            return (<ContractContainer changeCardFunc={changeContractMode}/>)
        }
    }

    return (
        <Grid container className={classes.overviewContent}>
            <Grid item xs={6}>
                <Box className={classes.gridItemContent}>
                    {customerCard()}
                </Box>
            </Grid>
            <Grid item xs={6}>
                <Box className={classes.gridItemContent}>
                    {vehicleCard()}
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.gridItemContent}>
                    {contractCard()}
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box className={classes.gridItemContent}>
                    <EventsContainer/>
                </Box>
            </Grid>
        </Grid>
    );
}

export default OverviewContent;