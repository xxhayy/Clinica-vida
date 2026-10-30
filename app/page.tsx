import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Insurance from '@/components/Insurance';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-green-100 selection:text-green-900">
      <Navbar />
      <Hero />
      <Services />
      <Insurance />
      <Contact />
      <Footer />
    </main>
  );
}
