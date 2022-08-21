import { get, deleteById } from "../services/api.service";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Users() {
  let navigate = useNavigate();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { data },
      } = await get("user");
      setUsers(data);
    };
    fetchData();
  }, []);

  const deleteUser = async (id) => {
    await deleteById(`user/${id}`);
    window.location.reload();
  };

  return (
    <div className="view">
      <button
        onClick={() => {
          navigate("/add");
        }}
      >
        Add
      </button>

      <table className="styled-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user.email}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>
                  <button
                    onClick={() => {
                      navigate(`/edit/${user._id}`);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteUser(user._id)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Users;
