import React, { useState } from "react";
import "../css/formValidation.css";
import { useForm } from "react-hook-form";
const FormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(errors);
  const [userInfo, setUserInfo] = useState();
  const onSubmit = (data) => {
    setUserInfo(data);
  };
  return (
    <div className="form-wrapper">
      <div> {JSON.stringify(userInfo)}</div>
      <h2>React Form Validation</h2>
      <hr />
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <label htmlFor="name"> Name</label>
        <input
          type="text"
          id="name"
          {...register("name", {
            required: "username is required",
            maxLength: 20,
          })}
          className="form-field"
        />
        <p style={{ color: "red" }}>{errors.name && errors.name.message}</p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          {...register("email", {
            required: "Email is required",
          })}
          className="form-field"
        />

        <p style={{ color: "red" }}>{errors.email && errors.email.message}</p>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          {...register("password", {
            required: "password is required",
          })}
          className="form-field"
        />

        <p style={{ color: "red" }}>
          {errors.password && errors.password.message}
        </p>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormValidation;
