import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert, Nav, TabContent } from 'reactstrap';
import HomeTabLink from '../Components/HomeTabLink';
import AppTabPane from './AppTabPane';
import DetailModals from '../Components/DetailsModal';
import { requestCharacters, requestPlanets, requestSpecies, requestFilms, requestStarships, requestVehicles } from '../action';
import { DATA_CLASS_CHARACTERS, DATA_CLASS_PLANETS , DATA_CLASS_SPECIES, DATA_CLASS_FILMS, DATA_CLASS_STARSHIPS, DATA_CLASS_VEHICLES } from '../constants'

const mapStateToProps = state => {
  return {
      activeTab: state.selectTab.activeTab,
      characterDataProp: state.requestCharacters,
      planetsDataProp: state.requestPlanets,
      speciesDataProp: state.requestSpecies,
      filmsDataProp: state.requestFilms,
      starshipsDataProp: state.requestStarships,
      vehiclesDataProp: state.requestVehicles
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

class AppBody extends Component {
  render() {
    return (
      <div className="container p-2">
        <Alert color="dark">
          <h4>Welcome</h4>
          <p>
            This is a data store website for Star Wars universe. Feel free to explore!  
          </p> 
        </Alert>
        <Nav tabs>
          <HomeTabLink tabId={'1'} tabLabel={'Films'}/>
          <HomeTabLink tabId={'2'} tabLabel={'Character'}/>
          <HomeTabLink tabId={'3'} tabLabel={'Planets'}/>
          <HomeTabLink tabId={'4'} tabLabel={'Species'}/>
          <HomeTabLink tabId={'5'} tabLabel={'Starships'}/>
          <HomeTabLink tabId={'6'} tabLabel={'Vehicles'}/>
        </Nav>
        <TabContent 
          activeTab={ this.props.activeTab } 
          className="p-2 border-right border-left border-bottom"
        >
          <AppTabPane 
            tabId="1" 
            dataClass={DATA_CLASS_FILMS}
            dataSource={this.props.filmsDataSource} 
            dataProps={this.props.filmsDataProp} 
          />
          <AppTabPane 
            tabId="2" 
            dataClass={DATA_CLASS_CHARACTERS}
            dataSource={this.props.characterDataSource} 
            dataProps={this.props.characterDataProp} 
          />
          <AppTabPane 
            tabId="3" 
            dataClass={DATA_CLASS_PLANETS}
            dataSource={this.props.planetsDataSource} 
            dataProps={this.props.planetsDataProp} 
          />
          <AppTabPane 
            tabId="4" 
            dataClass={DATA_CLASS_SPECIES}
            dataSource={this.props.speciesDataSource} 
            dataProps={this.props.speciesDataProp} 
          />
          <AppTabPane 
            tabId="5" 
            dataClass={DATA_CLASS_STARSHIPS}
            dataSource={this.props.starshipsDataSource} 
            dataProps={this.props.starshipsDataProp} 
          />
          <AppTabPane 
            tabId="6" 
            dataClass={DATA_CLASS_VEHICLES}
            dataSource={this.props.vehiclesDataSource} 
            dataProps={this.props.vehiclesDataProp} 
          />
        </TabContent>
        <DetailModals />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppBody);