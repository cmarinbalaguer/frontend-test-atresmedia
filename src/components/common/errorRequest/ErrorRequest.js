import PropTypes from 'prop-types';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import Button from '@material-ui/core/Button';

export const ErrorRequest = (
  {
    errorLoading,
    reload,
    t
  }) => {

  return(
    <>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        autoHideDuration={3000}
        open={errorLoading}
        >
        <Alert
          severity="error"
          action={
            <Button
              onClick={reload}
            >
              {t('COMMON.RETRY')}
            </Button>
          }
        >
            {t('COMMON.ERROR_LOAD_DATA')}
        </Alert>
      </Snackbar>
    </>
  );
}

ErrorRequest.propTypes = {
  errorLoading: PropTypes.bool.isRequired,
  reload: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired
};
