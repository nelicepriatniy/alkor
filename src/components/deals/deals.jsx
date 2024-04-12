'use client'

import { useState } from 'react';
import s from './deals.module.scss'
import DealLeftItem from './leftItem/dealsLeftItem';
import DealRightItem from './rightItem/dealsrightItem'

const tabsList = [
    {
        id: 1,
        name: 'Разработка интернет магазина',
        text: 'Мы предлагаем разработку интернет-магазинов с использованием современных технологий и инструментов, таких как CMS, CRM, фреймворки, API и другие. Мы также готовы адаптировать уже существующие интернет-магазины под новые требования и стандарты.',
    },
    {
        id: 2,
        name: 'Разработка лендинга',
        text: 'Мы предлагаем разработку интернет-магазинов с использованием современных технологий и инструментов, таких как CMS, CRM, фреймворки, API и другие. Мы также готовы адаптировать уже существующие интернет-магазины под новые требования и стандарты.',
    },
    {
        id: 3,
        name: 'Разработка корпоративного сайта',
        text: 'Мы предлагаем разработку интернет-магазинов с использованием современных технологий и инструментов, таких как CMS, CRM, фреймворки, API и другие. Мы также готовы адаптировать уже существующие интернет-магазины под новые требования и стандарты.',
    },
    {
        id: 4,
        name: 'Контекстная реклама',
        text: 'Мы предлагаем разработку интернет-магазинов с использованием современных технологий и инструментов, таких как CMS, CRM, фреймворки, API и другие. Мы также готовы адаптировать уже существующие интернет-магазины под новые требования и стандарты.',
    },
    {
        id: 5,
        name: 'SEO продвижение',
        text: 'Мы предлагаем разработку интернет-магазинов с использованием современных технологий и инструментов, таких как CMS, CRM, фреймворки, API и другие. Мы также готовы адаптировать уже существующие интернет-магазины под новые требования и стандарты.',
    },
]

function DealsBlock() {
    const [activeIndes, setActiveIndex] = useState(1);
    const changeIndex = (text) => {
        setActiveIndex(text)
    }
    const changeIndexCall = (text) => {
        changeIndex(text);
    }
    return (
        <div className={s.deals}>
            <div className="container">
                <p className={s.heading}>НАши услуги</p>
                <div className={s.wraper}>
                    <div className={s.left}>
                        {tabsList.map((el) =>
                            <DealLeftItem changeIndexCall={changeIndexCall} key={el.id} info={el} activeIndes={activeIndes} />
                        )}
                    </div>
                    <div className={s.right}>
                        {tabsList.map((el) =>
                            <DealRightItem key={el.id} info={el} activeIndes={activeIndes} />
                        )}
                    </div>

                </div>
            </div>
            <svg className={s.svg} viewBox="0 0 659 669" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.2" d="M527.555 387.074L219.771 624.662C188.462 648.83 142.785 637.271 126.741 601.119L37.6635 400.403C19.5265 359.535 50.0647 313.687 94.7653 314.673L390.466 321.2C424.549 321.952 451.4 350.492 450.074 384.557L445.666 497.825C443.503 553.402 510.763 582.643 549.93 543.153L609.699 482.892C629.69 462.736 633.134 431.453 618.006 407.431L396.826 56.2023C380.669 30.5446 346.24 23.7916 321.587 41.4447V41.4447" stroke="#E8E8E8" stroke-width="63" />
            </svg>
        </div>
    );
}

export default DealsBlock;