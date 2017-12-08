import React, { Component } from 'react';
import { connect } from 'react-redux';


function Aircrafts (props) {
  console.log('Im an Aircraft')
  console.log(props)
  return (
    <div>
      <h1>Aircrafts</h1>
      {
        props.aircrafts.map(aircraft => {
          return (
            <div key={ aircraft.id }>
              <h2>{ aircraft.make }</h2>

            </div>
          )
        })
      }
    </div>
  )

}

export default Aircrafts
