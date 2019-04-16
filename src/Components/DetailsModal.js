import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button, Row, Col, Badge, Spinner } from 'reactstrap';
import { toggleDetailsModal, reloadDetailsModal } from '../action';
import { DATA_CLASS_CHARACTERS, DATA_CLASS_PLANETS , DATA_CLASS_SPECIES, DATA_CLASS_FILMS, DATA_CLASS_STARSHIPS, DATA_CLASS_VEHICLES } from '../constants'
import BadgeLink from './BadgeLink';
import './DetailsModal.css'

const mapStateToProps = state => {
  return {
      showModal: state.toggleDetailsModal.showModal,
      objectData: state.toggleDetailsModal.modalData,
      dataClass: state.toggleDetailsModal.dataClass,
      allDataLoaded: state.setAllDataLoaded.allDataLoaded,
      characterStore: state.requestCharacters.dataResponse.results,
      planetStore: state.requestPlanets.dataResponse.results,
      speciesStore: state.requestSpecies.dataResponse.results,
      filmStore: state.requestFilms.dataResponse.results,
      starshipStore: state.requestStarships.dataResponse.results,
      vehicleStore: state.requestVehicles.dataResponse.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleThisModal: (modalData) => dispatch(toggleDetailsModal(modalData)),
    reloadDetailsModal: (modalData, dataClass) => dispatch(reloadDetailsModal(modalData, dataClass))
  }
}

class DetatilsModal extends Component {

  formatData = (dataObject, dataClass) => {  
    const dataArrays = Object.entries(dataObject)
    switch(dataClass) {
      case DATA_CLASS_CHARACTERS :
        return this.formatCharacterData(dataArrays)
      case DATA_CLASS_PLANETS :
        return this.formatPlanetsData(dataArrays)
      case DATA_CLASS_SPECIES :
        return this.formatSpeciesData(dataArrays)
      case DATA_CLASS_FILMS :
        return this.formatFilmsData(dataArrays)
      case DATA_CLASS_STARSHIPS :
        return this.formatStarshipsData(dataArrays)
      case DATA_CLASS_VEHICLES :
        return this.formatVehiclesData(dataArrays)
      default :
        return dataArrays
    }  
  }
  
  /*
   * Reusable Code to create the list of BadgeLink across different format functions
   * - createFilmBadgeLink
   * - createStarshipBadgeLink
   * - createVehicleBadgeLink
   * - createCharacterBadgeLink
   * - createSpeciesBadgeLink
   * - createPlanetBadgeLink
   */
  createFilmBadgeLink = (dataFilmList) => {
    // if film list is empty, return none
    if(dataFilmList.length === 0)
      return (<span className="text-muted"> none </span>)
    
    // Get film details for each film
    let filmBadgeLink = dataFilmList.map(dataFilmURL => {
      const film = this.props.filmStore.filter(film => film.url === dataFilmURL);
      return (
        film.length >= 1 ? 
        (<BadgeLink badgeText={film[0].title} dataObject={film[0]} dataClass={DATA_CLASS_FILMS} />) 
        : null
      );
    })            

    // Check if results is empty (all element do not have matching character data)
    if((filmBadgeLink.filter(film => film != null)).length === 0)
      filmBadgeLink = (<span className="text-muted"> none </span>)   

    return filmBadgeLink       
  }

  createStarshipBadgeLink = (dataStarshipList) => {
    if(dataStarshipList.length === 0)
      return (<span className="text-muted"> none </span>);

    let starshipBadgeLink = dataStarshipList.map(dataStarshipURL => {
      const starship = this.props.starshipStore.filter(starship => starship.url === dataStarshipURL);
      return (
        starship.length >= 1 ? 
        (<BadgeLink badgeText={starship[0].name} dataObject={starship[0]} dataClass={DATA_CLASS_STARSHIPS} />)
        : null
      );
    })            

    if((starshipBadgeLink.filter(starship => starship != null)).length === 0)
      starshipBadgeLink = (<Badge> unknown </Badge>)        

    return starshipBadgeLink
  }

