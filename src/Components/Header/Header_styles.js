import { createUseStyles } from "react-jss";

const headerStyles = createUseStyles({
    header: {
        position: 'relative',
        backgroundColor: '#548a8f',
        paddingLeft: '250px',
        paddingTop: '40px',
        height: '105px'
    },
    contractInfo: {

    },
    contractName: {
        fontSize: '24px',
        color: '#FFFFFF',
        letterSpacing: '2px',
        display: 'inline-block',
        marginRight: '10px'
    },
    contractStatus: {
        fontSize: '14px',
        color: '#FFFFFF',
        display: 'inline-block',
        backgroundColor: '#000000',
        borderRadius: '20px',
        padding: '1px 12px 3px 12px',
        verticalAlign: 'baseline'
    },
    headerMenu: {
        position: 'absolute',
        bottom: '8px',
        left: '250px'
    },
    headerMenuLink: {
        backgroundColor: '#105e65',
        borderRadius: '10px 10px 0 0',
        padding: '9px 30px',
        color: '#FFFFFF',
        fontSize: '12px',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },
    /*activeLink: {
        backgroundColor: '#FFFFFF',
        borderRadius: '10px 10px 0 0',
        border: '2px solid #000000',
        borderBottom: '0px',
        padding: '8px 28px 9px 28px',
        color: '#000000',
        fontSize: '12px',
        textTransform: 'uppercase',
        textDecoration: 'none'
    },*/
    actionButtonsBar: {
        position: 'absolute',
        bottom: '8px',
        right: '20px'
    },
    actionButton: {
        marginLeft: '20px',
        fontSize: '12px',
        fontWeight: '300'
    },
    actionButtonIcon: {
        fontSize: '14px',
        marginRight: '10px'
    }
});

export default headerStyles;