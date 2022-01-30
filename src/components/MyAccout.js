import { Container } from "@mui/material";
import React,{useState,useEffect} from "react";
import Tabs from "@mui/material/Tabs";
import Autocomplete from "@mui/material/Autocomplete";
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
import {getUser} from './Utilities/UserHandler';
import {Post,Get} from './Utilities/AxiosHandler';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function EditButton(props) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(props.value?props.value:'');
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const save = async() => {
    await props.handler(value);
    setOpen(false);
  }


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
      <Dialog open={open} fullWidth onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            sx={{ width:'30'}}
            value={value}
            margin="dense"
            label={props.title}
            fullWidth
            size="small"
            onChange={(event)=>{setValue(event.target.value)}}
            variant="outlined"
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" size="small" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" size="small" onClick={save}>
            save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function SelectBranch(props) {
  const [open, setOpen] = React.useState(false);
  const [branch, setBranch] = React.useState(props.value?props.value:'');
  const [branchs, setBranchs] = React.useState([]);

  const handleChange = (event) => {
    setBranch(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const save = async() => {
    props.handler(branch);
    setOpen(false);
  }

  useEffect(async () => {
      const res = await Get('/api/home/getBranches');
      setBranchs(res.data);
  },[])

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
      <Dialog open={open} fullWidth onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
          
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Branch</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={branch}
          label="Select Branch"
          size="small"
          onChange={handleChange}
        >
          {branchs.map((item) => (
                <MenuItem value={item}>{item}</MenuItem>
              ))}
         
        </Select>
      </FormControl>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" size="small" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" size="small" onClick={save}>
            save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}


function SelectInstitute(props) {
  const [open, setOpen] = React.useState(false);
  const [institutes, setInstitutes] = useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [institute, setInstitute] = useState(props.value?props.value:'');
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const save = async() => {
    props.handler(institute);
    setOpen(false);
  }

  useEffect(async () => {
      const res = await Get('/api/home/getInstitutions');
      setInstitutes(res.data);
  },[])

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
      <Dialog open={open} fullWidth onClose={handleClose}>
        <DialogTitle>{props.title}</DialogTitle>
        <DialogContent>
        <Autocomplete
        value={institute}
        onChange={(event, institute) => {
          setInstitute(institute);
        }}
        size="small"
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={institutes}
        fullWidth
        renderInput={(params) => <TextField {...params} label="Institute" />}
      />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" size="small" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" size="small" onClick={save}>
            save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}



const PreferanceRow = (props) => {
  const [checked, setChecked] = React.useState(props.checked);
  const switchButton = props.switch;
  var widget =  <ArrowRightIcon/>;

  const handleChange = (event) => {
    props.handler(event.target.checked);
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
  var widget=<EditButton title={props.title} value={props.value} handler={props.handler}/>
  if(props.email)
    widget = <React.Fragment></React.Fragment>

  if(props.branch)
    widget = <SelectBranch title={props.title} value={props.value} handler={props.handler}/>

  if(props.institute)
    widget = <SelectInstitute title={props.title} value={props.value} handler={props.handler}/>

  return (
    <Alert
      color="info"
      overflow="hidden"
      className="alert-row"
      icon={false}
      action={widget}
    >
      <AlertTitle>{props.title}</AlertTitle>
      <p className="usr-text">{props.value?props.value:'NOT AVAILABLE'}</p>
    </Alert>
  );
};



const General = () => {
  const[user,setUser] = useState(getUser);
  
  const first_name = user.first_name?user.first_name:'';
  const last_name = user.last_name?user.last_name:'';
  const email = user.email;
  const mobile = user.mobile;
  const address = user.address;

  const handleMobileUpdate = async(mobile) => {
      const res = await Post('/api/user/updateuseraccount',{mobile:mobile});
      setUser(getUser);
  }

  const handleAddressUpdate = async(address) => {
    const res = await Post('/api/user/updateuseraccount',{address:address});
    setUser(getUser);
}

const handleNameUpdate = async(name) => {
  var names = name.split(' ');
  const first_name = names.length>=1?names[0]:'';
  const last_name = names.length>=2?names[1]:'';
  const res = await Post('/api/user/updateuseraccount',{first_name:first_name,last_name:last_name});
  setUser(getUser);
}
  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
      <AccountRow title="ACCOUNT NAME" value={first_name+" "+last_name} handler={handleNameUpdate} />
      <hr />
      <AccountRow title="EMAIL" value={email} email={true}/>
      <hr />
      <AccountRow title="CONTACT NUMBER" value={mobile} handler={handleMobileUpdate} />
      <hr />
      <AccountRow
        title="MY ADDRESS"
        value={address}
        handler={handleAddressUpdate}
      />
    </Stack>
  );
};

const Preferences = () => {
  const[user,setUser] = useState(getUser);
  
  const isNotificationsAllowed = user.isNotificationsAllowed;

  const handleNotificationUpdate = async(notification) => {
    const res = await Post('/api/user/updateusernotification',{isNotificationsAllowed:notification});
    setUser(getUser);
}
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
        handler={handleNotificationUpdate}
        checked={isNotificationsAllowed}
      />
    </Stack>
  );
};

const Education = () => {
  const[user,setUser] = useState(getUser);

  const branchHandler = async(branch) => {
    const res = await Post('/api/user/updateuseraccount',{branch:branch});
    setUser(getUser);
  }

  const instituteHandler = async(institute) => {
    const res = await Post('/api/user/updateuseraccount',{institute_name:institute});
    setUser(getUser);
  }

  return (
    <Stack sx={{ width: "100%" }} spacing={2}>
       <AccountRow branch={true} value={user.branch} title="BRANCH" handler={branchHandler} />
       <hr/>
      <AccountRow institute={true} title="INSTITUTION NAME" value={user.institute_name} handler={instituteHandler}/>
      
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
