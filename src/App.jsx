import React, {useState, useLayoutEffect}  from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import Home from './pages/Home';
import GridCss from './pages/GridCss';

function App({ name }) {

  return( 
    <Router>
      <GridCss/>
      {/* <Routes> */}
      {/*   <Route path="/" element={<Home/> }/>     */}
      {/*     <Route path="/gridcss" element={<GridCss/>}/> */}
      {/* </Routes> */}
   </Router>
 	);
}

export default App;