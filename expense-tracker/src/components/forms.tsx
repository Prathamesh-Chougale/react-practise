// import React from "react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z
    .string({ invalid_type_error: "Name is required" })
    .min(3, { message: "Name should be greater than 3" })
    .max(10, { message: "Name should be less than 10" }),
  amount: z
    .number({ invalid_type_error: "Number is required" })
    .min(18, { message: "Age should be greater than 18" })
    .max(60),
});

type FormData = z.infer<typeof schema>;

function Forms() {
  const {
    register,
    handleSubmit,
    formState: { errors }, //
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="description"
          placeholder="Another input placeholder"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          type="number"
          className="form-control"
          id="amount"
          placeholder="Another input placeholder"
          {...register("amount", { valueAsNumber: true })}
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
}

export default Forms;
