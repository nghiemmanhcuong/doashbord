import './layout.css';
import Routers from '../Routers';
import TopNav from '../topnav/TopNav';
import Sitebar from '../sitebar/Sitebar';
import { BrowserRouter } from 'react-router-dom';

const Layout = () => {

    return (
        <BrowserRouter>
            <div className='layout'>
                <Sitebar />
                <div className='layout__content'>
                    <TopNav />
                    <div className='layout__content-main'>
                        <Routers />
                    </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Layout
