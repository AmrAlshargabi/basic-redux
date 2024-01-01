import { WITHDRAW_MONY, DEPOSITE_MONY, ADD_PRODUCTE, GET_PRODUCTES } from "./reduxIndex"


export const bankReduser = (state = 1000, action) => {
    switch (action.type) {
        case WITHDRAW_MONY:
            return state - action.payload;
        case DEPOSITE_MONY:
            return state + action.payload;
        default:
            return state;
    }
}

// ==  product Reduser
export const productReduser = (state = [{ id: 1, titel: "product 1" }], action) => {
    switch (action.type) {
        case ADD_PRODUCTE:
            return [...state, action.payload];
        case GET_PRODUCTES:
            return [...state, action.payload];
        default:
            return state;
    }
}
