import { Button, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import * as PropTypes from "prop-types";
import React from "react";

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
  const handleSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className={classes.rootStyle}>
      <Paper className={classes.paperStyle}>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-start"
        >
          <Button onClick={props.onAddNote}>Add</Button>
        </Grid>
        <Grid container spacing={3}>
          <form noValidate onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              fullWidth
              id="title"
              label="Title"
              name="Title"
              variant="outlined"
            //   value={props.note.title}
            />
            <TextField
              id="note-body"
              label="Body"
              margin="normal"
              multiline
              fullWidth
              variant="outlined"
            //   value={props.note.body}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Save
            </Button>
          </form>
        </Grid>
      </Paper>
    </div>
  );
};

export default notes;

notes.propTypes = {};
