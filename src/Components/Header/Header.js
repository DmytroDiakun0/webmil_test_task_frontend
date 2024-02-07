import './Header_styles';
import {Box, Button, Link} from "@mui/material";
import useStyles from "./Header_styles";
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Header() {
    const classes = useStyles();

    return (
        <Box className={classes.header}>
            <Box className={classes.contractInfo}>
                <Box className={classes.contractName}>New vehicle contract</Box>
                <Box className={classes.contractStatus}>Active</Box>
            </Box>
            <Box className={classes.headerMenu}>
                <Link className={classes.headerMenuLink} href='#'>General</Link>
                <Link className={classes.headerMenuLink} href='#'>Statistics</Link>
            </Box>
            <Box className={classes.actionButtonsBar}>
                <Button variant="contained" className={classes.actionButton} sx={{backgroundColor: "#105e65"}}>
                    <ShoppingCartIcon className={classes.actionButtonIcons}/> Buy Now
                </Button>
                <Button variant="contained" className={classes.actionButton} sx={{backgroundColor: "#a33e43"}}>
                    <CloseIcon className={classes.actionButtonIcons}/> Close Offer
                </Button>
            </Box>
        </Box>
    );
}

export default Header;