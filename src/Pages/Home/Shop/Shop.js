import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../../../config/routes';
import classNames from 'classnames/bind';
import style from './Shop.module.scss';

const cx = classNames.bind(style);

function Shop({ hidren }) {
    return (
        <>
            <div className={cx('container')}>
                <div className={cx('info-list')}>
                    <div className={cx('wrap-item')}>
                        <div className={cx('info-item')}>
                            <h6 className={cx('info-title')}>branches</h6>
                            <p className={cx('info-number')}>06</p>
                        </div>
                        <div className={cx('info-item')}>
                            <h6 className={cx('info-title')}>STAFF</h6>
                            <p className={cx('info-number')}>84</p>
                        </div>
                    </div>
                    <div className={cx('info-item')}>
                        <p className={cx('info-content')}>
                            Our orientation at each coffee space features unique architecture, provides a comfortable
                            experience, and most importantly, premium and authentic coffee.
                        </p>
                        <Link to={routes.sustainnablity} className={cx('more')}>
                            LEARN MORE
                        </Link>
                    </div>
                </div>
                <div className={cx('slide')}>
                    <div className={cx('wrap-img')}>
                        <img
                            src="https://www.minhtiencoffee.com/wp-content/uploads/2020/08/coffee-shop4.jpg"
                            className={cx('img')}
                        />
                    </div>
                    <div className={cx('detail')}>
                        <h4 className={cx('detail-title')}>
                            Our coffee spaces offer premium coffee beverages, cozy and comfortable atmosphere, welcoming
                            coffee enthusiasts and casual drinkers alike, encourage interpersonal connection and
                            creativity.
                        </h4>
                        <div className={cx('detail-content-list')}>
                            <p className={cx('detail-content')}>
                                31 Ba Trieu Street,
                                <br />
                                Hoan Kiem Distric
                                <br />
                                Ha Noi
                            </p>
                            <p className={cx('detail-content')}>
                                Open every day
                                <br />
                                7:am - 10:pm
                                <br />
                                tel:+8423741932
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p className={cx('footer', { hidren })}>
                Starting the journey to bring genuine happiness from original value to the people, in 2000, Minh Tien
                was founded with the desire of raising the value of Vietnam’s coffee beans. With the sustainable farming
                model in the independent raw materials, Minh Tien high-quality coffee beans which meet the international
                standards have won the export partners’ and the coffee lovers’ hearts all around the world.
            </p>
        </>
    );
}

export default Shop;
