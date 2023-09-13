// import Index from "./components/forms";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseDisplay from "./components/ExpenseDisplay";
import { useState } from "react";
// import categories from "./components/categories";

function App() {
  const [category, setCategory] = useState(""); // ["All", "Groceries", "Utilities", "Entertainment"
  const [exprenses, setExprenses] = useState([
    { id: 1, description: "aaaaa", amount: 100, Categories: "Groceries" },
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
              {
                ...expense,
                id: exprenses.length + 1,
                Categories: expense.categories as string, // as string is a type assertion
              },
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
          onDelete={(id) => setExprenses(exprenses.filter((e) => e.id !== id))}
        />
      </div>
    </div>
  );
}

export default App;
