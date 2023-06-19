import { headerLinks } from "../Header/core/header";
//Style
import "./MenuModalStyle.scss";

const MenuModal = ({setModalVisible, modalVisible}) => {
    if (modalVisible) {
        console.log(window);
        window.scrollY = false
       
    }
  return (
    <div className="menu-modal">
      <div className="menu-modal-content">
        {headerLinks.map((el, index) => {
          return (
            <div className="menu-modal-el" key={index}>
              <a href={el.id} onClick={() =>setModalVisible(false)} >{el.name}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MenuModal;
