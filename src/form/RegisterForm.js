import React from "react";
import { useForm } from "react-hook-form";



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

