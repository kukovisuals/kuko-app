
function selectAttribute(name: string) {
  let output: any = [];
  switch (name) {
    case "grid-template-columns":
      output = ["gridTemplateColumns", "gridTemplateRows"];
      break;
    case "grid-template-rows":
      output = ["gridTemplateColumns", "gridTemplateRows"];
      break;
    default:
      console.log("Nothing Selected");
      break;
  }
  return output;
}

export default selectAttribute;