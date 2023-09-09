let count = 0;

function Message() {
  count++;
  return <h1>message no {count}</h1>;
}

export default Message;
