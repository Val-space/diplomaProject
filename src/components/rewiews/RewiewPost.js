import React from "react";
import Divider from "@material-ui/core/Divider";
import Moment from "react-moment";
import "../style/rewiews.css";

function RewiewPost({ post }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <h4>{post.userName} </h4>
        <span style={{ marginLeft: "1rem", color: "gray" }}>
          <Moment format="dddd Do MMM YY">{post.time}</Moment>
        </span>
      </div>

      <p className={"rewiew-comment"}>{post.text}</p>
      <Divider variant="fullWidth" component="li" />
    </>
  );
}

export default RewiewPost;
