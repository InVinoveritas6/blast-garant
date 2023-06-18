//Components
import CustomPageBlock from "../../components/CustomPageBlock/CustomPageBlock";
//Style
import "./ContactsStyle.scss";

const Contacts = () => {
  return (
    <CustomPageBlock id={"contacts"} title={"Контакты"}>
      <div className="contacts">
        <div className="contacts-logo-block">
          <div className="contacts-logo">
            <img src="/images/Logo.png" />
          </div>
          <div className="contacts-title">blast garant</div>
        </div>
        <div className="contacts-subtitle">
          Пескоструйная обработка, покраска, грунтование, холодное цинкование,
          пескоструй дерева, выезд на объект к клиенту
        </div>
        <div className="contacts-info">
          Контактные телефоны: А1 - 8(029)319-71-01 life - 8(025)7289796
        </div>
        <div className="contacts-social-media">
          <div className="whats-app">
            <a href="https://wa.me/375291305307">
                 <img src="/images/contacts/whatsApp.svg" />
            </a>
          </div>
          <div className="viber">
            <a href="viber://chat?number=%2B375291305307">
                <img src="/images/contacts/Viber.svg" />
            </a>
          </div>
          <div className="telegram">
          <a href="https://t.me/InVinoVeritas6">
              <img src="/images/contacts/telegram.svg" />
          </a>
          </div>
        </div>
      </div>
    </CustomPageBlock>
  );
};

export default Contacts;
