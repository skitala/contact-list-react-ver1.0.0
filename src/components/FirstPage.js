import ContactList from "./ContactList";
import { useNavigate } from "react-router-dom";

const FirstPage = ({ editContact, deleteContact, contact }) => {
  const navigate = useNavigate();
  const addContact = () => {
    navigate("/add-contact");
  };

  return (
    <div className="firstPageCont">
      <h1>Contacts</h1>
      <ContactList
        editContact={editContact}
        deleteContact={deleteContact}
        contact={contact}
      />
      <button className="addContactBtn" onClick={addContact}>
        Add New Contact
      </button>
    </div>
  );
};

export default FirstPage;
