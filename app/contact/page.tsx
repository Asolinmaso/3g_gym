import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactCards from '@/components/contact/ContactCards';
import ContactForm from '@/components/contact/ContactForm';
import ContactSection from '@/components/contact/ContactSection';
import Image from "next/image";
import './page.css';

export default function ContactPage() {
  return (
    <main className="contact-page">
      <Header />
      <ContactHero />
      <ContactSection />
      <section className="footer-equipment">
                <Image
                  src="/footer_image.png"
                  alt="Gym Equipment"
                  width={300}
                  height={400}
                  className="footer-equipment-img"
                />
              </section>
      <Footer />
    </main>
  );
}
