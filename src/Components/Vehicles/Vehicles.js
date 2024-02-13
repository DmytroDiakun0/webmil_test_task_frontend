import {Box, Grid} from "@mui/material";
import {useEffect, useState} from "react";
import vehiclesStyles from "./Vehicles_styles";
import VehicleCard from "../VehicleCard/VehicleCard";

function Vehicles() {
    const classes = vehiclesStyles();

    const [vehicles, setVehicles] = useState([]);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("http://localhost:8000/api/v1/vehicles", { method: 'GET', headers:{ accept: 'application/json' } })
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setVehicles(result.data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    const vehiclesList = () => {
        const components = [];

        for(let i = 0; i < vehicles.length; i++) {
            components.push(
                <Grid item xs={6}>
                    <Box className={classes.gridItemContent}>
                        {<VehicleCard vehicle={vehicles[i]}/>}
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
            <Grid container className={classes.vehicles}>
                {vehiclesList()}
            </Grid>
        );
    }
}

export default Vehicles;