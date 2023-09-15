import { useEffect, useRef, useState } from "react";
// import ExpenseList from "./components/ExpenseList";
import axios, { CanceledError } from "axios";

// const connect = () => {
//   console.log("connect");
// };

// const disconnect = () => {
//   console.log("disconnect");
// };

interface User {
  name: string;
  id: number;
}

function App() {
  // const ref = useRef<HTMLInputElement>(null);

  // const [categories, setCategories] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // useEffect(() => {
  //   //Side effect
  //   // if (ref.current) ref.current.focus();

  //   connect();

  //   return () => disconnect();
  // }, []);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    //   .finally(() => setIsLoading(false));
    // setIsLoading(false);//this will not work in development mode due to strict mode

    return () => controller.abort();
  }, []);

  useEffect(() => {
    document.title = "Prathamesh";
  }, []);

  const deleteUser = (user: User) => {
    const OriginalUser = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    axios
      .delete("https://jsonplaceholder.typicode.com/users" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(OriginalUser);
      });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item  d-flex justify-content-between"
          >
            {user.name}{" "}
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteUser(user)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );

  // return (
  //   <div>
  //     {/* <input type="text" className="form-class-control" /> */}
  //     <select
  //       name="cloth"
  //       id="cloth-1"
  //       className="form-select"
  //       onChange={(e) => setCategories(e.target.value)}
  //     >
  //       <option value=""></option>
  //       <option value="Clothes">Clothes</option>
  //       <option value="noice">noice</option>
  //     </select>
  //     <ExpenseList categories={categories} />
  //   </div>
  // );
}

export default App;
