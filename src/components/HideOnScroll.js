import * as React from "react";
import { Slide, useScrollTrigger } from "@material-ui/core";

const HideOnScroll = ({ children }) => {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={{enter: 50, exit: 350}}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;