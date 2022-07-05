import React, { useState } from 'react'

const Discount = ({ agree }) => {
  const [message, setMessage] = useState('I AM  Happy')
  const handleChange = () => {
    setMessage('I AM Double Happy')
  }
  return (
    <>
      {agree && (
        <>
          <h3 className='pt-4 text-primary'>&#128522; {message} </h3>
          <button className='btn btn-primary' onClick={handleChange}>
            Click me if your double happy
          </button>
        </>
      )}
      {!agree && <h3 className='pt-4'>&#128542; </h3>}
    </>
  )
}

export default Discount
