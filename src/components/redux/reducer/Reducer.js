import { changeTheNumber, formData } from "./DrawerResucer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  changeTheNumber: changeTheNumber,
  formData: formData,
});

export default rootReducer;
