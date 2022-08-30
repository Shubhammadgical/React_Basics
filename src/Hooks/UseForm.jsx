import React from "react";
import { useForm } from "react-hook-form";
let rendercount = 0;
let show = true;
const UseForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    // defaultValues: {
    //   firstName: "",
    //   lastName: "",
    // },
  });
  const onSubmit = (data) => {
    show = false;
    console.log(data);
  };
  //   console.log(watch("firstName"));
  console.log(errors);
  rendercount++;
  return (
    <div style={{ textAlign: "center" }}>
      Render count : {rendercount}
      {show ? (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("firstName", { required: "This is required." })}
            placeholder="First Name"
          ></input>
          <p style={{ color: "red" }}>{errors.firstName?.message}</p>
          <input
            {...register("lastName", {
              required: "This is required.",
              minLength: { value: 5, message: "Min length is 5" },
            })}
            placeholder="Last Name"
          ></input>
          <p style={{ color: "red" }}>{errors.lastName?.message}</p>
          <input type="submit"></input>
        </form>
      ) : (
        <div style={{ color: "lightgreen" }}>Submitted</div>
      )}
    </div>
  );
};
export default UseForm;
