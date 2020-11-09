import React from 'react'

function Card(props) {
  const { children, cardTitle } = props

  return (
    <div className="card m-3">
      <div className="card-body">
        <div className="card-title"><h4 className="text-center">{cardTitle}</h4></div>
        {children}
      </div>
    </div>
  )
}

export default Card
