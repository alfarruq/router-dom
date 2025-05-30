import "./style.css"
import play from "../../assets/images/play.svg";
import music from "../../assets/images/music.svg";
import music2 from "../../assets/images/music2.svg"
import music3 from "../../assets/images/music3.svg"
import music4 from "../../assets/images/music4.svg"
import music5 from "../../assets/images/music5.svg"
import music6 from "../../assets/images/music6.svg"

function Home() {
    return (
        <main>

            {/* sectionOne video */}

            <section className="sectionOne_start container">
                <div className="sectionOne-start_video">
                    <img src={play} alt="" className="play" />
                    <h1>TRUE FITNESS - ПРЕМИУМ ТРЕНАЖЕРЫ ИЗ США</h1>
                </div>
                <div className="sectionOne-start_text container">
                    <h2 className="sectionOne-start_text-title">
                        TRUE - ведущий мировой производитель премиального фитнес оборудования
                    </h2>
                </div>
            </section>

            {/* sectionTwo speed */}

            <section className="sectionTwo container">
                <div className="sectionTwo-left_text">
                    <h2>
                        TRUE FITNESS
                    </h2>
                    <p>
                        Современное и надежное оборудование для фитнес-клубов
                    </p>
                    <h3>
                        КАРдио тренажеры
                    </h3>
                </div>
                <div className="sectionTwo-right_img"></div>
            </section>

            {/* sectionThree statics */}
            <div className="bg-gray">
                <section className="sectionThree container">
                    <div className="section-three_left">
                        <div className="section-three_one left-sectionThree">
                            <h2>Лучшие характеристики</h2>
                            <div className="line"></div>
                            <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
                        </div>
                        <div className="section-three_two left-sectionThree">
                            <h2>ВЫСОКОЕ КАЧЕСТВО И НАДЕЖНОСТЬ</h2>
                            <div className="line"></div>
                            <p>Высокое качество тренажеров - это визитная карточка TRUE. Кроме того TRUE предоставляет до 5 лет гарантии на кардиотренажеры.</p>
                        </div>
                    </div>
                    <div className="section-three_right">
                        <div className="section-three_two right-sectionThree">
                            <h2>ВЫСОКОЕ КАЧЕСТВО И НАДЕЖНОСТЬ</h2>
                            <div className="line"></div>
                            <p>Высокое качество тренажеров - это визитная карточка TRUE. Кроме того TRUE предоставляет до 5 лет гарантии на кардиотренажеры.</p>
                        </div>
                        <div className="section-three_one right-sectionThree">
                            <h2>Лучшие характеристики</h2>
                            <div className="line"></div>
                            <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* sectionFour garante */}
            <div className="bg-gray-two">
                <section className="sectionFour container">
                    <div className="sectionFour-left">
                        <h2>
                            Мы предлагаем
                            полный комплекс услуг
                        </h2>
                        <div className="statics">
                            <div className="statics-item-oneRow">
                                <div className="statics-card">
                                    <img src={music} alt="" />
                                    <h3>КОНСАЛТИНГ</h3>
                                    <p>Помогаем в разработке концепции клуба, зонировании, оснащении и расчете финансовых показателей.</p>
                                </div>
                                <div className="statics-card">
                                    <img src={music2} alt="" />
                                    <h3>ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ</h3>
                                    <p>Помогаем подобрать оборудование, сделать расстановку на плане и показать 3D визуализацию вашего будущего проекта.</p>
                                </div>
                                <div className="statics-card">
                                    <img src={music3} alt="" />
                                    <h3>ПОСТАВКА ЗАПЧАСТЕЙ</h3>
                                    <p>Поставка как гарантийных, так и постгарантийных запчастей.</p>
                                </div>
                            </div>
                            <div className="statics-item-twoRow">
                                <div className="statics-card">
                                    <img src={music4} alt="" />
                                    <h3>МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ</h3>
                                    <p>Полный цикл пуско-наладочных работ, а также сервисного обслуживания тренажеров.</p>
                                </div>
                                <div className="statics-card">
                                    <img src={music5} alt="" />
                                    <h3>ФИРМЕННЫЙ SHOW-ROOM</h3>
                                    <p>Пройдите тест-драйв оборудования перед приобретением.</p>
                                </div>
                                <div className="statics-card">
                                    <img src={music6} alt="" />
                                    <h3>Доставка по всему Узбекистану</h3>
                                    <p>Мы доставляем оборудование по всему Узбекистану.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sectioFour-right"></div>
                </section>

                {/* SectionFife */}


            </div>
            <section className="sectionFife container">
                <div className="end-sectionFife">
                    <h2>Получите эксклюзивное предложение на тренажеры TRUE FITNESS</h2>
                    <p className="p-one">Мы будем рады проконсультировать Вас и помочь с подбором оборудования</p>
                    <form className="form-SectionFife">
                        <input type="text" placeholder="ИМЯ" />
                        <input type="text" placeholder="EMAIL" />
                        <input type="tel" placeholder="+998 (99)-999-99-99" />
                        <button type="submit">ОТПРАВИТЬ</button>
                    </form>
                    <p className="p-two">Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности</p>
                </div>
            </section>
        </main>
    );
}

export default Home;