import { 
  SET_DATA_LOADED,
  SET_ACTIVE_TAB,
  TOGGLE_DETAIL_MODAL,
  RELOAD_DETAIL_MODAL,
  REQUEST_CHARACTER_PENDING,
  REQUEST_CHARACTER_SUCCESS,
  REQUEST_CHARACTER_FAILED, 
  REQUEST_PLANETS_PENDING,
  REQUEST_PLANETS_SUCCESS,
  REQUEST_PLANETS_FAILED,
  REQUEST_SPECIES_PENDING,
  REQUEST_SPECIES_SUCCESS,
  REQUEST_SPECIES_FAILED,
  REQUEST_FILMS_PENDING,
  REQUEST_FILMS_SUCCESS,
  REQUEST_FILMS_FAILED,
  REQUEST_STARSHIPS_PENDING,
  REQUEST_STARSHIPS_SUCCESS,
  REQUEST_STARSHIPS_FAILED,
  REQUEST_VEHICLES_PENDING,
  REQUEST_VEHICLES_SUCCESS,
  REQUEST_VEHICLES_FAILED    
} from './constants'

export const setAllDataLoaded = () => {
  return {
    type: SET_DATA_LOADED
  }
}

export const setActiveTab = (text) => {
  return {
      type: SET_ACTIVE_TAB,
      payload: text
  }
}

export const toggleDetailsModal = (data, dataClass) => {
  return {
    type: TOGGLE_DETAIL_MODAL,
    payload: data,
    dataClass: dataClass
  }
}

export const reloadDetailsModal = (data, dataClass) => {
  return {
    type: RELOAD_DETAIL_MODAL,
    payload: data,
    dataClass: dataClass
  }
}

export const requestCharacters = () => (dispatch) => {

  dispatch({type: REQUEST_CHARACTER_PENDING});
  /*
  // SWAPI only returns up to 10 items per call,
  //  require recursive calls to get all objects
  let dataArray = []
  const fetchCharacters = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dataArray = dataArray.concat(data.results)  // append all results object of this call into array
        data.next !== null ? 
          fetchCharacters(data.next) :  // if next page URL is not null, call API again using the URL
          dispatch({type: REQUEST_CHARACTER_SUCCESS, payload: {results: dataArray}}); // if there's no more next page, dispatch the results: a full array with objects from all API calls
      })
      .catch(error => {
        dispatch({type: REQUEST_CHARACTER_FAILED, payload: error});
      })
  }

  fetchCharacters('https://swapi.co/api/people')
  */
  fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(data => dispatch({type: REQUEST_CHARACTER_SUCCESS, payload: data}))
      .catch(error => dispatch({type: REQUEST_CHARACTER_FAILED, payload: error}))
  
}

export const requestPlanets = () => (dispatch) => {
  
  dispatch({type: REQUEST_PLANETS_PENDING});
  /*
  // SWAPI only returns up to 10 items per call,
  //  require recursive calls to get all objects
  let dataArray = []
  const fetchPlanets = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dataArray = dataArray.concat(data.results)   
        data.next !== null ? 
          fetchPlanets(data.next) : 
          dispatch({type: REQUEST_PLANETS_SUCCESS, payload: {results: dataArray}}); 
      })
      .catch(error => {
        dispatch({type: REQUEST_PLANETS_FAILED, payload: error});
      })
  }

  fetchPlanets('https://swapi.co/api/planets')
  */
  fetch('https://swapi.co/api/planets')
      .then(response => response.json())
      .then(data => dispatch({type: REQUEST_PLANETS_SUCCESS, payload: data}))
      .catch(error => dispatch({type: REQUEST_PLANETS_FAILED, payload: error}))
  
}

export const requestSpecies = () => (dispatch) => {

  dispatch({type: REQUEST_SPECIES_PENDING});
  /*
  // SWAPI only returns up to 10 items per call,
  //  require recursive calls to get all objects
  let dataArray = []
  const fetchSpecies = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dataArray = dataArray.concat(data.results)   // append all results object of this call into array
        data.next !== null ? 
          fetchSpecies(data.next) :  // if next page URL is not null, call API again using the URL
          dispatch({type: REQUEST_SPECIES_SUCCESS, payload: {results: dataArray}}); // if there's no more next page, dispatch the results: a full array with objects from all API calls
      })
      .catch(error => {
        dispatch({type: REQUEST_SPECIES_FAILED, payload: error});
      })
  }

  fetchSpecies('https://swapi.co/api/species')
  */
  //fetch('https://swapi.co/api/species')
  fetch('https://swapi.co/api/species/?page=4')
      .then(response => response.json())
      .then(data => dispatch({type: REQUEST_SPECIES_SUCCESS, payload: data}))
      .catch(error => dispatch({type: REQUEST_SPECIES_FAILED, payload: error}))
  
}

export const requestFilms = () => (dispatch) => {
  
  dispatch({type: REQUEST_FILMS_PENDING});
  /*
  // SWAPI only returns up to 10 items per call,
  //  require recursive calls to get all objects
  let dataArray = []
  const fetchFilms = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dataArray = dataArray.concat(data.results)   
        data.next !== null ? 
          fetchFilms(data.next) : 
          dispatch({type: REQUEST_FILMS_SUCCESS, payload: {results: dataArray}}); 
      })
      .catch(error => {
        dispatch({type: REQUEST_FILMS_FAILED, payload: error});
      })
  }

  fetchPlanets('https://swapi.co/api/films')
  */
  fetch('https://swapi.co/api/films')
      .then(response => response.json())
      .then(data => dispatch({type: REQUEST_FILMS_SUCCESS, payload: data}))
      .catch(error => dispatch({type: REQUEST_FILMS_FAILED, payload: error}))
  
}

export const requestStarships = () => (dispatch) => {
  
  dispatch({type: REQUEST_STARSHIPS_PENDING});
  /*
  // SWAPI only returns up to 10 items per call,
  //  require recursive calls to get all objects
  let dataArray = []
  const fetchFilms = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dataArray = dataArray.concat(data.results)   
        data.next !== null ? 
          fetchFilms(data.next) : 
          dispatch({type: REQUEST_STARSHIPS_SUCCESS, payload: {results: dataArray}}); 
      })
      .catch(error => {
        dispatch({type: REQUEST_STARSHIPS_FAILED, payload: error});
      })
  }

  fetchPlanets('https://swapi.co/api/starships')
  */
  fetch('https://swapi.co/api/starships')
      .then(response => response.json())
      .then(data => dispatch({type: REQUEST_STARSHIPS_SUCCESS, payload: data}))
      .catch(error => dispatch({type: REQUEST_STARSHIPS_FAILED, payload: error}))
  
}

export const requestVehicles = () => (dispatch) => {
  
  dispatch({type: REQUEST_VEHICLES_PENDING});
  /*
  // SWAPI only returns up to 10 items per call,
  //  require recursive calls to get all objects
  let dataArray = []
  const fetchFilms = url => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        dataArray = dataArray.concat(data.results)   
        data.next !== null ? 
          fetchFilms(data.next) : 
          dispatch({type: REQUEST_VEHICLES_SUCCESS, payload: {results: dataArray}}); 
      })
      .catch(error => {
        dispatch({type: REQUEST_VEHICLES_FAILED, payload: error});
      })
  }

  fetchPlanets('https://swapi.co/api/vehicles')
  */
  fetch('https://swapi.co/api/vehicles')
      .then(response => response.json())
      .then(data => dispatch({type: REQUEST_VEHICLES_SUCCESS, payload: data}))
      .catch(error => dispatch({type: REQUEST_VEHICLES_FAILED, payload: error}))
  
}