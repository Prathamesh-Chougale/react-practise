// import Index from "./components/forms";
import ExpenseList from "./components/ExpenseList";

function App() {
  const exprenses = [
    { id: "1", description: "aaaaa", amount: 100, Categories: "Groceries" },
    { id: "2", description: "bbbb", amount: 100, Categories: "Groceries" },
    { id: "3", description: "cccc", amount: 100, Categories: "Groceries" },
    { id: "4", description: "dddd", amount: 100, Categories: "Groceries" },
  ];

  return (
    <ExpenseList
      expenses={exprenses}
      onDelete={(id) => console.log("Deleted", id)}
    />
  );
}

export default App;
