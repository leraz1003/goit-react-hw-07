import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import s from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

const ContactsList = () => {
  const contacts = useSelector(selectContacts);
  const searchStr = useSelector(selectNameFilter);

  const filteredData = contacts.filter((contact) =>
    contact.name.toLowerCase().trim().includes(searchStr.toLowerCase().trim())
  );

  return (
    <ul className={s.list}>
      {filteredData.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactsList;
