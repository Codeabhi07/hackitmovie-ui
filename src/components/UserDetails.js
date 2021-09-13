import React from "react";
import {
  makeStyles,
  TextField,
  FormControl,
  Button,
  Grid
} from "@material-ui/core";
import clsx from "clsx";

function isEmail(email) {
              
  var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regexp.test(String(email).toLowerCase());
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column"
  },
  margin: {
    margin: theme.spacing(1)
  },
  textField: {
    width: 250
  },
  input: { marginTop: theme.spacing(0) },
  button: { margin: theme.spacing(1) }
}));

export default (props) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <FormControl>
        <TextField
          id="name-input"
          label="Name"
          variant="outlined"
          name="name"
          value={props.inputs.name}
          onChange={props.handleInputChange}
          className={clsx(classes.margin, classes.textField)}
          required
        />
      </FormControl>
      <FormControl>
        <TextField
          id="email-input"
          label="Email"
          className={clsx(classes.margin, classes.textField)}
          type="email"
          name="email"
          value={props.inputs.email}
          autoComplete="email"
          variant="outlined"
          onChange={props.handleInputChange}
          required
        />
      </FormControl>
      {isEmail(props.inputs.email) ? (<Button
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={props.handleConfirm}
      >CONFIRM
      </Button>) :(<Button
        variant="contained"
        color="primary"
        disabled
        className={classes.button}
        onClick={props.handleConfirm}
      >CONFIRM
      </Button>)}
    </Grid>
  );
};
