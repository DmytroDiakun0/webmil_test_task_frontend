import { connect } from 'react-redux';
import StatusIcon from "../../Components/Header/StatusIcon";

const mapStateToProps = (state) => ({
    contractStatus: state.contractStatus
});

export default connect(mapStateToProps)(StatusIcon);