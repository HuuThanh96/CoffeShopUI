import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './TextBtn.module.scss';
import { Link } from 'react-router-dom';
import routes from '../../config/routes';

const cx = classNames.bind(style);

function TextBtn({ children }) {
    return <span className={cx('text-btn')}>{children}</span>;
}

export default TextBtn;
