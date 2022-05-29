import React from "react";

const GridTemplate = ({ cssStyle, cssStyleChidlren, gridCells = [] }) => {
  console.log(gridCells)
  return( 
    <div className="grid_container">
      <div className="wrapper" style={cssStyle}>
        {gridCells.map((d, i) => {
           console.log(i)
          return (
          <CellsComponent
            key={i}
            cssChildren={cssStyleChidlren[i + 1]}
            indice={i+1}
          />
          )
        
        })}
      </div>
    </div>
  );
}

const CellsComponent = ({ cssChildren, indice = 1 }) => {
  console.log(cssChildren, indice)
  if(!cssChildren) return 
  return (
    <div className="cell_grids_component" style={cssChildren[indice]}>
      {indice}
    </div>
  );
}
export default GridTemplate;
