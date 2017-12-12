import React, { Component } from 'react';
import { fetchCountries } from '../reducers/countries';
import { fetchAircrafts } from '../reducers/aircrafts';
import { fetchTopCountries } from '../reducers/topCountries';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';
import TopCountries from './TopCountries';
import AllCountries from './AllCountries';
import SingleCountry from './SingleCountry';
import AllAircrafts from './AllAircrafts';
import SingleAircraft from './SingleAircraft';


class Main extends Component {

  componentDidMount() {
    this.props.fetchTopCountries();
    this.props.fetchCountries();
    this.props.fetchSingleCountry();

    this.props.fetchAircrafts();
    this.props.fetchSingleAircraft();
  }

  render () {
    return (
      <Router>
        <div className="wrapper">
          <Header />
          <div>
            <Switch>
              <Route exact path="/countries/:id" component={SingleCountry} />
              <Route exact path="/countries" render={() => <AllCountries countries={this.props.countries} />} />
              <Route exact path="/aircrafts/:id" component={SingleAircraft} />
              <Route exact path="/aircrafts" render={() => <AllAircrafts aircrafts={this.props.aircrafts} />} />
              <Route exact path="/" render={() => <TopCountries topCountries={this.props.topCountries} />} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

const mapDispatch = (dispatch) => ({
  fetchTopCountries: () => {
    dispatch(fetchTopCountries())
  },
  fetchCountries: () => {
    dispatch(fetchCountries())
  },
  fetchSingleCountry: () => {
    dispatch(fetchSingleCountry())
  },
  fetchAircrafts: () => {
    dispatch(fetchAircrafts())
  },
  fetchSingleAircraft: () => {
    dispatch(fetchSingleAircraft())
  },

})

const mapState = state => ({
  countries: state.countries,
  singleCountry: state.singleCountry,
  aircrafts: state.aircrafts,
  singleAircraft: state.singleAircraft,
  topCountries: state.topCountries
})

export default connect(mapState, mapDispatch)(Main);
