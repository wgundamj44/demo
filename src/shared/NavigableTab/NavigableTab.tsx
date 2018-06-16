import React from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

const styles = (theme) => ({
  link: props => ({
    'text-decoration': 'none',
    color: props.active ? theme.fontColor.red : theme.fontColor.secondary,
  })
});

interface IProps {
  route: string,
  label: string,
  classes: any,
  active?: boolean,
}

class NavigableTab extends React.Component<IProps, {}> {
  static defaultProps = {
    active: false,
  }
  render() {
    const { route, label, classes } = this.props;
    return (
      <Link to={route} className={classes.link}>{ label }</Link>
    );
  }
}

export default injectSheet(styles)(NavigableTab);