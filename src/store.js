import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import todos from './reducers/todos'

export const reducer = combineReducers({
  todos,
})

export default createStore(
  reducer,
  applyMiddleware(thunk),
)
