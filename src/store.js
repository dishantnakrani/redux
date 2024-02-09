import { createStore } from "redux";
// import rootReducer from "./components/redux/reducer/Reducer";
import Reducer from "./components/redux/reducer/Reducer";

const store = createStore(
  Reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const store = createStore(rootReducer);

export default store;
