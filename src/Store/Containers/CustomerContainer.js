import { connect } from 'react-redux';
import CustomerCard from "../../Components/CustomerCard/CustomerCard";

const mapStateToProps = (state) => ({
    customer: state.customer
});

export default connect(mapStateToProps)(CustomerCard);