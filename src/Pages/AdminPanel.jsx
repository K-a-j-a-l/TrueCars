import React, { useState, useEffect } from 'react';
import { Container, Row, Col, InputGroup, FormControl } from 'react-bootstrap';
import AdminSidebar from "../Components/AdminPanelComponents/AdminSidebar";
import Dashboard from "../Components/AdminPanelComponents/Dashboard";
import Profile from "../Components/AdminPanelComponents/Profile";
import "../style.css";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Check the screen size and set sidebarOpen accordingly
    const handleResize = () => {
      setSidebarOpen(window.innerWidth >= 768); // Adjust the breakpoint as needed
    };

    // Initial call to set sidebarOpen on mount
    handleResize();

    // Attach the event listener
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);

    // Close the sidebar on tab change in mobile screens
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Container fluid>
      <Row>
        {sidebarOpen && (
          <Col xs={12} md={2} className={`admin-sidebar ${window.innerWidth < 768 ? 'mobile-open' : ''}`}>
            <AdminSidebar activeTab={activeTab} handleTabChange={handleTabChange} />
          </Col>
        )}
        <Col xs={12} md={sidebarOpen ? 10 : 12}>
          <Row className="upper-tab">
            <Col xs={2} md={sidebarOpen ? 2 : 10} className="toggle-sidebar" onClick={handleToggleSidebar}>
              <span><i className="fa-solid fa-bars"></i></span>
            </Col>
            <Col xs={10} md={2}>
              <InputGroup>
                <FormControl placeholder="Search..." />
              </InputGroup>
            </Col>
          </Row>
          <Row className="content">
            <Col md={12}>
              <h3 className="content-heading"> {activeTab === 'dashboard' ? "Dashboard" : "Profile"}</h3>
              {activeTab === 'dashboard' && <Dashboard />}
              {activeTab === 'profile' && <Profile />}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
