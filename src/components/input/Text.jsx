import React from 'react'

function Email(props) {
  const { labelText, inputId, inputName, inputRef, value, error } = props
  return (
    <div className="form-group">
      <label htmlFor={inputId}>{labelText}</label>
      <input type="text" id={inputId} name={inputName} ref={inputRef} defaultValue={value} className="form-control" autoComplete="off" />
      <small id={inputId} className="form-text text-muted">
        { error || '\u0020' }
      </small>
    </div>
  )
}

export default Email
