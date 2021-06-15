import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

import { AppBar, Box, IconButton, Toolbar, Typography } from "@material-ui/core"
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export const Header = ({ title, showHeaderIcons = true, goBackLink, lang= 'es' }) => {

  const history = useHistory();

  return (
    <AppBar
      position="sticky"
      // className={styles.header}
    >
      <Toolbar>
        {goBackLink &&
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => history.push("/BreedList")}>
            <ArrowBackIcon />
          </IconButton>}
          <Box flexGrow={1}>
          <Typography variant="h6">
            {title} 
          </Typography>
          </Box>
          {showHeaderIcons && 
          <IconButton onClick={console.log('langChangeHandler')}>
            <Typography style={{color: '#fff'}} variant="h5">
              {lang} 
            </Typography>
          </IconButton>}
          {/*showHeaderIcons && <IconButton 
            onClick={() => history.replace('/create-book')}>
              <AddIcon style={{color: '#fff'}} />
          </IconButton>*/}
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}