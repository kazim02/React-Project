import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [userdata, setUserData] = useState({
    firstname: "",
    lastname: "",
  });
  const [usersdata, setUsersData] = useState([]);

  const [isupdate, setIsUpdate] = useState(false);
  const [updateUserData, setUpdateUserData] = useState(null);

  const SaveUserData = () => {
    setUsersData([...usersdata, userdata]);
    setUserData({
      firstname: "",
      lastname: "",
    });
  };

  const DeleteUserData = (item) => {
    setUsersData(usersdata.filter((userdata) => userdata != item));
  };

  const UpdateUserRowData = (item) => {
    setUpdateUserData(item);
    setUserData({
      ...userdata,
      firstname: item.firstname,
      lastname: item.lastname,
    });
    setIsUpdate(true);
  };

  const UpdateUserData = () => {
    let items = [...usersdata];
    let itemindex = items.indexOf(updateUserData);
    items[itemindex] = userdata;
    setUsersData(items);

    setIsUpdate(false);
    setUserData({
      firstname: "",
      lastname: "",
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div className="d-flex">
        <form>
          <label>
            {" "}
            First Name :
            <input
              type="text"
              placeholder="Enter Name"
              value={userdata.firstname}
              onChange={(e) =>
                setUserData({ ...userdata, firstname: e.target.value })
              }
            />
          </label>
          <label>
            {" "}
            Last Name :
            <input
              type="text"
              placeholder="Enter LastName"
              value={userdata.lastname}
              onChange={(e) =>
                setUserData({ ...userdata, lastname: e.target.value })
              }
            />
          </label>
        </form>
        {isupdate ? (
          <div style={{ marginLeft: "200px" }}>
            <button onClick={UpdateUserData}>Update</button>
          </div>
        ) : (
          <div style={{ marginLeft: "200px" }}>
            <button onClick={SaveUserData}>Save</button>
          </div>
        )}
      </div>
      <div className="d-flex">
        <table>
          <thead>
            <tr>
              <th>FirstName</th>
              <th>Last Name</th>
            </tr>
          </thead>
          <tbody>
            {usersdata && usersdata.length > 0
              ? usersdata.map((item, index) => {
                  return (
                    <tr>
                      <td>{item.firstname}</td>
                      <td>{item.lastname} </td>
                      <td>
                        <button onClick={() => DeleteUserData(item)}>
                          Delete
                        </button>
                      </td>
                      <td>
                        {" "}
                        <button onClick={() => UpdateUserRowData(item)}>
                          update
                        </button>
                      </td>
                    </tr>
                  );
                })
              : "No Data Found"}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
