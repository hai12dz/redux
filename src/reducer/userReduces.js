import { act } from 'react';
import { INCREMENT, DECREMENT, FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from '../action/types';


const INITIAL_STATE = {

    listUser: [],
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case FETCH_USER_REQUEST:
            console.log('fetch user request   ', action);

            return {
                ...state

            };

        case FETCH_USER_ERROR:
            console.log('fetch user err   ', action);

            return {
                ...state

            };

        case FETCH_USER_SUCCESS:
            console.log('fetch user sc   ', action);

            return {
                ...state, listUser: action.dataUser

            };

        default: return state;

    }

};

export default userReducer;
