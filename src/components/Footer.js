import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from './../images/logo.png';

function Footer() {
  return (
    <footer class="">
      <div className="row">
        <div className="col">
          <img
            src={logo}
            alt=""
            className="footer-logo"
          />
          <p>QuickLearner.io is a Education site which contains tutorials from the Best Youtube Channels.We provide you a best and easy way to learn something on your own pace. </p>
        </div>
        <div className="col">
          <h3>
            Office
            <div className="underline">
              <span></span>
            </div>
          </h3>

          <p>A.RangamPet</p>
          <p>Tirupati,Andhra Pradesh</p>
          <p>India,524239</p>
          <p className="email-id">example@gmail.com</p>
          <h4>+91 - 004903044</h4>
        </div>
        <div className="col">
          <h3>
            Quick Links
            <div className="underline">
              <span></span>
            </div>
          </h3>

          <p>
            <a href="/">Home</a>
          </p>
          <p>
            <a href="/CreateQuiz">CreateQuiz</a>
          </p>
          <p>
            <a href="/">Aboutus</a>
          </p>
          <p>
            <a href="/contactus">Contact Us</a>
          </p>
          <p>
            <a href="/terms-of-service">Terms&Conditions</a>
          </p>
        </div>
        <div className="col">
          <h3>
            Newsletter
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <br/>
          <form>
            <EmailIcon className="fas" />
            <input type="email" placeholder="Enter your email id" required />
            <button type="submit">
              <ArrowForwardIcon className="fas" />
            </button>
          </form>
          <div className="social-icons">
            <FacebookRoundedIcon className="fas" />
            <InstagramIcon className="fas" />
            <TwitterIcon className="fas" />
            <WhatsAppIcon className="fas" />
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright">
        Copyright © 2021-2022 QuickLearner.io LLC. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
