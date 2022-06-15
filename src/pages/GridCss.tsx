import React, {useState } from "react";

// import MenuButton from "../components/MenuButton";
// import ControllerVertical from "../components/Grid/ControllerVertical";
// import ControllerHorizontal from "../components/Grid/ControllerHorizontal";
// import GridTemplate from "../components/Grid/GridTemplate";
import selectAttribute from "../components/Grid/selectAttribute";

import {
  addStyleChildren,
  addStyle,
  initialState,
  initialStateChildren,
  templateState,
} from "../components/Grid/initialState/initialState";

function GridCss() {
  const [template, setTemplate] = useState(templateState);
  const [project, ] = useState(initialState);
  const [howManyGrids, setHowManyGrids] = useState([0,1,2,3,4])
 
  const [, setCssStyle] = useState<any>(addStyle);
  const [cssStyleChidlren, ] = useState(addStyleChildren);
  // const [projectChildren, setProjectChildren] = useState(initialStateChildren);
// 
// 
//   const [squares, setSquares] = useState(1);

  const howManySquares = (num: number) => Array.from({length: num}, (_,y) => y   )
  // parent controller (vertical controller)
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setProject({ attribute: e.target.value });
  // };
  const handleTemplate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTemplate({
      ...template,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    // add the array to the css object style
    for(const gridIndex of howManyGrids){
      if(!cssStyleChidlren[gridIndex+1]) {
        cssStyleChidlren[gridIndex+1] = initialStateChildren
      } 
    }
    setCssStyle({
      [selectAttribute(project.attribute)[0]]: template.column,
      [selectAttribute(project.attribute)[1]]: template.row,
    });
    e.preventDefault();
  };

  const handleGrid = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const sanitize = e.target.value.slice(0,2)
    console.log('slice', sanitize)
    const newGrids = howManySquares(+sanitize.trim())
    setHowManyGrids(newGrids)
  }

  // children controller (horizonatal controller)
//   const handleChildren = (e) => {
//     setProjectChildren({
//       ...projectChildren,
//       [e.target.id]: e.target.value,
//     });
//   };
// 
//   const handleSquares = (e) => {
//     setSquares(e.target.value);
//   };
//   const handleSubmitChildren = (e) => {
//     
//     setCssStyleChidlren((cssStyleChidlren) => ({
//       ...cssStyleChidlren,
//       [squares]: projectChildren,
//     }));
//     e.preventDefault();
//   };


  console.log(howManyGrids);
  return (
    <div className="GridCss_container">
      {/* <MenuButton /> */}

       <div className="controllers_container">
      <div className="parent_contaienr">
        <h3>Grid Parent</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="parent_label_container">
              How Many Grids do you want
              <input
                className="howManyGrids_container"
                type="number"
                id="howManyGrids"
                placeholder="4"
                value={6}
                onChange={handleGrid}
                maxLength={2}
              />
            </label>
          </div>
         
          <div className="create_value">
            <label className="parent_label_container">
              <input
                type="text"
                id="column"
                placeholder="repeat(5, 1fr)"
                value={template.column}
                onChange={handleTemplate}
              />
              grid-template-columns
            </label>
            <label className="parent_label_container">
              <input
                type="text"
                id="row"
                placeholder="10% auto 10%"
                value={template.row}
                onChange={handleTemplate}
              />
              grid-template-rows
            </label>
          </div>
          {/* <ButtonController /> */}
        </form>
      </div>
      {/* <Examples /> */}
    </div>

        {/*       <ControllerHorizontal */}
        {/*         handleSubmitChildren={handleSubmitChildren} */}
        {/*         squares={squares} */}
        {/*         handleSquares={handleSquares} */}
        {/*         projectChildren={projectChildren} */}
        {/*         handleChildren={handleChildren} */}
        {/*         howManyGrids={howManyGrids} */}
        {/*       /> */}
        {/*  */}
        {/*       <div className="controllers_right_container"> */}
        {/*         <div className="parent_contaienr"> */}
        {/*           <h3>More Coming Soon...</h3> */}
        {/*         </div> */}
        {/*       </div> */}
        {/*  */}
        {/*       <GridTemplate */}
        {/*         cssStyle={cssStyle} */}
        {/*         cssStyleChidlren={cssStyleChidlren} */}
        {/*         gridCells={howManyGrids} */}
        {/*       /> */}
    </div>
  );
}

export default GridCss;
