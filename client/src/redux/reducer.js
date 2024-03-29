import { ADD_FAV, CLEAR, FILTER, ORDER, REMOVE_FAV } from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

export default function reducer(state = initialState, { type, payload }) {
  //* action = { type:.., payload:...}
  // const { type, payload } = action;
  switch (type) {
    case ADD_FAV:
      return { ...state, myFavorites: payload, allCharacters: payload };

    case REMOVE_FAV:
      return { ...state, myFavorites: payload };

    case CLEAR: {
      return {
        ...state,
        myFavorites: [],
      };
    }
    case FILTER: {
      //* { type: FILTER, payload: "FEMALE" }
      if (payload === "All")
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      const filteredFavs = state.allCharacters.filter(
        (char) => char.gender === payload
      );
      return {
        ...state,
        myFavorites,
        filteredFavs,
      };
    }
    case ORDER:
      const orderCopy = [...state.myFavorites];
      if (payload === "A") orderCopy.sort((a, b) => a.id - b.id);
      if (payload === "D") orderCopy.sort((a, b) => b.id - a.id);
      return {
        ...state,
        myFavorites: orderCopy,
      };

    default:
      return { ...state };
  }
}
