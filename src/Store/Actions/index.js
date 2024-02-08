export const changeContractStatus = (contractStatus) => ({
    type: 'CHANGE_CONTRACT_STATUS',
    contractStatus
})

export const editCustomer = (customer) => ({
    type: 'EDIT_CUSTOMER',
    customer
})

export const editVehicle = (vehicle) => ({
    type: 'EDIT_VEHICLE',
    vehicle
})

export const editContractDetails = (contractDetails) => ({
    type: 'EDIT_CONTRACT_DETAILS',
    contractDetails
})

export const addEvent = (event) => ({
    type: 'ADD_EVENT',
    event
})