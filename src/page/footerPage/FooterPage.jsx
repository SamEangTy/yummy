import './FooterPage.scss'
import {HomeOutlined} from "@ant-design/icons"
export default function FooterPage() {
  return (
    <div className='footerpage'>
      <div className="wrapper">
            <div className="boxfooter">
                <div className="box">
                    <div className="icon">
                        <HomeOutlined/>
                    </div>
                    <div className='txt'>
                        <h2> Address</h2>
                        <p>A108 Adam Street</p>
                        <span>New York, NY 535022 - US</span>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <HomeOutlined/>
                    </div>
                    <div className='txt'>
                        <h2> Address</h2>
                        <p>A108 Adam Street</p>
                        <span>New York, NY 535022 - US</span>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <HomeOutlined/>
                    </div>
                    <div className='txt'>
                        <h2> Address</h2>
                        <p>A108 Adam Street</p>
                        <span>New York, NY 535022 - US</span>
                    </div>
                </div>
                <div className="box">
                    <div className="icon">
                        <HomeOutlined/>
                    </div>
                    <div className='txt'>
                        <h2> Address</h2>
                        <p>A108 Adam Street</p>
                        <span>New York, NY 535022 - US</span>
                    </div>
                </div>
            </div>
            <hr />
        <div className="copyright">
            <p>© Copyright Yummy. All Rights Reserved</p>
            <span>Designed by BootstrapMade</span>
        </div>
      </div>
    </div>
  )
}
