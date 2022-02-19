import React,{useEffect,useState,createContext,Suspense} from "react";
import Home from "./components/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import { Container } from "@mui/material";
import Footer from "./components/Footer";
import Cookies from 'universal-cookie';
import {setUser,getUser} from './components/Utilities/UserHandler';
import {Post} from './components/Utilities/AxiosHandler';
import Spinner from './components/SharedComponents/Spinner';
import Loader from "./components/SharedComponents/Loader";
export const UserContext = createContext();


const CoursePlayer = React.lazy(() =>
  import("./components/courses/CoursePlayer")
);

const Courses = React.lazy(() =>
  import("./components/courses/Courses")
);

const SearchList = React.lazy(() =>
  import("./components/SearchList")
);

const MyAccout = React.lazy(() =>
  import("./components/User/MyAccout")
);

const Login = React.lazy(() =>
  import("./components/Auth/Signin")
);


const Signup = React.lazy(() =>
  import("./components/Auth/Signup")
);


const MyEnrollments = React.lazy(() =>
  import("./components/User/MyEnrollments")
);


const ContactUs = React.lazy(() =>
  import("./components/GerneralScreens/Contactus")
);


const CourseDetails = React.lazy(() =>
  import("./components/courses/CourseDetails")
);



const TakeQuiz = React.lazy(() =>
  import("./components/Quiz/TakeQuiz")
);




const CreateQuiz = React.lazy(() =>
  import("./components/Quiz/CreateQuiz")
);



const Quizzes = React.lazy(() =>
  import("./components/Quiz/Quizzes")
);



const ForgotPassword = React.lazy(() =>
  import("./components/Auth/ForgotPassword")
);



const EnrollUser = React.lazy(() =>
  import("./components/Auth/UserDetails")
);


const VerifyUser = React.lazy(() =>
  import("./components/Auth/VerifyUser")
);

const TermsAndConditions = React.lazy(() =>
  import("./components/GerneralScreens/TermsAndConditions")
);

const PageNotFound = React.lazy(() =>
  import("./components/PageNotFound")
);


const Developers = React.lazy(() =>
  import("./components/GerneralScreens/Developers")
);





const getUrl = () => {
  return window.location.pathname;
}

const SayHello = (props) => {
  const user = props.user;
  const url = getUrl();

  const urls = ['/','/courseplayer','/course'];
  if(urls.includes(url) || url.includes('/courseplayer'))
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
           <p className="say-name">Hi, {user.first_name+" "+user.last_name}</p>
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
  const [loading, setLoading] = useState(true);
  const [user,setUserObj] = useState(null);
  const cookies = new Cookies();
  const authroutes = ['/signup','/signin']
  const userroutes = ['/my-enrollments','/user/account']
  var login = true;
  const url = getUrl();
  if(url==="/signup" || url==="/signin" || url==='/ForgotPassword' || url==='/user/enroll' || url.includes('/user/verify/'))
  login = false;

  
  if(cookies.get('authToken') && authroutes.indexOf(url) > -1)
    window.location = '/'

  if(!cookies.get('authToken') && (userroutes.indexOf(url) > -1 || url.includes('/courseplayer')))
   window.location = '/signin';

  useEffect(async () => {
      if(!user){
      const res = await Post('/api/user/getUserInfo',{});
      if(res && res.status === 200)
      setUserObj(res.data);
      }
      setLoading(false);
  },[])

  if(loading)
  return <Spinner/>

  return (
    <div className="App">
      <UserContext.Provider value={{user,setUserObj}}>
      {login && <Navbar />}
      {login && <SayHello user={user}/>}
      <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses/>} />
          <Route path="/search" element={<SearchList/>} />
          <Route path="/signin" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/ForgotPassword" element={<ForgotPassword/>} />
          <Route path="/my-enrollments" element={<MyEnrollments/>} />
          <Route path="/user/account" element={<MyAccout/>} />
          <Route path="/courseplayer/:courseName" element={<CoursePlayer />} />
          <Route path="/course/:courseName" element={<CourseDetails />} />
          <Route path="/tests" element={<Courses />} />
          <Route path="/quiz/take-quiz" element={<TakeQuiz />} />
          <Route path="/quiz/create-quiz" element={<CreateQuiz />} />
          <Route path="/user/enroll" element={<EnrollUser />} />
          <Route path="/user/verify/:id" element={<VerifyUser />} /> 
          
          {/** General Screen Routes  */}
          <Route path="/contactus" element={<ContactUs/>} />
          <Route path="/developers" element={<Developers/>} />

          {/** Security Screen Routes  */}
          <Route path="/terms-of-service" element={<TermsAndConditions />} /> 

           {/** 404  */}

           <Route path="*" element={<PageNotFound />} /> 
        </Routes>
      </BrowserRouter>
      </Suspense>
      {login && <Footer />}
      </UserContext.Provider>
    </div>
  );
}
//foefjeofiejrfio
export default App;
