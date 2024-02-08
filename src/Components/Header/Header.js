import {Box, Button, Link} from "@mui/material";
import headerStyles from "./Header_styles";
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PropTypes from "prop-types";

function Header(props) {
    const classes = headerStyles();

    const currentPath = window.location.pathname;
    let generalButtonClass;
    let statisticsButtonClass;

    if (currentPath.startsWith("/general")) {
        generalButtonClass = classes.activeLink;
    } else {
        generalButtonClass = classes.headerMenuLink;
    }
    if (currentPath.startsWith("/statistics")) {
        statisticsButtonClass = classes.activeLink;
    } else {
        statisticsButtonClass = classes.headerMenuLink;
    }

    return (
        <Box className={classes.header}>
            <Box className={classes.contractInfo}>
                <Box className={classes.contractName}>New vehicle contract</Box>
                <Box className={classes.contractStatus}>{props.contractStatus}</Box>
            </Box>
            <Box className={classes.headerMenu}>
                <Link className={generalButtonClass} href='/general/overview'>General</Link>
                <Link className={statisticsButtonClass} href='/statistics'>Statistics</Link>
            </Box>
            <Box className={classes.actionButtonsBar}>
                <Button variant="contained" className={classes.actionButton}
                        sx={{backgroundColor: "#105e65", '&:hover': {backgroundColor: '#105e65'}}}>
                    <ShoppingCartIcon className={classes.actionButtonIcon}/> Buy Now
                </Button>
                <Button variant="contained" className={classes.actionButton}
                        sx={{backgroundColor: "#a33e43", '&:hover': {backgroundColor: '#a33e43'}}}>
                    <CloseIcon className={classes.actionButtonIcon}/> Close Offer
                </Button>
            </Box>
        </Box>
    );
}

Header.propTypes = {
    contractStatus: PropTypes.string.isRequired,
};

export default Header;