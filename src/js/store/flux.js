const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {
			// Action to load contacts from the API
			loadSomeData: async () => {
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

			// Action to add a new contact
			addContact: (contact) => {
				const store = getStore();
				const updatedContacts = [...store.contacts, contact];
				setStore({ contacts: updatedContacts });
			}
		}
	};
};

export default getState;
