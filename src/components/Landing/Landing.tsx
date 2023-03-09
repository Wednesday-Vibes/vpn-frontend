import styled from 'styled-components';
import Navbar from './/Navbar';
import Hero from './Hero';
import Info from './Info';
import Contact from './Contact';
import Footer from './Footer';

const Landing = styled.div``;

export default () => {
    return (
        <Landing className="landing">
            <Navbar />
            <Hero />
            <Info />
            <Contact />
            <Footer />
        </Landing>
    );
};
