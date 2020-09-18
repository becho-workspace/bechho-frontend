import {
  SET_CURRENT_CITY_FROM_USER_AUTH,
  SET_CURRENT_CITY_BY_USER,
} from "./types";

export const setCurrentCityFromUserAuth = (city) => {
  return {
    type: SET_CURRENT_CITY_FROM_USER_AUTH,
    payload: city,
  };
};

export const setCurrentCityByUser = (city) => {
  return {
    type: SET_CURRENT_CITY_BY_USER,
    payload: city,
  };
};
