import React from 'react';
import classNames from 'classnames/bind';
import style from './Instant.module.scss';
import TextBtn from '../../../components/TextBtn';

const cx = classNames.bind(style);
function Instant() {
    return (
        <div className={cx('container')}>
            <div className={cx('wrap')}>
                <h1 className={cx('heading')}>INSTANT COFFILIA</h1>
                <div className={cx('detail')}>
                    <h3 className={cx('title')}>Experience the effortless convenience of instant coffee</h3>
                    <p className={cx('content')}>
                        Quality coffee beans grown on misty rural mountains are carefully selected to precision,
                        maintaining the integrity of the quintessence value of nature and human. Minh Tien Coffee
                        proudly offer Coffilia instant coffee that is refreshing, convenient and awakening to any busy
                        individual. Keeping drinkers start the day with fresh energy and be ready for day ahead.
                    </p>
                    <TextBtn>SELECT COFFEE</TextBtn>
                </div>
                <div className={cx('wrap-img')}>
                    <img
                        className={cx('img')}
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/08/Product-IMG-Trang-San-Pham-Hoa-Tan-1400-x-1400.png"
                    />
                </div>
            </div>
        </div>
    );
}

export default Instant;
