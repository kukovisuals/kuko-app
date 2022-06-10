import React from "react";
import * as d3 from 'd3';
import draw from './draw';

type svgProp = {
  width: number,
  height: number
}
function Graph({width, height}: svgProp) {

  const currentRef = React.useRef(null);

  React.useEffect(() => {
    draw(width, height, d3.select(currentRef.current));

    return () => {};
  }, [width, height]);

  const mapStyle = {
    transform: `translate(${0}px, ${50}px)`
}
  console.log(currentRef)
  return (
    <svg ref={currentRef} width={width} height={height}>
      <g className="map" style={mapStyle} />
      <g className="connect"/>
    </svg>
  );
}


export default Graph;
