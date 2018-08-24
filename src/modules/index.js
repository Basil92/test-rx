import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'
import popup from './popup'
import submitForm from './sendForm'
import { sendFormEpic } from './sendFormEpic'

export default combineReducers({
  popup,
  submitForm
})

export const rootEpic = combineEpics(
  sendFormEpic
);