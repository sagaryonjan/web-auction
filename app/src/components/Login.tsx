import { useState } from "react";
import { login } from "../services/auth";

interface LoginProps {
  handleLoginSubmitRoute: Function;
}

const Login = ({ handleLoginSubmitRoute }: LoginProps) => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitLoginForm = async (e: any) => {
    e.preventDefault();

    try {
      const { data: user } = await login({ email, password });
      if (user) {
        localStorage.setItem('USER_ID', user.id);
        handleLoginSubmitRoute();
      }

    } catch (error: any) {
      if (error.response.status === 500) {
        setError(error.response.data.message);
      }
    }
  }

  const onChangeEmailAddress = (e: any) => {
    setEmail(e.target.value);
  }

  const onChangePassword = (e: any) => {
    setPassword(e.target.value)
  }

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={onSubmitLoginForm}>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}


          <div className="form-group mb-2 mt-4">
            <label >Email address</label>
            <input type="email"
              className="form-control"
              onChange={onChangeEmailAddress}
              aria-describedby="emailHelp"
              placeholder="Enter email" />

          </div>
          <div className="form-group mb-4">
            <label>Password</label>
            <input type="password"
              className="form-control"
              onChange={onChangePassword}
              placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

  );
};

export default Login;
