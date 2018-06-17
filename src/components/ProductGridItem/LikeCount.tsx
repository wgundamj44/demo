import React from 'react';
import injectSheet from 'react-jss';
import LikeIcon from '../../shared/svg/favorite';

const styles = (theme) => ({
  container: {
    display: 'flex',
    'align-items': 'center',
  },
  svg: {
    fill: theme.colors.secondaryColor,
  },
  count: {
    color: theme.colors.secondaryColor,
  },
});

export default injectSheet(styles)(({ count, classes }: { count: number, classes: any }) => (
  <div className={classes.container}>
    <LikeIcon width={20} height={20} className={classes.svg} />
    <span className={classes.count}>{count}</span>
  </div>
));
