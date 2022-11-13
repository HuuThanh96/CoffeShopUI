import React, { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import style from './Original.module.scss';
import { Link } from 'react-router-dom';
import routes from '../../../config/routes';
import OriginItem from './OriginItem';

const cx = classNames.bind(style);
const originData = [
    {
        title: 'Originality from the indigenous farmlands',
        content:
            'For each farmland that provides raw materials, Minh Tien respects the established identity of indigenous culture, along with the soil, climate, and natural environment of the region. The distinct values and properties for each type of coffee are therefore preserved and nurtured by the hands of indigenous people.',
        src: 'https://www.minhtiencoffee.com/wp-content/uploads/2020/06/GTnguyeban-1-e1599659619168-768x511.png',
        index: '01',
    },
    {
        title: 'Originality of the coffee beans',
        content:
            'With passion, Minh Tien always puts effort into preserving and developing the quality of coffee each season, ensuring the authentic experience, premium quality, and distinguish flavor. It is our principle to always deliver well-deserving pride and recognition to Vietnamese coffee beans.',
        src: 'https://www.minhtiencoffee.com/wp-content/uploads/2020/06/GTnguyeban-2.png',

        index: '02',
    },

    {
        title: 'Originality from pure passion',
        content:
            'With each executive decision, we always prioritize our passion accompanied by transparency. It is the original DNA that is made of pure passion, enthusiasm, and sincere contribution from our people. These are the essential piece, being connected together through the unbreakable love for coffee.',
        src: 'https://www.minhtiencoffee.com/wp-content/uploads/2020/06/GTnguyeban-3-768x512.png',

        index: '03',
    },
    {
        title: 'Originality from genuine fulfillment of responsibility',
        content:
            'Our endeavor always leads us to the fulfillment of the original value that each coffee cup provides, that awaken and refresh each morning. Moreover, our fulfillment allowing us to deliver a premium quality, unique experience, where the customers are welcomed with warm and familiarity.',
        src: 'https://www.minhtiencoffee.com/wp-content/uploads/2020/06/GTnguyeban-4-1-768x512.png',

        index: '04',
    },
];

function Original() {
    const [valueScroll, setValueScroll] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const value = window.scrollY;
            if (value > 4400 && value < 5700) {
                setValueScroll(value - 4400);
            } else {
                setValueScroll(0);
            }
        };
        window.addEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        if (valueScroll < 1250 / 4) {
            setCurrentIndex(0);
        }
        if (valueScroll > 1250 / 4) {
            setCurrentIndex(1);
        }
        if (valueScroll > (1250 / 4) * 2) {
            setCurrentIndex(2);
        }
        if (valueScroll > (1250 / 4) * 3) {
            setCurrentIndex(3);
        }
    }, [valueScroll]);

    return (
        <div className={cx('section-value')}>
            <h3 className={cx('heading')}>ORIGINAL VALUE</h3>
            <div className={cx('container')}>
                <div className={cx('wrap-slide')}>
                    <div style={{ transform: ` translatey(${valueScroll}px) ` }} className={cx('slide')}>
                        {originData.map((origin, i) => {
                            let classes = '';
                            if (currentIndex === i) {
                                classes = 'active';
                            }
                            return (
                                <a key={origin.index} href={`#${origin.index}`} className={cx('slide-number', classes)}>
                                    {origin.index}
                                </a>
                            );
                        })}
                    </div>
                </div>
                <div className={cx('wrap-detail')}>
                    {originData.map((origin) => {
                        return <OriginItem key={origin.title} data={origin} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Original;
