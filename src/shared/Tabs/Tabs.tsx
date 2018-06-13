import React from 'react';
import injectSheet from 'react-jss';

const styles = {
  ul: {
    display: 'flex',
    'list-style-type': 'none',
  },
}

interface ITabConfig {
  label: string,
}

interface ITabsProps {
  tabsConfig: Array<ITabConfig>,
  classes: any,
}

class Tabs extends React.PureComponent<ITabsProps, {}> {
  constructor(props: ITabsProps) {
    super(props);
  }
  render() {
    const { tabsConfig, classes } = this.props;
    return (
      <ul className={classes.ul}>
        {
          tabsConfig.map(config => (
            <li key={config.label}>{config.label}</li>
          ))
        }
      </ul>
    );
  }
}

export default injectSheet(styles)(Tabs);
