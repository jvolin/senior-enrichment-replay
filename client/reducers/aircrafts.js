import axios from 'axios';
const SET_AIRCRAFTS = 'SET_AIRCRAFTS';

const setAircrafts = players => ({type: SET_AIRCRAFTS, players});

export const fetchAircrafts = () => {
  return dispatch => {
    return axios.get('/api/aircrafts')
      .then(res => res.data)
      .then(aircrafts => dispatch(setAircrafts(aircrafts)))
      .catch(console.error)
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_AIRCRAFTS:
      return action.players
    default:
      return state
  }
}

export default reducer;
