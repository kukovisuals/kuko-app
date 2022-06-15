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
 
  const [cssStyle, setCssStyle] = useState<any>(addStyle);
  const [cssStyleChildren, setCssStyleChildren] = useState(addStyleChildren);
  const [projectChildren, setProjectChildren] = useState(initialStateChildren);
  const [squares, setSquares] = useState<number | string>(0);

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
      if(!cssStyleChildren[gridIndex+1]) {
        cssStyleChildren[gridIndex+1] = initialStateChildren
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
  const handleChildren = (e:React.ChangeEvent<HTMLInputElement>) => {
    setProjectChildren({
      ...projectChildren,
      [e.target.id]: e.target.value,
    });
  };
// 
  const handleSquares = (e:React.ChangeEvent<HTMLSelectElement>) => {
    setSquares(e.target.value);
  };
  const handleSubmitChildren = (e: React.FormEvent<HTMLFormElement>) => {
    
    setCssStyleChildren((cssStyleChildren) => ({
      ...cssStyleChildren,
      [squares]: projectChildren,
    }));
    e.preventDefault();
  };


  console.log(projectChildren);
   const OptionsGrid = ({indice}: any) => (
    <option value={indice}>{indice}</option>
  )
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

     <div className="children_controller">
      <div className="children_controller_grid">
        <form
          className="grid_wrapper_container"
          onSubmit={handleSubmitChildren}
        >
          <div className="options_children_contianer">
            <h4 className="children_lonely_container">Choose Square</h4>
            <label>
              <select
                className="select_grid"
                value={squares}
                onChange={handleSquares}
              >
              {howManyGrids.map((d,i) => 
                <OptionsGrid key={d} indice={i+1}/>
                )
              }

              </select>
            </label>
          </div>
          <div className="input_children_contianer">
            <div className="input_label_container">
              <span>grid-column-start</span>
              <label>
                <input
                  type="number"
                  placeholder="1"
                  required
                  id="gridColumnStart"
                  value={projectChildren.gridColumnStart}
                  onChange={handleChildren}
                />
              </label>
            </div>
            <div className="input_label_container">
              <span> grid-column-end</span>
              <label>
                <input
                  type="number"
                  required
                  placeholder="4"
                  id="gridColumnEnd"
                  value={projectChildren.gridColumnEnd}
                  onChange={handleChildren}
                />
              </label>
            </div>
            <div className="input_label_container">
              <span>grid-row-start</span>
              <label>
                <input
                  type="number"
                  placeholder="1"
                  required
                  id="gridRowStart"
                  value={projectChildren.gridRowStart}
                  onChange={handleChildren}
                />
              </label>
            </div>
            <div className="input_label_container">
              <span>grid-row-end</span>
              <label>
                <input
                  type="number"
                  placeholder="1"
                  required
                  id="gridRowEnd"
                  value={projectChildren.gridRowEnd}
                  onChange={handleChildren}
                />
              </label>
            </div>
          </div>
          {/*<ButtonController  estilo={{display: 'none'}}/>*/}
        </form>
      </div>
    </div>


    <div className="grid_container">
      <div className="wrapper" style={cssStyle}>
        {howManyGrids.map((d, i) => 
          <div key={d} className="cell_grids_component" style={cssStyleChildren[i]}>
            {i}
          </div>
          
        
        )}
      </div>
    </div>


  
    </div>
  );
}


// interface CSSchild {

// }
// const CellsComponent: React.FC<{  cssChildren: any,  indice: any}> = ({ cssChildren, indice = 1 }) => {
//   console.log(cssChildren, indice)
//   if(!cssChildren) return 
//   return (
//     <div className="cell_grids_component" style={cssChildren[indice]}>
//       {indice}
//     </div>
//   );
// }

export default GridCss;































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
        {/*         cssStyleChildren={cssStyleChildren} */}
        {/*         gridCells={howManyGrids} */}
        {/*       /> */}