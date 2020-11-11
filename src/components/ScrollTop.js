import React from 'react'
import PropTypes from 'prop-types';

import Zoom from '@material-ui/core/Zoom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Fab from '@material-ui/core/Fab';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  homeButtom: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

function ScrollTop(props) {
  const classes = useStyles()

  function Scrolltop(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });
  
    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector('#root');
  
      if(anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };

    return(
      <Zoom in={trigger}>
        <div onClick={handleClick} role="presentation" className={classes.homeButtom}>
          {children}
        </div>
      </Zoom>
    );
  }

  Scrolltop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

  return(
    <>
      <ScrollTop {...props}>
        <Fab color="primary" size="medium" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}

export default ScrollTop;