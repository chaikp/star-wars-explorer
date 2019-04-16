import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Progress, Alert, Badge, Button, Spinner } from 'reactstrap';
import { setAllDataLoaded } from '../action';
import './LoadingPage.css';

const mapStateToProps = state => {
  return {
      charactersLoaded: state.requestCharacters.isLoaded,
      planetsLoaded: state.requestPlanets.isLoaded,
      speciesLoaded: state.requestSpecies.isLoaded,
      filmsLoaded: state.requestFilms.isLoaded,
      starshipsLoaded: state.requestStarships.isLoaded,
      vehiclesLoaded: state.requestVehicles.isLoaded
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAllDataLoaded: () => dispatch(setAllDataLoaded())
  }
}

class LoadingPage extends Component {
  render () {
    let progressStatus = 0;
    progressStatus += this.props.charactersLoaded ?  30 : 0 ;
    progressStatus += this.props.planetsLoaded ? 20 : 0 ;
    progressStatus += this.props.speciesLoaded ? 15 : 0 ;
    progressStatus += this.props.filmsLoaded ? 5 : 0 ;
    progressStatus += this.props.starshipsLoaded ? 15 : 0 ;
    progressStatus += this.props.vehiclesLoaded ? 15 : 0 ;

    if(progressStatus === 100) 
      this.props.setAllDataLoaded();
    
    return (
      <div className="container loadingPage">
        {
          progressStatus < 100 ?
          (<Alert color="dark" className="subheader"><h1>Loading data...</h1></Alert>) : 
          (
            <a href="#" onClick={() => this.props.setAllDataLoaded()}> 
            <Alert 
              color="dark"
              className="subheader"               
            >
              <h1> {">>>"} System Ready! {"<<<"} </h1>
            </Alert>
            </a>
          )
        }
        <Progress value={progressStatus} color="danger" style={{height: "25px"}}>
          { progressStatus === 100 ? "complete" : ""}
        </Progress>
        <br/>        
        <Alert color="light" className="loadingAlerts"> 
          <h4> Characters { this.props.charactersLoaded ? 
              <Badge color="danger" pill className="loadingPills"> complete </Badge> 
              : 
              <Spinner color="danger" size="lg" className="loadingSpinner"/> 
            } 
          </h4>           
        </Alert>
        <Alert color="light" className="loadingAlerts">
          <h4> Planets { this.props.planetsLoaded ? 
              <Badge color="danger" pill className="loadingPills"> complete </Badge> 
              : 
              <Spinner color="danger" size="lg" className="loadingSpinner"/> 
            } 
          </h4>           
        </Alert>
        <Alert color="light" className="loadingAlerts"> 
          <h4> Species { this.props.speciesLoaded ? 
              <Badge color="danger" pill className="loadingPills"> complete </Badge> 
              : 
              <Spinner color="danger" size="lg" className="loadingSpinner"/> 
            } 
          </h4>           
        </Alert>
        <Alert color="light" className="loadingAlerts"> 
          <h4> Starships { this.props.starshipsLoaded ? 
              <Badge color="danger" pill className="loadingPills"> complete </Badge> 
              : 
              <Spinner color="danger" size="lg" className="loadingSpinner"/> 
            } 
          </h4>           
        </Alert>
        <Alert color="light" className="loadingAlerts">
          <h4>
            Vehicles { this.props.vehiclesLoaded ? 
              <Badge color="danger" pill className="loadingPills"> complete </Badge> 
              : 
              <Spinner color="danger" size="lg" className="loadingSpinner"/> 
            } 
          </h4>           
        </Alert>
        <Alert color="light" className="loadingAlerts">
          <h4> Films { this.props.filmsLoaded ? 
              <Badge color="danger" pill className="loadingPills"> complete </Badge> 
              : 
              <Spinner color="danger" size="lg" className="loadingSpinner"/> 
            } 
          </h4>           
        </Alert>
        <br/>        
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingPage);