import { Box, Toolbar, Typography } from "@mui/material";

export default function ContentMenu({ children }) {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {children}
    </Box>
  )
}
