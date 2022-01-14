import { Routes,Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Customers from '../pages/Customers';

const Routers = () => {
    return (
        <Routes>
            <Route path = '/' element={<Dashboard />}/>
            <Route path = '/customers' element={<Customers />}/>
        </Routes>
    )
}

export default Routers
