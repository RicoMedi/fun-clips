import React from "react";
import "../"
import { useForm } from "react-hook-form";


export const LoginForm = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="form-container">
      
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <h2>LoginForm</h2>
        <label>
          Enter Username:
          <input
            {...register("username")}
            type="text"
            placeholder="Username"
          ></input>
        </label>
        <label>
          Enter Password:
          <input
            {...register("password")}
            type="password"
            placeholder="password"
          ></input>
        </label>
      </form>
    </div>
  );
};
