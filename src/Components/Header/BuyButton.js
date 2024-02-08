import {Button} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function BuyButton(props) {
    return (
        <Button variant="contained" className={props.classes.actionButton} onClick={props.onClick}
                sx={{backgroundColor: "#105e65", '&:hover': {backgroundColor: '#105e65'}}}>
            <ShoppingCartIcon className={props.classes.actionButtonIcon}/> Buy Now
        </Button>
    );
}

export default BuyButton;