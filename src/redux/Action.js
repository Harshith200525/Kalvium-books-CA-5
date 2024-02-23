import { REGISTER } from "./ActionType"

// Defining the action
export const formSubmitted = (userData) => {
    return { type: REGISTER, payload: userData }
}