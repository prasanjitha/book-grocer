import { SET_EMAIL, USER_LOGIN, SET_PAWWSORD, SUBMIT_USER_DATA, SET_PHONE, SET_IS_LOADING, SET_FIRST_NAME, SET_LAST_NAME, SET_GROUP_CODE } from './user-actions';

const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    code: '',
    phone: '',
    isLoading: false,
    registerData: {},
    userLogin: {}
}

function registerReducer(state = initialState, action) {
    switch (action.type) {
        case SET_FIRST_NAME:
            return { ...state, firstName: action.payload };
        case SET_LAST_NAME:
            return { ...state, lastName: action.payload };
        case SET_EMAIL:
            return { ...state, email: action.payload };
        case SET_PHONE:
            return { ...state, phone: action.payload };
        case SET_PAWWSORD:
            return { ...state, password: action.payload };
        case SET_GROUP_CODE:
            return { ...state, code: action.payload };
        case SUBMIT_USER_DATA:
            return { ...state, registerData: action.payload };
        case SET_IS_LOADING:
            return { ...state, isLoading: action.payload };
        case USER_LOGIN:
            return { ...state, userLogin: action.payload };
        default:
            return state;
    }
}

export default registerReducer;