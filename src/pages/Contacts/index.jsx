import "./Style.css"
import map from "../../assets/images/end-map.svg"

function Contacts() {
  return (
    <main>

      <section className="section-one-contacts">
        <p>КОНТАКТЫ</p>
        <h2>ШОУ РУМ TRUE В ТАШКЕНТЕ </h2>
        <h3>ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В  ТАШКЕНТ СИТИ, BOULEVARD</h3>
      </section>

      <section className="section-two-contacts container"></section>

      <section className="section-three-contact container">
        <img src={map} alt="" width="704" height="662" />
        <div className="end-contact">
          <h2>
            Официальный Дистрибьютер в Узбекистане - ProWellness
          </h2>
          <div>
            <h3>+998 (90)-606-66-66</h3>
            <p>INFO@PROWELLNESS.UZ</p>
            <h2>Адрес: Ташкент Сити, Булевард, ул. Фурката 2А</h2>
          </div>
          <h3>
            ПН-СБ с 9:00-19:00
            ВС НЕ РАБОЧИЙ
          </h3>
        </div>
      </section>

    </main>
  );
}

export default Contacts;
