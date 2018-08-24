import React from 'react'

const handleSubmit = (event, sendForm) => {
  event.preventDefault();
  sendForm({
    title: event.target.elements.title.value,
    description: event.target.elements.description.value
  })
}


const Form = ({ hidePopup, sendForm, pending }) => {
console.log(111, sendForm)
  return (
    <form onSubmit={(event) => handleSubmit(event, sendForm)}>
      <label>
        Title:
        <input type="text" name="title" required autoFocus={true}/>
      </label>
      <label>
        Description:
        <textarea name="description" cols="30" rows="5" maxLength="200" required></textarea>
      </label>
      <button type="reset" onClick={() => hidePopup()} disabled={pending}>CLOSE</button>
      <button type="submit" disabled={pending}>SUBMIT</button>
    </form>
  )
}

export default Form
