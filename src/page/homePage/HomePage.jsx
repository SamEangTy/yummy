import { PlayCircleOutlined } from '@ant-design/icons'
import './HomePage.scss'
import {Button} from 'antd'
export default function HomePage() {
  return (
    <div className='homepage'>
      <div className='text'>
        <div className='wrapper'>
            <h3>Enjoy Your Healthy
                Delicious Food
            </h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate autem quam recusandae impedit itaque est, harum voluptatum excepturi nesciunt aliquid in fuga? Tempore tempora blanditiis quisquam nihil! Magni, ullam eos.</p>
            <div className='btn'>
                    <Button>Book a Table</Button>
                    <Button><PlayCircleOutlined />Watch Video</Button>
            </div>
        </div>
      </div>
      <div className='img'>
            <div className="wrapper">
                 <img src="" alt="1.jpg" />
            </div>
      </div>
    </div>
  )
}
