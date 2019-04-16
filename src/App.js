import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBody from './Containers/AppBody';
import LoadingPage from './Containers/LoadingPage'
import TestLoadPage from './Containers/TestLoadPage'
import './App.css';
import { requestCharacters, requestPlanets, requestSpecies, requestFilms, requestStarships, requestVehicles } from './action';

const mapStateToProps = state => {
  return {
      allDataLoaded: state.setAllDataLoaded.allDataLoaded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    characterDataSource: () => dispatch(requestCharacters()),
    planetsDataSource: () => dispatch(requestPlanets()),
    speciesDataSource: () => dispatch(requestSpecies()),
    filmsDataSource: () => dispatch(requestFilms()),
    starshipsDataSource: () => dispatch(requestStarships()),
    vehiclesDataSource: () => dispatch(requestVehicles())
  }
}

class App extends Component {

  componentDidMount() {
    // Request data from SWAPI
    
    this.props.characterDataSource()
    this.props.planetsDataSource()
    this.props.speciesDataSource()
    this.props.filmsDataSource()
    this.props.starshipsDataSource()
    this.props.vehiclesDataSource()
    
  }

  render() {                  
    return (
      <div>
        <div className="header">
          <h1 className="text-white text-center">Star Wars Database</h1>
        </div>
        { 
          this.props.allDataLoaded ? <AppBody /> : <LoadingPage />
          //<TestLoadPage />
        }
        <div className="footer fixed-bottom">
            <h5 className="text-white">
              Created using <a href="https://reactjs.org/">ReactJS</a>. Data provided by <a href="https//swapi.co">swapi.co</a>
            </h5>
        </div>
      </div>
    );
  }
}

//export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App);