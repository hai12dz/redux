import { INCREMENT, DECREMENT } from './types';


export const increaseCounter = () => {

    return {

        type: INCREMENT,
        payload: {
            like: 'haidaodz'
        }

    };

};

export const decreaseCounter = () => {

    return {

        type: DECREMENT,

    };

};
