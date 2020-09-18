import {
  SET_CURRENT_CITY_FROM_USER_AUTH,
  SET_CURRENT_CITY_BY_USER,
} from "../actions/types";
const initialState = {
  city: "",
};

export default function (state = initialState, action) {
  console.log(action.type);
  switch (action.type) {
    case SET_CURRENT_CITY_FROM_USER_AUTH:
      return {
        ...state,
        city: action.payload,
      };
    case SET_CURRENT_CITY_BY_USER:
      return {
        ...state,
        city: action.payload,
      };
    default:
      return state;
  }
}
