import React from 'react';
import classNames from 'classnames/bind';
import style from './Merchandise.module.scss';
import TextBtn from '../../../components/TextBtn';

const cx = classNames.bind(style);
function Merchandise() {
    return (
        <div className={cx('container', 'pd-container')}>
            <div className={cx('wrap-heading')}>
                <h1 className={cx('heading')}>For years, Minh Tien has grown into a favorite</h1>
                <h1 className={cx('heading')}>lifestyle brand, gathering unique forms that</h1>
                <h1 className={cx('heading')}>represent cultural creativity.</h1>
            </div>
            <div className={cx('line')}>
                <img
                    className={cx('img')}
                    src="https://www.minhtiencoffee.com/wp-content/themes/minhtien/assets/imgs/icons/divider.svg"
                />
            </div>
            <div className={cx('pictures')}>
                <div className={cx('wrap-picture')}>
                    <img
                        className={cx('picture')}
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/08/souvenir.jpg"
                    />
                </div>
                <div className={cx('wrap-picture')}>
                    <img
                        className={cx('picture')}
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/08/souvenir2.jpg"
                    />
                </div>
                <div className={cx('wrap-picture')}>
                    <img
                        className={cx('picture')}
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/08/souvenir3.jpg"
                    />
                </div>
            </div>
            <div className={cx('intro')}>
                <div className={cx('direction')}>
                    <span>
                        Our direction in each of our coffee spaces has its own distinguished features in style of
                        architecture or decor, as well as its atmosphere and coffee experience.
                    </span>
                </div>
                <div className={cx('contact')}>
                    <span>75 Hang Ma str, Hang Ma ward, Hoan Kiem district, Hanoi Capital City</span>
                    <TextBtn>LEARN MORE</TextBtn>
                </div>
                <div className={cx('contact')}>
                    <span>
                        Open every day <br /> 7:00 am 10:00 pm Tel: +8423 741 932
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Merchandise;
