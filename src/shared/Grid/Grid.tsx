import React from 'react';
import DefaultGridItemShell from './Shell';

interface IProps {
  itemsPerRow: number,
  containerWidth?: number,
  GridItem: React.ComponentType<any>,
  GridItemShell?: React.ComponentType<any>,
  gutterWidth?: number,
  items: Array<any> | null,
  itemHeight: number,
}

class Grid extends React.Component<IProps, {}> {
  static defaultProps = {
    containerWidth: window.innerWidth,
    gutterWidth: 10,
    GridItemShell: DefaultGridItemShell,
  }
  getItemWidth() {
    const { containerWidth, gutterWidth, itemsPerRow } = this.props;
    const availableWidth = containerWidth - (itemsPerRow - 1) * gutterWidth;
    const itemWidth = Math.floor(availableWidth / itemsPerRow);
    return itemWidth;
  }
  renderShells() {
    const width = this.getItemWidth();
    const { GridItemShell, itemHeight } = this.props;
    return (
      <div>
        {
          new Array(12).map((_, i) => (
            <GridItemShell key={i} width={width} height={itemHeight} />
          ))
        }
      </div>
    );
  }
  render() {
    const { items } = this.props;
    if (items === null) {
      return this.renderShells();
    }
    <div>
      {

      }
    </div>
  }
}