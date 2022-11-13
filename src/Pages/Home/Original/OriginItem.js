import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Original.module.scss';

const cx = classNames.bind(style);

function OriginItem({ data }) {
    return (
        <div id={data.index} className={cx('detail')}>
            <div className={cx('value')}>
                <h4 className={cx('title')}>{data.title}</h4>
                <p className={cx('content')}>{data.content}</p>
            </div>
            <div className={cx('Wrap-img')}>
                <img className={cx('img')} src={data.src} />
            </div>
        </div>
    );
}

export default OriginItem;
