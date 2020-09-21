import React from 'react';
import GlobeIcon from '@material-ui/icons/Language';
import FB from './svg/FB';
import Twitter from './svg/Twitter';
import Instagram from './svg/Insta';

const Footer = () => {
  return (
    <>
    <hr></hr>
    <div className="row footer-row">
      <div className="col-md-3 footer-col">
        <ul className="footer-col">
          <li className="link-txt">ABOUT</li>
          <li className="footer-links"><a href="#">How Airbnb works</a></li>
          <li className="footer-links"><a href="#">Newsroom</a></li>
          <li className="footer-links"><a href="#">Airbnb Plus</a></li>
          <li className="footer-links"><a href="#">Airbnb Luxe</a></li>
          <li className="footer-links"><a href="#">HotelTonight</a></li>
          <li className="footer-links"><a href="#">Airbnb for work</a></li>
          <li className="footer-links"><a href="#">Olympics</a></li>
          <li className="footer-links"><a href="#">Careers</a></li>
        </ul>
      </div>

      <div className="col-md-3 footer-col">
        <ul className="footer-col">
          <li className="link-txt">COMMUNITY</li>
          <li className="footer-links"><a href="#">Diversity & Belonging</a></li>
          <li className="footer-links"><a href="#">Against Discrimination</a></li>
          <li className="footer-links"><a href="#">Accessibility</a></li>
          <li className="footer-links"><a href="#">Airbnb Associates</a></li>
          <li className="footer-links"><a href="#">Frontline Stays</a></li>
          <li className="footer-links"><a href="#">Invite friends</a></li>
          <li className="footer-links"><a href="#">Gift cards</a></li>
        </ul>
      </div>

      <div className="col-md-3 footer-col">
        <ul className="footer-col">
          <li className="link-txt">HOST</li>
          <li className="footer-links"><a href="#">Host your home</a></li>
          <li className="footer-links"><a href="#">Host an Online Experience</a></li>
          <li className="footer-links"><a href="#">Host an Experience</a></li>
          <li className="footer-links"><a href="#">Message from CEO Brian Chesky</a></li>
          <li className="footer-links"><a href="#">Responsible hosting</a></li>
          <li className="footer-links"><a href="#">Open Homes</a></li>
          <li className="footer-links"><a href="#">Resource Center</a></li>
          <li className="footer-links"><a href="#">Community Center</a></li>
        </ul>
      </div>

      <div className="col-md-3 footer-col">
        <ul>
          <li className="link-txt">SUPPORT</li>
          <li className="footer-links"><a href="#">Updates for Covid-19</a></li>
          <li className="footer-links"><a href="#">Help Center</a></li>
          <li className="footer-links"><a href="#">Cancellation options</a></li>
          <li className="footer-links"><a href="#">Neighborhood Support</a></li>
          <li className="footer-links"><a href="#">Trust & Safety</a></li>
        </ul>
      </div>
    </div>

    <hr></hr>

      <div className="copyrights">
        <div>
          <span className="footer-links copyrights-links">© 2020 Airbnb, Inc. All rights reserved</span>
          <span className="footer-links copyrights-links"><a href="#">• Privacy</a></span>
          <span className="footer-links copyrights-links"><a href="#">• Terms</a></span>
          <span className="footer-links copyrights-links"><a href="#">• Sitemap</a></span>
        </div>

        <div>
          <GlobeIcon style={{"height": "25px"}} />
          <span className="footer-links copyrights-links globe">English (US)</span>
          <span className="footer-links copyrights-links">$</span>
          <span className="footer-links copyrights-links globe">USD</span>
          <span className="footer-links copyrights-links"><FB /></span>
          <span className="footer-links copyrights-links"><Twitter /></span>
          <span className="footer-links copyrights-links"><Instagram /></span>
        </div>
      </div>

    <hr></hr>
    </>
  );
};

export default Footer;