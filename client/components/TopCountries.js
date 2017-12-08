import React, { Component } from 'react';
import { connect } from 'react-redux';


function TopCountries (props) {

  return (
    <div>
      <h1>Top Five Countries</h1>
      {
        props.topCountries.map(country => {
          return (
            <div key={ country.id }>
              <h2>{ country.name }</h2>

            </div>
          )
        })
      }
    </div>
  )

}

export default TopCountries
