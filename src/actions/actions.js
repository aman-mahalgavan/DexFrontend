import { FETCH_DATA } from './types';

/* export const fetchData = () => dispatch => {
    console.log('fetching... ');
    const data = require('../data/data.json');
    dispatch({
        type: FETCH_DATA,
        payload: data
    });
} */

export const fetchData = () => ({
    type: "FETCH_DATA"
});

export const addOwner = () => ({
    type: "ADD_OWNER"
})

export const addProduct = () => ({
    type: "ADD_PRODUCT"
})