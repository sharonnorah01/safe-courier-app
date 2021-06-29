import { AUTH  } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const signin = (formData, history) => async(dispatch) => {
    try {
        const {data} = await api.signIn(formData);
       // console.log(data);
        localStorage.setItem("token", data.token)

        dispatch({ type: AUTH, data});
        //login the user
        history.push('/')
        
    } catch (error) {
        console.log(error)

        
    }

}

export const signup = (formData, history) => async(dispatch) => {
    try {
        const {data} = await api.signUp(formData);
       // console.log(data)

        dispatch({ type: AUTH, data});
        //signup the user
        history.push('/')
        
    } catch (error) {
        console.log(error)

        
    }

}