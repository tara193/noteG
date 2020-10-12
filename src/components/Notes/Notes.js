import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import EditNotes from "../../containers/Notes/EditNoteContainer";
import ListNotes from "./ListNotes";

const useStyles = makeStyles((theme) => ({
  rootStyle: {
    padding: "22px 22px 43px 22px",
  },
  paperStyle: {
    width: "100%",
    marginBottom: theme.spacing(2),
    minHeight: "100%",
    margin: 10,
    padding: 20,
    maxWidth: 1250,
  },
}));
const list = [
  { id: 1, title: "a", body: "aaaa" },
  { id: 2, title: "b", body: "bbbb" },
  { id: 3, title: "c", body: "cccc" },
];
const notes = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.rootStyle}>
      <Paper className={classes.paperStyle}>
        <Grid container spacing={3} direction="row">
          {/* <h1>Notes Edit page</h1> */}
          <ListNotes noteList={list} />
          <EditNotes />
        </Grid>
      </Paper>
    </div>
  );
};

export default notes;

notes.propTypes = {};
