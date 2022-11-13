import React from 'react';
import classNames from 'classnames/bind';
import style from './Certification.module.scss';

const cx = classNames.bind(style);

function Certification() {
    return (
        <div className={cx('container')}>
            <h1 className={cx('heading')}>DEDICATION TOWARD INNOVATIONS</h1>
            <p className={cx('content')}>
                For 20 years of knowledge accumulation and mastering coffee, Minh Tien Coffee aims to be recognized
                globally as a critical strategic partner in the coffee industry that provides premium quality and
                specialty coffee of international standards.
            </p>
            <div className={cx('img-section')}>
                <span className={cx('wrap-img')}>
                    <img
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/4C-Association-Logo.jpg"
                        className={cx('img')}
                    />
                </span>
                <span className={cx('wrap-img')}>
                    <img
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/utz-logo-payoff-rgb-pos-hr.jpg"
                        className={cx('img')}
                    />
                </span>
            </div>
        </div>
    );
}

export default Certification;
