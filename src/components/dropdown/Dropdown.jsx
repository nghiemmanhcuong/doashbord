import './dropdown.css';
import {useRef} from 'react';

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

const Dropdown = (props) => {
    const dropdown__button_el = useRef(null);
    const dropdown__content_el = useRef(null);

    clickOutsiteRef(dropdown__content_el,dropdown__button_el)

    return (
        <div className='dropdown'>
            <button ref={dropdown__button_el} className='dropdown__toggle'>
                {props.icon ? <i className={props.icon}></i> : ''}
                {props.badge ? (
                    <span className='dropdown__toggle-badge'>
                        {props.badge}
                    </span>
                ) : (
                    ''
                )}
                {props.customToggle ? props.customToggle() : ''}
            </button>
            <div ref={dropdown__content_el} className='dropdown__content'>
                {props.contentData && props.renderItems
                    ? props.contentData.map((item, index) =>
                          props.renderItems(item, index)
                      )
                    : ''}
                {props.renderFooter ? (
                    <div className='dropdown__footer'>
                        {props.renderFooter()}
                    </div>
                ) : (
                    ''
                )}
            </div>
        </div>
    );
};

export default Dropdown;
