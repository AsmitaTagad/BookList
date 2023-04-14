import React, { useContext, useState } from "react";
import { AppContext } from "../context";

const AddUser = () => {
  const { dispatchUserEvent } = useContext(AppContext);

  const [showdata, setShowData] = useState([]);

  const handleAddUser = (e) => {
    e.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setShowData(data));

    dispatchUserEvent("ADD_USER", { newUser: { showdata } });
  };

  return (
    <div>
      <br />
      <h3
        className="text-success"
        style={{ marginTop: "30px", position: "relative", textAlign: "center" }}
      >
        Show List
      </h3>

      <button
        style={{ marginBottom: "2rem", backgroundColor: " rgb(38, 109, 202)" }}
        onClick={handleAddUser}
      >
        List
      </button>
    </div>
  );
};

export default AddUser;
