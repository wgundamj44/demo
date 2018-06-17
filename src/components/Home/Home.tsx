import React from 'react';
import { Route, Switch } from 'react-router';
import NavigableTabs from '../../shared/NavigableTabs';
import TopPage from '../../components/TopPage';
import Header from './Header';

const tabsConfig = [
  { label: 'すべて', route: '/', exact: true, key: 'all', category: 'all' },
  { label: 'レディース', route: '/ladies', key: 'ladies', category: 'ladies' },
  { label: 'ベビー・キッズ', route: '/baby', key: 'baby', category: 'baby' },
  { label: 'エンタメ', route: '/entertain', key: 'entertain', category: 'entertain' },
  { label: 'メンズ', route: '/men', key: 'men', category: 'men' },
];

export default class HomePage extends React.PureComponent<{}, {}> {
  renderRoute(config) {
    return (props) => (
      <TopPage category={config.category} {...props} />
    );
  }
  render() {
    return (
      <>
        <Header />
        <NavigableTabs tabsConfig={tabsConfig} />
        <Switch>
          {
            tabsConfig.map((config, i) => {
              return (
                <Route
                  key={config.key}
                  path={config.route}
                  render={this.renderRoute(config)}
                  exact={!!config.exact}
                />
              );
            })
          }
        </Switch>
      </>
    );
  }
}
