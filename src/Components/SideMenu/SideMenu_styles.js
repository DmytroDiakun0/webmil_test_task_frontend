import { createUseStyles } from "react-jss";

const sideMenuStyles = createUseStyles({
    sideMenu: {
        width: '175px',
        padding: '25px 25px 25px 50px'
    },
    sideMenuLink: {
        display: 'block',
        marginBottom: '15px',
        fontSize: '12px',
        color: '#105765',
        textDecoration: 'none',
        textTransform: 'uppercase',
        fontWeight: '600',
        verticalAlign: 'middle'
    },
    sideMenuIcon: {
        fontSize: '22px',
        color: '#105765',
        marginRight: '5px',
        verticalAlign: 'middle'
    }
});

export default sideMenuStyles;