import React from 'react';
import { Route, Switch } from 'react-router'
import NavigableTabs from '../shared/NavigableTabs';

const tabsConfig = [
  { label: 'すべて', route: '/', key: 'all' },
  { label: 'レディース', route: '/ladies', key: 'ladies' },
  { label: 'ベビー・キッズ', route: '/baby', key: 'baby' },
  { label: 'エンタメ', route: '/entertain', key: 'entertain' },
  { label: 'メンズ', route: '/men', key: 'men' },
];

export default class HomePage extends React.PureComponent<{}, {}> {
  render() {
    return (
      <>
        <NavigableTabs tabsConfig={tabsConfig} />
        <Switch>
          {
            tabsConfig.map(config => (
              <Route key={config.key} path={config.route} render={() => <div>{config.route}</div>} />
            ))
          }
        </Switch>
      </>
    );
  }
}
