import { createUseStyles } from "react-jss";

const customerCardStyles = createUseStyles({
    cardHeader: {
        position: 'relative',
        padding: '15px',
        backgroundColor: '#fafafa',
        color: '#909090'
    },
    cardActionButton: {
        position: 'absolute',
        top: '0px',
        right: '0px',
        margin: '10px',
        padding: '3px 10px',
        fontSize: '12px',
        color: '#000000',
        borderColor: '#c0c0c0',
        '&:hower': {
            color: '#000000',
            borderColor: '#c0c0c0',
        }
    },
    actionButtonIcon: {
        fontSize: '14px',
        marginRight: '10px'
    },
    cardFirstElement: {
        fontSize: '24px',
        marginBottom: '20px'
    },
    cardElement: {
        fontSize: '12px',
        marginBottom: '15px'
    },
    cardFirstIcon: {
        fontSize: '36px',
        color: '#105765',
        verticalAlign: 'middle'
    },
    cardIcon: {
        fontSize: '18px',
        color: '#105765',
        verticalAlign: 'middle',
        marginRight: '10px'
    }
});

export default customerCardStyles;