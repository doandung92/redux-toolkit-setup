import React from "react";
import { useDispatch, useSelector } from "react-redux";
import countActions from "../actions/count";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="abc">
      <button onClick={() => dispatch(countActions.increment(1))}>+</button>
      Current: {count}
      <button onClick={() => dispatch(countActions.decrement(1))}>-</button>
    </div>
  );
};

export default Counter;
