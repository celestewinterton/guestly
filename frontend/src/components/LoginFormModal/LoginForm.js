import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

function LoginForm() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    await dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    history.push("/events")
  };

  const demo = async (e) => {
    e.preventDefault();
    await dispatch(sessionActions.login({credential: 'demouser', password: 'password'}));
    return history.push("/events");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log into your account!</h3>
      <ul className="form-errors">
        {errors.map((error, idx) => (
          <li key={idx}><i class="fa-solid fa-triangle-exclamation"></i><span> </span>{error}</li>
        ))}
      </ul>
      <label>
        Username or Email
        <input
          type="text"
          value={credential}
          onChange={(e) => setCredential(e.target.value)}
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
      <button type="submit" onClick={(e) => handleSubmit(e)}>Log In</button>
      <button onClick={(e) => demo(e)}>Demo</button>
    </form>
  );
}

export default LoginForm;
