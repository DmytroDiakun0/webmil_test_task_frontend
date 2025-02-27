import {Box, Link} from "@mui/material";
import headerStyles from "./Header_styles";
import StatusIconContainer from "../../Store/Containers/StatusIconContainer";
import BuyButtonContainer from "../../Store/Containers/BuyButtonContainer";
import CloseButtonContainer from "../../Store/Containers/CloseButtonContainer";
import HeaderContractNameContainer from "../../Store/Containers/HeaderContractNameContainer";

function Header() {
    const classes = headerStyles();

    const currentPath = window.location.pathname;
    let generalButtonClass;
    let statisticsButtonClass;

    if (currentPath.startsWith("/general") || currentPath === '/') {
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
                <HeaderContractNameContainer className={classes.contractName}/>
                <StatusIconContainer className={classes.contractStatus}/>
            </Box>
            <Box className={classes.headerMenu}>
                <Link className={generalButtonClass} href='/#/general/overview'>General</Link>
                <Link className={statisticsButtonClass} href='/#/statistics'>Statistics</Link>
            </Box>
            <Box className={classes.actionButtonsBar}>
                <BuyButtonContainer classes={classes}/>
                <CloseButtonContainer classes={classes}/>
            </Box>
        </Box>
    );
}

export default Header;