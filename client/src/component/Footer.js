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
          <li className="footer-links"><a>How Airbnb works</a></li>
          <li className="footer-links"><a>Newsroom</a></li>
          <li className="footer-links"><a>Airbnb Plus</a></li>
          <li className="footer-links"><a>Airbnb Luxe</a></li>
          <li className="footer-links"><a>HotelTonight</a></li>
          <li className="footer-links"><a>Airbnb for work</a></li>
          <li className="footer-links"><a>Olympics</a></li>
          <li className="footer-links"><a>Careers</a></li>
        </ul>
      </div>

      <div className="col-md-3 footer-col">
        <ul className="footer-col">
          <li className="link-txt">COMMUNITY</li>
          <li className="footer-links"><a>Diversity & Belonging</a></li>
          <li className="footer-links"><a>Against Discrimination</a></li>
          <li className="footer-links"><a>Accessibility</a></li>
          <li className="footer-links"><a>Airbnb Associates</a></li>
          <li className="footer-links"><a>Frontline Stays</a></li>
          <li className="footer-links"><a>Invite friends</a></li>
          <li className="footer-links"><a>Gift cards</a></li>
        </ul>
      </div>

      <div className="col-md-3 footer-col">
        <ul className="footer-col">
          <li className="link-txt">HOST</li>
          <li className="footer-links"><a>Host your home</a></li>
          <li className="footer-links"><a>Host an Online Experience</a></li>
          <li className="footer-links"><a>Host an Experience</a></li>
          <li className="footer-links"><a>Message from CEO Brian Chesky</a></li>
          <li className="footer-links"><a>Responsible hosting</a></li>
          <li className="footer-links"><a>Open Homes</a></li>
          <li className="footer-links"><a>Resource Center</a></li>
          <li className="footer-links"><a>Community Center</a></li>
        </ul>
      </div>

      <div className="col-md-3 footer-col">
        <ul>
          <li className="link-txt">SUPPORT</li>
          <li className="footer-links"><a>Updates for Covid-19</a></li>
          <li className="footer-links"><a>Help Center</a></li>
          <li className="footer-links"><a>Cancellation options</a></li>
          <li className="footer-links"><a>Neighborhood Support</a></li>
          <li className="footer-links"><a>Trust & Safety</a></li>
        </ul>
      </div>
    </div>

    <hr></hr>

      <div className="copyrights">
        <div>
          <span className="footer-links copyrights-links">© 2020 Airbnb, Inc. All rights reserved</span>
          <span className="footer-links copyrights-links"><a>• Privacy</a></span>
          <span className="footer-links copyrights-links"><a>• Terms</a></span>
          <span className="footer-links copyrights-links"><a>• Sitemap</a></span>
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