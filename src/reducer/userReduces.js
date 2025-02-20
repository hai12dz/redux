import { act } from 'react';
import {
    INCREMENT, DECREMENT, FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS
    , CREATE_USER_ERROR, CREATE_USER_REQUEST, CREATE_USER_SUCCESS

} from '../action/types';


const INITIAL_STATE = {

    listUser: [],
    isLoading: false,
    isError: false,
    isCreating: false
};

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case FETCH_USER_REQUEST:
            console.log('fetch user request   ', action);

            return {
                ...state, isLoading: true

            };
        case FETCH_USER_SUCCESS:
            console.log('fetch user sc   ', action);

            return {
                ...state, listUser: action.dataUser, isLoading: false, isError: false

            };

        case FETCH_USER_ERROR:
            console.log('fetch user err   ', action);

            return {
                ...state, isLoading: false, isError: true

            };


        case CREATE_USER_REQUEST:
            console.log('fetch user request   ', action);

            return {
                ...state, isCreating: true

            };
        case CREATE_USER_SUCCESS:
            console.log('fetch user sc   ', action);

            return {
                ...state, isCreating: false

            };

        case CREATE_USER_ERROR:
            console.log('fetch user sc   ', action);

            return {
                ...state, isCreating: false

            };


        default: return state;

    }

};

export default userReducer;
