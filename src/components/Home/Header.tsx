import React from 'react';
import injectSheet from 'react-jss';
import DoneIcon from '../../shared/svg/done';
import NoticeIcon from '../../shared/svg/notice';
import HeadlineIcon from '../../shared/svg/headline';

const styles = (theme) => ({
  container: {
    height: '48px',
    display: 'flex',
    'align-items': 'center',
    'background-color': theme.colors.canvas,
    'border-bottom': `1px solid ${theme.colors.borderColor}`,
    padding: '0 12px 0 12px',
    'justify-content': 'space-between',
  },
  input: {
    'font-size': theme.fontSize.body,
    'border-radius': '5px',
    padding: '8px 8px 8px 8px',
    'background-color': theme.colors.backgroundColor,
    border: 'none',
  },
  icon: {
    width: '36px',
    height: '36px',
    fill: theme.colors.secondaryColor,
  },
});

export default injectSheet(styles)(({ classes }) => (
  <div className={classes.container}>
    <HeadlineIcon className={classes.icon} />
    <input type={'text'} placeholder={'検索'} className={classes.input} />
    <NoticeIcon className={classes.icon} />
    <DoneIcon className={classes.icon} />
  </div>
));
