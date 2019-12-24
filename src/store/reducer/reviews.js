// import {ADD_REVIEW, FAIL, LOAD_REVIEWS, START, SUCCESS} from '../constants'
const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: {},
}

export default (reviewsState = initialState, action) => {
  switch (action.type) {
    default:
      return reviewsState
  }
}
