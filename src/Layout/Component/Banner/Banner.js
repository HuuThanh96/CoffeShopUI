import React from 'react';
import classNames from 'classnames/bind';
import style from './Banner.module.scss';

const cx = classNames.bind(style);

function Banner({ children }) {
    return <div className={cx('wrap-banner')}>{children}</div>;
}

export default Banner;
