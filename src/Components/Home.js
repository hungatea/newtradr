import React from "react";
import { Link, withRouter } from "react-router-dom";

function HomePage() {
    return (
        <>
        <div className='main-container1'>
              <h1>Welcome to NewTradr. Are you ready to buy your first stock?</h1>
        </div>
        
        <div className='button'>
          <button className='home-button'>
          <Link exact to='/survey'>Tell me what I should buy</Link></button>
        </div>
        
        </>
      );
}

export default HomePage;