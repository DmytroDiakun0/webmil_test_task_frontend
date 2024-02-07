import { createUseStyles } from "react-jss";

const contractCardStyles = createUseStyles({
    card: {
        paddingBottom: '20px'
    },
    contractNameIcon: {
        transform: 'scaleY(-1)'
    },
    contractDetail: {
        fontSize: '12px'
    },
    contractDetailTitle: {
        color: '#909090'
    },
    contractDetailValue: {
        color: '#000000'
    }
});

export default contractCardStyles;