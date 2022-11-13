import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Menu({ children }) {
    return <div className={cx('menu-items')}>{children}</div>;
}

export default Menu;
