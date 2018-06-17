import React from 'react';
import classnames from 'classnames';
import injectSheet from 'react-jss';

const styles = (theme) => ({
  container: {
    'background-color': theme.colors.shellColor,
    width: (props) => `${props.width}px`,
    height: (props) => `${props.height}px`,
  },
});

export default injectSheet(styles)(({ classes, className }) => (
  <div className={classnames(classes.container, className)} />
));
