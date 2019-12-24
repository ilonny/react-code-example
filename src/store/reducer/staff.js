import {LOAD_STAFF, START, SUCCESS} from '../constants'

const initialState = {
  loaded: false,
  loading: true,
  error: null,
  entities: [],
}

export default (staffState = initialState, action) => {
  switch (action.type) {
    case LOAD_STAFF + START: {
      return {
        ...staffState,
        loading: true,
      }
    }
    case LOAD_STAFF + SUCCESS: {
      return {
        ...staffState,
        loading: false,
        loaded: true,
        entities: action.response,
      }
    }
    default:
      return staffState
  }
}
