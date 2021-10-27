import React,{useState} from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { makeStyles } from '@mui/styles';
import API from './../API'

const useStyles = makeStyles({
  root: {
    width:120,
  },
});
const getNewName = (name) => {
    if(name==="Activate")
    return "Deactivate";
    else
    return "Activate";
}

export default function ActiveButton(props) {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState(props.state);
  const data = props.data;
  const idx = props.idx;
  const [name, setName] = useState(props.name);

  function ActivateDeactivate() {
    setLoading(true);

    // activate or deactive the listner
    if(state===true)
      API.DeactivateListner(data[idx]);
    else
      API.ActivateListner(data[idx]);

    // changing the state of button
    setState(!state);

    //updating the data that we have
    data[idx].connection_status = data[idx].connection_status?false:true;
    props.action([...data])
    setName(getNewName(name))
    setLoading(false);
   
  }

  return (
      <LoadingButton className={classes.root}
        onClick={ActivateDeactivate}
        loading={loading}
        loadingIndicator="Loading..."
        variant="outlined"
      >
          {name}
      </LoadingButton>
  );
}
