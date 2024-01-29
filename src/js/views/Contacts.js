import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import ContactCard from '../component/contactCard';

// Component to display the list of contacts
const Contacts = () => {
  // Access the app context
  const { store, actions } = useContext(Context);

  // Load contacts when the component mounts
  useEffect(() => {
    actions.fetchContacts();
  }, [actions]);

  return (
    <div className="contacts-page">
      <Link to="/add-contact">
        <button className="btn btn-success">Add New Contact</button>
      </Link>

      {/* Map through contacts and render ContactCard for each */}
      {store.contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
};

export default Contacts;
