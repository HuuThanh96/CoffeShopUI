import React from 'react';
import classNames from 'classnames/bind';
import style from './Products.module.scss';
import routes from '../../../config/routes';
import { Link } from 'react-router-dom';

const cx = classNames.bind(style);

function ProductItem({ data, className }) {
    const classes = cx('product', { [className]: className });
    return (
        <div className={classes}>
            <div className={cx('product-intro')}>
                <h2 className={cx('product-name')}>{data.name}</h2>
                <p className={cx('product-info')}>{data.info} </p>
                <Link className={cx('more')} to={routes.product}>
                    LEARN ABOUT PRODUCT{' '}
                </Link>
            </div>
            <div className={cx('wrapper-img')}>
                <img src={data.src} className={cx('img')} />
            </div>
        </div>
    );
}

export default ProductItem;
