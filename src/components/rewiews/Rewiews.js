import React, { useState } from "react";
import RewiewPost from "./RewiewPost";
import "../style/rewiews.css";
import Button from "@material-ui/core/Button";
// import Moment from 'react-moment';

function Rewiews() {
  const [rewiewList, setRewiewList] = useState([
    {
      userName: "Trusted Customer",
      text: "Very nice. Would definitely order again.",
      time: new Date('May 1, 2021'),
    },
    {
      userName: "Voldemar",
      text: "Lovely coffee. Every cup is a little treat",
      time: new Date('June 17, 2021'),
    },
  ]);
  const [value, setValue] = useState({ name: "", text: "" });

  const handleSubmit = (e) => {
    let newValue = { ...value };
    newValue[e.target.id] = e.target.value;
    setValue(newValue);
  };

  const addRewiew = (e) => {
    e.preventDefault();
    if (value.name.trim() && value.text.trim()) {
      setRewiewList([
        ...rewiewList,
        { userName: value.name, text: value.text, time: Date.now() },
      ]);
    }
    console.log(rewiewList);
  };

  return (
    <>
      <h2 style={{ marginTop: "5rem", marginBottom: "3rem" }}>Rewiews</h2>
      <form className={"form-rewiew"} onSubmit={addRewiew}>
        <input
          type="text"
          id="name"
          value={value.name}
          placeholder="what is your name?"
          onChange={(e) => handleSubmit(e)}
        />
        <textarea
          type="text"
          id="text"
          placeholder="leave your comment here"
          value={value.text}
          // onChange={(e) => setValue(e.target.value)}
          onChange={(e) => handleSubmit(e)}
        />

        <Button type="submit" color="default">
          Send
        </Button>
      </form>
      <div className={"comment-section"}>
        {rewiewList.map((i, index) => (
          <RewiewPost key={index + Math.random()} post={i} />
        ))}
      </div>
    </>
  );
}

export default Rewiews;
