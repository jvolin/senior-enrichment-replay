import React, { Component } from 'react';
import { fetchCountries } from '../reducers/countries';
import { fetchAircrafts } from '../reducers/aircrafts';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header'
import AllCountries from './AllCountries'
import AllAircrafts from './AllAircrafts'
import NavBar from  './NavBar'

class Main extends Component {

  componentDidMount() {
    this.props.fetchCountries();
    this.props.fetchAircrafts();
  }

  // componentWillRecieveProps() {

  // }


  render () {
    return (
      <div className="wrapper">
        <Header />
        <div>
          <Switch>

            <Route exact path="/countries" render={() => <AllCountries countries={this.props.countries} />} />
            <Route exact path="/aircrafts" render={() => <AllAircrafts aircrafts={this.props.aircrafts} />} />

          </Switch>
        </div>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  fetchCountries: () => {
    dispatch(fetchCountries())
  },
  fetchAircrafts: () => {
    dispatch(fetchAircrafts())
  }
})

const mapState = state => ({
  countries: state.countries,
  aircrafts: state.aircrafts
})

export default connect(mapState, mapDispatch)(Main);
