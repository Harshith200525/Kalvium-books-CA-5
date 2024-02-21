import { REGISTER } from "./ActionType"

const initialState = {
    name: "",
    email: "",
    password: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                ...state,
                name: action.payload.name,
                email: action.payload.email,
                password: action.payload.password,
            }
        default:
            return state
    }
}

export default reducer