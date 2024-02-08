import {Box, Grid} from "@mui/material";
import CustomerContainer from "../../Store/Containers/CustomerContainer";
import VehicleContainer from "../../Store/Containers/VehicleContainer";
import ContractContainer from "../../Store/Containers/ContractContainer";
import EventsContainer from "../../Store/Containers/EventsContainer";
import CustomerCardEditContainer from "../../Store/Containers/CustomerCardEditContainer";
import {Component} from "react";

class OverviewContent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerMode: 'view',
            vehicleMode: 'view',
            contractDetailsMode: 'view'
        }

        this.changeCustomerMode = this.changeCustomerMode.bind(this);
        this.customerCard = this.customerCard.bind(this);
    }

    changeCustomerMode() {
        if(this.state.customerMode === 'view') {
            this.setState({ customerMode : 'edit'})
        } else {
            this.setState({ customerMode : 'view'})
        }
    }

    /*const changeVehicleMode = () => {
        vehicleEditMode = !vehicleEditMode;
    }

    const changeContractDetailsMode = () => {
        contractDetailsEditMode = !contractDetailsEditMode;
    }*/

    customerCard() {
        if(this.state.customerMode === 'edit') {
            return (<CustomerCardEditContainer changeCardFunc={this.changeCustomerMode}/>)
        } else if(this.state.customerMode === 'view') {
            return (<CustomerContainer changeCardFunc={this.changeCustomerMode}/>)
        }
    }

    render() {
        return (
            <Grid container className={this.props.classes.overviewContent}>
                <Grid item xs={6}>
                    <Box className={this.props.classes.gridItemContent}>
                        {this.customerCard()}
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box className={this.props.classes.gridItemContent}>
                        <VehicleContainer/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box className={this.props.classes.gridItemContent}>
                        <ContractContainer/>
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box className={this.props.classes.gridItemContent}>
                        <EventsContainer/>
                    </Box>
                </Grid>
            </Grid>
        );
    }
}

export default OverviewContent;