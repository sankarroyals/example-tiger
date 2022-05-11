import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
       <h1>Click Here To Go ABout </h1>
      <Link to="/about">About</Link>
      <h1>Click Here To Go Categories </h1>
      <Link to="/categories">Categories</Link>


    </div>
  )
}

export default Home