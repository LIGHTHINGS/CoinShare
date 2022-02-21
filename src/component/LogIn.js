import react from "react";

const Login = () =>{
    return(
        <div className="container ">
              <img id="logo" src={image}></img>
        <div className="row align-items-center">
          <div className="col-md-6 offset-md-4 mt-5 shadow mx-auto">
            <div className="signup-form">
              <h1 className="mt-5 text-center">Log in to your account</h1>
              <h6  className="text-center">To login in, please type in the email adrress and password</h6>
              <h6 className="text-center">linked to your CoinShare</h6>
            <form className="mt-5 p-5" method="POST" action="/">
          <div className="mb-3 col-md-9 mx-auto">
              <label className="mb-2" for="email"> Email Address </label>
              <input className="form-control" id="email" name="email" type='email'></input>
          </div>
          <div className="mb-3 col-md-9 mx-auto">
              <label className="mb-2" for="password"> Password </label>
              <input className="form-control" id="password" name="password" type='password'></input>
          </div>
        </form>
        <p className="text-center">Already have a CoinShare account? <a href="#" id="log">Log in</a></p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Login;