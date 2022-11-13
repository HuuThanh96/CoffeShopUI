import React from 'react';
import className from 'classnames/bind';
import style from './Footer.module.scss';
import Menu from '../../../components/Menu';
import routes from '../../../config/routes';

const cx = className.bind(style);

const menuItems = [
    {
        title: 'About',
        path: routes.about,
    },
    {
        title: 'Product',
        path: routes.product,
    },
    {
        title: 'sustainnablity',
        path: routes.sustainnablity,
    },
    {
        title: 'Manufacturing',
        path: routes.manufacturing,
    },
    {
        title: 'Partners',
        path: routes.partners,
    },
];

function Footer() {
    return (
        <>
            <div className={cx('inner-footer')}>
                <div className={cx('wrap-logo')}>
                    <img
                        className={cx('logo')}
                        src="https://www.minhtiencoffee.com/wp-content/themes/minhtien/assets/imgs/Minh-Tien-Logo-Around.svg"
                    />
                </div>
                <div className={cx('container')}>
                    <div className={cx('detail-items')}>
                        <div className={cx('item')}>
                            <h4 className={cx('title')}>CONTACT</h4>
                            <p className={cx('content')}>
                                Email info@minhtiencoffee.com
                                <br /> Mobile <br />
                                0242.20.44.666
                                <br /> 0372.589.589
                            </p>
                        </div>
                        <div className={cx('item')}>
                            <h4 className={cx('title')}>2022 © MINH TIEN COFFEE</h4>
                            <p className={cx('content')}>
                                We aim to the quality with the coffee batches with sunshine, always concern for the
                                highest quality of coffee beans with the staff.
                            </p>
                        </div>
                    </div>
                    <div className={cx('detail-items')}>
                        <div className={cx('item')}>
                            <h4 className={cx('title')}>ADDRESS</h4>
                            <p className={cx('content')}>
                                Office 1: 45B Ly Thuong Kiet Str., Tran Hung Dao ward, Hoan Kiem District, Hanoi
                            </p>
                            <p className={cx('content')}>
                                Office 2: Geleximco Tower, 36 Hoang Cau Str., O Cho Dua ward, Dong Da District, Hanoi
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
