import React from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

// import Home from './pages/Home.jsx';
// import GridCss from './pages/GridCss';
import Graph from './components/Graph/Graph';
import useWindowSize from './components/Hooks/useWindowSize';

type AppProps = {
  name: string;
}
function App({ name }: AppProps) {
  const [x, y] = useWindowSize()

  return( 
    <div>
      {name}
      <Graph
        width={x}
        height={y}
      />
    </div>    

 	);
}

export default App;