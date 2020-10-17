import { Button, Grid, makeStyles, Paper } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Note from "../../components/Note/Note";
import { noteAdd, noteDelete } from "../../store/actions";
import EditNote from "../EditNote/EditNote";

const useStyles = makeStyles((theme) => ({
  rootStyle: {
    padding: "25px 15px 43px 30px",
    backgroundColor: theme.palette.background.dark,
  },
  paperStyle: {
    width: "100%",
    marginBottom: theme.spacing(2),
    minHeight: "100%",
    backgroundColor: theme.palette.background.paper,
    margin: 5,
    padding: 10,
    maxWidth: 800,
  },
}));

const Notes = (props) => {
  const noteList = useSelector((state) => state.notes.list);
  const dispatch = useDispatch();
  const [edit, setEdit] = useState("");
  const classes = useStyles();
  const noteSelectedHandler = (id) => setEdit(id);
  const deleteNoteHandler = (id) => {
    setEdit(null);
    dispatch(noteDelete({ noteId: id }));
  };

  const addNoteHandler = () => props.history.push("/add-notes");

  return (
    <div className={classes.rootStyle}>
      <Paper className={classes.paperStyle}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => addNoteHandler()}
          >
            Add Note
          </Button>
        </Grid>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={3} sm={3}>
            {noteList.map((note) => (
              <Note
                key={note.id}
                title={note.title}
                body={note.body}
                clicked={() => noteSelectedHandler(note.id)}
                deleted={() => deleteNoteHandler(note.id)}
              />
            ))}
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* <Route path={props.match.url + "/:id"} exact component={EditNote} /> */}
            {edit ? <EditNote id={edit} /> : null}
          </Grid>
        </Grid>
        {/* {edit ? <EditNote id={edit} /> : null} */}
        {/* <Grid container direction="row" justify="center" alignItems="center">
        <Route path={props.match.url + "/:id"} exact component={EditNote} />
        
      </Grid> */}
      </Paper>
    </div>
  );
};

export default Notes;
