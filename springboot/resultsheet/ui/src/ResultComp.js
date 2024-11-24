import React, { useState } from "react";
import axios from "axios";

export default function ResultComp() {
  const [s1m1, setSub1Mid] = useState(0);
  const [s1m2, setSub1End] = useState(0);
  const [s2m1, setSub2Mid] = useState(0);
  const [s2m2, setSub2End] = useState(0);
  const [s3m1, setSub3Mid] = useState(0);
  const [s3m2, setSub3End] = useState(0);
  const [s4m1, setSub4Mid] = useState(0);
  const [s4m2, setSub4End] = useState(0);
  const [finalResult, setFinalResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axios.post("http://127.0.0.1:8080/", {
        s1m1,
        s1m2,
        s2m1,
        s2m2,
        s3m1,
        s3m2,
        s4m1,
        s4m2,
      });

      console.log(resp.data);
      setFinalResult(resp.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <span>
            <label> Sub 1 Mid </label>{" "}
            <input
              type="text"
              onChange={(e) => {
                setSub1Mid(e.target.value);
              }}
            />
          </span>
          <span>
            <label> Sub 1 End </label>{" "}
            <input
              type="text"
              onChange={(e) => {
                setSub1End(e.target.value);
              }}
            />
          </span>
        </div>
        <div>
          <span>
            <label> Sub 2 Mid </label>{" "}
            <input
              type="text"
              onChange={(e) => {
                setSub2Mid(e.target.value);
              }}
            />
          </span>
          <span>
            <label> Sub 2 End </label>{" "}
            <input
              type="text"
              onChange={(e) => {
                setSub2End(e.target.value);
              }}
            />
          </span>
        </div>
        <div>
          <span>
            <label> Sub 3 Mid </label>{" "}
            <input
              type="text"
              onChange={(e) => {
                setSub3Mid(e.target.value);
              }}
            />
          </span>
          <span>
            <label> Sub 3 End </label>{" "}
            <input
              type="text"
              onChange={(e) => {
                setSub3End(e.target.value);
              }}
            />
          </span>
        </div>
        <div>
          <span>
            <label> Sub 4 Mid </label>{" "}
            <input
              type="text"
              onChange={(e) => {
                setSub4Mid(e.target.value);
              }}
            />
          </span>
          <span>
            <label> Sub 4 End </label>{" "}
            <input
              type="text"
              onChange={(e) => {
                setSub4End(e.target.value);
              }}
            />
          </span>
        </div>
        <button type="submit">Submit</button>
      </form>

      <div>
        <h1>Result : {finalResult}</h1>
      </div>
    </div>
  );
}
