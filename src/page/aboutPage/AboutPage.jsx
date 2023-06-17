import './AboutPage.scss'
import {MessageTwoTone, PlayCircleFilled, PlayCircleOutlined, PlayCircleTwoTone} from '@ant-design/icons'
export default function AboutPage() {
  return (
    <div className='aboutpage' id='about'>
        <div className="header">
        <h6>about us</h6>
        <h2>learn more <span>ABOUT US</span></h2>
        </div>
        <div className="wrapper">

        <div className="topleft">
          <div className="img">
            <img src="img/about.jpg" alt="img/about.jpg" />
          </div>
          <div className="coverimg">
            <h2>Book a Table</h2>
            <h2><span>096 807 0983</span></h2>
          </div>
        </div>
        <div className="topright">
          <div className="txt">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nam, modi nihil molestias beatae natus alias ab velit esse. Minus ut beatae harum. Assumenda quibusdam corrupti commodi voluptate ipsam odio!
            </p>
          </div>
          <div className="txt">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nam, modi nihil molestias beatae natus alias ab velit esse. Minus ut beatae harum. Assumenda quibusdam corrupti commodi voluptate ipsam odio!
            </p>
          </div>
          <div className="txt">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nam, modi nihil molestias beatae natus alias ab velit esse. Minus ut beatae harum. Assumenda quibusdam corrupti commodi voluptate ipsam odio!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nam, modi nihil molestias beatae natus alias ab velit esse. Minus ut beatae harum. Assumenda quibusdam corrupti commodi voluptate ipsam odio!
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nam, modi nihil molestias beatae natus alias ab velit esse. Minus ut beatae harum. Assumenda quibusdam corrupti commodi voluptate ipsam odio!
            </p>
          </div>
          <div className="img1">
            {/* <PlayCircleOutlined className='icon' /> */}
            <PlayCircleFilled className='icon' /> 
            {/* <PlayCircleTwoTone className='icon'/> */}
            <img src="img/about-2.jpg" alt="img/about-2.jpg" />
          </div>
        </div>
        </div>
        <div className="footer">
          <div className="footerleft">
            <div className="covertxt">

            <div className="txt">
              <h2>Why Choose</h2>
              <h2>Yummy?</h2>
            </div>
            <div className="txt">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore labore earum eos architecto neque autem nobis placeat perspiciatis impedit, incidunt ipsa reprehenderit consequuntur ipsam, ea, possimus repellat adipisci eaque harum!</p>
            </div>
            <div className="txt1">
              <p className='learnmore'>Learn More</p>
            </div>
            </div>
          </div>
          <div className="footerright">
            <div className="branding">
              <div className="brand">
                <MessageTwoTone className='icon'/>
                <h4>Corporis voluptates officia eiusmod</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, debitis vel magnam suscipit nobis officia praesentium, </p>
              </div>
            </div>
            <div className="branding">
              <div className="brand">
                <MessageTwoTone className='icon'/>
                <h4>Corporis voluptates officia eiusmod</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, debitis vel magnam suscipit nobis officia praesentium, </p>
              </div>
            </div>
            <div className="branding">
              <div className="brand">
                <MessageTwoTone className='icon'/>
                <h4>Corporis voluptates officia eiusmod</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, debitis vel magnam suscipit nobis officia praesentium, </p>
              </div>
            </div>
           
          </div>
        </div>
    </div>
  )
}
