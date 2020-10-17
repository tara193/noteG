import { Grid, IconButton, makeStyles, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

const useStyles = makeStyles((theme) => ({
  note: {
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#C0DDF5",
    },
    "&:active": {
      backgroundColor: "#C0DDF5",
    },
    h1: {
      padding: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  },
}));
const note = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container direction="row" justify="center" alignItems="center">
        <h1 className={classes.note} onClick={props.clicked}>
          {props.title}
        </h1>
        {/* <p className={classes.h1}>{props.body}</p> */}
        <IconButton
          aria-label="delete"
          className={classes.margin}
          onClick={props.deleted}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Grid>
    </Paper>
  );
};

export default note;
