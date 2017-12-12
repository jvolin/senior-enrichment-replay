import React from 'react';
import { connect } from 'react-redux';

const SingleCountry = props => {

  const {countries} = props;

  const loadingJSX = <h1>Loading...</h1>
  return (
    <div>
      {countries ? (
        <div>
          <h1>{countries.name}</h1>
          <h2>Aircrafts</h2>
          <ul>
            {
              countries.aircrafts.map(aircraft => {
                return <li key={aircraft.id}>{aircraft.name}</li>
              })
            }
          </ul>
        </div>
        ) : loadingJSX
      }
    </div>
  )
}

const mapState = (state, ownProps) => {
  return {
    team: state.countries.find(singleCountry => {
      return singleCountry.id === +ownProps.match.params.id
    })
  }
}

export default connect(mapState)(SingleCountry);
