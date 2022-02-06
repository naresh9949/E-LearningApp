import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Rating from "@mui/material/Rating";
import { UserContext } from "./../../App.js";
import { useState, useContext } from "react";
import {Post} from './../Utilities/AxiosHandler';

export default function ReviewBtn(props) {
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [text, setText] = React.useState("");
  const { user, setUserObj } = useContext(UserContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = async() => {
    const obj = {
        id:user._id,
      first_name: user.first_name,
      last_name: user.last_name,
      image: user.image,
      rating: rating,
      message: text,
    };
    
    const res = await Post('/api/review/addReview',obj);
    console.log(res)
    if(res && res.status === 201)
    setOpen(false);
  };

  if (!user) return <React.Fragment></React.Fragment>;
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Submit Review
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent  sx={{width:330}}>
          <Card  elevation={0} align="center">
           
              <Avatar src={user.image} sx={{ width: 86, height: 86 }}>
                {" "}
                {user.first_name[0] + user.last_name[0]}{" "}
              </Avatar>
              <CardContent>
                <Rating
                  name="half-rating-read"
                  defaultValue={0}
                  precision={0.5}
                  size="large"
                  value={rating}
                  onChange={(event, newValue) => {
                    setRating(newValue);
                  }}
                  sx={{ color: "red" }}
                />
                <Typography gutterBottom variant="h5" component="div">
                  {user.first_name + " " + user.last_name}
                </Typography>

                <p
                  className="review-content content"
                 
                >
                  <br />
                  <TextField
                    fullWidth
                    value={text}
                    onChange={(event) => {
                      setText(event.target.value);
                    }}
                    placeholder="Write your Review!"
                    multiline
                    rows={4}
                  />
                </p>
              </CardContent>
           
          </Card>
        </DialogContent>
        <DialogActions>
          <Button  onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
