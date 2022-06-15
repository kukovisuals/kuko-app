import React from "react";
// import ButtonController from "./ButtonController";
// import Examples from "./Examples";
/*
  Left Vertical Controller
*/
function ControllerVertical({
  handleSubmit,
  handleChange,
  values,
  template,
  handleTemplate,
  gridNumbers,
  handleGrid
}) {
  // console.log('si', values, template)
  return (
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
                value={gridNumbers}
                onChange={handleGrid}
                maxLength="2"
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
          <ButtonController />
        </form>
      </div>
      <Examples />
    </div>
  );
}

export default ControllerVertical;

