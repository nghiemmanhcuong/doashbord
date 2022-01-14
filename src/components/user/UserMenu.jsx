import {Link} from 'react-router-dom';

const UserMenu = ({item}) => {
    return (
        <Link to='/'>
            <div className='notification-item'>
                <i className={item.icon}></i>
                <span className='notification-item--text'>{item.content}</span>
            </div>
        </Link>
    );
};

export default UserMenu;
