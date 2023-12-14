import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ContactBanner from '../Components/ContactComponents/ContactBanner'
import ContactSection from '../Components/ContactComponents/ContactSection'
import ContactForm from '../Components/ContactComponents/ContactForm'

export default function ContactPage() {
  return (
    <div>
      <Navbar/>
      <ContactBanner/>
      <ContactSection/>
      <ContactForm/>
      <Footer/>
    </div>
  )
}
