import { Breadcrumb } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ContactBanner = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate("/")
  }
 return (
  <div className="contact-banner mt-5">
   <h1 className="contact-heading">Contacts</h1>
   <Breadcrumb>
    <Breadcrumb.Item
     className="link"
     style={{ textDecoration: 'none', color: 'white' }} onClick={handleClick}
    >
     Home
    </Breadcrumb.Item>
    <div className="arrow">&rarr;</div>
    <Breadcrumb.Item active className="link">
     Contact
    </Breadcrumb.Item>
   </Breadcrumb>
  </div>
 )
}

export default ContactBanner
