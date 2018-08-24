export const SEND_FORM = 'SEND_FORM'
export const SEND_FORM_SUCCESS = 'SEND_FORM_SUCCESS'
export const SEND_FORM_FAILURE = 'SEND_FORM_FAILURE'

const initialState = {
  pending: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SEND_FORM:
      return {
        ...state,
        pending: true
      }
    case SEND_FORM_SUCCESS:
      return {
        ...state,
        pending: false
      }
    case SEND_FORM_FAILURE:
      return {
        ...state,
        pending: false
      }
    default:
      return state
  }
}

export const sendForm = (data) => ({
      type: SEND_FORM,
      payload: data
    })
export const sendFormSuccess = () => ({
      type: SEND_FORM_SUCCESS
    })

export const sendFormFailure = () => ({
      type: SEND_FORM_FAILURE
    })

