const initialState = {
    contractStatus: 'Active',
    customer: {
        name: '-',
        phoneNumber: '-',
        mail: '-',
        street: '-',
        city: '-'
    },
    vehicle: {
        carNumber: '-',
        serialNumber: '-',
        releaseDate: '-',
        brand: '-',
        fuelType: '-',
        battery: '-'
    },
    contractDetails: {
        name: '-',
        id: '-',
        totalPrice: '-',
        duration: '-',
        distance: '-',
        customerPrice: '-',
        startDate: '-',
        odometerAtExpiration: '-',
        endDate: '-',
        startMileage: '-'
    },
    events: []
}

function reducers(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_CONTRACT_STATUS':
            return Object.assign({}, state, {
                contractStatus: action.contractStatus
            });
        case 'EDIT_CUSTOMER':
            return Object.assign({}, state, {
                customer: action.customer
            });
        case 'EDIT_VEHICLE':
            return Object.assign({}, state, {
                vehicle: action.vehicle
            });
        case 'EDIT_CONTRACT_DETAILS':
            return Object.assign({}, state, {
                contractDetails: action.contractDetails
            });
        case 'ADD_EVENT':
            return Object.assign({}, state, {
                events: [
                    ...state.events,
                    {
                        time: action.event.time,
                        type: action.event.type
                    },
                ],
            });
        default:
            return state;
    }
}

export default reducers;