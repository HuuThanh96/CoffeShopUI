import React from 'react';
import classNames from 'classnames/bind';
import style from './Farmlands.module.scss';

const cx = classNames.bind(style);

function FarmlandItem({ data, className }) {
    const classes = cx('item', className);
    return (
        <div className={classes}>
            <div className={cx('wrapper-img')}>
                <img className={cx('img')} src={data.src} />
            </div>
            <div className={cx('detail')}>
                <h3 className={cx('name')}>{data.name}</h3>
                <div className={cx('detail-item')}>
                    <h6 className={cx('title')}>LOCATION</h6>
                    <p className={cx('value')}>{data.location}</p>
                </div>
                <div className={cx('detail-item')}>
                    <h6 className={cx('title')}>ALTITUDE</h6>
                    <p className={cx('value')}>{data.altitude}</p>
                </div>
                <div className={cx('detail-item')}>
                    <h6 className={cx('title')}>LAND MASS</h6>
                    <p className={cx('value')}>{data.landmass}</p>
                </div>
                <div className={cx('detail-item')}>
                    <h6 className={cx('title')}>PRODUCE</h6>
                    <p className={cx('value')}>{data.produce}</p>
                </div>
            </div>
        </div>
    );
}

export default FarmlandItem;
