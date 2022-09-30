import React from 'react'
import loading from '../assests/loading.gif'
export default function Spinner() {
  return (
    <div>
      <div className="text-center my-4">
        <img src={loading} alt="loading" />
      </div>
    </div>
  )
}
