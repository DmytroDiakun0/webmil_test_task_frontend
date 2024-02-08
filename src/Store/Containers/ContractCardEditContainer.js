import { connect } from 'react-redux';
import {addEvent, editContractDetails} from "../Actions";
import {getTime} from "../../functions";
import ContractCardEdit from "../../Components/ContractCard/ContractCardEdit";

const mapStateToProps = (state) => ({
    contractDetails: state.contractDetails
});

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: (contractDetails) => {
            dispatch(editContractDetails(contractDetails));
            dispatch(addEvent({time: getTime(), type: 'Edit Contract'}));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContractCardEdit);