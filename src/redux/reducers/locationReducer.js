import {
  SET_CURRENT_CITY_FROM_USER_AUTH,
  SET_CURRENT_CITY_BY_USER,
} from "../actions/types";
const initialState = {
  city: DELHI,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_CITY_FROM_USER_AUTH:
      if (action.payload === "DELHI") {
        return {
          ...state,
          city: "DELHI",
        };
      } else if (action.payload === "NOIDA") {
        return {
          ...state,
          city: "NOIDA",
        };
      } else if (action.payload === "BANGALORE") {
        return {
          ...state,
          city: "BANGALORE",
        };
      } else if (action.payload === "GURUGRAM") {
        return {
          ...state,
          city: "GURUGRAM",
        };
      }

    case SET_CURRENT_CITY_BY_USER:
      if (action.payload === "DELHI") {
        return {
          ...state,
          city: "DELHI",
        };
      } else if (action.payload === "NOIDA") {
        return {
          ...state,
          city: "NOIDA",
        };
      } else if (action.payload === "BANGALORE") {
        return {
          ...state,
          city: "BANGALORE",
        };
      } else if (action.payload === "GURUGRAM") {
        return {
          ...state,
          city: "GURUGRAM",
        };
      }
    default:
      return state;
  }
}
