import React from 'react';
import classNames from 'classnames/bind';
import style from './New.module.scss';
import NewItem from './NewItem';

const newsData = [
    {
        title: 'Vietnam – Austria cooperate towards the “Green” economy',
        time: 'November 9, 2021',
        src: 'https://www.minhtiencoffee.com/wp-content/uploads/2021/11/btt-mtgbai-dua-tinsu-kien-dsquan-austria-vn-bbt-suadocx-1633927969996-300x200.jpeg',
    },
    {
        title: 'Minh Tien Group takes centre stage at Expo 2020',
        time: 'November 8, 2021',
        src: 'https://www.minhtiencoffee.com/wp-content/uploads/2021/11/Minh_Tien_Group_-_Vietnam_-_NS_1-700x467-1-300x200.jpg',
    },
    {
        title: 'Vietnam Pavilion',
        time: 'November 7, 2021',
        src: 'https://www.minhtiencoffee.com/wp-content/uploads/2021/10/Nha-trien-lam-Vietnam-6-300x200.jpg',
    },
    {
        title: 'Vietnam Pavilion',
        time: 'November 6, 2021',
        src: 'https://www.minhtiencoffee.com/wp-content/uploads/2021/10/Nha-trien-lam-Vietnam-9-300x200.jpg',
    },
];
const cx = classNames.bind(style);
function New() {
    return (
        <div className={cx('container')}>
            <div className={cx('new-items')}>
                {newsData.map((item) => {
                    return <NewItem key={item.time} data={item} />;
                })}
            </div>
        </div>
    );
}

export default New;
