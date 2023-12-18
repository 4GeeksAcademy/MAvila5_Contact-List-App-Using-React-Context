import React from 'react';

// Component to display a contact
const contactCard = ({ contact }) => {
    return (
        <div className="contact-card">
            <div className="contact-image">
                <i className="fa-solid fa-user"></i>
            </div>
            <div className="contact-info">
                <div className="contact-name">
                    {contact.firstName} {contact.lastName}
                </div>
                <div className="contact-address">
                    <i className="fa-solid fa-location-dot"></i>
                    {contact.streetName}
                </div>
                <div className="contact-phone">
                    <i className="fa-solid fa-phone"></i>
                    {contact.phoneNumber}
                </div>
                <div className="contact-email">
                    <i className="fa-solid fa-envelope"></i>
                    {contact.email}
                </div>
            </div>
            <div className="contact-icons">
                <i className="fa-solid fa-pencil"></i> {/* Edit icon */}
                <i className="fa-solid fa-trash-bin"></i> {/* Delete icon */}
            </div>
        </div>
    );
};

export default contactCard;
