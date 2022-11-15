import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import Menu from '../../components/Menu';
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import Saiderbar from '../Component/Saiderbar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [showHeader, setShowHeader] = useState(true);
    const [currentValueScroll, setCurrentValueScroll] = useState(0);

    const [classes, setClasses] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setCurrentValueScroll(window.scrollY);
            if (window.scrollY > currentValueScroll) {
                setShowHeader(false);
                setClasses('');
            } else {
                if (window.scrollY < currentValueScroll) {
                    setShowHeader(true);
                    setClasses('color-active');
                }
                if (window.scrollY == 0) {
                    setClasses('color-begin');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
    }, [currentValueScroll]);

    return (
        <>
            <div className={cx('wrapper')}>
                <div
                    className={cx('wrapper-header', classes)}
                    onBlur={() => {
                        setShowHeader(false);
                        setClasses('');
                    }}
                >
                    {showHeader && <Header valueScroll={currentValueScroll} />}
                </div>
                <div className={cx('container')}>
                    {/* <div className={cx('wrapper-sidebar')}>
                        <Saiderbar valueScroll={currentValueScroll} />
                    </div> */}
                    <div className={cx('content')}>{children}</div>
                </div>
                <div className={cx('wrapper-footer')}>
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default DefaultLayout;
