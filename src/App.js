import ContactItemForm from "./components/ContactItemForm";
import ContactList from "./components/ContactList";
import FirstPage from "./components/FirstPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          {/* <Route path="/contact/:id" element={<ViewContact />} /> */}
          <Route path="/add-contact" element={<ContactItemForm />} />
          <Route path="/contact-list" element={<ContactList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
