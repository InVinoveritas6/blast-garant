//Style
import "./HeaderStyle.scss";

const Header = ({ page, setPage }) => {
  const headerLinks = [
    { name: "Главная", id: "#mainPage" },
    { name: "О нас", id: "#aboutUs" },
    { name: "Цены", id: "#prices" },
    { name: "Примеры", id: "#examples" },
    { name: "Отзывы", id: "#reviews" },
    { name: "Контакты", id: "#contacts" },
  ];

  return (
    <div className="header">
      {headerLinks.map((el, index) => {
        return (
          <div className="header-body" key={index}>
            <div className="test">
              <div
                className={page === el.id ? "header-item test1" : "header-item"}
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
    </div>
  );
};

export default Header;
