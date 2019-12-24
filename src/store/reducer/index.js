import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import staff from './staff'
import reviews from './reviews'
import history from '../history'

export default combineReducers({
  router: connectRouter(history),
  staff,
  reviews,
})
