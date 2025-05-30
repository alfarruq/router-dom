import "./Style.css"
import AdvantagesSectionTwoOne from "../../assets/images/Advantages-sectionTwo-one.svg"

function Advantages() {
    return (
        <main>
            <section className="section-one-advanteges" >
                <p>НАШИ ПРЕИМУЩЕСТВА</p>
                <h2>Преимущества TRUE FITNESS</h2>
                <h3>Благодаря которым мы являемся мировым лидером в производстве фитнес-оборудования</h3>
            </section>

            <section className="section-two-advanteges container">
                <div className="section-two-one-advanteges">
                    <div className="card">
                        <img src={AdvantagesSectionTwoOne} alt="" width={295} height={256} />
                        <h3>Лучшие характеристики в классе</h3>
                        <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
                    </div>
                    <div className="card">
                        <img src={AdvantagesSectionTwoOne} alt="" width={295} height={256} />
                        <h3>Лучшие характеристики в классе</h3>
                        <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
                    </div>
                    <div className="card">
                        <img src={AdvantagesSectionTwoOne} alt="" width={295} height={256} />
                        <h3>Лучшие характеристики в классе</h3>
                        <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
                    </div>
                    <div className="card">
                        <img src={AdvantagesSectionTwoOne} alt="" width={295} height={256} />
                        <h3>Лучшие характеристики в классе</h3>
                        <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
                    </div>
                    <div className="card">
                        <img src={AdvantagesSectionTwoOne} alt="" width={295} height={256} />
                        <h3>Лучшие характеристики в классе</h3>
                        <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
                    </div>
                    <div className="card">
                        <img src={AdvantagesSectionTwoOne} alt="" width={295} height={256} />
                        <h3>Лучшие характеристики в классе</h3>
                        <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
                    </div>
                    <div className="card">
                        <img src={AdvantagesSectionTwoOne} alt="" width={295} height={256} />
                        <h3>Лучшие характеристики в классе</h3>
                        <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
                    </div>
                    <div className="card">
                        <img src={AdvantagesSectionTwoOne} alt="" width={295} height={256} />
                        <h3>Лучшие характеристики в классе</h3>
                        <p>Наши тренажеры имеют самые совершенные характеристики в классе, от более мощных технических показателей до расширенных функциональных возможностей</p>
                    </div>
                </div>
                <div className="section-two-two-advanteges">
                    <div className="btn-dec">TOP 5</div>
                    <h2>Бренд TRUE Fitness входит в TOП 5 крупнейших производителей фитнес оборудования</h2>
                </div >
            </section>

            <section className="section-three-advanteges container">
                <div>
                    <p className="p-one-A">TRUE FITNESS</p>
                    <h2>Получите эксклюзивное предложение на тренажеры TRUE FITNESS</h2>
                    <p className="p-two-A">Мы будем рады проконсультировать Вас и помочь с подбором оборудования</p>
                    <form>
                        <input type="text" placeholder="ИМЯ" />
                        <input type="tel" placeholder="+998 (99)-999-99-99" />
                        <input type="email" placeholder="E-MAIL" />
                        <button>отправить</button>
                    </form>
                    <p className="p-three-A">«Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой конфиденциальности»</p>
                </div>
            </section>
        </main>
    );
}

export default Advantages;