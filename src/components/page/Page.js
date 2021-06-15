import PropTypes from 'prop-types'
import { Header } from '../header/Header'

import { Box, Container } from "@material-ui/core"

export const Page = (
  {
    title,
    children,
    goBackLink
  }) => {
  return (
    <>
      <Header
        title={title}
        goBackLink={goBackLink}
      />
      <Container>
        <Box my={3}>
          {children}
        </Box>
      </Container>
    </>
  );
}

Page.defaultProps = {
  title: '',
  goBackLink: false
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  goBackLink: PropTypes.bool
}