import { useState } from "react";

import { CardActionArea } from "@mui/material";

export const OptionButton = ({ correctOption, onClickDoWhat, children }) => {
  const [active, setActive] = useState(false);
  let color = "white";
  if (active) {
    color = correctOption ? "green" : "red";
  }
  return (
    <CardActionArea
      style={{ backgroundColor: color }}
      onClick={() => {
        setActive(true);
        setTimeout(onClickDoWhat, 300);
      }}
    >
      {" "}
      {children}
    </CardActionArea>
  );
};
