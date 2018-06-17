import React from 'react';
import injectSheet from 'react-jss';

const styles = (theme) => ({
  badge: {
    '&:after': {
      display: 'block',
      content: '" "',
      position: 'absolute',
      top: '0px',
      'border-width': '65px 65px 0 0',
      'border-color': `${theme.colors.red} transparent transparent transparent`,
      'border-style': 'solid',
    },
  },
  inner: {
    position: 'absolute',
    left: 0,
    top: '15px',
    'z-index': 2,
    'font-weight': 'bold',
    'letter-spacing': '2px',
    transform: 'rotate(-45deg)',
    color: theme.fontColor.white,
  },
});

export default injectSheet(styles)(({ classes }: { classes: any }) => (
  <div className={classes.badge}>
    <div className={classes.inner}>SOLD</div>
  </div>
));
