import React from "react";
import ContactItem from "./ContactItem";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const ContactList = () => {
  const [loadContacts, showloadedContacts] = useState([]);
  const [searched, setSearched] = useState("");

  const navigate = useNavigate();
  const contactListContainerRef = useRef("");

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    const response = await fetch("http://localhost:5000/contacts");
    const data = await response.json();

    // console.log(data);
    showloadedContacts(data);
  };

  const showOrHide = (e) => {
    if (loadContacts && e.target.innerText === "Hide contacts") {
      contactListContainerRef.current.style.display = "none";
      e.target.innerText = "Show contacts";
    } else if (loadContacts && e.target.innerText === "Show contacts") {
      contactListContainerRef.current.style.display = "flex";
      e.target.innerText = "Hide contacts";
    }
  };

  const onChange = (e) => {
    setSearched(e.target.value);

    console.log(searched);
    // }
  };

  const submitSearch = () => {
    console.log(searched);
    if (searched === "") {
      // return;
      showloadedContacts(loadContacts);
      // showloadedContacts(loadContacts);
    } else {
      let searchValue = [...loadContacts].filter((contact) => {
        // console.log(contact.name);
        let searchedContact = [searched].includes(contact.name.toLowerCase());
        console.log(searchedContact);
        return searchedContact;
      });
      showloadedContacts(searchValue);
    }
  };

  return (
    <div className="contactListPageCont">
      <div className="home-SearchBtnCont">
        <button className="homeBtn" onClick={() => navigate("/")}>
          Home
        </button>

        <div className="searchCont">
          <input type="text" className="searchInput" onChange={onChange} />
          <button className="searchBtn" onClick={submitSearch}>
            <FaSearch />
          </button>
        </div>
      </div>
      <ul ref={contactListContainerRef} className="dotRemoval">
        <li>
          {[...loadContacts].map((contact, idx) => (
            <ContactItem contact={contact} key={idx} />
          ))}
        </li>
      </ul>

      <button className="hide-showContactsBtn" onClick={showOrHide}>
        {loadContacts ? "Hide contacts" : "Show contacts"}
      </button>
    </div>
  );
};

export default ContactList;
