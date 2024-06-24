import { useDispatch, useSelector } from "react-redux";
import * as actions from "../actions/CustomerActions";
import { useEffect, useState } from "react";

const CustomerComponent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getCustomerAction());
  }, []);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const customers = useSelector((state) => state.customers).listCustomer;
  const handleSubmit = (e) => {
    e.preventDefault();
    const customer = {
      name: name,
      address: address,
      phone: phone,
    };
    if (id === "") {
      dispatch(actions.addCustomerAction(customer));
    } else {
      dispatch(actions.updateCustomerAction(id, customer));
    }
    setId("");
    setName("");
    setAddress("");
    setPhone("");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Dien ten"
        />{" "}
        <br />
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Dien dia chi"
        />{" "}
        <br />
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Dien phone"
        />{" "}
        <br />
        <button type="submit">SAVE</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>STT</th>
            <th>NAME</th>
            <th>ADDRESS</th>
            <th>PHONE</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {customers &&
            customers.map((customer, key) => {
              return (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{customer.name}</td>
                  <td>{customer.address}</td>
                  <td>{customer.phone}</td>
                  <td>
                    <button
                      onClick={() => {
                        setId(customer.id);
                        setName(customer.name);
                        setAddress(customer.address);
                        setPhone(customer.phone);
                      }}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        dispatch(actions.deleteCustomerAction(customer.id));
                      }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default CustomerComponent;
