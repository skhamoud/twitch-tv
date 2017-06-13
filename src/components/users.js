import React from "react";

export default ({ users = [] }) => {
  const UsersList = users.map(user => {
    return (
      <li key={user._id} className="media">
        <div className=" media-left">
          <figure className=" image is-64x64">
            <img src={user.logo} alt={user.name} />
          </figure>
          <p>{user.name}</p>
        </div>
        <div className="media-content">
          <div className="content">
            <p>{user.bio}</p>
          </div>
        </div>
        <div className="media-right">
          <div className="level" />
        </div>
      </li>
    );
  });
  return (
    <ul className="container">
      {UsersList}
    </ul>
  );
};
