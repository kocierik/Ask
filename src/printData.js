import React from 'react'

function printData(props) {
  
  return (
    <>
      {props.stock.map(item => <p key={item.id}>quota: {item.quote} </p>)}
    </>
  )
}

export default printData
