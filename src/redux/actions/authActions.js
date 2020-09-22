import { API } from "../../backend";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  // GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING,
  USER_LOADED,
} from "./types";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
toast.configure();

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post(`${API}/signup`, userData)
    .then((res) => history.push("/signin")) // re-direct to login on successful register
    .catch((err) =>
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data,
      // })
      // error message
      toast(err.response.data.error, { type: "warning" })
    );
};

// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  axios
    .post(`${API}/signin`, userData)
    .then((res) => {
      // console.log(res.data);
      // Save to localStorage
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(localStorage.getItem("jwtToken"));
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // console.log(decoded);
      // Set current user
      dispatch(setCurrentUser(decoded));
      // login messag on succes
      toast("Logged in Successfully", { type: "success" });
      // set loading to false
      dispatch(setUserLoaded());
    })
    .catch((err) => {
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: err.response.data,
      // });
      // error message
      toast(err.response.data.error, { type: "error" });
      dispatch(setUserLoaded());
    });
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};

// User loading
export const setUserLoaded = () => {
  return {
    type: USER_LOADED,
  };
};

// Log user out
export const logoutUser = (history) => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  // this.props.history.push("/");
  toast("Logged out Successfully", { type: "warning" });
};
