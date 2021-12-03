import React, { useEffect, useState, useRef } from 'react'
import Styles from './style.module.scss';

const Main = () => {

    const [menuOpen, toggleMenu] = useState(false);
    const [menuClass, setMenuClass] = useState('');
    const menuRef = useRef(null);

    useEffect(() => {
        if (menuOpen){
            setMenuClass('opacity-100 z-30')
        } else {
            setMenuClass('opacity-40 z-0') ;
            menuRef.current.blur();
        }
    }, [menuOpen])

    return <>
        <button className={`${Styles.menuButton} ${!menuOpen && Styles.menuButtonClosed}`} ref={menuRef} onClick={() => toggleMenu(!menuOpen)}>
            {menuOpen ? 'CLOSE' : 'MENU'}
        </button>
        <div className={`fixed inset-0 flex flex-col items-center justify-center transition-opacity duration-500 ${Styles.bg} ${menuClass}`}>
            
            <div className={`${Styles.menu} transition-opacity ${menuOpen ? 'opacity-100 duration-300 delay-300' : 'opacity-0'}`}>
                <ul className={Styles.menuList} data-offset="10">
                    <li className={Styles.menuListItem} data-offset="20">
                        Home
                        <span className={Styles.itemMask} aria-hidden="true"><span>Home</span></span>
                        <span className={Styles.itemMask} aria-hidden="true"><span>Home</span></span>
                    </li>
                    <li className={Styles.menuListItem} data-offset="16">
                        About
                        <span className={Styles.itemMask} aria-hidden="true"><span>About</span></span>
                        <span className={Styles.itemMask} aria-hidden="true"><span>About</span></span>
                    </li>
                    <li className={Styles.menuListItem} data-offset="12">
                        Work
                        <span className={Styles.itemMask} aria-hidden="true"><span>Work</span></span>
                        <span className={Styles.itemMask} aria-hidden="true"><span>Work</span></span>
                    </li>
                    <li className={Styles.menuListItem} data-offset="8">
                        Contact
                        <span className={Styles.itemMask} aria-hidden="true"><span>Contact</span></span>
                        <span className={Styles.itemMask} aria-hidden="true"><span>Contact</span></span>
                    </li>
                </ul>
            </div>
        </div>
    </>
}

export default Main;