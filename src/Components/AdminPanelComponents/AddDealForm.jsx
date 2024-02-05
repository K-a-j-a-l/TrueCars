import React, {useState, useEffect} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import '../../style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { showToast } from '../../Pages/LoginRegister';
const AddDealForm = ({onClose, editDealData}) => {
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        bodyStyle: 'Select Body Style',
        carModelYear: '',
        carVariant: '',
        carEngine: '',
        typeOfCarEngine: 'Select Type of Car Engine',
        carExteriorColor: '',
        transmission: 'Select Transmission',
        pricingDetails: '',
        popularFeatures: 'Select Popular Features',
        fuelType: 'Select Fuel Type',
      });

      useEffect(() => {
        if (editDealData) {
          setFormData({
            name: editDealData.name || '',
            brand: editDealData.brand || '',
            bodyStyle: editDealData.bodyStyle || 'Select Body Style',
            carModelYear: editDealData.carModelYear || '',
            carVariant: editDealData.carVariant || '',
            carEngine: editDealData.carEngine || '',
            typeOfCarEngine: editDealData.typeOfCarEngine || 'Select Type of Car Engine',
            carExteriorColor: editDealData.carExteriorColor || '',
            transmission: editDealData.transmission || 'Select Transmission',
            pricingDetails: editDealData.pricingDetails.exShowroomPrice || '',
            popularFeatures: editDealData.popularFeatures || 'Select Popular Features',
            fuelType: editDealData.fuelType || 'Select Fuel Type',
          });
        }
      }, [editDealData]);
      const saveDeal = async () => {
        
        try {
          const token = sessionStorage.getItem('token');
          console.log(token);
          const response = await fetch("http://20.235.246.99:8000/api/v1/deal", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
          });
    
          const result = await response.json();
          console.log(result);
    
          if (response.ok) {
            showToast('success', 'Deal saved successfully!');
            setTimeout(() => {
              onClose();
            }, 5000);
          } else {
            showToast('error', `Failed to save deal: ${result.message}`);
          }
        } catch (error) {
          showToast('error', 'An error occurred while saving the deal.');
        }
      };
 return (<>


  <ToastContainer/>
  <Form className="form-container">
   <Row className='mb-3'>
    <Col>
     <Form.Group controlId="name">
      <Form.Control className='input' type="text" placeholder="Enter Name"  value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}/>
     </Form.Group>
    </Col>
    <Col>
     <Form.Group controlId="brand">
      <Form.Control className='input' type="text" placeholder="Enter Brand" value={formData.brand} onChange={(e) => setFormData({ ...formData, brand: e.target.value })} />
     </Form.Group>
    </Col>
   </Row>
   <Row className='mb-3'>
    <Col>
     <Form.Group controlId="bodyStyle">
      <Form.Control className='input' as="select" value={formData.bodyStyle} onChange={(e) => setFormData({ ...formData, bodyStyle: e.target.value })}>
      <option>Select Body Style ▼</option>
       <option>Convertible</option>
       <option>Coupe</option>
       <option>Hatchback</option>
       <option>Sedan</option>
       <option>SUV</option>
       <option>Truck</option>
       <option>Van</option>
       <option>Wagon</option>
       <option>Unknown</option>
      </Form.Control>
     </Form.Group>
    </Col>
    <Col>
     <Form.Group controlId="carModelYear">
      <Form.Control className='input' type="text" placeholder="Enter Car Model Year" value={formData.carModelYear} onChange={(e) => setFormData({ ...formData, carModelYear: e.target.value })} />
     </Form.Group>
    </Col>
   </Row>

   <Row className='mb-3'>
    <Col>
     <Form.Group controlId="carVariant">
      <Form.Control className='input' type="text" placeholder="Enter Car Variant" value={formData.carVariant} onChange={(e) => setFormData({ ...formData, carVariant: e.target.value})} />
     </Form.Group>
    </Col>
    <Col>
     <Form.Group controlId="carEngine">
      <Form.Control className='input' type="text" placeholder="Enter Car Engine" value={formData.carEngine} onChange={(e) => setFormData({ ...formData, carEngine: e.target.value})} />
     </Form.Group>
    </Col>
   </Row>
   <Row className='mb-3'>
    <Col>
     <Form.Group controlId="typeOfCarEngine">
      <Form.Control className='input' as="select" value={formData.typeOfCarEngine} onChange={(e) => setFormData({ ...formData, typeOfCarEngine: e.target.value })}>
       <option>Select Type of Car Engine ▼</option>
       <option>Electric</option>
       <option>Hybrid</option>
      </Form.Control>
     </Form.Group>
    </Col>
    <Col>
     <Form.Group controlId="carExteriorColor">
      <Form.Control className='input' type="text" placeholder="Enter Car Exterior Color"  value={formData.carExteriorColor} onChange={(e) => setFormData({ ...formData, carExteriorColor: e.target.value })} />
     </Form.Group>
    </Col>
   </Row>

   <Row className='mb-3'>
    <Col>
     <Form.Group controlId="transmission">
      <Form.Control className='input' as="select"  value={formData.transmission} onChange={(e) => setFormData({ ...formData, transmission: e.target.value })}>
       <option>Select Transmission ▼</option>
       <option>Automatic</option>
       <option>Manual</option>
      </Form.Control>
     </Form.Group>
    </Col>
    <Col>
     <Form.Group controlId="pricingDetails">
      <Form.Control className='input' type="text" placeholder="Enter Pricing Details"  value={formData.pricingDetails} onChange={(e) => setFormData({ ...formData, pricingDetails: e.target.value })}/>
     </Form.Group>
    </Col>
   </Row>
   <Row className='mb-3'>
    <Col>
     <Form.Group controlId="popularFeatures">
      <Form.Control className='input' as="select"  value={formData.popularFeatures} onChange={(e) => setFormData({ ...formData, popularFeatures: e.target.value })}>
       <option>Select Popular Features ▼</option>
       <option>Adaptive Cruise Control</option>
       <option>Android Auto</option>
       <option>Apple CarPlay</option>
       <option>Backup Camera</option>
       <option>Blind Spot System</option>
       <option>Bluetooth</option>
       <option>Front Cooled Seats</option>
       <option>Front Heated Seats</option>
       <option>Lane Keep Assist</option>
       <option>Moonroof</option>
       <option>Multi-Zone Climate Control</option>
       <option>Navigation</option>
       <option>Parking Sensors</option>
       <option>Power Trunk/Liftgate</option>
       <option>Premium Audio</option>
       <option>Premium Seat Material</option>
       <option>Premium Wheels</option>
       <option>Remote Engine Start</option>
       <option>Third Row Seating</option>
       <option>Tow Hitch</option>
       <option>Unknown</option>
      </Form.Control>
     </Form.Group>
    </Col>
    <Col>
     <Form.Group controlId="fuelType">
      <Form.Control className='input' as="select"  value={formData.fuelType} onChange={(e) => setFormData({ ...formData, fuelType: e.target.value })}>
       <option>Select Fuel Type ▼</option>
       <option>Electric Vehicle (EV)</option>
       <option>Plug-in Electric Vehicle (PHEV)</option>
       <option>Hybrid</option>
       <option>Gas</option>
       <option>Diesel</option>
       <option>Hydrogen</option>
      </Form.Control>
     </Form.Group>
    </Col>
   </Row>
   <Row className="button-row">
    <Col>
     <Button variant="primary" type="button" style={{padding:"10px 30px", fontSize:"1.2rem"}} onClick={saveDeal}>
      {!editDealData ? "Save":"Edit"}
     </Button>
    </Col>
    <Col>
     <Button variant="secondary" type="button" style={{padding:"10px 30px", fontSize:"1.2rem"}} onClick={()=>onClose()}>
      Discard
     </Button>
    </Col>
   </Row>
  </Form>
  </>
 )
}

export default AddDealForm
