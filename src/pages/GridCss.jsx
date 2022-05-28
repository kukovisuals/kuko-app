import React, { useState } from "react";

import MenuButton from "../components/MenuButton";
import ControllerVertical from "../components/Grid/ControllerVertical";
import ControllerHorizontal from "../components/Grid/ControllerHorizontal";
import GridTemplate from "../components/Grid/GridTemplate";
import selectAttribute from "../components/Grid/selectAttribute";
import {
  addStyle,
  addStyleChildren,
  initialState,
  initialStateChildren,
  templateState,
} from "../components/Grid/initialState/initialState";

function GridCss() {
  const [project, setProject] = useState(initialState);
  const [cssStyle, setCssStyle] = useState(addStyle);
  const [template, setTemplate] = useState(templateState);

  const [projectChildren, setProjectChildren] = useState(initialStateChildren);
  const [cssStyleChidlren, setCssStyleChidlren] = useState(addStyleChildren);

  const [squares, setSquares] = useState(1);

  // parent controller (vertical controller)
  const handleChange = (e) => {
    setProject({ attribute: e.target.value });
  };
  const handleTemplate = (e) => {
    setTemplate({
      ...template,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    setCssStyle({
      [selectAttribute(project.attribute)[0]]: template.column,
      [selectAttribute(project.attribute)[1]]: template.row,
    });
    e.preventDefault();
  };

  // children controller (horizonatal controller)
  const handleChildren = (e) => {
    setProjectChildren({
      ...projectChildren,
      [e.target.id]: e.target.value,
    });
  };

  const handleSquares = (e) => {
    setSquares(e.target.value);
  };
  const handleSubmitChildren = (e) => {
    setCssStyleChidlren((cssStyleChidlren) => ({
      ...cssStyleChidlren,
      [squares]: projectChildren,
    }));
    e.preventDefault();
  };

  return (
    <div className="GridCss_container">
      <MenuButton />

      <ControllerVertical
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        values={project.attribute}
        template={template}
        handleTemplate={handleTemplate}
      />

      <ControllerHorizontal
        handleSubmitChildren={handleSubmitChildren}
        squares={squares}
        handleSquares={handleSquares}
        projectChildren={projectChildren}
        handleChildren={handleChildren}
      />

      <div className="controllers_right_container">
        <div className="parent_contaienr">
          <h3>More Coming Soon...</h3>
        </div>
      </div>

      <GridTemplate cssStyle={cssStyle} cssStyleChidlren={cssStyleChidlren} />
    </div>
  );
}

export default GridCss;
