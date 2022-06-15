import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

// import Home from './pages/Home.jsx';
import GridCss from './pages/GridCss';

type AppProps = {
  name: string;
}
function App({ name }: AppProps) {

  return( 
    <div>
      {name}
      <GridCss/>
    </div>    

 	);
}

export default App;