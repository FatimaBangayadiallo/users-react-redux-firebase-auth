import { createStore } from "redux";
import reducer from "../reducers/reducerUsers";

const store = createStore(reducer);

export default store;
