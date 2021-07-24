import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

function ModalRegistration() {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    let newUserData = { ...userData };
    newUserData[e.target.id] = e.target.value;
    setUserData(newUserData);
    console.log(newUserData);
  };
  const submitData = (e) => {
    e.preventDefault();

    setSubmitted(true);
    // handleClose();
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button color="default" onClick={handleClickOpen}>
        Sign in
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title "
      >
        <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here.
            We will send updates occasionally.
          </DialogContentText>

          <TextField
            onChange={(e) => handleSubmit(e)}
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            value={userData.email}
            type="email"
            fullWidth
          />
          <TextField
            onChange={(e) => handleSubmit(e)}
            autoFocus
            // error
            // helperText="some validation error."
            margin="dense"
            id="password"
            label="Password"
            value={userData.password}
            type="password"
            fullWidth
          />
          {submitted? <div>You are subscribed!</div> : '' }
     
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={submitData} type="submit" color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ModalRegistration;
