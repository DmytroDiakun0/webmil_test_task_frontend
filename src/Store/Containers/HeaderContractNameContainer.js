import { connect } from 'react-redux';
import ContractName from "../../Components/Header/ContractName";

const mapStateToProps = (state) => ({
    contractName: state.contractDetails.name
});

export default connect(mapStateToProps)(ContractName);