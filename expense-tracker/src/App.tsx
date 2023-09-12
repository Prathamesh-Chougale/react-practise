// import Index from "./components/forms";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseDisplay from "./components/ExpenseDisplay";
import { useState } from "react";
import categories from "./components/categories";

function App() {
  const [category, setCategory] = useState(""); // ["All", "Groceries", "Utilities", "Entertainment"
  const [exprenses, setExprenses] = useState([
    { id: 1, description: "aaaaa", amount: 100, Categories: "Groceries" },
    { id: 2, description: "bbbb", amount: 100, Categories: "Groceries" },
    { id: 3, description: "cccc", amount: 100, Categories: "Groceries" },
    { id: 4, description: "dddd", amount: 100, Categories: "Groceries" },
  ]);

  const visibleExpenses = category
    ? exprenses.filter((e) => e.Categories === category)
    : exprenses;

  return (
    <div>
      <div className="mb-5">
        <ExpenseDisplay
          onAddExpense={(expense) =>
            setExprenses([
              ...exprenses,
              { ...expense, id: exprenses.length + 1 },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectedCategory={(category) => setCategory(category)}
        />
      </div>
      <div className="mb-3">
        <ExpenseList
          expenses={visibleExpenses}
          onDelete={(id) => console.log("Deleted", id)}
        />
      </div>
    </div>
  );
}

export default App;
