import * as actionTypes from "./actionTypes"
import axios from "axios"

export const authStart = ()=> ({type: actionTypes.AUTH_START})
export const authSuccess = token => ({type: actionTypes.AUTH_SUCCESS, token})
