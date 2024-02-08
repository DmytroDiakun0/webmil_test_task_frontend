import { connect } from 'react-redux';
import {addEvent, editCustomer} from "../Actions";
import {getTime} from "../../functions";
import CustomerCardEdit from "../../Components/CustomerCard/CustomerCardEdit";

const mapStateToProps = (state) => ({
    customer: state.customer
});

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (customer) => {
            dispatch(editCustomer(customer));
            dispatch(addEvent({time: getTime(), type: 'Edit Customer'}));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerCardEdit);