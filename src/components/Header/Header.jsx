import { useEffect, useState } from "react";


import { headerLinks } from "./core/header";

import Burger from "./image/svg/burger-simple-svgrepo-com.svg"

//Components
import MenuModal from "../MenuModal/MenuModal";
//Style
import "./HeaderStyle.scss";

const Header = ({ page, setPage }) => {
  const [screenWidth, setScreenWidth] = useState();
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    setScreenWidth(window.outerWidth);
  }, []);



  return (
    <div className="header">
      {screenWidth <= 768
        ? <div className="burger">
          <img src={Burger} onClick={() => setModalVisible(true)} alt="burger"/>
         </div>
        : headerLinks.map((el, index) => {
            return (
              <div className="header-body" key={index}>
                <div className="test">
                  <div
                    className={
                      page === el.id ? "header-item test1" : "header-item"
                    }
                  >
                    <a href={el.id} onClick={() => setPage(el.id)}>
                      {el.name}
                    </a>
                    <span></span>
                  </div>
                </div>
              </div>
            );
          })}
          {modalVisible && <MenuModal setModalVisible={setModalVisible} modalVisible={modalVisible}/>}
    </div>
  );
};

export default Header;
