import s from './plussItem.module.scss'

function PlussItem(props: any) {
    return ( 
        <div className={s.plussItem}>
            <div className={s.top}>
                <p className={s.num}>
                    {props.info.num}
                </p>
                <p className={s.score}>{props.info.score}</p>
            </div>
            <p className={s.info}>{props.info.text}</p>
        </div>
     );
}

export default PlussItem;