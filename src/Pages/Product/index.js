import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Product.module.scss';
import Banner from '../../Layout/Component/Banner';
import Section from '../../components/Section';
import Roasted from './Roasted';
import Instant from './Instant';
import Merchandise from './Merchandise';
import Shop from '../Home/Shop/Shop';

const cx = classNames.bind(style);
const factsData = [
    'The drink dates back to 800 A.D',
    'Coffee was discovered by a goat herder',
    'Brazil grows the most coffee in the world',
];
function Product() {
    const [currentContent, setCurrentContent] = useState(0);
    useEffect(() => {
        const timeId = setInterval(() => {
            setCurrentContent((pre) => {
                return pre >= factsData.length - 1 ? 0 : pre + 1;
            });
        }, 4000);
        return () => clearInterval(timeId);
    }, []);
    return (
        <>
            <Banner>
                <video autoPlay muted loop className={cx('wrap-video')}>
                    <source
                        className={cx('video-intro')}
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/SAN-PHAM.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className={cx('intro-title')}>
                    <h1 className={cx('heading')}>Exceptional quality from</h1>
                    <h1 className={cx('heading')}> craftsmanship elevated by</h1>
                    <h1 className={cx('heading')}> indigenous culture</h1>
                </div>
                <a href="#story" className={cx('wrap-button-next')}>
                    <img
                        className={cx('button-next-img')}
                        src="https://www.minhtiencoffee.com/wp-content/themes/minhtien/assets/imgs/icons/arrow-around.svg"
                    ></img>
                </a>
            </Banner>
            <Section heading="COFFILIA ROASTED GROUND" link="roasted">
                <Roasted />
            </Section>
            {/* {fact section} */}
            <div className={cx('facts-section')}>
                {/* <span className={cx('heading')}>Facts</span> */}
                <div className={cx('title')}>
                    <div className={cx('wrap-title')}>
                        {factsData.map((item, i) => {
                            let classes = '';
                            if (currentContent === i) {
                                classes = 'active';
                            }
                            return (
                                <span key={i} className={cx('content', classes)}>
                                    {item}
                                </span>
                            );
                        })}
                    </div>
                </div>
            </div>
            <Section heading="COFFILIA INSTANT COFFEE" link="instant">
                <Instant />
            </Section>
            <Section heading="MINH TIEN MERCHANDISE">
                <Merchandise />
            </Section>
            <Section heading="COFFEE SHOP">
                <Shop hidren="hidren" />
            </Section>
        </>
    );
}

export default Product;
