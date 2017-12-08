import React, { Component } from 'react';
import { connect } from 'react-redux';


function Countries (props) {

  return (
    <div>
      <h1>Countries</h1>
      {
        props.countries.map(country => {
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

export default Countries
