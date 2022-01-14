import './sitebar.css';
import SitebarItem from './SitebarItem';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { useState } from 'react';
import sitebar_items from '../../assets/JsonData/sidebar_routes.json';

const Sitebar = () => {
    const [sitebarActive,setSibarActive] = useState('Dashboard');

    return (
        <div className='sitebar'>
            <div className='sitebar__logo'>
                <img src={logo} alt="Company logo" />
            </div>
            {
                sitebar_items.map((item,index) =>
                    <Link to={item.route} key={index}>
                        <SitebarItem 
                            title={item.display_name}
                            icon={item.icon}
                            setSibarActive={setSibarActive}
                            sitebarActive={sitebarActive}
                        />
                    </Link>
                )
            }
        </div>
    )
}

export default Sitebar
