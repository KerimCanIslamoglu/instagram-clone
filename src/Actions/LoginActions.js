import {
    BASE_URL,
    LOGIN,
    USER
} from './types'

import {  post } from './api'


export const login = (params) => {
    return (dispatch) => {
        if (params.email != '' && params.password != '') {
            if (validateEmail(params.email)) {
                post(
                    BASE_URL.concat('/login'),
                    params,
                    dispatch,
                    LOGIN
                )
            } else {
                Alert.alert('WARNING', 'Please type valid email!')
            }
        } else {
            Alert.alert('WARNING', 'Please fill all fields!')
        }

    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

