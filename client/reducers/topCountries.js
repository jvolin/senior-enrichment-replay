import axios from 'axios';
const TOP_COUNTRIES = 'TOP_COUNTRIES';


const topCountries = countries => ({type: TOP_COUNTRIES, countries});

export const fetchTopCountries = () => {
  return dispatch => {
    return axios.get('/api/countries/getfive')
      .then(res => res.data)
      .then(countries => dispatch(topCountries(countries)))
      .catch(console.error)
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case TOP_COUNTRIES:
      return action.countries
    default:
      return state
  }
}

export default reducer;
