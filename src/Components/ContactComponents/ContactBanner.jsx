import { Breadcrumb } from 'react-bootstrap';

const ContactBanner = () => {
  return (
    <div className="contact-banner mt-5">
      <h1 className="contact-heading">Contacts</h1>
      <Breadcrumb>
        <Breadcrumb.Item className="link" style={{textDecoration:"none", color:"white"}}>Home</Breadcrumb.Item>
	<div className="arrow">&rarr;</div>
        <Breadcrumb.Item active className="link">Contact</Breadcrumb.Item>
      </Breadcrumb>
      
    </div>
  );
};

export default ContactBanner;
