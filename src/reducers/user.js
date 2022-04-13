import * as types from "../actions/types"

const initialState = {
    users: []
};

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case types.FETCH_USERS:
            return{
                ...state,
                users: action.payload,
            };
        case types.CREATE_USERS:
            return{
                ...state,
                users: [...state.users, action.payload],
            };
        default: 
            return{
                ...state,
            };
    }
}

export default userReducer;