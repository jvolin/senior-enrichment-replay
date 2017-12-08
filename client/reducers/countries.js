import axios from 'axios';
const SET_COUNTRIES = 'SET_COUNTRIES';


const setCountries = countries => ({type: SET_COUNTRIES, countries});

export const fetchCountries = () => {
  return dispatch => {
    return axios.get('/api/countries')
      .then(res => res.data)
      .then(countries => dispatch(setCountries(countries)))
      .catch(console.error)
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case SET_COUNTRIES:
      return action.countries
    default:
      return state
  }
}

export default reducer;
