// import React,{FormEvent} from "react";

// import { FormEvent, useRef } from "react";
import { useForm, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z
    .string({ invalid_type_error: "Name is required" })
    .min(3, { message: "Name should be greater than 3" })
    .max(10, { message: "Name should be less than 10" }),
  age: z
    .number({ invalid_type_error: "Number is required" })
    .min(18, { message: "Age should be greater than 18" })
    .max(60),
});

type FormData = z.infer<typeof schema>;

function Forms() {
  // const useName = useRef<HTMLInputElement>(null);
  // const useAge = useRef<HTMLInputElement>(null);
  // const person = { name: "prathamesh", age: 21 };

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   if (useName.current !== null) person.name = useName.current.value;
  //   if (useAge.current !== null) person.age = Number(useAge.current.value);
  //   console.log(person);
  // };

  const {
    register,
    handleSubmit,
    formState: { errors, isValid }, //
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form
      onSubmit={
        handleSubmit(onSubmit)
        // {event.preventDefault(); //this is used to prevent the default behaviour of the form
        // console.log("form submitted");}
      }
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          {...register("name")}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name && <p className="text-danger">{errors.name.message}</p>}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input
          {...register("age", { valueAsNumber: true })}
          id="name"
          type="number"
          className="form-control"
        />
        {errors.age && <p className="text-danger">{errors.age.message}</p>}
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
}

export default Forms;
