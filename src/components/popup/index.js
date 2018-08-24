import React from 'react'
import Form from '../form/index'
import './index.css'

const Popup = ({hidePopup, pending, sendForm}) => (
  <div className="Popup">
    <Form hidePopup = {hidePopup}
          pending = {pending}
          sendForm = {sendForm}/>
  </div>
)

export default Popup
