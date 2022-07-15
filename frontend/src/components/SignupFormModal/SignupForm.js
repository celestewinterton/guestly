import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';
import { useHistory } from "react-router";

function SignupForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ fullname, email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  const demo = async (e) => {
    e.preventDefault();
    await dispatch(sessionActions.login({credential: 'demouser', password: 'password'}));
    return history.push("/events");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign up for your account!</h3>
      <ul className="form-errors">
        {errors.map((error, idx) => <li key={idx}><i class="fa-solid fa-triangle-exclamation"></i><span> </span>{error}</li>)}
      </ul>
      <label> Full Name
        <input
          type="text"
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
          required
        />
      </label>
      <label>
        Email
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Username
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Confirm Password
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <button type="submit" onClick={(e) => handleSubmit(e)}>Sign Up</button>
      <button onClick={(e) => demo(e)}>Demo</button>
    </form>
  );
}

export default SignupForm;
