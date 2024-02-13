import {Box, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import CustomerCard from "../CustomerCard/CustomerCard";
import customersStyles from "./Customers_styles";

function Customers(props) {
    const classes = customersStyles();

    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/customers", { method: 'GET', headers:{ accept: 'application/json' } })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCustomers(result.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const customersList = () => {
        const components = [];

        for(let i = 0; i < customers.length; i++) {
            components.push(
                <Grid item xs={6}>
                    <Box className={classes.gridItemContent}>
                        {<CustomerCard customer={customers[i]}/>}
                    </Box>
                </Grid>
            )
        }

        return components;
    }

    if (error) {
        return <div>Помилка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Завантаження...</div>;
    } else {
        return (
            <Grid container className={classes.customers}>
                {customersList()}
            </Grid>
        );
    }
}

export default Customers;