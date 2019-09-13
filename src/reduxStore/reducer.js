import { FETCH_MODES, FETCH_LOADED, FETCH_ERROR } from "./constants";

const initialState = {
  gameMode: null,
  loading: true,
  err: null
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

    default:
      return state;
  }
};

export default reducer;
