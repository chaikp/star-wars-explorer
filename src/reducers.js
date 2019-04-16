import { 
  SET_ACTIVE_TAB,   
  SET_DATA_LOADED,
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
} from './constants';

const initialAllDataLoaded = {
  allDataLoaded: false
}
export const setAllDataLoaded = (state=initialAllDataLoaded, action={}) => {
  switch(action.type) {
    case SET_DATA_LOADED:
      return Object.assign({}, state, {allDataLoaded: true});
    default:
      return state;
  }
}

const initialTab = {
  activeTab: '1'
}
export const selectTab = (state=initialTab, action={}) => {
  switch(action.type) {
      case SET_ACTIVE_TAB:
          return Object.assign({}, state, {activeTab: action.payload});
      default:
          return state;
  }
}

const initialToggle = {
  showModal: false,
  modalData: null,
  dataClass: null
}
export const toggleDetailsModal = (state=initialToggle, action={}) => {
  switch(action.type) {
      case TOGGLE_DETAIL_MODAL:
          return (
            Object.assign({}, state, 
              {
                showModal: !state.showModal, // toggle will show/hide modal based on previous state
                modalData: action.payload,
                dataClass: action.dataClass
              }));
      case RELOAD_DETAIL_MODAL:
        return (
          Object.assign({}, state, 
            {
              modalData: action.payload,
              dataClass: action.dataClass
            }));
      default:
          return state;
  }
}

const initialStateCharacters = {
  isLoaded: false,
  dataResponse: {},
  error: ''
}
export const requestCharacters = (state=initialStateCharacters, action={}) => {
  switch(action.type) {
      case REQUEST_CHARACTER_PENDING:
          return Object.assign({}, state, {isLoaded: false});
      case REQUEST_CHARACTER_SUCCESS:
          return Object.assign({}, state, {dataResponse: action.payload, isLoaded: true});
      case REQUEST_CHARACTER_FAILED:
          return Object.assign({}, state, {error: action.payload, isLoaded: false});
      default:
          return state;
  }
}

const initialStatePlanets = {
  isLoaded: false,
  dataResponse: {},
  error: ''
}
export const requestPlanets = (state=initialStatePlanets, action={}) => {
  switch(action.type) {
      case REQUEST_PLANETS_PENDING:
          return Object.assign({}, state, {isLoaded: false});
      case REQUEST_PLANETS_SUCCESS:
          return Object.assign({}, state, {dataResponse: action.payload, isLoaded: true});
      case REQUEST_PLANETS_FAILED:
          return Object.assign({}, state, {error: action.payload, isLoaded: false});
      default:
          return state;
  }
}

const initialStateSpecies = {
  isLoaded: false,
  dataResponse: {},
  error: ''
}
export const requestSpecies = (state=initialStateSpecies, action={}) => {
  switch(action.type) {
      case REQUEST_SPECIES_PENDING:
          return Object.assign({}, state, {isLoaded: false});
      case REQUEST_SPECIES_SUCCESS:
          return Object.assign({}, state, {dataResponse: action.payload, isLoaded: true});
      case REQUEST_SPECIES_FAILED:
          return Object.assign({}, state, {error: action.payload, isLoaded: false});
      default:
          return state;
  }
}

const initialStateFilms = {
  isLoaded: false,
  dataResponse: {},
  error: ''
}
export const requestFilms = (state=initialStateFilms, action={}) => {
  switch(action.type) {
      case REQUEST_FILMS_PENDING:
          return Object.assign({}, state, {isLoaded: false});
      case REQUEST_FILMS_SUCCESS:
          return Object.assign({}, state, {dataResponse: action.payload, isLoaded: true});
      case REQUEST_FILMS_FAILED:
          return Object.assign({}, state, {error: action.payload, isLoaded: false});
      default:
          return state;
  }
}

const initialStateStarships = {
  isLoaded: false,
  dataResponse: {},
  error: ''
}
export const requestStarships = (state=initialStateStarships, action={}) => {
  switch(action.type) {
      case REQUEST_STARSHIPS_PENDING:
          return Object.assign({}, state, {isLoaded: false});
      case REQUEST_STARSHIPS_SUCCESS:
          return Object.assign({}, state, {dataResponse: action.payload, isLoaded: true});
      case REQUEST_STARSHIPS_FAILED:
          return Object.assign({}, state, {error: action.payload, isLoaded: false});
      default:
          return state;
  }
}

const initialStateVehicles = {
  isLoaded: false,
  dataResponse: {},
  error: ''
}
export const requestVehicles = (state=initialStateVehicles, action={}) => {
  switch(action.type) {
      case REQUEST_VEHICLES_PENDING:
          return Object.assign({}, state, {isLoaded: false});
      case REQUEST_VEHICLES_SUCCESS:
          return Object.assign({}, state, {dataResponse: action.payload, isLoaded: true});
      case REQUEST_VEHICLES_FAILED:
          return Object.assign({}, state, {error: action.payload, isLoaded: false});
      default:
          return state;
  }
}