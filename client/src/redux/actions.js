import { ADD_FAV, CLEAR, FILTER, ORDER, REMOVE_FAV } from "./action-types.js";
import axios from "axios";

export const addFav = (character) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/rickandmorty/fav";
      const { data } = await axios.post(endpoint, character);

      dispatch({
        type: ADD_FAV,
        payload: data,
      });
    } catch (error) {
      // throw error;
      alert(error.message)
      // dispatch({
      //   type: ERROR,
      //   payload: error.message,
      // });
    }
  };
};

export const removeFav = (id) => {
  return async (dispatch) => {
    try {
      const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: REMOVE_FAV,
        payload: data,
      });
    } catch (error) {
      throw error;
    }
  };
};


export function filterCards(gender) {
  return {
    type: FILTER,
    payload: gender,
  };
}

export function orderCards(order) {
  return {
    type: ORDER,
    payload: order,
  };
}

export function Clear(order) {
  return {
    type: CLEAR,
  };
}