  createVehicleBadgeLink = (dataVehicleList) => {
    if(dataVehicleList.length === 0)
      return (<span className="text-muted"> none </span>);

    let vehicleBadgeLink = dataVehicleList.map(dataVehicleURL => {
      const vehicle = this.props.vehicleStore.filter(vehicle => vehicle.url === dataVehicleURL);
      return (
        vehicle.length >= 1 ? 
        (<BadgeLink badgeText={vehicle[0].name} dataObject={vehicle[0]} dataClass={DATA_CLASS_VEHICLES} />)
        : null
      );
    })            

    if((vehicleBadgeLink.filter(vehicle => vehicle != null)).length === 0)
      vehicleBadgeLink = (<Badge> unknown </Badge>);

    return vehicleBadgeLink
  }

  createCharacterBadgeLink = (dataCharacterList) => {
    if(dataCharacterList.length === 0)
      return (<span className="text-muted"> none </span>);

    let characterBadgeLink = dataCharacterList.map(dataCharacterURL => {
      const character = this.props.characterStore.filter(character => character.url === dataCharacterURL);
      return (
        character.length >= 1 ? 
        (<BadgeLink badgeText={character[0].name} dataObject={character[0]} dataClass={DATA_CLASS_CHARACTERS} />) 
        : null
      );
    })            

    // Check if results is empty (all element do not have matching character data)
    if((characterBadgeLink.filter(character => character != null)).length === 0)
      characterBadgeLink = (<span className="text-muted"> none </span>);

    return characterBadgeLink
  }

  createPlanetBadgeLink = (dataPlanetList) => {
    if(dataPlanetList.length === 0)
      return (<span className="text-muted"> none </span>);

    let planetBadgeLink = dataPlanetList.map(dataPlanetURL => {
      const planet = this.props.planetStore.filter(planet => planet.url === dataPlanetURL);
      return (
        planet.length >= 1 ? 
        (<BadgeLink badgeText={planet[0].name} dataObject={planet[0]} dataClass={DATA_CLASS_PLANETS} />) 
        : null
      );
    })            

    // Check if results is empty (all element do not have matching planet data)
    if((planetBadgeLink.filter(planet => planet != null)).length === 0)
      planetBadgeLink = (<span className="text-muted"> none </span>);

    return planetBadgeLink
  }

  createSpeciesBadgeLink = (dataSpeciesList) => {
    if(dataSpeciesList.length === 0)
      return (<span className="text-muted"> none </span>);

    let speciesBadgeLink = dataSpeciesList.map(dataSpeciesURL => {
      const species = this.props.speciesStore.filter(species => species.url === dataSpeciesURL);
      return (
        species.length >= 1 ? 
        (<BadgeLink badgeText={species[0].name} dataObject={species[0]} dataClass={DATA_CLASS_SPECIES} />) 
        : null
      );
    })            

    // Check if results is empty (all element do not have matching species data)
    if((speciesBadgeLink.filter(species => species != null)).length === 0)
      speciesBadgeLink = (<span className="text-muted"> none </span>);

    return speciesBadgeLink
  }
  /*
   * 6 format functions, one for each type of data from API
   * - formatCharacterData
   * - formatPlanetsData
   * - formatSpeciesData
   * - formatFilmsData
   * - formatStarshipsData
   * - formatVehiclesData
   */
  formatCharacterData = (dataArrays) => {
    return (
      dataArrays.map((dataItem) => {
        let formattedDataItem = [];
        switch(dataItem[0]) {
          case 'height' :
            formattedDataItem[0] = 'Height'
            formattedDataItem[1] = dataItem[1]
            break
          case 'mass' :
            formattedDataItem[0] = 'Mass'
            formattedDataItem[1] = dataItem[1]
            break
          case 'hair_color':
            formattedDataItem[0] = 'Hair Color'
            formattedDataItem[1] = dataItem[1]
            break
          case 'skin_color':
            formattedDataItem[0] = 'Skin Color'
            formattedDataItem[1] = dataItem[1]
            break
          case 'eye_color':
            formattedDataItem[0] = 'Eye Color'
            formattedDataItem[1] = dataItem[1]
            break
          case 'birth_year':
            formattedDataItem[0] = 'Birth Year'
            formattedDataItem[1] = dataItem[1]
            break
          case 'gender':
            formattedDataItem[0] = 'Gender'
            formattedDataItem[1] = dataItem[1]
            break
          case 'homeworld':
            formattedDataItem[0] = 'Homeworld'            
            //Homeworld of Character is a single String, instead of Array, wrap in an array as function parameter
            formattedDataItem[1] = this.createPlanetBadgeLink([ dataItem[1] ])
            break
          case 'films':
            formattedDataItem[0] = 'Apperance'
            formattedDataItem[1] = this.createFilmBadgeLink(dataItem[1]) // create the BadgeLink for films appearance
            break
          case 'species':
            formattedDataItem[0] = 'Species'
            formattedDataItem[1] = this.createSpeciesBadgeLink(dataItem[1]) 
            break
          case 'vehicles':
            formattedDataItem[0] = 'Vehicles'
            formattedDataItem[1] = this.createVehicleBadgeLink(dataItem[1])           
            break
          case 'starships':
            formattedDataItem[0] = 'Starships'
            formattedDataItem[1] = this.createStarshipBadgeLink(dataItem[1])   
            break
          default:
            // Ignore other attributes / properties
        }
        return formattedDataItem;
      })
    )
  }
  
  formatPlanetsData = (dataArrays) => {
    return (
      dataArrays.map((dataItem) => {
        let formattedDataItem = [];
        switch(dataItem[0]) {
          case 'climate':
            formattedDataItem[0] = 'Climate'
            formattedDataItem[1] = dataItem[1]
            break
          case 'diameter':
            formattedDataItem[0] = 'Diameter'
            formattedDataItem[1] = dataItem[1]
            break
          case 'gravity':
            formattedDataItem[0] = 'Gravity'
            formattedDataItem[1] = dataItem[1]
            break
          case 'orbital_period':
            formattedDataItem[0] = 'Orbital Period'
            formattedDataItem[1] = dataItem[1]
            break
          case 'population':
            formattedDataItem[0] = 'Population'
            formattedDataItem[1] = dataItem[1]
            break
          case 'residents':
            formattedDataItem[0] = 'Residents'
            formattedDataItem[1] = this.createCharacterBadgeLink(dataItem[1])
            break
          case 'rotation_period':
            formattedDataItem[0] = 'Rotation Period'
            formattedDataItem[1] = dataItem[1]
            break
          case 'surface_water':
            formattedDataItem[0] = 'Surface Water'
            formattedDataItem[1] = dataItem[1]
            break
          case 'terrain':
            formattedDataItem[0] = 'Terrain'
            formattedDataItem[1] = dataItem[1]
            break
          default:
            // Ignore other attributes / properties
        }
        return formattedDataItem;
      })
    )
  }
  
  formatSpeciesData = (dataArrays) => {
    return (
      dataArrays.map((dataItem) => {
        let formattedDataItem = [];
        switch(dataItem[0]) {
          case 'average_height':
            formattedDataItem[0] = 'Average Height'
            formattedDataItem[1] = dataItem[1]
            break
          case 'average_lifespan':
            formattedDataItem[0] = 'Avarage Lifespan'
            formattedDataItem[1] = dataItem[1]
            break
          case 'classification':
            formattedDataItem[0] = 'Classification'
            formattedDataItem[1] = dataItem[1]
            break
          case 'designation':
            formattedDataItem[0] = 'Designation'
            formattedDataItem[1] = dataItem[1]
            break
          case 'eye_colors':
            formattedDataItem[0] = 'Eye Color'
            formattedDataItem[1] = dataItem[1]
            break
          case 'homeworld':
            formattedDataItem[0] = 'Homeworld'
            //Homeworld of Species is a single String, instead of Array, wrap in an array as function parameter
            formattedDataItem[1] = this.createPlanetBadgeLink([ dataItem[1] ])
            break
          case 'language':
            formattedDataItem[0] = 'Language'
            formattedDataItem[1] = dataItem[1]
            break
          case 'people':
            formattedDataItem[0] = 'People'
            formattedDataItem[1] = this.createCharacterBadgeLink(dataItem[1])
            break
          case 'films':
            formattedDataItem[0] = 'Apperance'
            formattedDataItem[1] = this.createFilmBadgeLink(dataItem[1]) 
            break
          case 'skin_colors':
            formattedDataItem[0] = 'Skin Color'
            formattedDataItem[1] = dataItem[1]
            break
          default:
            // Ignore other attributes / properties
        }
        return formattedDataItem;
      })
    )
  }

