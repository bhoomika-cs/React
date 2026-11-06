import React from 'react'
import { useParams } from 'react-router'

function User() {
    const {id} = useParams()
  return (
    <div className='bg-gray-200 text-3xl py-3 flex justify-center text-gray-600' >User : {id} </div>
  )
}

export default User