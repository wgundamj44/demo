import React from 'react';
import injectSheet from 'react-jss';

const styles = theme => ({
  'background-color': theme.colors.shellColor,
  width: props => `${props => props.width}px`,
  height: props => `${props => props.height}px`,
});

export default injectSheet(styles)(({ classes: any }) => (
  <div className={classes.container} />
));