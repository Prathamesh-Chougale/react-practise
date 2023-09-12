// import React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import categories from "./categories";

const schema = z.object({
  description: z
    .string({ invalid_type_error: "description is required" })
    .min(3, { message: "Description should be greater than 3 words" })
    .max(20),
  amount: z.number({ invalid_type_error: "Amount is required" }).min(1),
  categories: z.enum(categories, {
    errorMap: () => ({ message: "Please select a category" }),
  }),
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onAddExpense: (expense: ExpenseFormData) => void;
}

const ExpenseDisplay = ({ onAddExpense }: Props) => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <form
      onSubmit={handleSubmit((data) => {
        onAddExpense(data);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          id="description"
          type="text"
          className="form-control"
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
          {...register("amount", { valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="categories-1" className="form-label">
          Categories
        </label>
        <select
          {...register("categories")}
          name="categories"
          id="categories-1"
          className="form-select"
        >
          <option value="">All Categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        {errors.categories && (
          <p className="text-danger">{errors.categories.message}</p>
        )}
      </div>
      <div className="mb-3">
        <button className="btn btn-primary">Submit</button>
      </div>
    </form>
  );
};

export default ExpenseDisplay;
