import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import style from './Farmlands.module.scss';
import FarmlandItem from './FarmlandItem';

const cx = classNames.bind(style);
const farmlandsData = [
    {
        src: 'https://www.minhtiencoffee.com/wp-content/uploads/2020/08/sonla-map-394x329-1.svg',
        name: 'Son La Farm',
        location: 'Ban Sang, Chieng Xom, Son La - Vietnam',
        altitude: 'Land Mass',
        landmass: '18.000Ha',
        produce: '19500 ton/yea',
    },
    {
        src: 'https://www.minhtiencoffee.com/wp-content/uploads/2020/08/quangtri-map-365x370-1.svg',
        name: 'Quang Tri Farm',
        location: 'Co Nhoi, Huong Hoa, Quang Tri',
        altitude: '670m',
        landmass: '5.100 Ha',
        produce: '2.200 ton/year',
    },
    {
        src: 'https://www.minhtiencoffee.com/wp-content/uploads/2020/08/dienbien-map.svg',
        name: 'Dien Bien Farm',
        location: 'Muong Ang, Dien Bien',
        altitude: '1.100m',
        landmass: '4.000 Ha',
        produce: '840 ton/year',
    },
    {
        src: 'https://www.minhtiencoffee.com/wp-content/uploads/2020/08/lao-map.svg',
        name: 'Laos',
        location: 'Paksong, Champasak, Laos',
        altitude: '1200m',
        landmass: '30.000 Ha',
        produce: '30.000 Ha',
    },
];

function Farmlands() {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const timeID = setInterval(() => {
            setCurrent((pre) => {
                return pre >= farmlandsData.length - 1 ? 0 : pre + 1;
            });
        }, 3000);
        return () => clearInterval(timeID);
    }, [current]);
    return (
        <div className={cx('container', 'pd-mb-container')}>
            <div className={cx('slides-land')}>
                {farmlandsData.map((data, i) => {
                    let classNames = '';
                    if (current === i) {
                        classNames = 'active';
                    }
                    return <FarmlandItem key={data.name} data={data} className={classNames} />;
                })}
            </div>
        </div>
    );
}

export default Farmlands;
