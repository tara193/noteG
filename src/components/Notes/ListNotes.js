import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

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

  const listItemHandleClick = (list) => {
    props.history.push({ pathname: `/notes/${list.id}`, search : `?title=${list.title}&body=${list.body}`});
  };

  return (
    <div className={classes.rootStyle}>
      <Paper className={classes.paperStyle}>
        <Grid container spacing={3} direction="column">
          <List>
            {props.noteList.map((list) => (
              <ListItem
                key={list.id}
                onClick={() => listItemHandleClick(list)}
              >
                <ListItemText primary={list.title} secondary={list.body} />
                <ListItemSecondaryAction
                  onClick={() => props.onNoteDelete(list.id)}
                >
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
        </Grid>
      </Paper>
    </div>
  );
};

export default notes;

notes.propTypes = {};
