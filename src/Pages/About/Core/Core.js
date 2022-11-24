import React, { useState } from 'react';
import classNames from 'classnames/bind';
import style from './Core.module.scss';

const cx = classNames.bind(style);
const dataList = [
    {
        id: 1,
        heading: 'Family',
        src: ' https://www.minhtiencoffee.com/wp-content/themes/minhtien/assets/imgs/tmp/giadinh-icon.svg',
        text: '"We form a big family that embraces each other, where each member pursues their dreams and takes responsibility for each quality coffee cup and comfortable experience while connecting withothers through joy and sharing"',
        sharing:
            'We share duty and delegate responsibility fairly for everyone to contribute, building up a strong union of unique people that deliver quality coffee.',
        unity: ' We share duty and delegate responsibility fairly for everyone to contribute, building up a strong union of unique people that deliver quality coffee.',
        responsibility:
            ' We share duty and delegate responsibility fairly for everyone to contribute, building up a strong union of unique people that deliver quality coffee.',
    },
    {
        id: 2,
        heading: 'PASSION',
        src: 'https://www.minhtiencoffee.com/wp-content/themes/minhtien/assets/imgs/tmp/damme-icon.svg',
        text: '“The passion comes from a source of genuine appreciation for the coffee tree and our fellow coffee growers, Minh Tien channels this source of resolute passion to the authentic experience that accompany each coffee cup in the hand of customers. We are happy to know that our coffee contributes to our customer’s well-being, happiness, and joy.”',
        sharing:
            'Our dedicated motivation and commitment fuel us, connect us, and inspire us constantly that embody unyielding energy toward our common cause.',
        unity: 'We put our effort into the long journey where we achieve new levels of authenticity for our coffee beans. Additionally, we continuously redefine and explore our standards every day.',
        responsibility:
            'Any one of us could explore possibilities of improvements through connecting or exchanging creative ideas on potential reform, upgrade that could lead to greater efficiency and quality in our productions.',
    },
    {
        id: 3,
        heading: 'SUSTAINABILITY',
        src: 'https://www.minhtiencoffee.com/wp-content/themes/minhtien/assets/imgs/tmp/benvung-icon.svg',
        text: 'To develop a sustainable ecosystem for overall society, economy, and environment, Minh Tien holds a reliable network of partnerships with farming households, in conjunction with farmlands developments to ensure consistent quality and characteristics of the coffee beans. We proudly accompany every stakeholder in our supply chain to uphold our core values.',
        sharing:
            'Each farming household is not only a significant association but also an important partner that accompanies us in the journey of quality coffee',
        unity: 'To improve our coffee that satisfies strict international standards is our commitment to deliver quality coffee with excellent experience for customers, and also to sustain our strategic partnerships with every individual farming household.',
        responsibility:
            'Each product receive the care and labor of the skillful farmers, honest and transparent with authentic origin from farmlands across the central highland, the thorough production and processing method, and comprehensive quality control that result in 100% authentic coffee experience.',
    },
];
function Core() {
    const [currentData, setCurrentData] = useState(0);
    return (
        <div className={cx('container', 'pd-container')}>
            <div className={cx('list-heading')}>
                <h5 className={cx('title')}>We keep our brand integrity base on our core values</h5>
                <div className={cx('wrap-heading')}>
                    {dataList.map((item, i) => {
                        let classes = '';
                        if (currentData === i) {
                            classes = 'active-heading';
                        }
                        return (
                            <h1 onClick={() => setCurrentData(i)} key={item.id} className={cx('heading', classes)}>
                                {item.heading}
                            </h1>
                        );
                    })}
                </div>
            </div>
            {dataList.map((item, i) => {
                let classes = '';
                if (currentData === i) {
                    classes = 'active-detail';
                }
                return (
                    <div key={item.id} className={cx('detail', classes)}>
                        <div className={cx('list-img')}>
                            <div className={cx('wrap-img')}>
                                <img className={cx('img')} src={item.src} />
                            </div>
                            <p className={cx('list-text')}>{item.text}</p>
                        </div>
                        <div className={cx('list-content')}>
                            <div className={cx('item-content')}>
                                <h5 className={cx('item-heading')}>SHARING</h5>
                                <p className={cx('item-text')}>{item.sharing}</p>
                            </div>
                            <div className={cx('item-content')}>
                                <h5 className={cx('item-heading')}>UNITY</h5>
                                <p className={cx('item-text')}>{item.unity}</p>
                            </div>
                            <div className={cx('item-content')}>
                                <h5 className={cx('item-heading')}>RESPONSIBILITY</h5>
                                <p className={cx('item-text')}>{item.responsibility}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}

export default Core;
