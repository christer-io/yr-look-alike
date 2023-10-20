import React from 'react'

function Humidity({relative_humidity, unit}) {
  return (
    <div className="">Humidity: {relative_humidity}{unit} </div>
  )
}
export default Humidity