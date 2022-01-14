import './themeMenu.css';
import {useRef} from 'react';

const mode_settings = [
    {
        id: 'light',
        name: 'Light',
        background: 'light-background',
        class: 'theme-mode-light',
    },
    {
        id: 'dark',
        name: 'Dark',
        background: 'dark-background',
        class: 'theme-mode-dark',
    },
];

const color_settings = [
    {
        id: 'blue',
        name: 'Blue',
        background: 'blue-color',
        class: 'theme-color-blue',
    },
    {
        id: 'red',
        name: 'Red',
        background: 'red-color',
        class: 'theme-color-red',
    },
    {
        id: 'cyan',
        name: 'Cyan',
        background: 'cyan-color',
        class: 'theme-color-cyan',
    },
    {
        id: 'green',
        name: 'Green',
        background: 'green-color',
        class: 'theme-color-green',
    },
    {
        id: 'orange',
        name: 'Orange',
        background: 'orange-color',
        class: 'theme-color-orange',
    },
];

const clickOutsiteRef = (content_ref, toggle_ref) => {
    document.addEventListener('mousedown', (e) => {
        // user toggle click
        if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
            content_ref.current.classList.toggle('active');
        } else {
            if (toggle_ref.current && !content_ref.current.contains(e.target)) {
                content_ref.current.classList.remove('active');
            }
        }
    });
};

const ThemeMenu = () => {
    const menu_ref = useRef(null);
    const menu_toggle_ref = useRef(null);

    clickOutsiteRef(menu_ref, menu_toggle_ref);

    const setActiveMenu = () => menu_ref.current.classList.add('active');
    const closeMenu = () => menu_ref.current.classList.remove('active');

    return (
        <div>
            <button
                ref={menu_toggle_ref}
                className='dropdown__toggle'
                onClick={() => setActiveMenu()}
            >
                <i className='bx bx-palette'></i>
            </button>
            <div ref={menu_ref} className='theme-menu'>
                <h4>Theme Settings</h4>
                <button className='theme-menu__close' onClick={() => closeMenu()}>
                    <i className='bx bx-x'></i>
                </button>
                <div className='theme-menu__select'>
                    <span>Choose mode</span>
                    <ul className='mode-list'>
                        {mode_settings.map((item, index) => (
                            <li key={index}>
                                <div
                                    className={`mode-list__color ${item.background}`}
                                >
                                    <i className='bx bx-check'></i>
                                </div>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='theme-menu__select'>
                    <span>Choose color</span>
                    <ul className='mode-list'>
                        {color_settings.map((item, index) => (
                            <li key={index}>
                                <div
                                    className={`mode-list__color ${item.background}`}
                                >
                                    <i className='bx bx-check'></i>
                                </div>
                                <span>{item.name}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ThemeMenu;
