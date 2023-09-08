import Button from "./components/Button";
import { useState } from "react";
// import ListGroup from "./components/ListGroup";
// import Alert from "./components/alert";
import Alert_dismissal from "./components/Alert_dismissal";

function App() {
  // const items = ["delhi", "mumbai", "chennai", "kolkata"];
  const [show, setShow] = useState(false);
  return (
    <div>
      {show && (
        <Alert_dismissal onClose={() => setShow(false)}>Alert</Alert_dismissal>
      )}
      <Button color="danger" onClick={() => setShow(true)}>
        Submit
      </Button>
      {/* <Alert>
        Submit<p> this code</p>
        <Button color="secondary" onClick={() => console.log("hii")}>
          click here
        </Button>
      </Alert> */}
      {/* <ListGroup items={items} heading="cities" /> */}
      {/* This is the component we created in the previous step.*/}
      {/* <ListGroup /> */}
      {/* This is the component we created in the previous step.*/}
    </div>
  );
}

export default App;
