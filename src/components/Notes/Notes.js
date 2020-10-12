import { Button } from "@material-ui/core";
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
    maxWidth: 1150,
  },
}));

const Notes = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.rootStyle}>
      <Paper className={classes.paperStyle}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-start"
        >
          <Button variant="contained" onClick={props.onAddNote}>Add</Button>
        </Grid>
        <Grid container spacing={3} direction="row">
          {/* <h1>Notes Edit page</h1> */}
          <ListNotes noteList={props.notesList} {...props} />
          {/* <EditNotes /> */}
        </Grid>
      </Paper>
    </div>
  );
};

export default Notes;
