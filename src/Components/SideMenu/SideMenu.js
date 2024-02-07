import {Box, Link} from "@mui/material";
import sideMenuStyles from "./SideMenu_styles";
import SettingsIcon from '@mui/icons-material/Settings';
import GroupIcon from '@mui/icons-material/Group';
import DashboardIcon from '@mui/icons-material/Dashboard';

function SideMenu() {
    const classes = sideMenuStyles();

    return (
        <Box className={classes.sideMenu}>
            <Link className={classes.sideMenuLink} href='#'>
                <DashboardIcon className={classes.sideMenuIcon}/> Overview
            </Link>
            <Link className={classes.sideMenuLink} href='#'>
                <GroupIcon className={classes.sideMenuIcon}/> Customers
            </Link>
            <Link className={classes.sideMenuLink} href='#'>
                <SettingsIcon className={classes.sideMenuIcon}/> Administration
            </Link>
        </Box>
    );
}

export default SideMenu;