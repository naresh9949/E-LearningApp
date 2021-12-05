import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


function Edit(props) {
  const [open, setOpen] = React.useState(false);
  const [question, setQuestion] = useState(props.question.question);
  const [correct_option, setAnswer] = useState(
    props.question.correct_option.toString()
  );
  const [ans, setAns] = useState(props.question.options.toString());

  const questionHandler = (event) => {
    setQuestion(event.target.value);
  };

  const ansHandler = (event) => {
    setAns(event.target.value);
  };

  const correctAnsHandler = (event) => {
    setAnswer(event.target.value);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const saveHandler = () => {
    const options = ans.split(",");
    const cur_question = {
      question: question,
      options: options,
      correct_option: Number(correct_option),
    };

    props.editHandler(cur_question, props.index);
    props.ReviewEdit(cur_question, props.index);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} fullWidth maxWidth="lg" onClose={handleClose}>
        <DialogTitle>Edit</DialogTitle>
        <DialogContent>
          <br />
          <TextField
            id="outlined-basic"
            fullWidth
            label="Question"
            variant="outlined"
            name="question"
            value={question}
            onChange={questionHandler}
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            fullWidth
            label="Options"
            variant="outlined"
            name="answer"
            value={ans}
            onChange={ansHandler}
            placeholder="Enter Options by comma separator"
          />
          <br />
          <br />
          <TextField
            id="outlined-basic"
            fullWidth
            label="Answer"
            variant="outlined"
            name="correct_option"
            value={correct_option}
            onChange={correctAnsHandler}
            placeholder="Enter the correct option"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>close</Button>
          <Button onClick={saveHandler}>save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Review(props) {
  const [open, setOpen] = React.useState(false);
  const [questions, setQuestions] = React.useState(props.questions);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const editHandler = (question, index) => {
    questions[index] = question;
    setQuestions([...questions]);
  };

  const handleClose = () => {
    setOpen(false);
  };

  

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen} size="small">
        Review
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {props.title}
            </Typography>
          </Toolbar>
        </AppBar>
        <Stack sx={{ width: "100%" }} spacing={2} sx={{ padding: 3 }}>
          {questions.map((question, index) => (
            <Alert
              severity="success"
              action={
                <Edit
                  question={question}
                  index={index}
                  editHandler={props.editHandler}
                  ReviewEdit={editHandler}
                />
              }
            >
              <AlertTitle>{question.question}</AlertTitle>
              {question.options.toString() +
                "  ANS:" +
                question.correct_option.toString() +
                "st Option"}
            </Alert>
          ))}
        </Stack>
      </Dialog>
    </div>
  );
}
