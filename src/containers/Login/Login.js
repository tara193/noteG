import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import { Route } from "react-router-dom";

const loginStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
    backgroundColor: theme.palette.background.dark,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  paperStyle: {
    backgroundColor: theme.palette.background.dark,
  },
}));

const Login = (props) => {
  const [user, setUser] = useState({
    login: { email: "note.test@test.com", password: "test" },
  });
  const classes = loginStyles();

  const handleSubmit = () => props.history.push('/notes');

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Paper
          style={{
            margin: 10,
            padding: 20,
          }}
          className={classes.paperStyle}
        >
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              defaultValue={user.login.email}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              defaultValue={user.login.password}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </div>
    </Container>
  );
};

export default Login;
