import React from 'react';
import red from '../assets/vid/purple.mp4'
import MenuButton from '../components/MenuButton';


function Home() {

  return( 
    <div className="home_container" >
      <MenuButton/>
      <video id="video_container"  autoPlay muted loop>

        <source 
          src={red}
          type="video/mp4"
        />

        Hello {name}
        Sorry, your browser doesn't support embedded videos.
      </video>
    </div>  
  );
}

export default Home;