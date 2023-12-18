import React, { useState } from 'react';
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
        <div className="add-contact-form">
            <h2>Add a New Contact</h2>
            {/* Bootstrap form */}
            <form onSubmit={handleFormSubmit}>
                {/* ... (previous form fields) */}
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
