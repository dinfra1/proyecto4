import React from "react";
import "./styles/Usecard.css";

const UseCard = ({ user, deleteUser, setUpdateInfo, setFormClose }) => {
  const handleDelete = () => {
    deleteUser(user.id);
  };

  const handleUpdate = () => {
    setUpdateInfo(user);
    setFormClose(false)
  };

  return (
    <article className="user">
      <h1 className="user--name">
        {user.first_name.toUpperCase()} {user.last_name.toUpperCase()}
      </h1>
      <ul className="user--list">
        <li className="user--item">
          <span className="user--label">Email: </span>
          {user.email.toLowerCase()}
        </li>
        <li className="user--item">
          <span className="user--label">Birthday: </span>
          {user.birthday}
        </li>
      </ul>
      <footer className="user--footer">
        <button className="user--delete" onClick={handleDelete}>
          <i className="bx bxs-trash"></i>
        </button>
        <button className="user--btn" onClick={handleUpdate}>
          <i className="bx bx-edit-alt"></i>
        </button>
      </footer>
    </article>
  );
};

export default UseCard;
