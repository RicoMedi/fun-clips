import React from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
<div style={{ margin: "10px" }}>
<NavLink to="/" activeClassName="active">
  Home
</NavLink>
</div>

export const RegisterForm = () => {
    const {register, handleSubmit}= useForm()
  

 
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Register Form</h2>
        <label>
          Enter your Username:
          <input {...register("username")}ype="text" placeholder="Username"></input>
        </label>
        <label>
          Enter your Password:
          <input {...register("password")} type="password" placeholder="password"></input>
        </label>
      </form>
     
    </div>
  )
}

