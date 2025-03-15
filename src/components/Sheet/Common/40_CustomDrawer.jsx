import { useEffect, useState } from "react";
import { Drawer } from "@mui/material";

export const CustomDrawer = ({ isOpen, onClose, rowRef, children }) => {
  const [position, setPosition] = useState({
    height: "auto",
    top: "auto",
    left: "auto"
  });

  useEffect(() => {
    if (rowRef?.current && isOpen) {
      const rect = rowRef.current.getBoundingClientRect();
      setPosition({
        height: rect.height, // Keeps height dynamic
        top: rect.top, // Ensures proper vertical alignment
        left: rect.left + 5 // Moves drawer slightly to the right
      });
    }
  }, [isOpen, rowRef?.current]);

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: "250px",
          position: "absolute",
          height: position.height,
          top: `${position.top}px`,
          left: `${position.left}px`,
          transform: "translateY(-50%)", // Centers vertically
        }
      }}
    >
      <div className="p-4 flex items-center justify-between w-full h-full overflow-hidden">
        {children}
      </div>
    </Drawer>
  );
};
