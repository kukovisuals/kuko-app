export const addStyle = {
  gridTemplateColumns: "repeat(3, 1fr)",
};

export const addStyleChildren = {
  1: {
    gridColumnStart: "2",
    gridColumnEnd: "4",
    gridRowStart: "",
    gridRowEnd: "",
  },
};
export const initialState = {
  attribute: "grid-template-columns",
};

export const initialStateChildren = {
  gridRowStart: "",
  gridColumnStart: "",
  gridRowEnd: "",
  gridColumnEnd: "",
};

export const templateState = {
  column: "",
  row: "",
};