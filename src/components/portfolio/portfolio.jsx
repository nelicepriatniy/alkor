'use client'

import s from './portfolio.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import 'swiper/css';
import PortfolioItem from './item/portfolioItem'

import portfolio1Img from '@/../public/imgs/portfolio/keys/1.png'
import bg from '@/../public/imgs/portfolio/mak.png'
import Image from 'next/image';
const portfolioList = [
    {
        id: 0,
        img: portfolio1Img,
        heading: 'Mosecobox',
        text: 'Компания «Mosecobox» предлагает профессиональные услуги по вывозу строительного мусора в Москве и области.',
        srok: '25 дней',
        price: '142.120 ₽',
        link: 'https://wwwyacheslav.ru',
        isRaz: true,
        isMark: false,
    },
    {
        id: 1,
        img: portfolio1Img,
        heading: 'Mosecobox',
        text: 'Компания «Mosecobox» предлагает профессиональные услуги по вывозу строительного мусора в Москве и области.',
        srok: '25 дней',
        price: '142.120 ₽',
        link: 'https://wwwyacheslav.ru',
        isRaz: false,
        isMark: true,
    },
]

function PortfolioBlock() {
    const [swiper, setSwiper] = useState();
    const [isMove, setisMove] = useState(false);
    const startAnimation = ()=>{
        console.log('animStart');
        setisMove(true)
        console.log(isMove)
    }
    const endAnimation = ()=>{
        console.log('animEnd');
        setisMove(false)
        console.log(isMove)
    }
    return (
        <section className={s.portfolio}>
            <div className={s.container + " container"}>
                <div className={s.top}>
                    <p className={s.heading}>Портфолио</p>
                    <div className={s.arrows}>
                        <div className={s.arrowPrev} onClick={() => { swiper.slidePrev() }} >
                            <svg className={s.arrowSvg} viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 2L2 7L7 12" stroke="#E8E8E8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className={s.arrowNext} onClick={() => { swiper.slideNext() }} >
                            <svg className={s.arrowSvg} viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 2L2 7L7 12" stroke="#E8E8E8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <Swiper
                    className={s.slider}
                    onSwiper={setSwiper}
                    onSlideChangeTransitionStart={startAnimation}
                    onSlideChangeTransitionEnd = {endAnimation}
                    speed={1000}
                >
                    {portfolioList.map((el) => 
                        <SwiperSlide key={el.id} className={s.slide}>
                            <PortfolioItem info={el} isAnim={isMove} />
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <Image className={s.bg} src={bg} alt='портфолио бг' />
            {/* <div className={s.portFront1}></div> */}
        </section>
    );
}

export default PortfolioBlock;