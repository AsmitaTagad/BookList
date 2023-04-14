import React, { useContext } from "react";
import { AppContext } from "../context";
import "./UserList.css";

const UserList = () => {
  const { users } = useContext(AppContext);

  return (
    <div style={{ background: "#ececec", marginTop: "-20px" }}>
      <br />
      <h1
        className="text-success"
        style={{ marginTop: "30px", position: "relative", textAlign: "center" }}
      >
        BookList Table
      </h1>

      <div style={{ padding: "20px" }}>
        {users.map((user) => (
          <div>
            <table class="table">
              <thead>
                <tr>
                  <td>srNo</td>
                  <td>Title</td>
                  <td>Details</td>
                </tr>
              </thead>
              <tbody>
                {user.showdata.map((name) => (
                  <tr>
                    <th>{name.id}</th>
                    <td>{name.title}</td>
                    <td>{name.body}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserList;
