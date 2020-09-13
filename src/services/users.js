import { authHeader } from "../helpers/index";
import setAuthToken from "../global/setAuthToken";
import axios from "axios";

export const userService = {
  login,
  logout,
  getAll,
  getById,
};

function login(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };
  return axios
    .post("https://bechho-release-first.herokuapp.com/signin", requestOptions)
    .then(handleResponse)
    .then((data) => {
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      setAuthToken(data.token);
      return data.user;
      console.log(data.user);
    });
}

function logout() {
  localStorage.removeItem("user");
  setAuthToken("");
}

function getAll() {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };
  return fetch(`/users`, requestOptions).then(handleResponse);
}

function getById(id) {
  const requestOptions = {
    method: "GET",
    headers: authHeader(),
  };

  return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        logout();
        // location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
