import { createUseStyles } from "react-jss";

const eventsCardStyles = createUseStyles({
    card: {
        paddingTop: '5px',
    },
    eventsList: {
        padding: '0px',
        '&:last-child': {
            paddingBottom: '0px'
        }
    },
    eventInfo: {
        padding: '15px 15px 15px 20px',
        fontSize: '12px',
        '&:nth-child(even)': {
            backgroundColor: '#f4f4f4'
        },
        '&:nth-child(odd)': {
            backgroundColor: '#ffffff'
        }
    },
    dateColumnIcon: {
        transform: 'rotate(90deg)',
        fontSize: '18px',
        verticalAlign: 'middle'
    }
});

export default eventsCardStyles;