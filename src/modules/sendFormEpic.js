import { ajax } from 'rxjs/ajax'
import { sendFormSuccess, sendFormFailure, SEND_FORM } from './sendForm'
import { mergeMap, catchError } from 'rxjs/operators'
import { ofType } from 'redux-observable'
import { hidePopup } from './popup'
import { from, of } from 'rxjs'

export const sendFormEpic = action$ => action$.pipe(
  ofType(SEND_FORM),
  mergeMap(action => ajax.put('your-url', action.payload).pipe(
    mergeMap(r=> from([sendFormSuccess() ,hidePopup()])),
    catchError(e=>of(sendFormFailure(e)))
  ))
)
//demonstrate success cases
// export const sendFormEpic = action$ => action$.pipe(
//   ofType(SEND_FORM),
//   mergeMap(action => /*ajax.put('your-url', action.payload)*/ of(action).pipe(
//     mergeMap(r=> from([sendFormSuccess() ,hidePopup()])),
//     catchError(e=>of(sendFormFailure(e)))
//   ))
// )
