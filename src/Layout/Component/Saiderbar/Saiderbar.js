import React from 'react';
import classNames from 'classnames/bind';
import style from './Saiderbar.module.scss';

const cx = classNames.bind(style);
function Saiderbar({ valueScroll }) {
    console.log(valueScroll / 1000);
    return (
        <div className={cx('container')}>
            <h3 className={cx('height-number')}>2100m</h3>
            <h3 className={cx('height-number')}>1800m</h3>
            <h3 className={cx('height-number')}>1400m</h3>
            <h3 className={cx('height-number')}>800m</h3>
        </div>
    );
}

export default Saiderbar;
