import './footer.scss';
import facebookIcon from '../assets/icons/fb_white.png'
import instagramIcon from '../assets/icons/insta_white.png'
import whatsappIcon from '../assets/icons/whatsapp_white.png'
import linkedinIcon from '../assets/icons/linkedin_white.png'
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer row' id='ContactUs'>
      <div className='row'>
        <div className='col-md-4'>
          <h6>ATHOS INNOVATION SDN.BHD. 202201020251(1465948-D)</h6>
          <p>No.3, Jalan Mutiara Emas 6/1A,<br />Taman Mount Austin, 81100 Johor Bahru,<br />Johor, Malaysia</p>
          <a href="mailto:general@athosathlete.com">general@athosathlete.com</a>
          <div className="social-media pt-3">
            <a href="https://www.facebook.com/profile.php?id=100083466349340" target="_blank"><img
              src={facebookIcon}></img></a>
            <a href="https://instagram.com/athos.athlete?igshid=NmNmNjAwNzg=" target="_blank"><img
              src={instagramIcon}></img></a>
            <a href="https://www.linkedin.com/company/athos-athlete/" target="_blank"><img
              src={linkedinIcon}></img></a>
            <a href="https://api.whatsapp.com/send?phone=601152224333" target="_blank"><img
              src={whatsappIcon}></img></a>
          </div>
        </div>
        <div className="col-md-4">
          <p>
            <a href="https://api.whatsapp.com/send?phone=601152224333" target="_blank">BECOME A
              DEALER</a>
          </p>
        </div>
        <div className="col-md-4">
          <Link to='/privacy-policy'>
            <p>PRIVACY POLICY</p>
          </Link>
          <Link to='/term-condition'>
            <p>TERM & CONDITION</p>
          </Link>
          <Link to='refund-policy'>
            <p>REFUND POLICY</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;