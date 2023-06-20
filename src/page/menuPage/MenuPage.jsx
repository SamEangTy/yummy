import "./MenuPage.scss";
import all from "../../menulist";
import { useState } from "react";
import { Carousel, Image } from "antd";
import { StarFilled } from "@ant-design/icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import testimonial from '../../Testimonial'
const allCategery = ["All", ...new Set(all.map((item) => item.categery))];
export default function MenuPage() {
  const [menuItems, setMenuItems] = useState(all);
  const [nameMenu, setNameMenu] = useState("All");
  const [indexSelected, setIndexSelected] = useState(0);
  const filterItems = (categery, index) => {
    if (categery === "All") {
      setMenuItems(all);
      setNameMenu(categery);
      setIndexSelected(index);
      return;
    }
    const newItems = all.filter((item) => item.categery === categery);
    setMenuItems(newItems);
    setNameMenu(categery);
    setIndexSelected(index);
  };
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="menupage" id="menu">
      <div className="header" data-aos="fade-up">
        <p>Our Menu</p>
        <h6>CHECK OUR YUMMY MENU</h6>
      </div>
      <ul data-aos="fade-up">
        {allCategery.map((categery, index) => {
          return (
            <li key={index}>
              <button
                onClick={() => filterItems(categery, index)}
                className={ indexSelected === index ? "active" : "notactive"}
              >
                {categery}
              </button>
            </li>
          );
        })}
      </ul>
      <div className="body" data-aos="fade-up">
        <p>MENU</p>
        <h2>{nameMenu}</h2>
      </div>
      <div className="menulists" data-aos="zoom-in-up">
        <div className="menulist">
          {menuItems.map((d, index) => {
            return (
              <div className="boxmenu" key={index}>
                <div className="img">
                  {/* <img src={d.img} alt="" onClick={()=>handleClick(d.img)}/> */}
                  <Image src={d.img}></Image>
                </div>
                <div className="txt">
                  <h3>{d.title}</h3>
                  <p>Lorem, deren, trataro, filede, nerada</p>
                  <span>${d.price}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Carousel autoplay>
        {testimonial.map((t, index) => {
          return (
            <div key={index}>
              <div className="footer" data-aos="fade-down" >
                <div className="wrapper">
                  <div className="header">
                    <p>TESTIMONIALS</p>
                    <h2>
                      WHAT ARE THEY{" "}
                      <span style={{ color: "red" }}>Saying About Us</span>
                    </h2>
                  </div>
                  <div className="box">
                    <div className="txt">
                      <p>{t.experice}</p>
                      <h2>{t.name}</h2>
                      <span>{t.ps}</span>
                      <div>
                        <StarFilled className="icon" />
                        <StarFilled className="icon" />
                        <StarFilled className="icon" />
                        <StarFilled className="icon" />
                        <StarFilled className="icon" />
                      </div>
                    </div>
                    <div className="img">
                      <img src={t.img} alt={t.img} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
 
    </div>
  );
}
