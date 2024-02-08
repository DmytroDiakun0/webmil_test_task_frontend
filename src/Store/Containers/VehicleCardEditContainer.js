import { connect } from 'react-redux';
import {addEvent, editVehicle} from "../Actions";
import {getTime} from "../../functions";
import VehicleCardEdit from "../../Components/VehicleCard/VehicleCardEdit";

const mapStateToProps = (state) => ({
    vehicle: state.vehicle
});

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (vehicle) => {
            dispatch(editVehicle(vehicle));
            dispatch(addEvent({time: getTime(), type: 'Edit Vehicle'}));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(VehicleCardEdit);