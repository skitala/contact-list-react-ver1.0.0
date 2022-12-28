import { useState } from "react";

const Modal = ({ open, single, onClose }) => {
  const [updatedData, setUpdatedData] = useState({});
  const [name, updateName] = useState("");
  const [phoneNum, updatePhoneNum] = useState("");
  const [email, updateEmail] = useState("");

  const saveUpdatedContact = () => {
    updateContact();
  };
  const updateContact = async () => {
    const postReq = await fetch(`http://localhost:5000/contacts/${single.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    });
    return postReq.json();
  };

  const onChange = (e) => {
    let currentTarget = e.target.id;

    if (currentTarget === "name") {
      updateName(e.target.value);
    }
    if (currentTarget === "email") {
      updateEmail(e.target.value);
    }
    if (currentTarget === "phoneNum") {
      updatePhoneNum(e.target.value);
    }
    setUpdatedData({
      name: name,
      email: email,
      phoneNum: phoneNum,
    });
  };

  if (!open) return null;
  return (
    <div className="overlay" onClick={onClose}>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="modalCont"
      >
        <div className="content">
          <form className="contactItemForm">
            <p className="contactItemDetail">Name:</p>
            <input
              type="text"
              className="dataInputs"
              id="name"
              placeholder={single.name}
              onChange={onChange}
            />
            <p className="contactItemDetail">Phone Number:</p>

            <input
              type="number"
              className="dataInputs"
              id="phoneNum"
              placeholder={single.phoneNum}
              onChange={onChange}
            />
            <p className="contactItemDetail">Email:</p>

            <input
              type="email"
              className="dataInputs"
              id="email"
              placeholder={single.email}
              onChange={onChange}
            />
            <button
              type="submit"
              className="submitEditButton"
              onClick={saveUpdatedContact}
            >
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
