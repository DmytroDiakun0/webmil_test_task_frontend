import {Box} from "@mui/material";
import PropTypes from "prop-types";

function StatusIcon(props) {
    return (
        <Box className={props.className}>{props.contractStatus}</Box>
    );
}

StatusIcon.propTypes = {
    contractStatus: PropTypes.string.isRequired,
};

export default StatusIcon;