import React from 'react';
import { match } from 'react-router';
import injectSheet from 'react-jss';
import classnames from 'classnames';
import { IProduct } from '../../modules/products/defs';
import BackIcon from '../../shared/svg/back';
import SearchIcon from '../../shared/svg/search';

export interface IOwnProps {
  match: match<{ id: string }>;
  classes: any;
}
export interface IStateProps {
  item: IProduct | null;
}
const styles = (theme) => ({
  header: {
    height: '48px',
    display: 'flex',
    'align-items': 'center',
    'background-color': theme.colors.canvas,
    'border-bottom': `1px solid ${theme.colors.borderColor}`,
    padding: '0 12px 0 12px',
    //    'justify-content': 'space-between',
  },
  title: {
    'font-size': theme.fontSize.header,
    'font-weight': 'bold',
  },
  icon: {
    width: '36px',
    height: '36px',
    fill: theme.colors.secondaryColor,
  },
  pullRight: {
    'margin-left': 'auto',
  },
});

class ItemDetailPage extends React.Component<IOwnProps & IStateProps> {
  render() {
    const { item, classes } = this.props;
    return (
      <div>
        <div className={classes.header}>
          <BackIcon className={classes.icon} />
          <span className={classes.title}>{item.name}</span>
          <SearchIcon className={classnames(classes.icon, classes.pullRight)} />
        </div>
        {item.name}
      </div>
    );
  }
}

export default injectSheet(styles)(ItemDetailPage);
