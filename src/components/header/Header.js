import PropTypes from 'prop-types'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useTranslation } from 'react-i18next';

import { AppBar, Box, IconButton, Toolbar, Typography } from "@material-ui/core"
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

export const Header = ({ title, showHeaderIcons = true, goBackLink }) => {

  const history = useHistory();
  const { i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language);
  
  const langChangeHandler = () => {
    setLang(lang === 'es' ? 'en' : 'es');
    i18n.changeLanguage(lang === 'es' ? 'en' : 'es');
  }

  return (
    <AppBar
      position="sticky"
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
          <IconButton onClick={langChangeHandler}>
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

Header.defaultProps = {
  goBackLink: false
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  goBackLink: PropTypes.bool
}