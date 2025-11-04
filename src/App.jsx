import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Highlights from './components/Highlights'

const App = () => {
  return (
    <div className='bg-black w-full min-h-screen text-white'>
<Navbar/>
<Hero/>
<Highlights/>
    </div>
  )
}

export default App