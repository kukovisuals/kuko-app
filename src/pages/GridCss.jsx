import React, {useState} from 'react';

import MenuButton from '../components/MenuButton';

function selectAttribute(name){
  let output = []
  switch(name){
    case 'grid-template-columns': 
      output = ['gridTemplateColumns','gridTemplateRows']
      break
    case 'grid-template-rows': 
      output = ['gridTemplateColumns','gridTemplateRows']
      break
    default: console.log('Nothing Selected')
      break
  }

  return output
}


const addStyle = {
  'gridTemplateColumns': 'repeat(3, 1fr)',
}

const addStyleChildren = {
  1: {
    gridColumnStart: '2',
    gridColumnEnd: '4',
    gridRowStart: '',
    gridRowEnd: '', 
  }
}
const initialState = {
  attribute: 'grid-template-columns',
}

const initialStateChildren = {
  gridRowStart: '',
  gridColumnStart: '',
  gridRowEnd: '', 
  gridColumnEnd: '',
}

const templateState = {
  column: '', 
  row: ''
}

function GridCss() {
  const [project, setProject] = useState(initialState)
  const [projectChildren, setProjectChildren] = useState(initialStateChildren)

  const [cssStyle, setCssStyle] = useState(addStyle)
  const [cssStyleChidlren, setCssStyleChidlren] = useState(addStyleChildren)
  const [template, setTemplate] = useState(templateState)

  const [squares, setSquares] = useState(1)

  // 1 create a from to handle different cases for grid
  const handleChange = (e) =>{
    setProject({attribute: e.target.value})
  }

  const handleSubmit = (e) =>{
    setCssStyle({
      [selectAttribute(project.attribute)[0]] : template.column,
      [selectAttribute(project.attribute)[1]] : template.row,
    })
    e.preventDefault()
  }
  
  const handleChildren = (e) =>{
    setProjectChildren({
      ...projectChildren,
      [e.target.id] : e.target.value
    })
  }

  const handleSquares = (e) => {
    setSquares( e.target.value )
  }
  const handleSubmitChildren = (e) =>{

    setCssStyleChidlren(cssStyleChidlren => ({
        ...cssStyleChidlren,
        [squares]: projectChildren
      })
    )
    
    console.log(cssStyleChidlren, +squares)
    e.preventDefault()
  }
  console.log(cssStyleChidlren)

  return( 
    <div className="GridCss_container" >
      <MenuButton/>
      
      <div className="controllers_container">
        <div className="parent_contaienr">
          <h3 >Grid Parent</h3>
          <form onSubmit={handleSubmit}>
            <div className="options_contianer">
              <label className="parent_label_container">
                <select value={project.attribute} onChange={handleChange}>
                  <option value="grid-template-columns">grid-template-columns </option>
                  <option value="grid-template-rows">grid-template-rows</option>
                  <option value="grid-template-areas" >grid-template-areas</option>
                  <option value="grid-template" >grid-template</option>
                  <option value="grid-auto-columns" >grid-auto-columns</option>
                  <option value="grid-auto-rows" >grid-auto-rows</option>
                  <option value="grid-auto-flow" >grid-auto-flow</option>
                  <option value="grid" >grid</option>
                  <option value="gap" >gap</option>
                </select>
              </label>
            </div>
            <div className="create_value">
              <label className="parent_label_container">
                <input type="text" value={template.column} 
                onChange={(e) => setTemplate({...template, column: e.target.value}) } />
                grid-template-columns
              </label>
              <label className="parent_label_container">
                <input type="text" value={template.row} 
                onChange={(e) => setTemplate({...template, row: e.target.value}) } />
                grid-template-rows
              </label>
            </div>
            
            <button className="boton" >
                &#10004;
              </button>
          </form>
        </div>

        <Examples/>
      </div>

      <div className="children_controller">
        <div className="children_controller_grid">
          <form className="grid_wrapper_container" onSubmit={handleSubmitChildren}>
            <div className="options_children_contianer">
              <h4 className="children_lonely_container">Choose Square</h4>
              <label >
                
                <select className="select_grid" value={squares} onChange={handleSquares}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </label>
            </div>
            <div className="input_children_contianer">
              <div className="input_label_container">
                <span>grid-column-start</span>
                <label>
                  <input type="number" required id="gridColumnStart" value={projectChildren.columnStart} onChange={handleChildren}/> 
                </label>
              </div>
              <div className="input_label_container">
                <span> grid-column-end</span>
                <label>
                  <input type="number" required id="gridColumnEnd" value={projectChildren.columnEnd} onChange={handleChildren}/>
                    
                </label>
              </div>
              <div className="input_label_container">
                <span>grid-row-start</span>
                <label>
                  <input type="number" required id="gridRowStart" value={projectChildren.rowStart} onChange={handleChildren}/> 
                  
                </label>
              </div>
              <div className="input_label_container">
                <span>grid-row-end</span>
                <label>
                  <input type="number" required id="gridRowEnd" value={projectChildren.rowEnd} onChange={handleChildren}/> 
                    
                </label>
              </div>
            </div>
         
            

            <button className="boton2">  &#10004; </button>
          </form>
        </div>
      </div>

     <div className="controllers_right_container">

      <div className="parent_contaienr">
        <h3 >More Coming Soon...</h3>
      </div>
    </div>

      <GridTemplate cssStyle={cssStyle} cssStyleChidlren={cssStyleChidlren}/>

      {/* <PrintHelper/> */}
    </div>  
  );
}


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

const Examples = () => (
  <div className="example_container">
    <div className="example_wrapper">
      <h4>Example</h4>
      <div>
          <p>
            1fr 1fr
          </p>
          <p>
            minmax(10px, 1fr) 3fr
          </p>
          <p>
            repeat(5, 1fr)
          </p>
          <p>
            50px auto 100px 1fr
          </p>
        
      </div>
    </div>
  </div>
)

export default GridCss;