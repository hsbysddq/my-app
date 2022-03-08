import axios from 'axios';
import Cookies from 'js-cookie';
import {
  CALCULATE_RESULT,
  CLEAR_STATE_GAME,
  DECREMENT_SCORE,
  INCREMENT_SCORE,
  PLAYED_GAME_1,
  RESET,
  SET_COMPUTER_FINGER,
  SET_SCORE_FROM_LOCALSTORAGE,
  SET_USER_FINGER,
} from '../constants/game';

export const reset = () => ({
  type: RESET,
});

export const setUserFinger = (payload) => ({
  type: SET_USER_FINGER,
  payload,
});

export const setComputerFinger = (payload) => ({
  type: SET_COMPUTER_FINGER,
  payload,
});

export const calculateResult = () => ({
  type: CALCULATE_RESULT,
});

export const setScoreFromLocalStorage = (payload) => async (dispatch) => {
  const myProfile = JSON.parse(Cookies.get('data'));
  const { data } = myProfile.data;
  const newData = {
    score: payload,
    id: data.id,
  };
  await axios
    .put(`https://server-impostor.herokuapp.com/api/users/score/${newData.id}`, newData)
    .then((res) => {
      Cookies.set('data', JSON.stringify(res));
      dispatch({
        type: SET_SCORE_FROM_LOCALSTORAGE,
        payload: res.data.data.score,
      });
    })
    .catch((err) => {
      console.log('error: ', err);
    });
};

export const incrementScore = () => ({
  type: INCREMENT_SCORE,
});

export const decrementScore = () => ({
  type: DECREMENT_SCORE,
});

export const playedGame1 = () => ({
  type: PLAYED_GAME_1,
  payload: true,
});

export const clearStateGame = () => ({
  type: CLEAR_STATE_GAME,
  payload: {
    userFinger: '',
    computerFinger: '',
    result: '',
    score: 0,
    played1: false,
    played2: false,
    played3: false,
    played4: false,
    played5: false,
    played6: false,
  },
});
