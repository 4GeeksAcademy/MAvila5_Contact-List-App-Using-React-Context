import React from 'react';
import { useAppContext } from '../store/appContext';

// Component to display the list of contacts
const contacts = () => {
  
  // Access the app context
  const { state } = useAppContext();

  return (
    <div className="contacts-page">
      <Link to="/add-contact">
        <button className="btn btn-success">Add New Contact</button>
      </Link>

      {/* Map through contacts and render contactCard for each */}
      {state.contacts.map((contact) => (
        <contactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default contacts;
