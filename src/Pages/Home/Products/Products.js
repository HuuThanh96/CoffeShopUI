import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import style from './Products.module.scss';
import ProductItem from './ProductItem';
import { act } from 'react-dom/test-utils';

const cx = classNames.bind(style);

const productsData = [
    {
        id: 1,
        name: 'Brilliant Fruit Flavor Coffilia',
        info: 'Experience ground coffee in premium quality with authentic origin. Coffilias blended roasted ground coffee beans deliver brilliant authentic flavor and taste expressed through therich culture of indigenous people from misty mountains in the central highland. ',
        src: 'https://www.minhtiencoffee.com/wp-content/uploads/2020/06/product1.png',
    },
    {
        id: 2,
        name: 'Moutants of the great harmony',
        info: 'Carefully selected coffee beans of the highest quality from earth quintessence and compellingpassion. Minh Tien Coffee proudly offers premium Coffilia Instant Coffee that refreshes, awaken,and strengthens energy for daily use',
        src: 'https://www.minhtiencoffee.com/wp-content/uploads/2020/06/product2-1.png',
    },
];

function Products() {
    const [current, setCurrent] = useState(0);
    const [show, setShow] = useState(true);

    useEffect(() => {
        const timeID = setInterval(() => {
            //     setCurrent((pre) => {
            //         return pre >= productsData.length - 1 ? 0 : pre + 1;
            //     });
            // }, 5000);
            setShow((pre) => !pre);
        }, 3000);
        return () => clearInterval(timeID);
    }, []);

    return (
        <div className={cx('products-section')}>
            <h3 className={cx('heading')}>PRODUCTS</h3>
            <div className={cx('container')}>
                <div className={cx('product-slides')}>
                    <div className={cx('product-slide')}>
                        {show && <ProductItem data={productsData[0]} />}
                        {!show && <ProductItem data={productsData[1]} />}
                    </div>
                </div>
                <div className={cx('wrapper-switch')}>
                    <div className={cx('switch', show && 'active')}>
                        <strong className={cx('switch-number')}>01</strong>
                        <strong className={cx('switch-name')}>
                            COFFEE
                            <br /> ROASTERS
                        </strong>
                    </div>
                    <div className={cx('switch', !show && 'active')}>
                        <strong className={cx('switch-number')}>02</strong>
                        <strong className={cx('switch-name')}>
                            INSTANT
                            <br /> COFFEE
                        </strong>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Products;
