import Navbar from './/Navbar';
import Hero from './Hero';
import Info from './Info';
import Contact from './Contact';
import Footer from './Footer';

export default function Landing() {
    return (
        <div className="landing">
            <Navbar />
            <Hero />
            <Info />
            <Contact />
            <Footer />
        </div>
    );
}
