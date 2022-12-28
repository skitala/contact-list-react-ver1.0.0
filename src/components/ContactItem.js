import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaRegFileExcel, FaEdit } from "react-icons/fa";
import ContactModal from "./ContactModal";

const ContactItem = ({ contact }) => {
  const [single, showContact] = useState([]);
  const [openModal, showModal] = useState(false);

  const navigate = useNavigate();
  const deleteContact = async () => {
    const postReq = await fetch(
      `http://localhost:5000/contacts/${contact.id}`,
      {
        method: "DELETE",
      }
    );
    navigate("/contact-list");
    return postReq.json();
  };

  const editContact = async () => {
    const response = await fetch(
      `http://localhost:5000/contacts/${contact.id}`
    );
    const contactData = await response.json();

    showContact(contactData);
    showModal(true);
  };
  return (
    <div className="contact-item">
      <p className="dataFields">{contact.name}</p>
      <br />

      <p>{contact.phoneNum}</p>
      <br />

      <p>{contact.email}</p>
      <div className="btnsCont">
        <button className="editBtn" onClick={() => editContact()}>
          <FaEdit />
        </button>
        <button className="deleteBtn" onClick={() => deleteContact()}>
          <FaRegFileExcel />
        </button>
      </div>
      <br />
      <ContactModal
        single={single}
        open={openModal}
        editContact={editContact}
        deleteContact={deleteContact}
        onClose={() => showModal(false)}
      />
    </div>
  );
};

export default ContactItem;
