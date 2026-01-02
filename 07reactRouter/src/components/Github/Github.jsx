import React, { useEffect , useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const[data,setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/prorb23')
    //     .then(response => response.json())
    //     .then(data =>{
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
  return (
    <div className="h-full w-full px-4 py-4 bg-gray-600 text-white p-4 text-3xl 
                  flex flex-col items-center justify-center gap-4 rounded-lg">
    
    <div className="text-center">
      Github followers: {data.followers}
    </div>

    <div className="text-center">
      Name : {data.name}
    </div>

    <img
      className="max-w-full max-h-full rounded-lg"
      src={data.avatar_url}
      alt="Git Pic"
      width={300}
    />
  </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/prorb23')
    return response.json()
}