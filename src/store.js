import {createStore} from "redux";

const reducer = (state,action) =>{
  if(action.type === "TOGGLE_NAV_MENU"){
    return{
      ...state,
      navMenuFlag: action.navMenuFlag,
    }
  }
  return state;
}
export default createStore(reducer, {navMenuFlag: false});