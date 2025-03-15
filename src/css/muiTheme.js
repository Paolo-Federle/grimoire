import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#333", // Set primary color to #333 to match your sheet
    },
    text: {
      primary: "#333",
      secondary: "#666", // Adjust if needed
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": { borderColor: "#333" },
            "&:hover fieldset": { borderColor: "#333" },
            "&.Mui-focused fieldset": { borderColor: "#333" },
          },
          "& input": { color: "#333" },
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: "#333",
          "&.Mui-checked": { color: "#333" },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: "#333",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#333",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#333",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#333",
          },
        },
      },
    },
  },
});

export default theme;
