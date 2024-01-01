import { ADD_PRODUCTE, DEPOSITE_MONY, GET_PRODUCTES, WITHDRAW_MONY, apiUri } from "./reduxIndex"

//  ==  stap 1 Action Creator
export const withDrawMony = (amount) => {
    return {
        type: WITHDRAW_MONY,
        payload: amount
    }
}
export const depositeMony = (amount) => {
    return {
        type: DEPOSITE_MONY,
        payload: amount
    }
}
//  Producte actions
export const addProducte = function (product) {
    return {
        type: ADD_PRODUCTE,
        payload: product
    }
}
export const getProductes = function (productes) {
    return {
        type: GET_PRODUCTES,
        payload: productes
    }
}
export const fetchProductes = function () {
    return async (dispatch) => {
        const res = await fetch(apiUri);
        const data = await res.json();
        console.log(data);
        dispatch(getProductes(data));
    }
}