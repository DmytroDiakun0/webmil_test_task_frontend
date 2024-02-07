import cardStyles from "../../Styles/CardStyles";
import contractCardStyles from "./ContractCard_styles";
import {Box, Card, CardContent, Grid} from "@mui/material";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function ContractCard() {
    const classes = contractCardStyles();
    const cardClasses = cardStyles();

    const param = [
        'ID #:',
        'Total Price:',
        'Duration / Distance:',
        'Customer Price/mth.:',
        'Start Date:',
        'Odometer at expiration:',
        'End Date:',
        'Start Mileage'
    ];
    const value = [
        '00001',
        '3.555,00 $',
        '36 months / 140.000 km',
        '98.75 $',
        '01.02.2024',
        '140.001 km',
        '01.02.2027',
        '1 km'
    ];

    function contractDetails(param, value) {
        const components = [];

        for(let i = 0; i < param.length; i++) {
            components.push(
                <Grid item container xs={6} className={classes.contractDetail}>
                    <Grid item xs={9} className={classes.contractDetailTitle}>
                        {param[i]}
                    </Grid>
                    <Grid item xs={3} className={classes.contractDetailValue}>
                        {value[i]}
                    </Grid>
                </Grid>
            )
        }

        return components;
    }

    return (
        <Box>
            <Box className={cardClasses.cardHeader}>
                <Box>Contract</Box>
            </Box>
            <Card variant="outlined" className={cardClasses.card + ' ' + classes.card}>
                <CardContent>
                    <Box className={cardClasses.cardFirstElement}>
                        <ContentCopyIcon className={cardClasses.cardFirstIcon + ' ' + classes.contractNameIcon}/> New vehicle contract
                    </Box>
                    <Grid container>
                        {contractDetails(param, value)}
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}

export default ContractCard;