import {LOAD_STAFF, LOAD_REVIEWS, START, SUCCESS} from './constants'

export const loadStaffs = () => {
  return {
    type: LOAD_STAFF,
    callAPI: '/api/staffs',
  }
}

export const loadStaff = () => {
  return {
    type: LOAD_STAFF,
    callAPI: '/api/staff',
  }
}

export const loadReviews = staffId => (dispatch, getState) => {
  // const state = getState();
  console.log('loadReviews action fired')
  dispatch({type: LOAD_REVIEWS + START, staffId})
  new Promise(res => setTimeout(res, 1000)).then(() =>
    dispatch({
      type: LOAD_REVIEWS + SUCCESS,
      // reviews: state.reviews.find(review => review.id === id)
    })
  )
}
