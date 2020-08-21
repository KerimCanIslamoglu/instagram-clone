import {
    BASE_URL,
    LIST,

} from '../Actions/types';
const INITIAL_STATE = {
    list: []
};
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LIST:
            return {
                ...state,
                list: action.payload.characters
            };

        default:
            return state;
    }
};