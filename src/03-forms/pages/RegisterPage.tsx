import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";
export const RegisterPage = () => {
  const {
    name,
    email,
    password1,
    password2,
    onChange,
    resetForm,
    isValidEmail,
  } = useForm({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          className={`${name.trim().length <= 0 && "has-error"}`}
        ></input>
        {name.trim().length <= 0 && <span>Este campo es necesario</span>}
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
          className={`${!isValidEmail(email) && "has-error"}`}
        ></input>
        {!isValidEmail(email) && <span>Not valid email</span>}
        <input
          type="password"
          name="password1"
          placeholder="Password"
          value={password1}
          onChange={onChange}
        ></input>
        {password1.trim().length <= 0 && <span>Mandatory field</span>}
        {password1.trim().length <= 6 && password1.trim().length > 0 && (
          <span>Password length greater than 6 characters</span>
        )}
        <input
          type="password"
          name="password2"
          placeholder="Repeat Password"
          value={password2}
          onChange={onChange}
        ></input>
        {password2.trim().length <= 0 && <span>Mandatory field</span>}
        {password2 !== password1 && <span>Passwords must be equal</span>}
        <button type="submit">Create</button>
        <button onClick={resetForm} type="button">
          Reset
        </button>
      </form>
    </div>
  );
};
