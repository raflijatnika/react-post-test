import React from 'react'

function ButtonSubmit({ children }) {
  return (
    <button type="submit" className="btn btn-primary">{children}</button>
  )
}

export default ButtonSubmit
