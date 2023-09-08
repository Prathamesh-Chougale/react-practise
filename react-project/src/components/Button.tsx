interface Buttonprops {
  children: string;
  //   color?: string; //to make it optional
  color?: "primary" | "secondary" | "danger"; //to make it optional
  onClick: () => void;
}

function Button({ children, onClick, color }: Buttonprops) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
