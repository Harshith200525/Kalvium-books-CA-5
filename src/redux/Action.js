import { REGISTER } from "./ActionType"

export const formSubmitted = (userData) => {
    return { type: REGISTER, payload: userData }
}