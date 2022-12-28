import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactItemForm = () => {
  const [contact, setContact] = useState({});
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    setContact({ ...contact, name: name, email: email, phoneNum: phoneNum });
    addContact();
    navigate("/");
  };

  const addContact = async () => {
    const postReq = await fetch("http://localhost:5000/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    });
    return postReq.json();
  };

  const onChange = (e) => {
    let currentTarget = e.target.id;

    if (currentTarget === "name") {
      setName(e.target.value);
    }
    if (currentTarget === "email") {
      setEmail(e.target.value);
    }
    if (currentTarget === "phoneNum") {
      setPhoneNum(e.target.value);
    }
  };

  const saveContact = () => {
    setContact({
      name: name,
      email: email,
      phoneNum: phoneNum,
    });
  };

  return (
    <div className="contactItemFormCont">
      <h1>Add New Contact</h1>
      <form className="contactItemForm" onSubmit={onSubmit}>
        <p className="contactItemDetail">Name:</p>
        <input
          type="text"
          className="dataInputs"
          id="name"
          onChange={onChange}
        />
        <p className="contactItemDetail">Phone Number:</p>

        <input
          type="number"
          className="dataInputs"
          id="phoneNum"
          onChange={onChange}
        />
        <p className="contactItemDetail">Email:</p>

        <input
          type="email"
          className="dataInputs"
          id="email"
          onChange={onChange}
        />
        <button type="submit" className="submitButton" onClick={saveContact}>
          Save contact
        </button>
      </form>
    </div>
  );
};

export default ContactItemForm;
