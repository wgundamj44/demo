import React from 'react';
import Tabs from '../shared/Tabs';

const tabsConfig = [
  { label: 'test1' },
  { label: 'test2' },
  { label: 'test3' },
  { label: 'test4' },
  { label: 'test5' },
];

export default class HomePage extends React.PureComponent<{}, {}> {
  render() {
    return (
      <Tabs tabsConfig={tabsConfig} />
    );
  }
}
