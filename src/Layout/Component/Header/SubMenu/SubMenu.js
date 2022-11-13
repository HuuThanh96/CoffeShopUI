import React from 'react';
import classNames from 'classnames/bind';
import styles from './SubMenu.module.scss';

const cx = classNames.bind(styles);

function SubMenu({ props, classes, setShowSubMenu }) {
    return (
        <div
            className={cx('submenu-list', classes)}
            onMouseLeave={() => {
                setShowSubMenu(false);
            }}
        >
            <h3 className={cx('submenu-heading')}>{props.title}</h3>
            {props.data.map((item, index) => {
                return (
                    <a key={index} className={cx('items')} href={item.src}>
                        {item.title}
                    </a>
                );
            })}
        </div>
    );
}

export default SubMenu;
