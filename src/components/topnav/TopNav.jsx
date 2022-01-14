import './topnav.css';
import {Link} from 'react-router-dom';
import UserMenu from '../user/UserMenu';
import UserToggle from '../user/UserToggle';
import Dropdown from '../dropdown/Dropdown';
import ThemeMenu from '../themeMenu/ThemeMenu';
import user_image from '../../assets/images/cuong.jpg';
import Notification from '../notification/Notification';
import user_menu from '../../assets/JsonData/user_menus.json';
import notifications from '../../assets/JsonData/notification.json';

const current_user = {
    display_name: 'CuongNghiem',
    image: user_image,
};

const TopNav = () => {
    console.log(user_menu);

    return (
        <div className='topnav'>
            <div className='topnav__search'>
                <input type='text' placeholder='Search here...' />
                <i className='bx bx-search'></i>
            </div>
            <div className='topnav__right'>
                <div className='topnav__right-item'>
                    <Dropdown
                        customToggle={() => <UserToggle user={current_user} />}
                        contentData={user_menu}
                        renderItems={(item, index) => (
                            <UserMenu key={index} item={item} />
                        )}
                    />
                </div>
                <div className='topnav__right-item'>
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => (
                            <Notification key={index} item={item} />
                        )}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                </div>
                <div className='topnav__right-item'>
                    <ThemeMenu />
                </div>
            </div>
        </div>
    );
};

export default TopNav;
