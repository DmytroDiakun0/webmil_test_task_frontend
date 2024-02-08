import { connect } from 'react-redux';
import ContractCard from "../../Components/ContractCard/ContractCard";

const mapStateToProps = (state) => ({
    contractDetails: state.contractDetails
});

export default connect(mapStateToProps)(ContractCard);