import React from "react";
import EmailIcon from '@mui/icons-material/Email';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

function Footer() {
  return (
    <footer class="">
      <div className="row">
        <div className="col">
          <img
            src="https://e7.pngegg.com/pngimages/479/1015/png-clipart-instagram-logo-social-media-logo-computer-icons-business-sharing-insta-magenta-internet.png"
            alt=""
            className="footer-logo"
          />
          <p>Subscripe to our Tutorials</p>
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
            <a href="terms-conditions">Terms&Conditions</a>
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
        Copyright © 2017-2021 QuickLearner LLC. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
