import React from 'react';
import classNames from 'classnames/bind';
import style from './Vision.module.scss';

const cx = classNames.bind(style);
function Vision() {
    return (
        <div className={cx('container')}>
            <div className={cx('first-section')}>
                <div className={cx('wrap-list')}>
                    <h3 className={cx('heading')}>Vision</h3>
                    <div className={cx('detail')}>
                        <h3 className={cx('title')}>To raise the value of Vietnamese coffee</h3>
                        <p className={cx('content')}>
                            Develop the wholesome value chain of sustainable coffee that raises the value of Vietnamese
                            coffee beans. To promote the mutual love for coffee, Minh Tien always seeks to fulfill being
                            the communication bridge that encourages intimate connection and happiness to farmers,
                            partners, customers, and communities.
                        </p>
                    </div>
                </div>
                <div className={cx('wrap-list')}>
                    <h3 className={cx('heading')}>Mission</h3>
                    <div className={cx('detail')}>
                        <h3 className={cx('title')}>
                            Minh Tien desires to deliver the authentic experience of coffee to every customer
                        </h3>
                        <p className={cx('content')}>
                            Our objective is to redefine and rediscover the original value of coffee through expressions
                            of quality, flavor, and taste. Each harvested coffee bean represents not just a product, but
                            also the farmer’s sincerity of hard work. It is our wish to inspire and connect everyone
                            through the mutual love for coffee, guiding everyone toward mutual understanding and
                            appreciation of Vietnamese coffee and the unique culture of indigenous farmlands.
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('second-section')}>
                <img
                    className={cx('img')}
                    src="https://minhtiencoffee.netlify.app/static/media/highline_content.52ebb54ee21cd795cc23.jpg"
                />
            </div>
        </div>
    );
}

export default Vision;
