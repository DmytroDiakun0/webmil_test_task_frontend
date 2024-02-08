import { connect } from 'react-redux';
import EventsCard from "../../Components/EventsCard/EventsCard";

const mapStateToProps = (state) => ({
    events: state.events
});

export default connect(mapStateToProps)(EventsCard);