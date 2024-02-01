import React, { useState } from 'react'
import { Container, Row, Col, Image, Card, Button } from 'react-bootstrap'
import '../../style.css'

const ProductInfoComponent = () => {
 const product = {
  name: 'Scorpio-N',
  description: 'This is a sample product description.',
  image:
   'https://auto.mahindra.com/-/media/project/mahindra/dotcom/mahindra/my-vehicles/SCORPIO-N/M0322/C1DEEPFRST_M?10012024',
  price: '$100.00',
  savings: '$20.00',
  details: ['Detail 1', 'Detail 2', 'Detail 3'],
 }

 const cards = [
  {
   title: 'Fuel',
   icon: <i className="fa-solid fa-gas-pump"></i>,
   buttonLabel1: 'Diesel',
   buttonLabel2: 'Petrol',
  },
  {
   title: 'Transmission',
   icon: <i className="fa-brands fa-nfc-directional"></i>,
   buttonLabel1: 'Automatic',
   buttonLabel2: 'Manual',
  },
  {
   title: 'Seatings',
   icon: <i className="fa-solid fa-chair"></i>,
   buttonLabel1: '6 Seater',
   buttonLabel2: '7 Seater',
  },
 ]

 const colors = [
  { color: 'whitesmoke', name: 'White' },
  { color: 'black', name: 'Black' },
  { color: 'darkgreen', name: 'Forest Green' },
  { color: 'red', name: 'Red Rage' },
 ]

 const variants = [
  {
   id: 1,
   name: 'Variant 1',
   price: '$90.00',
   features: ['Key Feature 1', 'Key Feature 2', 'Key Feature 3'],
  },
  {
   id: 2,
   name: 'Variant 2',
   price: '$95.00',
   features: ['Key Feature 1', 'Key Feature 2', 'Key Feature 3'],
  },
 ]

 const { name, image, savings } = product
 const [selectedColor, setSelectedColor] = useState(colors[0])
 const [selectedVariant, setSelectedVariant] = useState(variants[0])

 const handleColorSelection = (color) => {
  setSelectedColor(color)
 }

 const handleVariantSelection = (variant) => {
  setSelectedVariant(variant)
 }

 return (
  <div className="product-container">
   <Row>
    <Col md={6}>
     <h2 className="product-title">{name}</h2>
     <Image src={image} alt={name} fluid className="product-image" />
    </Col>

    <Col md={6}>
     <Row style={{ marginBottom: '30px' }}>
      {cards.map((card, index) => (
       <Col key={index} md={4}>
        <Card className="details-card">
         <Card.Body>
          <Card.Title className="d-flex justify-content-center">
           <span style={{ fontSize: '1rem', marginRight: '10px' }}>
            {' '}
            {card.icon}
           </span>{' '}
           {card.title}
          </Card.Title>
          <hr />
          <div className="d-flex flex-column">
           <Button className="mb-2 btn-details">{card.buttonLabel1}</Button>
           <Button className="btn-details inactive">{card.buttonLabel2}</Button>
          </div>
         </Card.Body>
        </Card>
       </Col>
      ))}
     </Row>
     <Row style={{ marginBottom: '30px' }}>
      <Col>
       <h3>
        Choose Color:{' '}
        <span style={{ fontSize: '1.2rem' }}>{selectedColor.name}</span>
       </h3>
       <div className="d-flex">
        {colors.map((colorObj, index) => (
         <div
          key={index}
          className={`color-box ${
           selectedColor.name === colorObj.name ? 'active' : ''
          }`}
          style={{ backgroundColor: colorObj.color }}
          onClick={() => handleColorSelection(colorObj)}
         ></div>
        ))}
       </div>
      </Col>
     </Row>
     <Row style={{ marginBottom: '30px' }}>
      <Col>
       <h3>Select Variants ({variants.length})</h3>
       <div className="d-flex flex-column">
        {variants.map((variant, index) => (
         <Col key={index} md={12}>
          <Card
           className={`variant-card ${
            selectedVariant.id === variant.id ? 'active' : ''
           }`}
           onClick={() => handleVariantSelection(variant)}
          >
           <Card.Body className="d-flex justify-content-between">
            <Card.Title className="details-text">{variant.name}</Card.Title>
            <Card.Text className="details-text">{`Starts At: ${variant.price}`}</Card.Text>
           </Card.Body>
          </Card>
          {selectedVariant.id === variant.id && (
           <Row>
            <Col md={4}>
             <h4>Key Features</h4>
            </Col>
            <Col md={8}>
             <ul>
              {variant.features.map((feature, index) => (
               <li key={index}>{feature}</li>
              ))}
             </ul>
            </Col>
           </Row>
          )}
         </Col>
        ))}
       </div>
      </Col>
     </Row>
    </Col>
   </Row>
  </div>
 )
}

export default ProductInfoComponent
