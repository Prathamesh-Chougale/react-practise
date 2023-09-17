import { useEffect, useRef, useState } from "react";
// import ExpenseList from "./components/ExpenseList";
import apiClient, { CanceledError } from "./services/api-client";

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

    apiClient
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

    apiClient
      .delete("https://jsonplaceholder.typicode.com/users/" + user.id)
      .catch((err) => {
        setError(err.message);
        setUsers(OriginalUser);
      });
  };

  const addUser = () => {
    const OriginalUser = [...users];
    const user: User = { id: users.length + 1, name: "Prathamesh" };
    setUsers([...users, user]);

    apiClient
      .post("https://jsonplaceholder.typicode.com/users", user)
      .then((res) => {
        {
          setUsers([...users, res.data]);
          setUsers(OriginalUser);
        }
      })
      .catch((err) => setError(err.message));
  };

  const updateUser = (user: User) => {
    const OriginalUser = [...users];
    const updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    apiClient.patch("/users/" + user.id, updatedUser).catch((err) => {
      setError(err.message);
      setUsers(OriginalUser);
    });
  };

  return (
    <>
      {error && <p className="text-danger">{error}</p>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb3" onClick={addUser}>
        ADD
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li
            key={user.id}
            className="list-group-item  d-flex justify-content-between"
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
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
