import s from './dealsrightItem.module.scss'

function DealRightItem(props) {
    let classes = [s.item].join(' ');
    if(props.info.id == props.activeIndes) {
        classes = [s.item, s.active].join(' ');
        console.log(classes)
    }
    return ( 
        <div className={classes}>
            <p className={s.heading}>{props.info.name}</p>
            <p className={s.text}>{props.info.text}</p>
            <button className={s.button}>Заказать</button>
        </div>
     );
}

export default DealRightItem;