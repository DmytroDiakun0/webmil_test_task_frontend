import { connect } from 'react-redux';
import BuyButton from "../../Components/Header/BuyButton";
import {addEvent, changeContractStatus} from "../Actions";
import {getTime} from "../../functions";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(changeContractStatus('ActivePaid'));
            dispatch(addEvent({time: getTime(), type: 'Buy Now'}))
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuyButton);