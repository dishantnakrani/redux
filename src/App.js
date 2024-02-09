import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  incNumber,
  decNumber,
  incrementBy10,
  submitForm,
  deleteRow,
  editRow,
} from "./components/redux/action/drawerAction";
import { useState } from "react";

const initialState = {
  name: "",
  mobile_no: "",
  id: "",
};

function App() {
  const [formData, setFormData] = useState(initialState);
  const value = useSelector((state) => state.changeTheNumber);
  const table = useSelector((state) => state.formData);

  const dispatch = useDispatch();

  const onChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    let obj = {
      name: formData.name,
      mobile_no: formData.mobile_no,
      id: Date.now(),
    };
    dispatch(submitForm(obj));
    setFormData(initialState);
    console.log(obj);
  };

  const handleDelete = (id) => {
    dispatch(deleteRow(id));
  };
  const handleEdit = (event) => {
    setFormData({
      name: event.name,
      mobile_no: event.mobile_no,
      id: event.id,
    });
  };

  const handleUpdate = () => {
    dispatch(editRow(formData));
    setFormData(initialState);
  };

  return (
    <div style={{ padding: "100px" }}>
      <p>React Redux</p>
      <button onClick={() => dispatch(incNumber())}>Increment</button>

      <h5>{value}</h5>

      <button onClick={() => dispatch(decNumber())}>Decrement</button>

      <button onClick={() => dispatch(incrementBy10())}>increments +10</button>

      <br />
      <div style={{ paddingTop: "100px" }}>
        <input
          placeholder="Name"
          type={"text"}
          name="name"
          value={formData.name}
          onChange={onChange}
        />
        <br />
        <input
          placeholder="Mobile No"
          name="mobile_no"
          value={formData.mobile_no}
          type={"number"}
          onChange={onChange}
        />

        <br />
        <button onClick={formData.id == "" ? handleSubmit : handleUpdate}>
          {formData.id == "" ? "Submit" : "Update"}
        </button>

        <table>
          <thead>
            <th>Name</th>
            <th>Mobile No.</th>
            <th>Id</th>
            <th>Delete</th>
          </thead>
          <tbody>
            {table.formList.map((x) => {
              return (
                <tr>
                  <td>{x.name}</td>
                  <td>{x.mobile_no}</td>
                  <td>{x.id}</td>
                  <td>
                    <button onClick={() => handleDelete(x.id)}>X</button>
                  </td>
                  <td>
                    <button onClick={() => handleEdit(x)}>Edit</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
