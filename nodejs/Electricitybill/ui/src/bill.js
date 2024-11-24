import React, { useState } from "react";
import axios from "axios";

export default function Bill() {
  const [units, setUnits] = useState(0);
  const [bill, setBill] = useState(0);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:3001/", { units });
      setBill(res.data.bill);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <label>Enter units : </label>
        <input
          type="number"
          required
          onChange={(e) => {
            setUnits(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <h1>Bill amount : {bill > 0 ? bill : ""}</h1>
    </div>
  );
}
