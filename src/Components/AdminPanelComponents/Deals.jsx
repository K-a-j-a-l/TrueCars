import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Table } from 'react-bootstrap';
import AddDealForm from './AddDealForm';
import '../../style.css';

const Deals = () => {
  const [showForm, setShowForm] = useState(false);
  const [editDealData, setEditDealData] = useState(null);
  const [dealsData, setDealsData] = useState([]);

  useEffect(() => {
    // Fetch deals data from the API
    const fetchDeals = async () => {
      try {
        const token = sessionStorage.getItem('token');
        const myHeaders = new Headers();
        myHeaders.append('Authorization', `Bearer ${token}`);
        const requestOptions = {
          method: 'GET',
          headers: myHeaders,
          redirect: 'follow',
        };

        const response = await fetch(
          'http://20.235.246.99:8000/api/v1/getDeals',
          requestOptions
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch deals: ${response.status}`);
        }

        const result = await response.json();
        setDealsData(result.data); // Update state with fetched data
      } catch (error) {
        console.error('Error fetching deals:', error);
      }
    };

    fetchDeals();
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  console.log(dealsData);

  const handleAddDealClick = () => {
    setShowForm(true);
    setEditDealData(null); // Reset editDealData when adding a new deal
  };

  const handleEditDealClick = (deal) => {
    setEditDealData(deal);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Adjust the format as needed
  };

  return (
    <div>
      {showForm ? (
        <AddDealForm onClose={handleCloseForm} editDealData={editDealData} />
      ) : (
        <>
          <Row>
            <Col>
              <Button className="add-deal-button" onClick={handleAddDealClick}>
                Add New Deal
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Table striped hover className="deals-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Body Style</th>
                    <th>Pricing</th>
                    <th>Fuel Type</th>
                    <th>Created On</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.isArray(dealsData) &&
                    dealsData.map((deal) => (
                      <tr key={deal.id}>
                        <td>{deal.name}</td>
                        <td>{deal.brand}</td>
                        <td>{deal.BodyStyle}</td>
                        <td>{deal.pricingDetails.exShowroomPrice}</td>
                        <td>{deal.fuelType}</td>
                        <td>{formatTimestamp(deal.createdOn)}</td>
                        <td>
                          <Button
                            variant="info"
                            size="sm"
                            className="edit-button"
                            onClick={() => handleEditDealClick(deal)}
                          >
                            Edit
                          </Button>
                          <Button variant="danger" size="sm" className="delete-button">
                            Delete
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default Deals;
