import axios from 'axios';
import { FETCH_MODES, FETCH_LOADED, FETCH_ERROR, GET_OBJ_ARR } from './constants';

export const fetchModes = (data) =>{
    return {
        type: FETCH_MODES,
        payload: data,
    }
};

// fetchData => fetchSuccess || fetchError

export const fetchLoaded = () => {
    return {
        type: FETCH_LOADED,
    }
};

export const fetchError = (err) => {
    return {
         type: FETCH_ERROR,
         payload: err,
    }
};

export const getObjArr = (arr) => {
    return{
        type: GET_OBJ_ARR,
        payload: arr,
    }
}

export const thunkCreaterGetModes = () => (dispatch) => {
    dispatch(fetchLoaded());
    axios.get("http://starnavi-frontend-test-task.herokuapp.com/game-settings")
    .then(response => dispatch(fetchModes(response.data)))
    .catch(err => dispatch(fetchError(err)));
}