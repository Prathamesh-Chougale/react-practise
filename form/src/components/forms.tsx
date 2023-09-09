// import React,{FormEvent} from "react";

import { FormEvent, useRef } from "react";

export const forms = () => {
  const useName = useRef<HTMLInputElement>(null);
  const useAge = useRef<HTMLInputElement>(null);
  const person = { name: "prathamesh", age: 21 };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (useName.current !== null) person.name = useName.current.value;
    if (useAge.current !== null) person.age = Number(useAge.current.value);
    console.log(person);
  };

  return (
    <form
      onSubmit={
        handleSubmit
        // {event.preventDefault(); //this is used to prevent the default behaviour of the form
        // console.log("form submitted");}
      }
    >
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input ref={useName} id="name" type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input ref={useAge} id="name" type="number" className="form-control" />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default forms;
