import {CHANGE_SERVICE_FIELD, ADD_SERVICE, EDITTING_SERVICE} from '../actions/actionTypes'

const initialState = {
    price: '',
    id: '',
    name: ''
};

export default function serviceAddReducer (state = initialState, action) {
    switch (action.type) {
        case CHANGE_SERVICE_FIELD:
            const {name, value} = action.payload;
            return {...state, [name]: value};
        case EDITTING_SERVICE:
            const {currName, currPrice, currId} = action.payload;
            return {...state, name: currName, price: currPrice, id: currId}
        case ADD_SERVICE: 
            return {...initialState}
        default:
            return state;
    }
} 