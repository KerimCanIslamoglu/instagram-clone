import {
    BASE_URL,
    LOGIN,

} from '../Actions/types';
const INITIAL_STATE = {
    user: null
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                user: action.payload
            };

        default:
            return state;
    }
};