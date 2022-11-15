import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Sustainablity.module.scss';
import { Link } from 'react-router-dom';
import routes from '../../../config/routes';

const cx = classNames.bind(style);

function Sustainablity() {
    return (
        <div className={cx('container')}>
            <div className={cx('block-list')}>
                <h4 className={cx('title')}>
                    At Minh Tien, we believe in our sustainable supply chain that is built upon happiness and authentic
                    values.
                </h4>
                <div className={cx('detail')}>
                    <p className={cx('block-item')}>
                        Sustainability for the society, environment, and the economy can be measured in everything we
                        do. For us, the journey must progress with constant innovations and drive toward a sustainable
                        supply chain through strategic partnerships.
                    </p>
                    <p className={cx('block-item')}>
                        Minh Tien’s growing areas and farms are built on a commitment to the goal: to bring the coffee
                        beans back to their original values.
                    </p>
                    <Link to={routes.sustainnablity} className={cx('more')}>
                        LEARN MORE
                    </Link>
                </div>
            </div>
            <div className={cx('wrapper-img')}>
                <img
                    className={cx('img')}
                    src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/minh-tien-coffee-ca-phe-nguyen-ban-vietnam-768x511.jpg"
                />
            </div>
        </div>
    );
}

export default Sustainablity;
