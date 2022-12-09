import classNames from 'classnames/bind';
import style from './Story.module.scss';
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import TextBtn from '../../../components/TextBtn/TextBtn';
import { info } from 'sass';

const cx = classNames.bind(style);

const journeyList = [
    {
        id: 1,
        year: 2000,
        content:
            'Minh Tien has been fortunate to be able to connect and promote harmonious relationships between four primary stakeholders: farming household, export partnership, consumer base, and communities through the mutual passion and love for coffee',
    },
    {
        id: 2,
        year: 2005,
        content:
            'Minh Tien initially focused on direct export to foreign markets and specifically attended to employ and train technical staff to become skillful and experienced.',
    },
    {
        id: 3,
        year: 2010,
        content:
            'Minh Tien made significant achievements for being awarded the 4C and UTZ certifications, investing further into an educated workforce.',
    },
    {
        id: 4,
        year: 2015,
        content:
            'Minh Tien’s reputation within the coffee industry is asserted with a connected workforce across production facilities and indigenous farmlands, which consolidate into an efficient business system. Productivity reaches new heights, research and development reach innovative values to create unique offerings.',
    },
    {
        id: 5,
        year: 2017,
        content:
            'Minh Tien achieved more meaningful accomplishments, laying the foundations for sharper growth and expansion in export and new products.',
    },
    {
        id: 6,
        year: 2020,
        content:
            'Minh Tien marks its great transformation with overall strategic development which includes: specialized export for new specialty coffee variants, the inauguration of the brand Coffilia, develop cafe chain, attend leading international exhibitions of commerce.',
    },
];
function Story() {
    const playBtn = useRef(null);
    const [play, setPlay] = useState(true);
    const handlePlay = () => {
        if (play) {
            playBtn.current.play();
            setPlay((pre) => !pre);
        } else {
            playBtn.current.pause();
            setPlay((pre) => !pre);
        }
    };

    const [currentSlide, setCurrentSlide] = useState(0);

    return (
        <div className={cx('container')}>
            {/* part 1 */}
            <div className={cx('first-section')}>
                <h1 className={cx('heading', 'mb-heading')}>AUTHENTIC COFFEE</h1>
                <h1 className={cx('heading', 'mb-heading')}>FROM THE MISTY MOUNTAINS</h1>
            </div>
            <img
                className={cx('wrap-img')}
                src="https://www.minhtiencoffee.com/wp-content/themes/minhtien/assets/imgs/front.svg"
            ></img>
            {/* part 2 */}
            <div className={cx('second-section')}>
                <h1 className={cx('title')}>
                    “We believe in the <br />
                    wholesome value in the journey from the farms to each coffee cup.”
                </h1>
                <div className={cx('story-list')}>
                    <div className={cx('story-item')}>
                        <TextBtn>ABOUT US</TextBtn>
                        <p className={cx('content')}>
                            Started the journey in 2000, Minh Tien was established with the desire to provide the value
                            of originality and happiness where coffee trees inhabit.
                        </p>
                    </div>
                    <div className={cx('story-item')}>
                        <TextBtn>OUR FOUNDATION</TextBtn>

                        <p className={cx('content')}>
                            Base on our sustainable farming model at independent farmlands, the coffee beans of premium
                            quality and international standards have satisfied our international export partners and
                            customers.
                        </p>
                    </div>
                    <div className={cx('story-item')}>
                        <TextBtn>OUR CONNECTION</TextBtn>

                        <p className={cx('content')}>
                            With a mutual love for coffee, Minh Tien always seeks to fulfill being the communication
                            bridge that encourages intimate connection and happiness to customers and communities. To
                            achieve this, Minh Tien guarantees to offer premium quality and originality of the coffee
                            beans.
                        </p>
                    </div>
                </div>
            </div>
            {/* part 3 */}
            <div className={cx('third-section')}>
                <video
                    className={cx('story-video')}
                    ref={playBtn}
                    poster="https://www.minhtiencoffee.com/wp-content/themes/minhtien/assets/imgs/tmp/video-thump-1.jpg"
                >
                    <source
                        className={cx('video')}
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/GIOI-THIEU.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className={cx('wrap-button-next')} onClick={handlePlay}>
                    <img
                        className={cx('button-next-img')}
                        src="https://www.minhtiencoffee.com/wp-content/themes/minhtien/assets/imgs/icons/arrow-around.svg"
                    />
                </div>
                <p className={cx('description')}>WATCH VIDEO</p>
            </div>
            {/* part 4 */}
            <div className={cx('fourth-section', 'pd-container')}>
                <h1 className={cx('fourth-section-heading')}>
                    THE JOURNEY ACROSS
                    <br />
                    SON NGUYEN MOUNTAIN RANGE
                </h1>
                <div className={cx('fourth-section-detail')}>
                    <p className={cx('fourth-section-content')}>
                        The journey of the coffee beans began with a colorful picture of millions of white flower buds,
                        absorbing the earth’s quintessential, hard work of people and indigenous culture of its
                        surrounding regions, which create the flavor that is refreshing and awakening for the drinkers.
                    </p>
                    <p className={cx('fourth-section-content')}>
                        The authentic experience that Minh Tien passionately expresses and delivers in each coffee cup
                        is the originality where the coffee trees are grown and cultivated across indigenous farmlands
                        from Tay Bac, Quang Tri to Laos.
                    </p>
                    <p className={cx('fourth-section-content')}>
                        <TextBtn>LEARN ABOUT PRODUCT</TextBtn>
                    </p>
                </div>
            </div>
            {/* part 5 */}
            <div className={cx('fifth-section', 'pd-container')}>
                <FontAwesomeIcon
                    icon={faChevronUp}
                    className={cx('up-icon')}
                    onClick={() => {
                        setCurrentSlide((pre) => {
                            if (pre <= 0) {
                                return 0;
                            } else {
                                return pre - 1;
                            }
                        });
                    }}
                />
                <div className={cx('wrap-silde')}>
                    <div className={cx('switch-year')} style={{ transform: ` translatey(${currentSlide * -60}px) ` }}>
                        {journeyList.map((item, i) => {
                            let classes = '';
                            if (currentSlide === i) {
                                classes = 'active-year';
                            }
                            return (
                                <span
                                    onClick={() => {
                                        if (i != currentSlide.length) {
                                            setCurrentSlide(i);
                                        } else {
                                            setCurrentSlide(i - 1);
                                        }
                                    }}
                                    key={item.id}
                                    className={cx('year-item', classes)}
                                >
                                    {item.year}
                                </span>
                            );
                        })}
                    </div>
                    <div className={cx('switch-content')}>
                        <h1 className={cx('switch-heading')}>The journey to discover the originality</h1>
                        {journeyList.map((item, i) => {
                            let classes = '';
                            if (currentSlide === i) {
                                classes = 'active-content';
                            }
                            return (
                                <p
                                    onClick={() => {
                                        setCurrentSlide(i);
                                    }}
                                    key={item.id}
                                    className={cx('content-item', classes)}
                                >
                                    {item.content}
                                </p>
                            );
                        })}
                    </div>
                </div>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={cx('down-icon')}
                    onClick={() => {
                        setCurrentSlide((pre) => pre + 1);
                    }}
                />
            </div>
        </div>
    );
}

export default Story;