  formatFilmsData = (dataArrays) => {
    return (
      dataArrays.map((dataItem) => {
        let formattedDataItem = [];
        switch(dataItem[0]) {
          case 'director':
            formattedDataItem[0] = 'Director'
            formattedDataItem[1] = dataItem[1]
            break
          case 'episode_id':
            formattedDataItem[0] = 'Episode'
            formattedDataItem[1] = dataItem[1]
            break
          case 'producer':
            formattedDataItem[0] = 'Producers'
            formattedDataItem[1] = dataItem[1]
            break
          case 'characters':
            formattedDataItem[0] = 'Characters'
            formattedDataItem[1] = this.createCharacterBadgeLink(dataItem[1])
            break
          case 'planets':
            formattedDataItem[0] = 'Planets'
            formattedDataItem[1] = this.createPlanetBadgeLink(dataItem[1])
            break
          case 'species':
            formattedDataItem[0] = 'Species'
            formattedDataItem[1] = this.createSpeciesBadgeLink(dataItem[1])           
            break
          case 'vehicles':
            formattedDataItem[0] = 'Vehicles'
            formattedDataItem[1] = this.createVehicleBadgeLink(dataItem[1])           
            break
          case 'starships':
            formattedDataItem[0] = 'Starships'
            formattedDataItem[1] = this.createStarshipBadgeLink(dataItem[1])     
            break
          default:
            // Ignore other attributes / properties
        }
        return formattedDataItem
      })
    )
  }

  formatStarshipsData = (dataArrays) => {
    return (
      dataArrays.map((dataItem) => {
        let formattedDataItem = [];
        switch(dataItem[0]) {
          case 'cargo_capacity':
            formattedDataItem[0] = 'Cargo Capacity'
            formattedDataItem[1] = dataItem[1]
            break
          case 'consumables':
            formattedDataItem[0] = 'Consumables'
            formattedDataItem[1] = dataItem[1]
            break
          case 'cost_in_credits':
            formattedDataItem[0] = 'Cost (in credits)'
            formattedDataItem[1] = dataItem[1]
            break
          case 'crew':
            formattedDataItem[0] = 'Crew'
            formattedDataItem[1] = dataItem[1]
            break
          case 'hyperdrive_rating':
            formattedDataItem[0] = 'Hyperdrive Rating'
            formattedDataItem[1] = dataItem[1]
            break
          case 'length':
            formattedDataItem[0] = 'Starship Length'
            formattedDataItem[1] = dataItem[1]
            break
          case 'manufacturer':
            formattedDataItem[0] = 'Manufacturer'
            formattedDataItem[1] = dataItem[1]
            break
          case 'max_atmosphering_speed':
            formattedDataItem[0] = 'Max Atmosphering Speed'
            formattedDataItem[1] = dataItem[1]
            break
          case 'model':
            formattedDataItem[0] = 'Starship Model'
            formattedDataItem[1] = dataItem[1]
            break
          case 'passengers':
            formattedDataItem[0] = 'Passengers'
            formattedDataItem[1] = dataItem[1]
            break
          case 'films':
            formattedDataItem[0] = 'Appearance'
            formattedDataItem[1] = this.createFilmBadgeLink(dataItem[1]) 
            break
          case 'pilots':
            formattedDataItem[0] = 'Pilots'
            formattedDataItem[1] = this.createCharacterBadgeLink(dataItem[1])
            break
          case 'starship_class':
            formattedDataItem[0] = 'Starship Class'
            formattedDataItem[1] = dataItem[1]
            break
          default:
            // ignore other properties
        }
        return formattedDataItem;
      })
    )
  }

