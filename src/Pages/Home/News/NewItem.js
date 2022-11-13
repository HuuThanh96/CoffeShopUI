import React from 'react';
import classNames from 'classnames/bind';
import style from './New.module.scss';

const cx = classNames.bind(style);

function NewItem({ data }) {
    return (
        <div className={cx('item')}>
            <div className={cx('wrap-img')}>
                <img className={cx('img')} src={data.src} />
            </div>
            <p className={cx('title')}>{data.title}</p>
            <span className={cx('time')}>{data.time}</span>
        </div>
    );
}

export default NewItem;
