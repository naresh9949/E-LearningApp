import { Container } from "@mui/material";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Switch from "@mui/material/Switch";

function EditButton(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        color="inherit"
        onClick={handleClickOpen}
        color="secondary"
        variant="contained"
        size="small"
      >
        EDIT
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <TextField
            sx={{ width: "500px" }}
            autoFocus
            defaultValue="nflkewnfkn kefnekrf"
            margin="dense"
            id="name"
            label={props.title}
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" size="small" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" size="small" onClick={handleClose}>
            save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const PreferanceRow = (props) => {
  const [checked, setChecked] = React.useState(true);
  const switchButton = props.switch;
  var widget =  <ArrowRightIcon/>;

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  if(switchButton){
  widget = <Switch
  checked={checked}
  onChange={handleChange}
  inputProps={{ "aria-label": "controlled" }}
/> 
  }


  return (
    <Alert
      color="info"
      overflow="hidden"
      className="alert-row"
      icon={false}
      action={
        widget
      }
    >
      <AlertTitle>{props.title}</AlertTitle>
      <p className="usr-text">{props.value}</p>
    </Alert>
  );
};

const AccountRow = (props) => {
  return (
    <Alert
      color="info"
      overflow="hidden"
      className="alert-row"
      icon={false}
      action={<EditButton title={props.title} />}
    >
      <AlertTitle>{props.title}</AlertTitle>
      <p className="usr-text">{props.value}</p>
    </Alert>
  );
};

const General = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <AccountRow title="ACCOUNT NAME" value="NARESH KOLLIPORA" />
      <hr />
      <AccountRow title="EMAIL" value="nareshkollipora @gmail.com" />
      <hr />
      <AccountRow title="CONTACT NUMBER" value="+91 8310946163" />
      <hr />
      <AccountRow
        title="MY ADDRESS"
        value="A.Rangampet, Tirupati, AP, PIN:524239"
      />
    </Stack>
  );
};

const Preferences = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <PreferanceRow
        switch={false}
        title="RESET PASSWORD"
        value="Change password for your account here"
      />
      <hr />
      <PreferanceRow
        switch={true}
        title="MARKETING EMAIL NOTIFICATIONS"
        value="Control receiving marketing emails from here"
      />
    </Stack>
  );
};

const Education = () => {
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <AccountRow title="INSTITUTION NAME" value="SREE VIDYANIKETHAN ENGINEERING COLLEGE,TIRUPATI" />
      <hr />
      <AccountRow title="BRANCH" value="computer science and engineering" />
    </Stack>
  );
};

function MyAccout() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <h3 className="home-titles">Account</h3>
      <Container className="user-container">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab label="general" value="1" />
                <Tab label="preferences" value="2" />
                <Tab label="education" value="3" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <General />
            </TabPanel>
            <TabPanel value="2">
              <Preferences />
            </TabPanel>
            <TabPanel value="3">
              <Education/>
            </TabPanel>
          </TabContext>
        </Box>
      </Container>
      <p>&nbsp;</p>
    </Container>
  );
}

export default MyAccout;
