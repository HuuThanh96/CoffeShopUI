import React, { useEffect } from 'react';
import classNames from 'classnames/bind';
import style from './Home.module.scss';
import video from '../../assets/videos/intro_home_video.mp4';
import Products from './Products';
// import { DrawIcon } from '../../components/Icon';
import { useRef } from 'react';
import Farmlands from './Farmlans/Farmlands';
import Sustainablity from './Sustainablity/Sustainablity';
import Original from './Original/Original';
import Shop from './Shop/Shop';
import New from './News/New';

const cx = classNames.bind(style);
function Home() {
    const btnElm = useRef();
    const handlePlay = () => {
        btnElm.current.play();
    };

    return (
        <div className={cx('home-content')}>
            <div className={cx('intro')}>
                <div className={cx('wrapper-intro-img')}>
                    <img
                        className={cx('intro-img')}
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/07/Coffee-Illustration.svg"
                    />
                </div>

                <div className={cx('intro-text')}>
                    <h1 className={cx('heading-title')}>MINH TIEN COFFEE</h1>
                    <h1 className={cx('heading')}>Minh Tien Coffee was established</h1>
                    <h1 className={cx('heading')}>with a desire to promote</h1>
                    <h1 className={cx('heading')}>the value of coffee with Vietnam origin</h1>
                </div>
                <p className={cx('text-center')}>Join The Journey With Us</p>
                <a href="#video-intro" className={cx('wrapper-button-next')} onClick={handlePlay}>
                    <img
                        className={cx('button-next-img')}
                        src="https://www.minhtiencoffee.com/wp-content/themes/minhtien/assets/imgs/icons/arrow-around.svg"
                    ></img>
                </a>
                <div id="video-intro" className={cx('wrap-video')}>
                    <video
                        ref={btnElm}
                        className={cx('video-intro')}
                        loop
                        poster="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/shutterstock_484936312_huge.jpg"
                    >
                        <source src={video} />
                    </video>
                </div>
            </div>
            <Products />
            <Farmlands />
            <Sustainablity />
            <Original />
            <Shop />
            <New />
        </div>
    );
}

export default Home;
