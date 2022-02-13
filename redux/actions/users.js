import {
  ERROR_AUTH,
  LOGIN_USER,
  REGISTER_USER,
  UPDATE_PROFILE
} from "../constants/users";
import axios from "axios";

export const registerUser = (payload) => async (dispatch) => {
  // loading
  dispatch({
    type: REGISTER_USER,
    payload: {
      loading: true,
      data: false,
      error: false,
      redirect: false
    }
  })

  // post data
  await axios.post(`https://impostorteam-app.herokuapp.com/api/register`, payload)
    .then((res) => {
      console.log("success: ", res);
      dispatch({
        type: REGISTER_USER,
        payload: {
          loading: false,
          data: res.data.data,
          error: false,
          redirect: true
        }
      })
    })
    .catch((err) => {
      console.log("error: ", err.response.data);
      dispatch({
        type: REGISTER_USER,
        payload: {
          loading: false,
          data: false,
          error: err.response.data,
          redirect: false
        }
      })
    })
}

export const loginUser = (payload) => async (dispatch) => {
  // loading
  dispatch({
    type: LOGIN_USER,
    payload: {
      loading: true,
      data: false,
      error: false,
      redirect: false
    }
  })

  // post data
  await axios.post(`https://impostorteam-app.herokuapp.com/api/login`, payload)
    .then((res) => {
      console.log("success: ", res);
      console.log("res login: ", res);
      const token = res.data.token;
      sessionStorage.setItem("token", token);
      sessionStorage.setItem("username", res.data.data.data.username);
      const userToken = sessionStorage.getItem("token");
      if (userToken) {
        localStorage.setItem("data", JSON.stringify(res.data));
        // localStorage.setItem("userId", res.data.data.user.id);
        // setRedirect(true);
      }
      dispatch({
        type: LOGIN_USER,
        payload: {
          loading: false,
          data: res.data.data,
          error: false,
          redirect: true
        }
      })
    })
    .catch((err) => {
      console.log('error: ', err.response.data.message);
      dispatch({
        type: LOGIN_USER,
        payload: {
          loading: false,
          data: false,
          error: err.response.data.message,
          redirect: false
        }
      })
    })
}

export const updateProfile = (payload) => (dispatch) => {
  // loading
  dispatch({
    type: UPDATE_PROFILE,
    payload: {
      loading: true,
      data: false,
      error: false,
      redirect: false
    }
  })

  axios
    .put(`https://impostorteam-app.herokuapp.com/api/users/${payload.id}`, payload)
    .then((res) => {
      console.log('res update biodata:', res);
      localStorage.setItem('data', JSON.stringify(res))
      dispatch({
        type: UPDATE_PROFILE,
        payload: {
          loading: false,
          data: res.data,
          error: false,
          redirect: false
        }
      })
    })
    .catch((err) => {
      console.log("error: ", err);
      dispatch({
        type: UPDATE_PROFILE,
        payload: {
          loading: false,
          data: false,
          error: err.response,
          redirect: false
        }
      })
    });
}