import React from 'react';
import classNames from 'classnames/bind';
import style from './Partner.module.scss';

const cx = classNames.bind(style);

function Certification() {
    return (
        <div className={cx('container', 'pd-container')}>
            <h1 className={cx('heading')}>AMBITION FOR GLOBAL MARKET</h1>
            <p className={cx('content')}>
                We supply coffee for leading organizations and distributors, both global and domestic. We know coffee
                drinkers love our coffee, and we hope that our coffee also satisfies coffee drinkers around the world.
                Strategic partnerships with foreign businesses certainly bring us closer to supply our coffee in a
                multi-national markets.
            </p>
            <div className={cx('img-section')}>
                <span className={cx('wrap-img')}>
                    <img
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/dakman.jpg"
                        className={cx('img')}
                    />
                </span>
                <span className={cx('wrap-img')}>
                    <img
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/ECOM-CAFE.jpg"
                        className={cx('img')}
                    />
                </span>
                <span className={cx('wrap-img')}>
                    <img
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/groupsopex.jpg"
                        className={cx('img')}
                    />
                </span>
                <span className={cx('wrap-img')}>
                    <img
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/marubeni.jpg"
                        className={cx('img')}
                    />
                </span>
                <span className={cx('wrap-img')}>
                    <img
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/Mitsuico-copy.jpg"
                        className={cx('img')}
                    />
                </span>
                <br />
                <span className={cx('wrap-img')}>
                    <img
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/Neumann-Kaffee-Gruppe-logo.jpg"
                        className={cx('img')}
                    />
                </span>
                <span className={cx('wrap-img')}>
                    <img
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/Volcafe.jpg"
                        className={cx('img')}
                    />
                </span>
            </div>
        </div>
    );
}

export default Certification;
