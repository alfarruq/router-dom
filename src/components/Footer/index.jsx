import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <nav className="container">
        <div>
          <b>КАТАЛОГ ТОВАРОВ</b>
          <ul>
            <li>
              <a href="">Кардио тренажеры</a>
            </li>
            <li>
              <a href="">Composite Strength</a>
            </li>
            <li>
              <a href="">True Stretch</a>
            </li>
            <li>
              <a href="">Сайклинг</a>
            </li>
            <li>
              <a href="">Групповые тренировки</a>
            </li>
            <li>
              <a href="">Силовые тренажеры</a>
            </li>
            <li>
              <a href="">Консоли</a>
            </li>
            <li>
              <b>© TRUE FITNESS</b>
            </li>
          </ul>
        </div>
        <div>
          <b>ИНФОРМАЦИЯ</b>
          <ul>
            <li>
              <Link to="/">
                <span>главная</span>
              </Link>
            </li>
            <li>
              <Link to="/brand">
                <span>о бренде</span>
              </Link>
            </li>
            <li>
              <Link to="/advantages">
                <span>преимущества</span>
              </Link>
            </li>
            <li>
              <Link to="/club">
                <span>открыть клуб</span>
              </Link>
            </li>
            <li>
              <Link to="/contacts">
                <span>контакты</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <b>КОНТАКТЫ</b>
          <ul>
            <li>
              <a href="">Политика конфиденциальности</a>
            </li>
            <li>
              <a href="">Контакты</a>
            </li>
          </ul>
        </div>
        <div>
          <b>ПОДПИСАТЬСЯ НА НОВОСТИ И АКЦИИ</b>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
