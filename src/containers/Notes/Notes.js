import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Note from "../../components/Note/Note";
import EditNote from "../EditNote/EditNote";
import "./Notes.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  notes: {
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    width: "80%",
    margin: "auto",
  }
}));

const Notes = (props) => {
  const noteList = useSelector((state) => state.notes.list);
  const error = useSelector((state) => state.notes.error);
  const classes = useStyles();
  const noteSelectedHandler = (id) => {
    props.history.push(`/notes/${id}`);
  };
  useEffect(()=> {
    noteSelectedHandler(id)
  },[])

  let notes = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
  if (!error) {
    notes = noteList.map((note) => {
      return (
        <Note
          key={note.id}
          title={note.title}
          body={note.body}
          clicked={() => noteSelectedHandler(note.id)}
        />
      );
    });
  }

  return (
    <div>
      <section className={classes.notes}>{notes}</section>
      <Route path={props.match.url + "/:id"} exact component={EditNote} />
    </div>
  );
};

export default Notes;
