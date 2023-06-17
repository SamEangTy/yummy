import './MenuPage.scss'
import all from '../../menulist'
import { useState } from 'react'
import {Carousel, Image, } from 'antd'
import { StarFilled} from '@ant-design/icons';
const allCategery = ['All', ...new Set(all.map((item) => item.categery))];
export default function MenuPage() {
  const [menuItems, setMenuItems] = useState(all);
  const [nameMenu, setNameMenu] = useState("All")
  const [indexSelected, setIndexSelected] = useState(0);
  const filterItems = (categery, index) => {
    if (categery === 'All') {
      setMenuItems(all)
      setNameMenu(categery)
      setIndexSelected(index)
      return;
    }
    const newItems = all.filter((item) => item.categery === categery);
    setMenuItems(newItems)
    setNameMenu(categery)
    setIndexSelected(index)

  };
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div className='menupage' id='menu'>
      <div className="header">
        <p>Our Menu</p>
        <h6>CHECK OUR YUMMY MENU</h6>
      </div>
      <ul>
        {allCategery.map((categery,index)=>{
          return(
            <li key={index}>
              <button onClick={()=>filterItems(categery,index)} className={indexSelected === index ? "active" : "notactive"} >
                {categery}
              </button>
            </li>
            )
          })}
      </ul>
      <div className="body">
          <p>MENU</p>
          <h2>{nameMenu}</h2>
      </div>
      <div className="menulists">
          <div className="menulist">
                {menuItems.map((d,index)=>{
                    return(
            <div className="boxmenu" key={index}>
                <div className="img" >
                    {/* <img src={d.img} alt="" onClick={()=>handleClick(d.img)}/> */}
                    <Image src={d.img}></Image>
                    
                </div>
                <div className="txt">
                    <h3>{d.title}</h3>
                    <p>Lorem, deren, trataro, filede, nerada</p>
                    <span>${d.price}</span>
                </div>
            </div>
                    )
                })}
            </div>
        </div>
          <div className="footer">
            <div className="wrapper">
              <div className="header">
                <p>TESTIMONIALS</p>
                <h2>WHAT ARE THEY <span style={{color:"red"}}>Saying About Us</span></h2>
              </div>
              {/* <Carousel style={{width:"100px",display:"flex"}}> */}
              <div className="box">
                <div className="txt">
                  <p>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                  </p>
                  <h2>SaRa Willsson</h2>
                  <span>Designer</span>
                  <div>
                  <StarFilled className='icon'/>
                  <StarFilled className='icon'/>
                  <StarFilled className='icon'/>
                  <StarFilled className='icon'/>
                  <StarFilled className='icon'/>
                  </div>
                </div>
                <div className="img">
                  <img src="img/testimonials/testimonials-2.jpg" alt="" />
                </div>
              </div>
              {/* </Carousel> */}
            </div>
          </div>

                <Carousel autoplay>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                </Carousel>
    </div>
  )
}
