import React, { Component } from 'react';
import { Progress, Alert, Badge, Spinner, Button } from 'reactstrap';
import './LoadingPage.css';

class TestLoadingPage extends Component {
  render () {

    const charactersLoaded = true;
    const planetsLoaded = true;
    const speciesLoaded = true;
    const filmsLoaded = true;
    const starshipsLoaded = true;
    const vehiclesLoaded = true;

    let progressStatus = 0;
    progressStatus += charactersLoaded ?  30 : 0 ;
    progressStatus += planetsLoaded ? 20 : 0 ;
    progressStatus += speciesLoaded ? 15 : 0 ;
    progressStatus += filmsLoaded ? 5 : 0 ;
    progressStatus += starshipsLoaded ? 15 : 0 ;
    progressStatus += vehiclesLoaded ? 15 : 0 ;

    return (
      <div className="container loadingPage">
        {
          progressStatus < 100 ?
          (<Alert color="dark" className="subheader"><h1>Loading data...</h1></Alert>) : 
          (
            <a href="#">
            <Alert 
              color="dark"
              className="subheader" 
            >
              <h1> {">>>      "} System Ready! {"      <<<"} </h1>
            </Alert>
            </a>
          )
        }
        <Progress value={progressStatus} color="danger" style={{height: "25px"}}>
          { progressStatus === 100 ? "complete" : ""}
        </Progress>
        <br/>   
        <Alert color="light" className="loadingAlerts"> 
          <h4> Characters { charactersLoaded ? 
              <Badge color="danger" pill className="loadingPills"> complete </Badge> 
              : 
              <Spinner color="danger" size="lg" className="loadingSpinner"/> 
            } 
          </h4>           
        </Alert>
        <Alert color="light" className="loadingAlerts">
          <h4> Planets { planetsLoaded ? 
              <Badge color="danger" pill className="loadingPills"> complete </Badge> 
              : 
              <Spinner color="danger" size="lg" className="loadingSpinner"/> 
            } 
          </h4>           
        </Alert>
        <Alert color="light" className="loadingAlerts"> 
          <h4> Species { speciesLoaded ? 
              <Badge color="danger" pill className="loadingPills"> complete </Badge> 
              : 
              <Spinner color="danger" size="lg" className="loadingSpinner"/> 
            } 
          </h4>           
        </Alert>
        <Alert color="light" className="loadingAlerts"> 
          <h4> Starships { starshipsLoaded ? 
              <Badge color="danger" pill className="loadingPills"> complete </Badge> 
              : 
              <Spinner color="danger" size="lg" className="loadingSpinner"/> 
            } 
          </h4>           
        </Alert>
        <Alert color="light" className="loadingAlerts">
          <h4>
            Vehicles { vehiclesLoaded ? 
              <Badge color="danger" pill className="loadingPills"> complete </Badge> 
              : 
              <Spinner color="danger" size="lg" className="loadingSpinner"/> 
            } 
          </h4>           
        </Alert>
        <Alert color="light" className="loadingAlerts">
          <h4> Films { filmsLoaded ? 
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

export default TestLoadingPage;