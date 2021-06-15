import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';

export const Loader = () => (
  <Box
      my={10}
      display="flex"
      justifyContent="center">
      <CircularProgress />
  </Box>
);
