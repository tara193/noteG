import { makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  note: {
    width: "250px",
    padding: "16px",
    textAlign: "center",
    border: "1px solid #eee",
    boxShadow: "0 2px 3px #ccc",
    margin: "10px",
    boxSizing: "border-box",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#C0DDF5",
    },
    "&:active": {
      backgroundColor: "#C0DDF5",
    },
  },
}));
const note = (props) => {
  const classes = useStyles();
  return (
    <article className={classes.note} onClick={props.clicked}>
      <h1>{props.title}</h1>
      <p>{props.body}</p>
    </article>
  );
};

export default note;
