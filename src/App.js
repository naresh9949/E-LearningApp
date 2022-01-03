import React from "react";
import Home from "./components/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import CoursePlayer from "./components/courses/CoursePlayer";
import { Container } from "@mui/material";
import Courses from './components/courses/Courses';
import SearchList from './components/SearchList';
import Footer from "./components/Footer";
import MyAccout from './components/MyAccout'
import Login from './components/Signin';
import Signup from './components/Signup'
import MyEnrollments from './components/MyEnrollments';
import ContactUs from './components/Contactus';
import UploadScreen from './components/UploadScreen';
import CourseDetails from './components/courses/CourseDetails';
import TakeQuiz from './components/Quiz/TakeQuiz';
import CreateQuiz from './components/Quiz/CreateQuiz';
import Quizzes from './components/Quiz/Quizzes';
import ForgotPassword from './components/Auth/ForgotPassword';

const getUrl = () => {
  console.log(window.location.pathname)
  return window.location.pathname;
}
const SayHello = () => {
  const user = true;
  const url = getUrl();
  

  if(url=="/")
  return(
    <React.Fragment>

    </React.Fragment>
  );

  if(url=="/courseplayer")
  return(
    <React.Fragment>

    </React.Fragment>
  );

  if(url=="/course")
  return(
    <React.Fragment>

    </React.Fragment>
  );



  if(url=="/admin/uploadcourse")
  return(
    <React.Fragment>

    </React.Fragment>
  );

  if(url === "/my-enrollments")
  return(
    <div className="sayhello">
         <Container>
           <p className="say-name">Store / My Enrollments</p>
         </Container>
      </div>
)

if(url === "/contactus")
  return(
    <div className="sayhello">
         <Container>
           <p className="say-name">Home / Contact us</p>
         </Container>
      </div>
)

  if(user){
  return(
      <div className="sayhello">
         <Container>
           <p className="say-name">Hi Naresh Kollipora</p>
           <p className="say-name">Welcome to QuickLearner</p>
         </Container>
      </div>
  )}
  else{
  return(
    <div className="sayhello">
       <Container>
         <h2 className="welcome-title">Welcome to QuickLearner</h2>
       </Container>
    </div>
)}
  
}



function App() {
  var login = true;
  const url = getUrl();
  if(url==="/signup" || url==="/signin" || url==='/ForgotPassword')
  login = false;

  return (
    <div className="App">
      {login && <Navbar />}
      {login && <SayHello />}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/search" element={<SearchList/>} />
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/signin" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/ForgotPassword" element={<ForgotPassword/>} />
          <Route path="/my-enrollments" element={<MyEnrollments/>} />
          <Route path="/user/account" element={<MyAccout/>} />
          <Route path="/courseplayer" element={<CoursePlayer />} />
          <Route path="/course" element={<CourseDetails />} />
          <Route path="/admin/uploadcourse" element={<UploadScreen />} />
          <Route path="/quizzes" element={<Courses />} />
          <Route path="/quiz/take-quiz" element={<TakeQuiz />} />
          <Route path="/quiz/create-quiz" element={<CreateQuiz />} />
          
        </Routes>
      </BrowserRouter>
      {login && <Footer />}
    </div>
  );
}
//foefjeofiejrfio
export default App;
