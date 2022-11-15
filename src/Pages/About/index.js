import React from 'react';
import classNames from 'classnames/bind';
import style from './About.module.scss';
import Section from '../../components/Section/Section';
import Banner from '../../Layout/Component/Banner/Banner';
import Story from './Story';
import Vision from './Vision';
import Core from './Core';
import Certification from './Certification';
import Partner from './Partner';

const cx = classNames.bind(style);
function About() {
    return (
        <>
            <Banner>
                <video autoPlay loop muted className={cx('wrap-video')}>
                    <source
                        className={cx('video-intro')}
                        src="https://www.minhtiencoffee.com/wp-content/uploads/2020/06/TVC_30s_Minh-Ti%E1%BA%BFn_1.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className={cx('intro-title')}>
                    <h1 className={cx('heading')}>Follow us to discover coffee</h1>
                    <h1 className={cx('heading')}> happiness</h1>
                </div>
                <a href="#story" className={cx('wrap-button-next')}>
                    <img
                        className={cx('button-next-img')}
                        src="https://www.minhtiencoffee.com/wp-content/themes/minhtien/assets/imgs/icons/arrow-around.svg"
                    ></img>
                </a>
            </Banner>
            <Section heading="our story" link="story">
                <Story />
            </Section>
            <Section heading="vision & mission " link="vision">
                <Vision />
            </Section>
            <Section heading="corevalue" link="corevalue" background="background">
                <Core />
            </Section>
            <Section heading="certification" link="certification">
                <Certification />
            </Section>
            <Section heading="partner" link="partner">
                <Partner />
            </Section>
        </>
    );
}

export default About;
