// import Index from "./components/forms";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import ExpenseDisplay from "./components/ExpenseDisplay";
import { useState } from "react";
// import categories from "./components/categories";

interface categorie {
  id: number;
  description: string;
  amount: number;
  Categories: "Groceries" | "Utilities" | "Entertainment";
}

function App() {
  const [category, setCategory] = useState(""); // ["All", "Groceries", "Utilities", "Entertainment"
  const [exprenses, setExprenses] = useState<categorie[]>([]);

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
                Categories: expense.categories,
              },
            ])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectedCategory={(c) => setCategory(c)} />
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
