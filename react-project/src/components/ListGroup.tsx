// import 'bootstrap/dist/css/bootstrap.min.css'
// import { MouseEvent } from "react";
import { useState } from "react";
//props
interface Props {
  items: string[];
  heading: string;

  //we can call a function that returns a string,int or boolean
}
// function ListGroup(props: Props) {
function ListGroup({ items, heading }: Props) {
  //   let selected = 0;

  //hook
  const [selected, setSelected] = useState(-1);

  // const items = []

  //via trinary operator
  // const message = items.length === 0 ? 'no items found' : null

  //via function
  //   function message() {
  //     if (items.length === 0) return <h1>no items found</h1>;
  //     return null;
  //   }

  //event handler
  //   const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>
      {/* {message()} */}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selected === index ? "list-group-item active" : "list-group-item"
            }
            // onClick={() => console.log(item)}
            //onClick={handleClick} //event object is passed by default to the event handler function
            onClick={() => setSelected(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
