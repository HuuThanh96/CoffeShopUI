import React from 'react';
import classNames from 'classnames/bind';
import styles from './Section.module.scss';

const cx = classNames.bind(styles);
function Section({ heading, children, link, background }) {
    return (
        <div id={link} className={cx('section', background)}>
            <h3 className={cx('heading')}>{heading}</h3>
            {children}
        </div>
    );
}

export default Section;
