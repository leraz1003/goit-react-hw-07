import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import s from "./ContactList.module.css";

// import { selectNameFilter } from "../../redux/filtersSlice";
import {
  // selectContacts,
  selectFilteredContacts,
} from "../../redux/contactsSlice";

const ContactsList = () => {
  // const contacts = useSelector(selectContacts);
  // const searchStr = useSelector(selectNameFilter);

  // const filteredData = contacts.filter((contact) =>
  //   contact.name.toLowerCase().trim().includes(searchStr.toLowerCase().trim())
  // );
  const filteredData = useSelector(selectFilteredContacts);
  return (
    <ul className={s.list}>
      {filteredData.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactsList;
