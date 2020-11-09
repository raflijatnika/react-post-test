import React from 'react'

function Email(props) {
  const { labelText, inputId, inputName, inputRef, error } = props
  return (
    <div className="form-group">
      <label htmlFor={inputId}>{labelText}</label>
      <input type="email" id={inputId} name={inputName} ref={inputRef} className="form-control" autoComplete="off" />
      <small id={inputId} className="form-text text-muted">
        { error || '\u0020' }
      </small>
    </div>
  )
}

export default Email
