import React from 'react';
import injectSheet from 'react-jss';
import classnames from 'classnames';
import DefaultGridItemShell from './Shell';

interface IProps {
  itemsPerRow: number;
  containerWidth?: number;
  GridItem: React.ComponentType<any>;
  GridItemShell?: React.ComponentType<any>;
  gutterHorizontal?: number;
  gutterVertical?: number;
  items: any[] | null;
  itemHeight: number;
  classes: any;
  padding?: number;
}

const styles = (theme) => ({
  container: {
    display: 'flex',
    'flex-wrap': 'wrap',
    padding: (props) => `${props.padding}px`,
  },
  item: {
    'margin-bottom': (props) => `${props.gutterVertical}px`,
  },
  itemNotLast: {
    'margin-right': (props) => `${props.gutterHorizontal}px`,
  },
});

class Grid extends React.Component<IProps, {}> {
  static defaultProps = {
    containerWidth: window.innerWidth,
    gutterHorizontal: 10,
    gutterVertical: 10,
    GridItemShell: DefaultGridItemShell,
    padding: 10,
  };
  getItemWidth() {
    const { containerWidth, gutterHorizontal, itemsPerRow, padding } = this.props;
    const availableWidth = containerWidth - (itemsPerRow - 1) * gutterHorizontal - 2 * padding;
    const itemWidth = Math.floor(availableWidth / itemsPerRow);
    return itemWidth;
  }
  renderShells() {
    const width = this.getItemWidth();
    const { GridItemShell, itemHeight, itemsPerRow, classes } = this.props;
    const arr = [1, 2, 3, 4];
    return (
      <div className={classes.container}>
        {
          arr.map((_, i) => {
            const isLast = (i + 1) % itemsPerRow === 0;
            return (
              <GridItemShell
                key={i}
                width={width}
                height={itemHeight}
                className={
                  classnames(classes.item, { [classes.itemNotLast]: !isLast })
                }
              />
            );
          })
        }
      </div>
    );
  }
  renderItems() {
    const width = this.getItemWidth();
    const { GridItem, itemHeight, itemsPerRow, classes, items } = this.props;
    return (
      <div className={classes.container}>
        {
          items.map((item, i) => {
            const isLast = (i + 1) % itemsPerRow === 0;
            return (
              <GridItem
                key={item.id}
                width={width}
                className={
                  classnames(classes.item, { [classes.itemNotLast]: !isLast })
                }
                item={item}
              />
            );
          })
        }
      </div>
    );
  }
  render() {
    const { items } = this.props;
    if (items === null) {
      return this.renderShells();
    }
    return this.renderItems();
  }
}

export default injectSheet(styles)(Grid);
