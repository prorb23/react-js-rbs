import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-xl mb-6">
        Tailwind Test
      </h1>
      <Cards username="Ronit Bhattacharjee"  />
    </>
  )
}

export default App

