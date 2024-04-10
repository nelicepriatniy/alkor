import PlussItem from './item/plussItem';
import s from './pluss.module.scss'

const plussList = [
    {
        id: 1,
        num: '00',
        score: '01',
        text: 'негативных отзывов за все время работы'
    },
    {
        id: 2,
        num: '05',
        score: '02',
        text: 'Лет опыта в разработке сайтов любой сложности'
    },
    {
        id: 3,
        num: '32',
        score: '03',
        text: 'Довольных клиента, готовых обратиться к нам снова'
    },
    {
        id: 4,
        num: '40',
        score: '04',
        text: 'Готовых сайтов и веб приложений, приносящие прибыль своим владельцам'
    },
]

function Pluss() {
    return ( 
        <section className={s.pluss}>
            <div className='container'>
            <p className={s.heading}>Наши Приемущества</p>
            <div className={s.wraper}>
                <div className={s.info}>
                    <p className={s.text}>Мы понимаем, что каждая компания имеет свои уникальные потребности и цели, когда дело доходит до создания корпоративного сайта. Поэтому мы предлагаем индивидуальный подход
к разработке вашего сайта, учитывая ваши бизнес-цели и потребности. Наше агенство постоянно следит за новыми технологиями
и тенденциями в сфере веб-разработки,
чтобы предоставлять нашим клиентам самые передовые решения.</p>
                    <h2 className={s.subText}>Помогаем привлечь клиентов из интернета, повысить известность компании. Для этого создаем сайты с крутым дизайном и продуманной структурой</h2>
                </div>
                <div className={s.list}>
                    {plussList.map((el:any)=>
                        <PlussItem key={el.id} info={el} />
                    )}
                </div>
            </div>
            </div>
        </section>
     );
}

export default Pluss;