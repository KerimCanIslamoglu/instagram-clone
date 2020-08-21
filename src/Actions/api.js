

import axios from 'axios'
import { Alert } from 'react-native'

import { USER } from './types'

import * as RootNavigation from '../Navigation/RootNavigation';


export const post = (url, params, dispatch, start) => {
    const method = url.split('/').pop();
    axios({
        method: 'post',
        url,
        data: params,
        headers: {
            authorization: 'Bearer '.concat(USER.token)
        }
    }).then((response) => {
        dispatch({ type: start, payload: response.data })

        if (method == 'login') {
            USER.token = response.data.token
            RootNavigation.replace('List')

            //   AsyncStorage.setItem(LOCAL_AUTH_ID, response.data.token)
        }
        //  else if(method == 'addCharacter'){
        //   RootNavigation.pop()
        // }

    }).catch((err) => {
        console.log('Gelen POST Hatalı: => ', err.response.data);
        Alert.alert('UYARI', err.response.data.message)
    })
}


export const get = (url, params, dispatch, start) => {
    axios({
        method: 'get',
        url,
        data: params,
        headers: {
            authorization: 'Bearer '.concat(USER.token)
        }
    }).then((response) => {
        dispatch({ type: start, payload: response.data })
        console.log("list",response.data)
    }).catch((err) => {
        console.log('Gelen POST Hatalı: => ', err.response.data);
        Alert.alert('UYARI', err.response.data.message)
    })
}