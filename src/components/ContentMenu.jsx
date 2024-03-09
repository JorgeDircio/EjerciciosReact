import PropTypes from 'prop-types';
import { Box, Toolbar } from "@mui/material";

export default function ContentMenu({ children }) {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Toolbar />
      {children}
    </Box>
  )
}

ContentMenu.propTypes = {
  children: PropTypes.node.isRequired
};