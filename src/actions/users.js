import * as types from "./types"
import * as api from "../api/index"

export const fetchUsers = async (dispatch) =>{
    try {
        const { data } = await api.fetchUsers();
        dispatch({
            type: types.FETCH_USERS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createUsers = (user) => async (dispatch) =>{
    try {
        const { data } = await api.createUsers(user);
        dispatch({
            type: types.CREATE_USERS,
            payload: data 
        })
    } catch (error) {
        console.log(error)
    }
}