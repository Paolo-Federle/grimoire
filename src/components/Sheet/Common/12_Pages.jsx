import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

export default function Pages({ pages, children }) {
  const [activePage, setActivePage] = useState(pages[0].key);

  const handleChange = (_, newValue) => {
    setActivePage(newValue);
  };

  return (
    <Box className="p-4">
      {/* Tabs Navigation */}
      <Tabs
        value={activePage}
        onChange={handleChange}
        variant="fullWidth"
        sx={{
          "& .MuiTab-root": {
            textTransform: "none",
            fontSize: "1.1rem", // Slightly larger text
            fontWeight: "500",
            color: "#333",
            "&.Mui-selected": { color: "#333", fontWeight: "bold" },
          },
          "& .MuiTabs-indicator": { backgroundColor: "#333" },
        }}
      >
        {pages.map(({ key, label }) => (
          <Tab key={key} value={key} label={label} />
        ))}
      </Tabs>

      {/* Page Content */}
      <Box className="mt-4 max-w-[850px] w-full mx-auto">
        {children[pages.findIndex((p) => p.key === activePage)]}
      </Box>
    </Box>
  );
}
