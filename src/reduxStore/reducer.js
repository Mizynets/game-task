import { FETCH_MODES, FETCH_LOADED, FETCH_ERROR, FETCH_WINNER } from "./constants";

const initialState = {
  gameMode: null,
  gameWinner: null,
  loading: true,
  err: null,
  propertiesItemList: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LOADED:
      return {
        ...state,
        loading: true
      };

    case FETCH_ERROR:
      return {
        gameMode: null,
        loading: false,
        err: payload
      };

    case FETCH_MODES:
      return {
        ...state,
        gameMode: payload,
        loading: false,
      };

    case FETCH_WINNER:
      return {
        ...state,
        gameWinner: payload,
        loading: false,
      }

    default:
      return state;
  }
};

export default reducer;
