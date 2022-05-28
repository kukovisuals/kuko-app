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
}) {
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
                <input
                  type="number"
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
                  required
                  id="gridRowEnd"
                  value={projectChildren.rowEnd}
                  onChange={handleChildren}
                />
              </label>
            </div>
          </div>
          <ButtonController />
        </form>
      </div>
    </div>
  );
}

export default ControllerHorizontal;
