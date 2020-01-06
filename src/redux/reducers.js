import {combineReducers} from 'redux'

import app from './reducers/app'
import tags from './reducers/tags'

export default combineReducers({
  app,
  tags
})