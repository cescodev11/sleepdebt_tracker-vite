import React from 'react'
import NavigationBar from '../NavyFolder/NavigationBar'

const Home = () => {
  return (

    <div>

        <NavigationBar />
    <div className="home">
            <h1>Welcome to MySite!</h1>
            <p>This is the homepage of our simple React application.</p>
            <p>Explore our services and learn more about us.</p>
        </div>

        </div>
  )
}

export default Home