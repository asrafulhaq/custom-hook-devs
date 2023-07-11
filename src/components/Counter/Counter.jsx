import useCounter from "../../hook/useCounter";

const Counter = () => {
  const { counter, increment, decrement } = useCounter(100);
  const { counter: count, increment: inc, decrement: desc } = useCounter(10);
  return (
    <>
      <h1>{counter}</h1>
      <hr />
      <button onClick={decrement}>--</button>
      <button onClick={increment}>++</button>
      <hr />
      <hr />
      <hr />

      <h1>{count}</h1>
      <hr />
      <button onClick={desc}>--</button>
      <button onClick={inc}>++</button>
    </>
  );
};

export default Counter;
