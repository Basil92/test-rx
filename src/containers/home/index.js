import React from 'react'
import Popup from '../../components/popup/index'
import { connect } from 'react-redux'
import { showPopup, hidePopup } from '../../modules/popup'
import { sendForm } from '../../modules/sendForm'

const Home = ({showPopup, hidePopup, sendForm, popup, pending}) => (
  <div>
    <button onClick={showPopup}>SHOW POPUP</button>
    {popup && <Popup
      hidePopup = {hidePopup}
      pending = {pending}
      sendForm = {sendForm}
    />}
  </div>
)

const mapStateToProps = ({popup, submitForm}) => ({
   'popup':  popup.showPopup,
   'pending': submitForm.pending
})

const mapDispatchToProps = ({
      showPopup,
      hidePopup,
      sendForm,
    })

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
