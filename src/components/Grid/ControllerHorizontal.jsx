import React from "react";
import ButtonController from "./ButtonController";
/*
  Horizontal Controller Controller
*/
function ControllerHorizontal({
  handleSubmitChildren,
  squares,
  handleSquares,
  projectChildren,
  handleChildren,
  howManyGrids
}) {

  const OptionsGrid = ({indice}) => (
    <option value={indice}>{indice}</option>
  )
  return (
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
                <OptionsGrid key={i+1} indice={i+1}/>
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
                  value={projectChildren.columnStart}
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
                  value={projectChildren.columnEnd}
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
                  value={projectChildren.rowStart}
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
                  value={projectChildren.rowEnd}
                  onChange={handleChildren}
                />
              </label>
            </div>
          </div>
          <ButtonController  estilo={{display: 'none'}}/>
        </form>
      </div>
    </div>
  );
}

export default ControllerHorizontal;
