
import './TopBar.scss'
import {Dropdown, Menu} from 'antd'
import {DownOutlined} from '@ant-design/icons'
import { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
export default function TopBar() {
  const [indexSelected, setIndexSelected] = useState(0)
  const [menu, setMenu] = useState(false)
  console.log(menu);
  const items = [
  {
    key: '1',
    label: (
      <a target="_self" rel="noopener noreferrer" href="#home">
       Home
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_self" rel="noopener noreferrer" href="#about">
      About
      </a>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_self" rel="noopener noreferrer" href="#menu">
       Menu
      </a>
    ),
  },
];
  const linkPage = [
    {
      id:"1",
      name:"Home",
      idpage:"#home"
    },
    {
      id:"2",
      name:"About",
      idpage:"#about"
    },
    {
      id:"3",
      name:"Menu",
      idpage:"#menu"
    },
    // {
    //   id:"4",
    //   name:"Events",
    //   idpage:"#event"
    // },
    // {
    //   id:"5",
    //   name:"Chefs",
    //   idpage:"#chef"
    // },
    // {
    //   id:"6",
    //   name:"Gallery",
    //   idpage:"#gallery"
    // },
  ] 
  const handleClick = (index)=>{
    setIndexSelected(index)
    console.log(index);
  }
  const onScrolling = ()=>{
    const scroll = document.documentElement.scrollTop
    if(scroll <= 828.4){
      setIndexSelected(0)
    }
    if(scroll >= 828.4){
      setIndexSelected(1)

    }
    if( scroll >= 2660){
      setIndexSelected(2)
      
    }
  }
  window.addEventListener('scroll',onScrolling)
  return (
    <div className='topbar'>
      <div className="containerLogo">
        <a href="/">
          <h1>Yummy<span>.</span></h1>
        </a>
      </div>
      <nav className='containerMenu'>
      <ul>
          {linkPage.map((l,index)=>{
            return(
              <li key={index}><a href={l.idpage} onClick={()=>handleClick(index)} className={indexSelected === index ? "active" : "unknow"} >{l.name}</a></li>
            )
          })}
          {/* <li><a href="#about">About</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><NavLink to={"/event"}>Events</NavLink></li>
          <li><NavLink to={"/chefs"}>Chefs</NavLink></li>
          <li><NavLink to={"/gallery"}>Gallery</NavLink></li> */}
          
          <Dropdown menu={{ items }} className='dropdown' placement="bottom" arrow>
              <li><a className='dropdown' href='#contact'>Dropdown<DownOutlined className='icon'/></a></li>
          </Dropdown>
          {/* <li><a href="#contact">Contact</a></li> */}
          
        </ul>
      </nav>
      <div className='containerBook'>
        <div className='book'>
        <span>Book a Table</span>
        </div>
        <div onClick={()=>setMenu(!menu)} className='menuicon'>
        {menu ? <CloseIcon/> : <MenuIcon/>}
        </div>
        <div className={menu ? "active" : "notactive"}>
        <Menu
            defaultSelectedKeys={['1']}
            // defaultOpenKeys={['sub1']}
            // style={{height:"100vh",fontSize:"23px",}}
            className='menu'
            mode="inline"
            theme="dark"
            // inlineCollapsed={menu}
            items={menu ? items : menu}
            onClick={()=>setMenu(false)}
          />
        </div>
      </div>
    </div>
  )
}
