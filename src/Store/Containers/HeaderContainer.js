import { connect } from 'react-redux';
import Header from "../../Components/Header/Header";

const mapStateToProps = (state) => ({
    contractStatus: state.contractStatus
});

export default connect(mapStateToProps)(Header);