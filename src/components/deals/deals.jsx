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
    const changeIndex = (text)=>{
        setActiveIndex(text)
    }
    const changeIndexCall = (text)=>{
        console.log(text);
        changeIndex(text);
    }
    return ( 
        <div className={s.deals}>
            <div className="container">
                <p className={s.heading}>НАши услуги</p>
                <div className={s.wraper}>
                    <div className={s.left}>
                        {tabsList.map((el)=>
                            <DealLeftItem changeIndexCall={changeIndexCall} key={el.id} info={el} activeIndes={activeIndes} />
                        )}
                    </div>
                    <div className={s.right}>
                    {tabsList.map((el)=>
                            <DealRightItem key={el.id} info={el} activeIndes={activeIndes} />
                        )}
                    </div>

                </div>
            </div>
        </div>
     );
}

export default DealsBlock;