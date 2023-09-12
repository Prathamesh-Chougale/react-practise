// import React from "react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  description: z.string({ invalid_type_error: "Name is required" }),
  amount: z.number({ invalid_type_error: "Number is required" }),
  Categories: z.string({ invalid_type_error: "Category is required" }),
});

type FormData = z.infer<typeof schema>;

function Forms() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors }, //
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FormData) => console.log(data);
  return (
    <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}
    >
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
      <div className="mb-3">
        <label htmlFor="Categories" className="form-label">
          Categories
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="Categories"
          {...register("Categories")}
        >
          <option value="Groceries">Groceries</option>
          <option value="Utility">Utility</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
      <div className="mb-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <div className="mb-3">
        <label htmlFor="Categories" className="form-label">
          Select Categories
        </label>
        <select
          className="form-select"
          aria-label="Default select example"
          id="Categories"
        >
          <option selected value="All">
            All Categories
          </option>
          <option value="Groceries">Groceries</option>
          <option value="Utility">Utility</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>
    </form>
  );
}

export default Forms;
