import React from 'react'

const Footer = () => {
    return (
      <div className="bg-gray-800 container text-center py-3 text-gray-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="mb-4">
            <h5 className="text-primary-emphasis font-bold">Countries</h5>
            <ul className="list-none text-secondary">
              <li>Regions</li>
              <li>Cities</li>
              <li>Districts</li>
              <li>Airports</li>
              <li>Hotels</li>
            </ul>
          </div>
  
          <div className="mb-4">
            <h5 className="text-primary-emphasis font-bold">Homes</h5>
            <ul className="list-none text-secondary">
              <li>Apartments</li>
              <li>Resorts</li>
              <li>Villas</li>
              <li>Hostels</li>
              <li>Guest houses</li>
            </ul>
          </div>
  
          <div className="mb-4">
            <h5 className="text-primary-emphasis font-bold">
              Unique places to stay
            </h5>
            <ul className="list-none text-secondary">
              <li>Reviews</li>
              <li>Unpacked: Travel articles</li>
              <li>Travel communities</li>
              <li>Seasonal and holiday deals</li>
            </ul>
          </div>
  
          <div className="mb-4">
            <h5 className="text-primary-emphasis font-bold">Services</h5>
            <ul className="list-none text-secondary">
              <li>Car rental</li>
              <li>Flight Finder</li>
              <li>Restaurant reservations</li>
              <li>Travel Agents</li>
            </ul>
          </div>
        </div>
  
        <div className="mt-8 text-center">
          <div className="font-bold text-gray-400">Copyright © 2023 Alpha.</div>
        </div>
      </div>
    );
  };
  
export default Footer;
  