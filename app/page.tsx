import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Facilities from '@/components/Facilities';
import Coaches from '@/components/Coaches';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <About />
            <Facilities />
            <Coaches />
            <Gallery />
            <Reviews />
            <Contact />
            <Footer />
            <WhatsAppFloat />
        </main>
    );
}
