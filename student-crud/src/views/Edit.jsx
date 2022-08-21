import { useEffect, useState } from "react";
import { patch, get } from "../services/api.service";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

function Edit() {
  let navigate = useNavigate();
  let params = useParams();

  const [formdata, setformdata] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const {
        data: { data },
      } = await get(`user/${params.id}`);
      setformdata(data[0]);
    };
    fetchData();
  }, []);

  const submit = async () => {
    await patch(`user/${params.id}`, formdata);
    navigate("/");
  };

  return (
    <div className="view add-view">
      <div className="form">
        <div className="form-input">
          <label htmlFor="first_name">First Name</label>
          <input
            type="text"
            name="first_name"
            defaultValue={formdata.first_name}
            onChange={(e) => {
              setformdata((prevState) => ({
                ...prevState,
                first_name: e.target.value,
              }));
            }}
          />
        </div>
        <div className="form-input">
          <label htmlFor="last_name">Last Name</label>
          <input
            type="text"
            name="last_name"
            defaultValue={formdata.last_name}
            onChange={(e) => {
              setformdata((prevState) => ({
                ...prevState,
                last_name: e.target.value,
              }));
            }}
          />
        </div>
        <div className="form-input">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            defaultValue={formdata.email}
            onChange={(e) => {
              setformdata((prevState) => ({
                ...prevState,
                email: e.target.value,
              }));
            }}
          />
        </div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}

export default Edit;
