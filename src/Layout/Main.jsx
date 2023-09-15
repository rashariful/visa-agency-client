
import Header from '../Components/Pages/Header/Header';
import Footer from '../Components/Pages/Footer/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Pages/Header/Navbar';

const Main = () => {
    return (
        <section>
            <Navbar/>
            <Header/>
            <Outlet/>
            <Footer/>
        </section>
    );
};

export default Main;