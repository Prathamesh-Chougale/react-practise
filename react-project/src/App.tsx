import ListGroup from "./components/ListGroup";

function App() {
  const items = ["delhi", "mumbai", "chennai", "kolkata"];
  return (
    <div>
      <ListGroup items={items} heading="cities" />
      {/* This is the component we created in the previous step.*/}
      {/* <ListGroup /> */}
      {/* This is the component we created in the previous step.*/}
    </div>
  );
}

export default App;
