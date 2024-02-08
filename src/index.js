import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import reducers from './Store/Reducers/index';
import { configureStore } from '@reduxjs/toolkit';

const getTime = () => {
    const currentDate = new Date();

    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = String(currentDate.getFullYear()).slice(-2);
    const hours = String(currentDate.getHours()).padStart(2, '0');
    const minutes = String(currentDate.getMinutes()).padStart(2, '0');

    return `${day}.${month}.${year} ${hours}:${minutes}`;
}

const initialState = {
    contractStatus: 'Active',
    customer: {
        name: 'Oleksandr',
        phoneNumber: '000000',
        mail: 'test@email.com',
        street: 'Mazepy',
        city: 'Ivano-Frankivsk'
    },
    vehicle: {
        carNumber: 'AT0000AK',
        serialNumber: 'AMlMEA',
        releaseDate: '24.02.2022',
        brand: 'Volvo V40',
        fuelType: 'Diesel',
        battery: '140'
    },
    contractDetails: {
        id: '00001',
        totalPrice: '3555.00',
        duration: '36',
        distance: '140.000',
        customerPrice: '98.75',
        startDate: '01.02.2024',
        odometerAtExpiration: '140.001',
        endDate: '01.02.2027',
        startMileage: '1'
    },
    events: [
        {
            time: getTime(),
            type: 'Created'
        }
    ]
}

const store = configureStore({reducer: reducers, preloadedState: initialState});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);

reportWebVitals();
