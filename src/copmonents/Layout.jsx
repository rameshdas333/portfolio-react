import { Outlet } from 'react-router-dom';
import Home from './Home';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
    return (
        <div>
          
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Layout;