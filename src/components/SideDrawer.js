import * as React from "react";
import { Drawer } from "@material-ui/core";


class LeftDrawer extends React.Component {
    state = {
      open: false,
    };
  
    handleDrawerOpen = () => {
      this.setState({ open: true });
    };
  
    handleDrawerClose = () => {
      this.setState({ open: false });
    };
}

const SideDrawer  = ({ children }) => {
    return (
        <Drawer>
            {children}
        </Drawer>
    );
};

export default SideDrawer;