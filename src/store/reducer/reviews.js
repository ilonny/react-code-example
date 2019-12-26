import {LOAD_REVIEWS, START, SUCCESS} from '../constants'

const initialState = {
  loaded: false,
  loading: false,
  error: null,
  entities: [
    {
      staff_id: 2,
      content: [{name: 'test user', comment: 'my comment'}],
    },
  ],
}

export default (reviewsState = initialState, action) => {
  switch (action.type) {
    case LOAD_REVIEWS + START: {
      return {
        ...reviewsState,
        loading: true,
      }
    }
    case LOAD_REVIEWS + SUCCESS: {
      return {
        ...reviewsState,
        loading: false,
        loaded: true,
        entities: action.response,
      }
    }
    default:
      return reviewsState
  }
}
