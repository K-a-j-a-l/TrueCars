import React, { useState } from 'react';
import { Nav } from 'react-bootstrap';
import "../../style.css"

export default function AdminSidebar({ activeTab, handleTabChange }) {

  return (
    <div>
      <img
        src="https://img.freepik.com/premium-vector/car-company-logo-template_674522-78.jpg?w=740"
        alt="Company Logo"
        className="company-logo"
      />
      <div className="user-profile">
        <img
          src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
          alt="User Profile"
          className="profile-picture"
        />
        <p className="user-name">John Doe</p>
      </div>

      {/* Navigation */}
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link
            eventKey="dashboard"
            active={activeTab === 'dashboard'}
            onClick={() => handleTabChange('dashboard')}
          >
            Dashboard
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="profile"
            active={activeTab === 'profile'}
            onClick={() => handleTabChange('profile')}
          >
            Profile
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

