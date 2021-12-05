import React from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function UploadScreen() {
  const [value, setValue] = React.useState("");
  const [open, setOpen] = React.useState({
    open: false,
    status: "",
  });

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const uploadCourse = () => {
    try {
      const course = JSON.parse(value);
      setOpen({
        open: true,
        status: "success",
        msg: "course uploaded successfully",
      });
    } catch (err) {
      setOpen({ open: true, status: "error", msg: "check the JSON syntax" });
    }
  };
  return (
    <Container sx={{ padding: 4 }} align="center">
      <Snackbar open={open.open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity={open.status}
          sx={{ width: "100%" }}
        >
          {open.msg}
        </Alert>
      </Snackbar>
      <TextField
        sx={{ width: "100%", height: "100%" }}
        multiline
        rows={20}
        value={value}
        onChange={handleChange}
      />
      <br />
      <br />
      <Button variant="contained" onClick={uploadCourse}>
        save
      </Button>
    </Container>
  );
}

export default UploadScreen;
