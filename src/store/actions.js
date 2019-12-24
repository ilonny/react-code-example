import {LOAD_STAFF} from './constants'
import // selectCart,
// selectReviewsLoaded,
// selectReviewsLoading,
// selectUsersLoaded,
// selectUsersLoading,
'./selectors'
// import {push} from 'connected-react-router'

export const loadStaffs = () => {
  return {
    type: LOAD_STAFF,
    callAPI: '/api/staffs',
  }
}
