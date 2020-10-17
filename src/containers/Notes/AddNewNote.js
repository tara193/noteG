import { Button, Grid, makeStyles, Paper, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { noteAdd } from "../../store/actions";

const useStyles = makeStyles((theme) => ({
  rootStyle: {
    backgroundColor: theme.palette.background.dark,
  },
  paperStyle: {
    width: "100%",
    marginBottom: theme.spacing(6),
    minHeight: "100%",
    backgroundColor: theme.palette.background.paper,
    textAlign: "center",
    padding: 10,
  },
}));

const AddNewNote = (props) => {
  const [data, setData] = useState({
    title: "",
    body: "",
    submitted: false,
  });
  const classes = useStyles();
  const dispatch = useDispatch();
  const postDataHandler = () => {
    dispatch(noteAdd({ title: data.title, body: data.body }));
    setData({ ...data, submitted: true });
  };

  let redirect = null;
  if (data.submitted) {
    redirect = <Redirect to="/notes" />;
  }
  return (
    <div className={classes.rootStyle}>
      {redirect}
      <Paper className={classes.paperStyle}>
        <Grid container direction="column" alignItems="center">
          <Grid item xs={12} sm={6}>
            <TextField
              type="text"
              value={data.title}
              label="Title"
              margin="normal"
              fullWidth
              variant="outlined"
              onChange={(event) =>
                setData({ ...data, title: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              multiline
              value={data.body}
              margin="normal"
              fullWidth
              variant="outlined"
              label="Body"
              onChange={(event) =>
                setData({ ...data, body: event.target.value })
              }
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={postDataHandler}
            >
              Save Note
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default AddNewNote;
