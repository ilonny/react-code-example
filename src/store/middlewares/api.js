import {START, SUCCESS} from '../constants'
import {staffs} from '../../fixtures'
import {LOAD_STAFF} from '../constants'
export default store => next => action => {
  const {callAPI, ...rest} = action
  if (!callAPI) {
    next(rest)
  } else {
    next({
      ...rest,
      type: action.type + START,
    })
    //
    // на случай, если бы у нас был api, можно исопльзовать код ниже для более реалистичного запроса
    // в данном случае просто прочитаем заглушку с json файла.
    let response
    switch (action.type) {
      case LOAD_STAFF:
        response = staffs
        break
      default:
        response = ''
        break
    }
    setTimeout(() => {
      next({
        ...rest,
        response,
        type: action.type + SUCCESS,
      })
    }, 1000)
    // fetch(callAPI)
    //   .then(res => res.json())
    //   .then(response => {
    //     next({
    //       ...rest,
    //       response,
    //       type: action.type + SUCCESS,
    //     })
    //   })
    //   .catch(error => {
    //     next({
    //       ...rest,
    //       error,
    //       type: action.type + FAIL,
    //     })
    //     store.dispatch(replace('/error'))
    //   })
    //
  }
}
