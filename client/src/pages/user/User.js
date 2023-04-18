import React, {useState,useEffect} from "react";
import axios from "axios";
import { getAuthUser, setAuthUser } from '../../helper/Storage'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
const User = () => {


  const auth = getAuthUser();
  const [user, setUser] = useState({
    name:  "" ,
    email:  "",
    password: "",
    phone:  "" ,
  });

  useEffect(() => {
    const auth = getAuthUser();
    setUser({
      name: auth?.name,
      email: auth?.email,
      password: "",
      phone: auth?.phone,
    });
  }, []);

  const handleSubmit = async (event) => {
    //event.preventDefault();
    try {
      const response = await axios.put(`http://localhost:8000/update/${auth.ID}`, user);
      setAuthUser(response.data);
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };



  return (
    <div className="login-container">
      <h1>Update Profile</h1>

      {user.err?.map((error, index) => (
        <Alert key={index} variant="danger" className="p-2">
          {error.msg}
        </Alert>
      ))}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Full Name"
            value={user?.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="email"
            placeholder="Email"
            value={user?.email}
            onChange={(e) =>
              setUser({ ...user, email: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            value={user?.password}
            onChange={(e) =>
              setUser({ ...user, password: e.target.value })
            }
          />
        </Form.Group>

        
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Phone Number"
            value={user?.phone}
            onChange={(e) =>
              setUser({ ...user, phone: e.target.value })
            }
          />
        </Form.Group>

        <Button
          className="btn btn-dark w-100"
          variant="primary"
          type="submit">
          Update
        </Button>
      </Form>
    </div>
  );
};

export default User;
