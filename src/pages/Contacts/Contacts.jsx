//Components
import CustomPageBlock from "../../components/CustomPageBlock/CustomPageBlock";

import Viber from "./image/Viber.svg"
import Telegram from "./image/telegram.svg"
import Whatapp from "./image/whatsApp.svg"
import Logo from "./image/Logo.png"

//Style
import "./ContactsStyle.scss";

const Contacts = () => {
  return (
    <CustomPageBlock id={"contacts"} title={"Контакты"}>
      <div className="contacts">
        <div className="contacts-logo-block">
          <div className="contacts-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="contacts-title">blast garant</div>
        </div>
        <div className="contacts-subtitle">
          Пескоструйная обработка, покраска, грунтование, холодное цинкование,
          пескоструй дерева, выезд на объект к клиенту
        </div>
        <div className="contacts-info">
          Контактные телефоны:<a href="tel:+375293197101">А1 - 8(029)319-71-01</a> <a href="tel:+375257289796">life - 8(025)728-97-96</a>  
        </div>
        <div className="contacts-social-media">
          <div className="whats-app">
            <a href="https://wa.me/375293197101">
                 <img src={Whatapp} alt={'socialMedia'} />
            </a>
          </div>
          <div className="viber">
            <a href="https://skobelkin.ru/viber/375293197101">
                <img src={Viber} alt={'socialMedia'} />
            </a>
          </div>
          <div className="telegram">
          <a href="https://t.me/InVinoVeritas6">
              <img src={Telegram} alt={'socialMedia'} />
          </a>
          </div>
        </div>
        <form action="mailto:BG80293197101@mail.ru">
          <input className="button-mail" type="submit" value={'Отправить письмо'}/>
        </form>
      </div>
    </CustomPageBlock>
  );
};

export default Contacts;
