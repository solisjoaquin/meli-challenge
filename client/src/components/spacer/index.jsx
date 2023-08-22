import React from "react";

// este componente es un div que se usa para agregar espaciado entre componentes
const Spacer = ({ height }) => {
  return /*#__PURE__*/ React.createElement("div", {
    style: {
      height,
    },
  });
};

export default Spacer;
