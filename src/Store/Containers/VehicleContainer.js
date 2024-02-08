import { connect } from 'react-redux';
import VehicleCard from "../../Components/VehicleCard/VehicleCard";

const mapStateToProps = (state) => ({
    vehicle: state.vehicle
});

export default connect(mapStateToProps)(VehicleCard);