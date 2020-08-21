import {
    BASE_URL,
    LIST,

} from './types'

import { get } from './api'


export const getList = (params) => {
    return (dispatch) => {
        get(
            BASE_URL.concat('/api/characters'),
            params,
            dispatch,
            LIST
        )
    }
}


