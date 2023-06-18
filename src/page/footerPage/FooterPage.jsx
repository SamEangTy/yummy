import './FooterPage.scss'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function FooterPage() {
  return (
    <div className='footerpage'>
      <div className="wrapper">
            <div className="boxfooter">
                <div className="box">
                    <div className="icon">
                        <LocationOnIcon/>
                    </div>
                    <div className='txt'>
                        <h2> Address</h2>
                        <p>A108 Adam Street</p>
                        <span>New York, NY 535022 - US</span>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <CallIcon/>
                    </div>
                    <div className='txt'>
                        <h2>Reservations</h2>
                        <p>Phone: +1 5589 55488 55</p>
                        <span>Email: info@example.com</span>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <AccessTimeIcon/>
                    </div>
                    <div className='txt'>
                        <h2> Opening Hours</h2>
                        <p>Mon-Sat: 11AM - 23PM</p>
                        <span>Sunday: Closed</span>
                    </div>
                </div>
                <div className="box">
                    {/* <div className="icon">
                        <HomeOutlined/>
                    </div> */}
                    <div className='txt'>
                        <h2> Follow Us</h2>
                        <p className='multiicon'><TwitterIcon className='icon1'/><FacebookIcon className='icon1'/><InstagramIcon className='icon1'/><LinkedInIcon className='icon1'/></p>
 
                    </div>
                </div>
            </div>
            <hr />
        <div className="copyright">
            <p>© Copyright <span>Yummy</span>. All Rights Reserved</p>
            <p>Designed by <span>BootstrapMade</span></p>
        </div>
      </div>
    </div>
  )
}
