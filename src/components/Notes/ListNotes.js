import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import * as PropTypes from "prop-types";
import React from "react";
import ListNotes from "./ListNotes";
import EditNotes from "./EditNotes";

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

const notes = (props) => {
  const classes = useStyles();
  console.log(props);

  return (
    <div className={classes.rootStyle}>
      <Paper className={classes.paperStyle}>
        <Grid container spacing={3} direction="column">
          {props.noteList.map((list) => (
            <article key={list.id} className="NoteList">
              <h1>{list.title}</h1>
              <div className="Info">
                <div className="BodyList">{list.body}</div>
              </div>
            </article>
          ))}
        </Grid>
      </Paper>
    </div>
  );
};

export default notes;

notes.propTypes = {};
