import { NavLink } from 'react-router-dom'
import './TopBar.scss'
import {Dropdown} from 'antd'
import {DownOutlined} from '@ant-design/icons'
export default function TopBar() {
  const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
        3rd menu item
      </a>
    ),
  },
];
  // const hndleMenu = ()=>{
  //   alert("eys")
  // }
  return (
    <div className='topbar'>
      <div className="containerLogo">
        <a href="/">
          <h1>Yummy<span>.</span></h1>
        </a>
      </div>
      <nav className='containerMenu'>
      <ul>
          <li><NavLink to={"/"}>Home</NavLink></li>
          <li><NavLink to={"/about"}>About</NavLink></li>
          <li><NavLink to={"/menu"}>Menu</NavLink></li>
          <li><NavLink to={"/event"}>Events</NavLink></li>
          <li><NavLink to={"/chefs"}>Chefs</NavLink></li>
          <li><NavLink to={"/gallery"}>Gallery</NavLink></li>
          
          <Dropdown menu={{ items }} className='dropdown' placement="bottom" arrow>
              <li><NavLink to={"/dropdown"} className='dropdown'>Dropdown<DownOutlined className='icon'/></NavLink></li>
          </Dropdown>
          
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div className='containerBook'>
        <div className='book'>

        <span>Book a Table</span>
        </div>
      </div>
    </div>
  )
}
