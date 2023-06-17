import { PlayCircleOutlined } from '@ant-design/icons'
import './HomePage.scss'
import {Button} from 'antd'
export default function HomePage() {
  return (
    <div className='homepage' id='home'>
      <div className='text'>
        <div className='wrapper'>
            <h3>Enjoy Your Healthy
                Delicious Food
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate autem quam recusandae impedit itaque est, harum voluptatum excepturi nesciunt aliquid in fuga? Tempore tempora blanditiis quisquam nihil! Magni, ullam eos.</p>
            <div className='btn'>
              <Button  className='btnbook'>Book a Table</Button>
              <Button className='btnwatch'><PlayCircleOutlined style={{color:"red"}} />Watch Video</Button>
            </div>
        </div>
      </div>
      <div className='img'>
            <div className="wrapper1">
                 <img src="img/hero-img.png" alt="img/hero-img.png" />
            </div>
      </div>
    </div>
  )
}
