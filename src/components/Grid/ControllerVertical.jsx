import React from "react";
import ButtonController from "./ButtonController";
import Examples from "./Examples";
/*
  Left Vertical Controller
*/
function ControllerVertical({
  handleSubmit,
  handleChange,
  values,
  template,
  handleTemplate,
}) {
  // console.log('si', values, template)
  return (
    <div className="controllers_container">
      <div className="parent_contaienr">
        <h3>Grid Parent</h3>
        <form onSubmit={handleSubmit}>
          <div className="options_contianer">
            <label className="parent_label_container">
              <select value={values} onChange={handleChange}>
                <option value="grid-template-columns">
                  grid-template-columns{" "}
                </option>
                <option value="grid-template-rows">grid-template-rows</option>
                <option value="grid-template-areas">grid-template-areas</option>
                <option value="grid-template">grid-template</option>
                <option value="grid-auto-columns">grid-auto-columns</option>
                <option value="grid-auto-rows">grid-auto-rows</option>
                <option value="grid-auto-flow">grid-auto-flow</option>
                <option value="grid">grid</option>
                <option value="gap">gap</option>
              </select>
            </label>
          </div>
          <div className="create_value">
            <label className="parent_label_container">
              <input
                type="text"
                id="column"
                value={template.column}
                onChange={handleTemplate}
              />
              grid-template-columns
            </label>
            <label className="parent_label_container">
              <input
                type="text"
                id="row"
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
