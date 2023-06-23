import * as actionTypes from "./actionTypes"
import axios from "axios"

export const authStart = () => ({ type: actionTypes.AUTH_START })
export const authSuccess = token => ({ type: actionTypes.AUTH_SUCCESS, token })
export const authFail = error => ({ type: actionTypes.AUTH_FAIL, error })
export const authLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationDate")
    return { type: actionTypes.AUTH_LOGOUT }
}
export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(authLogout())
        }, expirationTime * 1000)
    }
}
export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post("http://127.0.0.1:8000/auth/token/login/", {
            username, password
        }).then((response) => {
            const token = response.data.auth_token;
            const expirationDate = new Date();
            localStorage.setItem("token", token);
            localStorage.setItem("expirationDate", expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600))
        })
            .catch(error => {
                dispatch(authFail(error));
            })
    }
}

export const authSignUp = (username, email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post("http://127.0.0.1:8000/auth/token/login/", {
            username, email, password
        }).then((response) => {
            const token = response.data.auth_token;
            const expirationDate = new Date();
            localStorage.setItem("token", token);
            localStorage.setItem("expirationDate", expirationDate);
            dispatch(authSuccess(token));
            dispatch(checkAuthTimeout(3600))
        })
            .catch(error => {
                dispatch(authFail(error));
            })
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem("token")

        if (token === null) {
            dispatch(authLogout())
        } else{
            const expirationDate = new Date(localStorage.getItem("expirationDate")) 
            if (expirationDate <= new Date()){
                dispatch(authLogout())
            } else{
                dispatch(authSuccess(token))
                dispatch(checkAuthTimeout(3600))
            }
        }
    }
}
