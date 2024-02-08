import {Button} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function CloseButton(props) {
    return (
        <Button variant="contained" className={props.classes.actionButton} onClick={props.onClick}
                sx={{backgroundColor: "#a33e43", '&:hover': {backgroundColor: '#a33e43'}}}>
            <CloseIcon className={props.classes.actionButtonIcon}/> Close Offer
        </Button>
    );
}

export default CloseButton;