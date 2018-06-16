import React from 'react';
import { RouteComponentProps, withRouter, matchPath } from 'react-router';
import NavigableTab from '../NavigableTab';
import Tabs from '../Tabs';

interface IProps extends RouteComponentProps<any> {
  tabsConfig: Array<{ route: string }>,
}

class NavigableTabs extends React.Component<IProps, {}> {
  render() {
    const { location, tabsConfig, ...props } = this.props;
    let i = 0;
    for(; i < tabsConfig.length; i += 1) {
      if (!!matchPath(location.pathname, { path: tabsConfig[i].route, exact: true })) {
        break;
      }
    }
    return (
      <Tabs activeIndex={i} tabsConfig={tabsConfig} tabElement={NavigableTab} />
    );
  }
}

export default withRouter(NavigableTabs);
