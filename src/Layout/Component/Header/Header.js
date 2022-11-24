import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Menu from '../../../components/Menu';
import SubMenu from './SubMenu';
import routes from '../../../config/routes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

const menuItems = [
    {
        title: 'About',
        path: routes.about,
        data: [
            { src: '#story', title: ' About Minh Tien Coffee' },
            { src: '#vision', title: 'vision & mission' },
            { src: '#corevalue', title: 'Corevalue' },
            { src: '#certification', title: 'Certifications' },
        ],
    },
    {
        title: 'Product',
        path: routes.product,
        data: [
            { src: '#roasted', title: 'ROASTED GROUND COFFILIA' },
            { src: '#instant', title: 'COFFILIA INSTANT COFFEE' },
        ],
    },
    {
        title: 'sustainnablity',
        path: routes.sustainnablity,
        data: [
            { src: '', title: 'Originality' },
            { src: '', title: 'Economy' },
            { src: '', title: 'Community' },
            { src: '', title: 'Environment' },
            { src: '', title: 'Activities' },
        ],
    },
    {
        title: 'Manufacturing',
        path: routes.manufacturing,
        data: [
            { src: '', title: 'Farmlands' },
            { src: '', title: 'Production Line' },
        ],
    },
    {
        title: 'Partners',
        path: routes.partners,
        data: [
            { src: '', title: 'Farmer Households' },
            { src: '', title: 'Export' },
            { src: '', title: 'Distribution' },
            { src: '', title: 'Enquiry' },
        ],
    },
    {
        title: 'News',
        path: routes.news,
        data: [],
    },
];
function Header({ valueScroll }) {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [showTabletMenu, setShowTabletMenu] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > valueScroll) {
                setShowSubMenu(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
    }, []);
    return (
        <>
            <div className={cx('header-inner')}>
                <button className={cx('btn-menu')} onClick={() => setShowTabletMenu(!showTabletMenu)}>
                    {showTabletMenu ? (
                        <FontAwesomeIcon className={cx('bars-icon')} icon={faBars} />
                    ) : (
                        <FontAwesomeIcon className={cx('xmark-icon')} icon={faXmark} />
                    )}
                </button>

                <Link to={routes.home} className={cx('wrapper-logo')}>
                    <img
                        className={cx('logo')}
                        src="https://www.minhtiencoffee.com/wp-content/themes/minhtien/assets/imgs/Minh-Tien-Logo.svg"
                    />
                </Link>
                <div className={cx('menu-wrap')}>
                    <Menu menuItems={menuItems} boder>
                        {menuItems.map((item, index) => (
                            <div key={item.path} className={cx('menu-item')}>
                                <Link
                                    to={item.path}
                                    className={cx('title')}
                                    onClick={() => {
                                        setCurrentPage(index);
                                        setShowSubMenu(true);
                                    }}
                                    onMouseEnter={() => {
                                        setCurrentPage(index);
                                        setShowSubMenu(true);
                                    }}
                                >
                                    {item.title}
                                </Link>
                            </div>
                        ))}
                    </Menu>
                </div>
            </div>
            {!showTabletMenu && (
                <div className={cx('tablet-menu', 'active-tablet-menu')}>
                    {menuItems.map((item, index) => (
                        <div key={item.path} className={cx('tablet-menu-item')}>
                            <Link
                                to={item.path}
                                className={cx('tablet-menu-title')}
                                // onClick={() => {
                                //     setCurrentPage(index);
                                //     setShowSubMenu(true);
                                // }}
                                // onMouseEnter={() => {
                                //     setCurrentPage(index);
                                //     setShowSubMenu(true);
                                // }}
                            >
                                {item.title}
                            </Link>
                        </div>
                    ))}
                </div>
            )}

            {showSubMenu && (
                <div className={cx('submenu-wrap')}>
                    {menuItems.map((item, index) => {
                        let classes = '';
                        if (currentPage === index) {
                            classes = 'active';
                        }

                        return <SubMenu setShowSubMenu={setShowSubMenu} key={index} props={item} classes={classes} />;
                    })}
                </div>
            )}
        </>
    );
}

export default Header;
