import { FETCH_MODES, FETCH_LOADED, FETCH_ERROR, GET_OBJ_ARR } from "./constants";

const initialState = {
  gameMode: null,
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

      case GET_OBJ_ARR:
        return{
          ...state,
          propertiesItemList: payload
        }

    default:
      return state;
  }
};

export default reducer;
