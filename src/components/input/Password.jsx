/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react'

function Email(props) {
  const { labelText, inputId, inputName, inputRef, error } = props
  const [show, setShow] = useState(false)
  return (
    <div className="form-group">
      <label htmlFor={inputId}>{labelText}</label>
      <div className="input-group">
        <input type={show ? 'text' : 'password'} id={inputId} name={inputName} ref={inputRef} className="form-control" autoComplete="off" />
        <div className="input-group-append">
          <button className="btn btn-primary" type="button" onClick={() => (setShow(!show))}><i className={`fa ${show ? 'fa-eye-slash' : 'fa-eye'}`} /></button>
        </div>
      </div>
      <small id={inputId} className="form-text text-muted">
        {error || '\u0020'}
      </small>
    </div>
  )
}

export default Email
