
interface LoginProps {
  handleLoginSubmitRoute: Function;
}

const Login = ({ handleLoginSubmitRoute }: LoginProps) => {

  const onSubmitLoginForm = (e: any) => {
    e.preventDefault();

    localStorage.setItem('USER_ID', '1');

    handleLoginSubmitRoute();
  }

  return (
    <div className="container">
      <div className="row">
        <form onSubmit={onSubmitLoginForm}>
          <div className="form-group mb-2 mt-4">
            <label >Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

          </div>
          <div className="form-group mb-4">
            <label>Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>

  );
};

export default Login;
