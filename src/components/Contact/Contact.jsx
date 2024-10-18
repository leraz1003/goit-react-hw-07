import s from "./Contact.module.css";
import userIcon from "../img/user.svg";
import tel from "../img/phone.svg";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={s.item}>
      <div>
        <div className={s.wrap}>
          <img src={userIcon} alt="user-logo" className={s.logo}></img>
          <p className={s.info}>{contact.name}</p>
        </div>

        <div className={s.wrap}>
          <img src={tel} alt="user-logo" className={s.logo}></img>
          <p className={s.info}>{contact.number}</p>
        </div>
      </div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
