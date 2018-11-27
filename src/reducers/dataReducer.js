import { FETCH_DATA, RECEIVED_DATA } from '../actions/types';

const initState = {
    // data: [],
    // item: {}
}

export default function (state = initState, action) {
    switch (action.type) {
        case FETCH_DATA:
            console.log('Fetching Data');
            return {
                ...state,
                // data: action.payload
            }
        case RECEIVED_DATA:
            console.log('Received Data -> ', action.data.ownerList);
            return {
                ...state,
                data: action.data.ownerList
            }

        case "ADD_OWNER":
            console.log('Adding New Owner -> ');
            return {
                ...state,
                // data: action.data
            }
        case "ADDED_NEW_OWNER":
            console.log('Received Data -> ', action.data);
            return {
                ...state,
                data: action.data
            }
        case "ADD_PRODUCT":
            console.log('Adding New PRODUCT -> ');
            return {
                ...state,
                // data: action.data
            }
        case "ADDED_NEW_PRODUCT":
            console.log('Received Data -> ', action.data);
            return {
                ...state,
                data: action.data
            }
        default:
            return state;
    }
}