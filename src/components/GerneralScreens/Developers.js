import React from "react";
import Container from "@mui/material/Container";
import DeveloperCard from "./DeveloperCard";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

function Developers() {
  return (
    <Container align="center" sx={{paddingTop:10,paddingBottom:10}}>
      <Grid container spacing={2}>
      <Grid item xs={12} sm={3}>
          <DeveloperCard image={"https://lh3.googleusercontent.com/a-/AOh14GifG3jEkfvVHteN4An4dG92Rgm53WOze_NT2Guutg=s96-c"} name={"Kollipora Naresh"} developer={"Full-Stack Developer"} insta={"https://www.instagram.com/naresh_kollipora/"} git={"https://github.com/naresh9949"} linkedin={"https://www.linkedin.com/in/naresh-kollipora-8026a718b/"}/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <DeveloperCard image={"https://media-exp1.licdn.com/dms/image/C5603AQFBKL2iObjsOg/profile-displayphoto-shrink_200_200/0/1644155033599?e=1649894400&v=beta&t=AceN6ttLW9gjcLPoi9PuBHjO9DgV5dZAy-fMuSpVtLA"} name={"Thunga Jyothish"} developer={"Front-End Developer"} insta={"https://instagram.com/jyothish_33?utm_medium=copy_link"} git={"https://github.com/jyothish369"} linkedin={"https://www.linkedin.com/in/thunga-jyothish-31336120a"}/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <DeveloperCard image={""} name={"Om Prakash"} developer={"Front-End Developer"} insta={"https://instagram.com/urstruly_omu?utm_medium=copy_link"} git={"https://github.com/omdevelo"} linkedin={"https://www.linkedin.com/in/om-prakash-05a595200"}/>
        </Grid>
        <Grid item xs={12} sm={3}>
          <DeveloperCard image={""} name={"Praveen"} developer={"Back-End Developer"} insta={"https://instagram.com/praveen_.7?utm_medium=copy_link"} git={"https://github.com/PraveenKumar279"} linkedin={"https://www.linkedin.com/in/praveen-kumar-b584a3196"}/>
        </Grid>
        
        
      </Grid>
    </Container>
  );
}

export default Developers;
