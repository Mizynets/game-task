import axios from 'axios';
import { FETCH_MODES, FETCH_LOADED, FETCH_ERROR, GET_OBJ_ARR, FETCH_WINNER } from './constants';

export const fetchModes = (data) =>{
    return {
        type: FETCH_MODES,
        payload: data,
    }
};

export const fetchWinner = (data) =>{
    return {
        type: FETCH_WINNER,
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

export const thunkCreaterGetModes = () => (dispatch) => {
    dispatch(fetchLoaded());
    axios.get("http://starnavi-frontend-test-task.herokuapp.com/game-settings")
    .then(response => dispatch(fetchModes(response.data)))
    .catch(err => dispatch(fetchError(err)));
}

export const thunkCreaterGetWinner = () => (dispatch) => {
    dispatch(fetchLoaded());
    axios.get("http://starnavi-frontend-test-task.herokuapp.com/winners")
    .then(response => dispatch(fetchWinner(response.data)))
    .catch(err => dispatch(fetchError(err)));
}