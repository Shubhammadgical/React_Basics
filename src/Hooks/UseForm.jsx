import React from "react";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

let rendercount = 0;
let show = true;
const Input = ({ label, register, required }) => (
  <>
    <label>{label}</label>
    <input {...register(label, { required: "This is required" })} />
  </>
);

const Select = React.forwardRef(({ onChange, onBlur, name, label }, ref) => (
  <>
    <label>{label}</label>
    <select name={name} ref={ref} onChange={onChange} onBlur={onBlur}>
      <option value="20">20</option>
      <option value="30">30</option>
    </select>
  </>
));
// const schema = yup
//   .object({
//     oldName: yup.string().required(),
//     newage: yup.number().positive().integer().required(),
//   })
//   .required();
const UseForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      working: "off",
    },
    // resolver: yupResolver(schema),
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

          <div>
            <select {...register("gender")}>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="other">other</option>
            </select>
          </div>
          <br />
          <div>
            <input type="radio" {...register("working")}></input>
            Working
          </div>
          <div>
            <input type="checkbox" {...register("married")}></input>
            Working
          </div>
          <input
            type="email"
            {...register("email", {
              required: "Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "invalid email address",
              },
            })}
          />
          <br />
          <p style={{ color: "red" }}>{errors.email && errors.email.message}</p>
          <br />
          <br />
          <br />
          <h1>By using function</h1>
          <Input label="NewName" register={register} required />
          <p style={{ color: "red" }}>{errors.NewName?.message}</p>
          <Select label="Age" {...register("Age")} />
          <br />
          <br />
          <br />
          {
            /* <h1>By using Schema validation</h1>
          <input {...register("oldName")} />
          <p>{errors.oldName?.message}</p>

          <input {...register("newage")} />
          <p>{errors.newage?.message}</p>*/
            <input type="submit"></input>
          }
        </form>
      ) : (
        <div style={{ color: "lightgreen" }}>Submitted</div>
      )}
    </div>
  );
};
export default UseForm;
