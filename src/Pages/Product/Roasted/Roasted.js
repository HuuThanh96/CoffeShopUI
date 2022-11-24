import React from 'react';
import classNames from 'classnames/bind';
import style from './Roasted.module.scss';
import TextBtn from '../../../components/TextBtn';

const cx = classNames.bind(style);
function Roasted() {
    return (
        <div className={cx('container', 'pd-container')}>
            <div className={cx('wrap')}>
                <h1 className={cx('heading')}>ROASTED GROUND COFFILIA</h1>
                <div className={cx('detail')}>
                    <h3 className={cx('title')}>Experience the excellent and distinct flavor note from the highland</h3>
                    <p className={cx('content')}>
                        We preserve the original integrity of the coffee bean, bringing out the brightest potentials of
                        each coffee variety, for the most natural and mild sweetness with various profiles of delicate
                        taste. These unique characteristics deliver the elite experience in each coffee cup.
                    </p>
                    <TextBtn>SELECT COFFEE</TextBtn>
                </div>
                <div className={cx('wrap-img')}>
                    <img
                        className={cx('img')}
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/08/Product-IMG-Trang-San-Pham-Rang-xay-1400-x-1400.png"
                    />
                </div>
            </div>
        </div>
    );
}

export default Roasted;
