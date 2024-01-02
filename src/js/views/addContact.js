import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../store/appContext';

const addContact = () => {
    const { dispatch } = useAppContext();

    // State to manage form data
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        address: '',
    });

    // Function to handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Function to handle form submission
    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Dispatch action to add a new contact
        dispatch({ type: 'addContact', payload: { ...formData, id: Date.now() } });

        // Reset the form after submission
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            address: '',
        });
    };

    return (
        <div className="add-contact-form container text-center mt-5">
            <h2>Add a New Contact</h2>
            {/* Bootstrap form */}
            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="fullName" className="form-label">
                        Full Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                        Phone
                    </label>
                    <input
                        type="tel"
                        className="form-control"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                        Address
                    </label>
                    <textarea
                        className="form-control"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>

                <button type="submit" className="btn btn-primary">
                    Save
                </button>
                <Link to="/contacts">
                    <span className="ms-2">
                        <i className="fa-solid fa-arrow-left"></i> Or go back to Contacts
                    </span>
                </Link>
            </form>
        </div>
    );
};

export default addContact;
