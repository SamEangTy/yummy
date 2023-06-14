import './MenuPage.scss'
import all from '../../menulist'
import { useEffect, useState } from 'react'
export default function MenuPage() {
    const [menulist, setMenuList] = useState(all);
   
  return (
    <div className='menupage'>
      <div className="header">
        <p>Our Menu</p>
        <h6>CHECK OUR YUMMY MENU</h6>
      </div>
      <ul>
        <li>Starter</li>
        <li>Breakfast</li>
        <li>Lunch</li>
        <li>Dinner</li>
      </ul>
      <div className="body">
        <p>MENU</p>
        <h2>Starters</h2>
      </div>
      <div className="menulists">
          <div className="menulist">
                {menulist.map((d,index)=>{
                    return(
            <div className="boxmenu">
                <div className="img">
                    <img src={d.img} alt="" />
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
             
    </div>
  )
}
