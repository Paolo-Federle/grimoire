import { useEffect, useState } from "react";
import { Drawer } from "@mui/material";

export const CustomDrawer = ({ isOpen, onClose, anchor = "right", rowRef, children }) => {
  const [dimensions, setDimensions] = useState({
    height: "auto",
    top: "auto",
    left: "auto"
  });

  useEffect(() => {
    if (rowRef?.current) {
      const { offsetHeight, offsetTop, offsetLeft, offsetWidth } = rowRef.current;
      setDimensions({
        height: offsetHeight,
        top: offsetTop,
        left: offsetLeft + (offsetWidth / 2)
      });
    }
  }, [isOpen, rowRef?.current]); // Runs when drawer opens or rowRef changes

  return (
    <Drawer
      anchor={anchor}
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "250px",
          position: "absolute",
          height: dimensions.height,
          top: dimensions.top,
          left: dimensions.left
        }
      }}
    >
      <div className="p-4 flex items-center justify-between w-full h-full overflow-hidden">{children}</div>
    </Drawer>
  );
};
