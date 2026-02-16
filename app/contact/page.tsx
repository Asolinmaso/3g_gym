import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';
import ContactHero from '@/components/contact/ContactHero';
import ContactCards from '@/components/contact/ContactCards';
import ContactForm from '@/components/contact/ContactForm';

export default function ContactPage() {
  return (
    <main className="contact-page">
      <Header />
      <ContactHero />
      <ContactCards />
      <ContactForm />
      <Footer />
    </main>
  );
}
