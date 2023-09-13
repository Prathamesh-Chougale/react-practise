import { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    //Side effect
    if (ref.current) ref.current.focus();
  }, []);

  useEffect(() => {
    document.title = "Prathamesh";
  }, []);

  return (
    <div>
      <input type="text" className="form-class-control" />
    </div>
  );
}

export default App;
