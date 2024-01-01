import { createStore, combineReducers } from "redux"
import { bankReduser, productReduser } from "./redusers";


// Constants
export const WITHDRAW_MONY = "WITHDRAW_MONY";
export const DEPOSITE_MONY = "DEPOSITE_MONY";
export const ADD_PRODUCTE = "ADD_PRODUCTE";
export const GET_PRODUCTES = "GET_PRODUCTES";
export const apiUri = 'https://fakestoreapi.com/products';


// Store
export const appReduser = combineReducers({
    bank: bankReduser,
    producte: productReduser,
});

export const store = createStore(appReduser);