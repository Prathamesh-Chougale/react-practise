import { useEffect, useState } from "react";

const ExpenseList = ({ categories }: { categories: string }) => {
  const [expenses, setExpenses] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fectching data in", categories);
    setExpenses(["Clothing", "noice"]);
  }, [categories]); // [categories] is dependency after it changes useEffect will run
  //   }, []); // [] is dependency array * important
  return <div>ExpenseList</div>;
};

export default ExpenseList;
