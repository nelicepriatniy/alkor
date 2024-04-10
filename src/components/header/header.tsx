import Image from 'next/image';
import s from './header.module.scss'
import logo from '@/../public/imgs/icons/logo.svg'

function Header() {
    return ( 
        <header className={s.header}>
            <div className={s.container + " container"}>
                <Image src={logo} alt='Logo' className={s.logo} />
                <nav className={s.nav}>
                    <p className={s.navItem + ' ' + s.active}>Главная</p>
                    <p className={s.navItem}>О нас</p>
                    <p className={s.navItem}>Портфолио</p>
                    <p className={s.navItem}>Услуги</p>
                    <p className={s.navItem}>Контакты</p>
                </nav>
                <button className={s.button}>Оставить заявку</button>
            </div>
        </header>
     );
}

export default Header;