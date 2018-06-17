import React from 'react';
import injectSheet from 'react-jss';
import { injectIntl } from 'react-intl';
import classnames from 'classnames';
import { IProduct } from '../../modules/products/defs';
import LikeCount from './LikeCount';
import SoldOutBadge from './SoldOutBadge';

interface IOwnProps {
  item: IProduct;
  className: string;
  width: number;
  heigh: number;
  classes: any;
  intl: any;
}

const styles = (theme) => ({
  container: (props) => ({
    width: `${props.width}px`,
    'background-color': theme.colors.canvasColor,
  }),
  imgContainer: (props) => ({
    height: `${props.width}px`,
    position: 'relative',
  }),
  img: {
    width: '100%',
  },
  name: {
    'white-space': 'nowrap',
    'margin-bottom': '7px',
  },
  secondRow: {
    display: 'flex',
    'justify-content': 'space-between',
  },
  price: {
    'font-weight': 'bold',
    'font-size': theme.fontSize.subheading,
    'line-height': theme.fontSize.subheading,
  },
});

class ProductGridItem extends React.Component<IOwnProps> {
  render() {
    const { intl, item, className, classes } = this.props;
    return (
      <div className={classnames(className, classes.container)}>
        <div className={classes.imgContainer}>
          <img src={item.image} className={classes.img} />
          {item.isSoldOut ? <SoldOutBadge /> : null}
        </div>
        <div>
          <div className={classes.name}>
            {item.name}
          </div>
          <div className={classes.secondRow}>
            <div className={classes.price}>
              {intl.formatNumber(item.price, { style: 'currency', currency: 'JPY' })}
            </div>
            <div className={classes.likeContainer}>
              {item.like_count > 0 ? <LikeCount count={item.like_count} /> : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default injectIntl(injectSheet(styles)(ProductGridItem));
