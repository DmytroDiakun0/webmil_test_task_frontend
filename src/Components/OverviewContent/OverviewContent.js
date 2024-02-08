import {Box, Grid} from "@mui/material";
import CustomerContainer from "../../Store/Containers/CustomerContainer";
import VehicleContainer from "../../Store/Containers/VehicleContainer";
import ContractContainer from "../../Store/Containers/ContractContainer";
import EventsContainer from "../../Store/Containers/EventsContainer";
import CustomerCardEditContainer from "../../Store/Containers/CustomerCardEditContainer";
import {Component} from "react";
import VehicleCardEditContainer from "../../Store/Containers/VehicleCardEditContainer";

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
        this.changeVehicleMode = this.changeVehicleMode.bind(this);
        this.vehicleCard = this.vehicleCard.bind(this);
    }

    changeCustomerMode() {
        if(this.state.customerMode === 'view') {
            this.setState({ customerMode : 'edit'})
        } else {
            this.setState({ customerMode : 'view'})
        }
    }

    changeVehicleMode() {
        if(this.state.vehicleMode === 'view') {
            this.setState({ vehicleMode : 'edit'})
        } else {
            this.setState({ vehicleMode : 'view'})
        }
    }

    /*const changeContractDetailsMode = () => {
        contractDetailsEditMode = !contractDetailsEditMode;
    }*/

    customerCard() {
        if(this.state.customerMode === 'edit') {
            return (<CustomerCardEditContainer changeCardFunc={this.changeCustomerMode}/>)
        } else if(this.state.customerMode === 'view') {
            return (<CustomerContainer changeCardFunc={this.changeCustomerMode}/>)
        }
    }

    vehicleCard() {
        if(this.state.vehicleMode === 'edit') {
            return (<VehicleCardEditContainer changeCardFunc={this.changeVehicleMode}/>)
        } else if(this.state.vehicleMode === 'view') {
            return (<VehicleContainer changeCardFunc={this.changeVehicleMode}/>)
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
                        {this.vehicleCard()}
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