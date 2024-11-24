import React, { useState } from "react";

export default function Comp() {
  const [amount, setAmount] = useState(0);
  const [ans, setAns] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();

    setAns((amount * 84.48).toFixed(2));
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Enter amount in doller : </label>
        <input
          type="number"
          required
          onChange={(e) => setAmount(e.target.value)}
        />

        <div>
          <button type="submit">Convert</button>
        </div>
      </form>

      <div className="ans">Amount in indian rupees : {ans > 0 ? ans : ""}</div>
    </div>
  );
}
