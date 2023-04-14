import React, { useState, createContext } from "react";
import AddUser from "./componentsA/AddUser";
import UserList from "./ComponentsB/UserList";
import { AppContext } from "./context";

function LoadData() {
  const [users, setUsers] = useState([]);

  const dispatchUserEvent = (actionType, payload) => {
    switch (actionType) {
      case "ADD_USER":
        setUsers([payload.newUser]);
        return;

      default:
        return;
    }
  };

  return (
    <div className="coloum">
      <AppContext.Provider value={{ users, dispatchUserEvent }}>
        <div>
          <AddUser />
        </div>
        <div>
          <UserList />
        </div>
      </AppContext.Provider>
    </div>
  );
}

export default LoadData;
