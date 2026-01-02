import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
const {userId} = useParams()
  return (
    <div className='text-center justify-center text-white p-3.5 bg-gray-600 text-3xl'>
      User: {userId}
    </div>
  )
}

export default User
