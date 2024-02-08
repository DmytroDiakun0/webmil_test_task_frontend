import { connect } from 'react-redux';
import {addEvent, changeContractStatus} from "../Actions";
import CloseButton from "../../Components/Header/CloseButton";
import {getTime} from "../../functions";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(changeContractStatus('Closed'));
            dispatch(addEvent({time: getTime(), type: 'Close Offer'}))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CloseButton);