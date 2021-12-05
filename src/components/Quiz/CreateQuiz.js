import React,{useState} from "react";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Review from "./Review";

function CreateQuiz() {
const [Title,setTitle] = useState("");
const [question,setQuestion] = useState("");
const [ans,setAns] = useState("");
const [correct_option,setAnswer] = useState("1");
const [questions,setQuestions] = useState([]);

    const titleHandler = (event) => {
        setTitle(event.target.value)
    }

    const questionHandler = (event) => {
        setQuestion(event.target.value)
    }


    const ansHandler = (event) => {
        setAns(event.target.value)
    }

    const correctAnsHandler = (event) => {
        setAnswer(event.target.value)
    }

    const editHandler = (question,index) => {
        questions[index] = question;
        setQuestions(questions);
    }


  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const submitQuestion = () => {
      const options = ans.split(',');
      const cur_question = {
        question : question,
        options : options,
        correct_option : Number(correct_option)
      }
      let all_questions = questions;
      all_questions.push(cur_question);
      setQuestion(all_questions);
      setQuestion("");
      setAns("");
      console.log(questions)
  }

  return (
    <Grid
      container
      spacing={2}
      sx={{
        paddingLeft: { xs: 1, sm: 3 },
        paddingRight: { xs: 1, sm: 3 },
        paddingTop: 3,
        paddingBottom: 3,
      }}
    >
      <Grid item sm={12} xs={12}>
        <TextField
          id="outlined-basic"
          fullWidth
          label="Title"
          variant="outlined"
          value = {Title}
          name="Title"
          onChange={titleHandler}
        />
        <br />
        <br />
        <Stack direction="row" spacing={1}>
          <Typography variant="h5" gutterBottom component="div">
            Add Questions
          </Typography>
         
          <Chip label={questions.length} />
        </Stack>
      </Grid>

      <Grid item sm={12} sm={12}>
      <TextField
          id="outlined-basic"
          fullWidth
          label="Question"
          variant="outlined"
          name = "question"
          value = {question}
          onChange={questionHandler}
        />
        <br/>
        <br/>
         <TextField
          id="outlined-basic"
          fullWidth
          label="Options"
          variant="outlined"
          name = "answer"
          value = {ans}
          onChange={ansHandler}
          placeholder="Enter Options by comma separator"
        />
         <br/>
        <br/>
        <TextField
          id="outlined-basic"
          fullWidth
          label="Answer"
          variant="outlined"
          name = "correct_option"
          value = {correct_option}
          onChange={correctAnsHandler}
          placeholder="Enter the correct option"
        />
        <br/>
        <br/>
        <Stack direction="row" spacing={1}>
        <Button variant="contained" size="small" onClick={submitQuestion}>Submit Question</Button>
        <Button variant="contained" size="small">Submit Quiz</Button>
        <Review title = {Title} questions={questions} editHandler={editHandler}/>
        </Stack>
      </Grid>
    </Grid>
  );
}

export default CreateQuiz;
