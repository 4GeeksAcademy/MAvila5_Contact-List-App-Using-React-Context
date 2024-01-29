const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {
			// Action to load contacts from the API
			fetchContacts: async () => {
				try {
					const response = await fetch('https://playground.4geeks.com/apis/fake/contact/');
					if (response.ok) {
						const data = await response.json();
						setStore({ contacts: data });
					}
				} catch (error) {
					console.error("Error fetching contacts:", error);
				}
			},

			// Action to add a new contact via API
			addContact: async (contactData) => {
				try {
					const response = await fetch('https://playground.4geeks.com/apis/fake/contact/', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(contactData)
					});
					if (response.ok) {
						getActions().fetchContacts(); // Reload contacts after adding
					}
				} catch (error) {
					console.error("Error adding a contact:", error);
				}
			},

			// Action to update a contact via API
			updateContact: async (contactId, updatedData) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
						method: 'PUT',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(updatedData)
					});
					if (response.ok) {
						getActions().fetchContacts(); // Reload contacts after updating
					}
				} catch (error) {
					console.error("Error updating contact:", error);
				}
			},

			// Action to delete a contact via API
			deleteContact: async (contactId) => {
				try {
					const response = await fetch(`https://playground.4geeks.com/apis/fake/contact/${contactId}`, {
						method: 'DELETE'
					});
					if (response.ok) {
						getActions().fetchContacts(); // Reload contacts after deleting
					}
				} catch (error) {
					console.error("Error deleting contact:", error);
				}
			}
		}
	};
};

export default getState;
