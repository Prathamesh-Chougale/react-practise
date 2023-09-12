// import React from 'react'

interface ExpenseItem {
  id: number;
  description: string;
  amount: number;
  Categories: string;
}

interface Props {
  expenses: ExpenseItem[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return <p>No expenses found</p>;

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Categories</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((a) => (
          <tr key={a.id}>
            <td>{a.description}</td>
            <td>{a.amount}</td>
            <td>{a.Categories}</td>
            <td>
              <button
                className="btn btn-outline-danger btn-sm"
                onClick={() => onDelete(a.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${expenses.reduce((acc, a) => a.amount + acc, 0).toFixed(2)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
