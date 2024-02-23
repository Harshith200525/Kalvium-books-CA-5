import { legacy_createStore } from "redux";
import reducer from "./Reducer";

// Creating the store
const store = legacy_createStore(reducer)

export default store