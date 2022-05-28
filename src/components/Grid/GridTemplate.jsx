import React from 'react';

const GridTemplate = ({cssStyle, cssStyleChidlren}) => (

  <div className="grid_container">
    <div className="wrapper" style={cssStyle}>
      <div className="one" style={cssStyleChidlren[1]}>One</div>
      <div className="two" style={cssStyleChidlren[2]}>Two</div>
      <div className="three"style={cssStyleChidlren[3]}>Three</div>
      <div className="four" style={cssStyleChidlren[4]}>Four</div>
    </div>
  </div>
)

export default GridTemplate;