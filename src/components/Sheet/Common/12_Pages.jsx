import { useState } from "react";
import { Tabs, Tab, Box } from "@mui/material";

export default function Pages({ pages, children, compact = false }) {
  const [activePage, setActivePage] = useState(pages[0].key);

  const handleChange = (_, newValue) => {
    setActivePage(newValue);
  };

  return (
    <Box className={`min-w-0 ${compact ? "space-y-3" : "space-y-5"}`}>
      {/* Tabs Navigation */}
      <Tabs
        value={activePage}
        onChange={handleChange}
        variant="fullWidth"
        aria-label="Sheet pages"
        sx={{
          minHeight: 48,
          backgroundColor: "white",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          "& .MuiTab-root": {
            textTransform: "none",
            minWidth: 0,
            minHeight: 48,
            padding: { xs: "10px 4px", sm: "12px 16px" },
            fontSize: { xs: "0.8rem", sm: "0.95rem" },
            fontWeight: "500",
            color: "#6b7280",
            "&.Mui-selected": { color: "#111827", fontWeight: "600", backgroundColor: "#f9fafb" },
          },
          "& .MuiTabs-indicator": { backgroundColor: "#333" },
        }}
      >
        {pages.map(({ key, label }) => (
          <Tab key={key} value={key} label={label} />
        ))}
      </Tabs>

      {/* Page Content */}
      <Box className={`w-full min-w-0 ${compact ? "space-y-3" : "space-y-5"}`}>
        {children[pages.findIndex((p) => p.key === activePage)]}
      </Box>
    </Box>
  );
}