  formatVehiclesData = (dataArrays) => {
    return (
      dataArrays.map((dataItem) => {
        let formattedDataItem = [];
        switch(dataItem[0]) {
          case 'cargo_capacity':
            formattedDataItem[0] = 'Cargo Capacity'
            formattedDataItem[1] = dataItem[1]
            break
          case 'consumables':
            formattedDataItem[0] = 'Consumables'
            formattedDataItem[1] = dataItem[1]
            break
          case 'cost_in_credits':
            formattedDataItem[0] = 'Cost (in credits)'
            formattedDataItem[1] = dataItem[1]
            break
          case 'crew':
            formattedDataItem[0] = 'Crew'
            formattedDataItem[1] = dataItem[1]
            break
          case 'length':
            formattedDataItem[0] = 'Vehicle Length'
            formattedDataItem[1] = dataItem[1]
            break
          case 'manufacturer':
            formattedDataItem[0] = 'Manufacturer'
            formattedDataItem[1] = dataItem[1]
            break
          case 'max_atmosphering_speed':
            formattedDataItem[0] = 'Max Atmosphering Speed'
            formattedDataItem[1] = dataItem[1]
            break
          case 'model':
            formattedDataItem[0] = 'Vehicle Model'
            formattedDataItem[1] = dataItem[1]
            break
          case 'passengers':
            formattedDataItem[0] = 'Passengers'
            formattedDataItem[1] = dataItem[1]
            break
          case 'films':
            formattedDataItem[0] = 'Appearance'
            formattedDataItem[1] = this.createFilmBadgeLink(dataItem[1]) 
            break
          case 'pilots':
            formattedDataItem[0] = 'Pilots'
            formattedDataItem[1] = this.createCharacterBadgeLink(dataItem[1])
            break
          default:
            // ignore other properties
        }
        return formattedDataItem;
      })
    )
  }

  render () {
    if(this.props.objectData === null)        
      // during initialization, object data is empty
      return (
        <Modal 
          isOpen={this.props.showModal}
          toggle={() => this.props.toggleThisModal(null)}
          >
          <ModalHeader toggle={() => this.props.toggleThisModal(null)}> </ModalHeader>
          <ModalBody> Lorem ipsum dolor sit amet </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.props.toggleThisModal(null)}>Back</Button>
          </ModalFooter>
        </Modal>
      )
    else if (! this.props.allDataLoaded) {
      // When not all data are loaded - display Spinner
      return (
        <Modal 
          isOpen={this.props.showModal}
          toggle={() => this.props.toggleThisModal(null)}
          >
          <ModalHeader toggle={() => this.props.toggleThisModal(null)}> 
            <strong> { this.props.dataClass === DATA_CLASS_FILMS ? this.props.objectData.title : this.props.objectData.name } </strong>
          </ModalHeader>
          <ModalBody> 
            <Spinner color="dark" size="lg" /> 
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.props.toggleThisModal(null)}>Back</Button>
          </ModalFooter>
        </Modal>
      )          
    } else {
      const dataEntries = this.formatData(this.props.objectData, this.props.dataClass)
      const modalBodyData = dataEntries.map(dataEntry => {
        return (
          <Row className="d-flex align-items-center py-1">
            <Col xs={4} className="align-items-top"><strong>{ dataEntry[0] }</strong></Col>
            <Col xs={6}>{ dataEntry[1] }</Col>
          </Row>
        )
      })
      return (
        <Modal 
          isOpen={this.props.showModal}
          toggle={() => this.props.toggleThisModal(null)}
          >
          <ModalHeader toggle={() => this.props.toggleThisModal(null)}> 
            <strong> { this.props.dataClass === DATA_CLASS_FILMS ? this.props.objectData.title : this.props.objectData.name } </strong>
          </ModalHeader>
          <ModalBody> {modalBodyData} </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.props.toggleThisModal(null)}>Close</Button>
          </ModalFooter>
        </Modal>
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DetatilsModal);