import React from 'react';
import injectSheet from 'react-jss';

const styles = (theme) => ({
  container: {
    overflow: 'hidden',
    height: '44px',
  },
  ul: {
    display: 'flex',
    'list-style-type': 'none',
    margin: 0,
    padding: 0,
    'overflow-x': 'auto',
    'overflow-y': 'hidden',
    height: '120%',
    'white-space': 'nowrap',
    '-webkit-overflow-scrolling': 'touch',
  },
  li: {
    height: '32px',
    padding: '0 16px',
    display: 'flex',
    'align-items': 'center',
  },
});

interface ITabConfig {
  label: string,
  route: string,
}

interface ITabsProps {
  tabsConfig: Array<ITabConfig>,
  classes: any,
  activeIndex?: number,
  tabElement: React.ComponentType<any>,
}

class Tabs extends React.PureComponent<ITabsProps, {}> {
  private ulRef: React.RefObject<HTMLUListElement>;
  private currentScrollLeft: number;
  private ulWidth: number;
  static defaultProps = {
    activeIndex: 0,
  }
  constructor(props: ITabsProps) {
    super(props);
    this.ulRef = React.createRef();
  }

  componentDidMount() {
    this.currentScrollLeft = 0;
    this.ulWidth = this.ulRef.current.getBoundingClientRect().width;
  }
  render() {
    const { tabsConfig, classes, tabElement, activeIndex } = this.props;
    return (
      <div className={classes.container}>
        <ul className={classes.ul} ref={this.ulRef}>
          {
            tabsConfig.map((config, i) => (
              <li key={config.label} className={classes.li}>
                { React.createElement(tabElement, {...config, active: i === activeIndex}) }
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default injectSheet(styles)(Tabs);
