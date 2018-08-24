export const SHOW_POPUP = 'SHOW_POPUP'
export const HIDE_POPUP = 'HIDE_POPUP'

const initialState = {
  showPopup: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POPUP:
      return {
        ...state,
        showPopup: true
      }

    case HIDE_POPUP:
      return {
        ...state,
        showPopup: false
      }

    default:
      return state
  }
}

export const showPopup = () => ({
      type: SHOW_POPUP
    })


export const hidePopup = () => ({
      type: HIDE_POPUP
    })
