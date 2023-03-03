


class Opera extends React.Component
 {

  render() {
    return (  <div style={{ width:'1000px'}}>
   
       
   <h1>Одесский государственный академический театр оперы и балета</h1>
   <p>Одесский национальный академический театр оперы и балета — первый театр в Одессе по времени постройки, значению и известности, один из круп­нейших те­ат­ров Украины. Первое здание было открыто в 1810 и сгорело в 1873 году. Современное здание построено в 1887 году архитекторами Фельнером и Гельмером в стиле нового венского барокко. Интерьер зрительного зала стилизован под архитектуру позднего французского рококо. Уникальная акустика подковообразного зала позволяет доносить даже шёпот со сцены в любой уголок зала. Полная реставрация здания театра была завершена в 2007 году. В театре дирижировали П. И. Чайковский, Н. А. Римский-Корсаков, С. В. Рахманинов, пели Фёдор Шаляпин, Саломея Крушельницкая, Леонид Собинов, танцевали Анна Павлова и Айседора Дункан. Александр Пушкин упоминает Одесский театр в романе «Евгений Онегин». Журнал «Forbes» включил одесский театр в список самых необыкновенных достопримечательностей Восточной Европы</p>
  


<div id="carouselExampleIndicators" className="carousel slide IMGS" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">

    <div className="carousel-item ">
      <img className="d-block w-100" src={"img/01.jpg"} />
    </div>
    <div className="carousel-item active">
      <img className="d-block w-100" src={"img/02.jpg"} />
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={"img/03.jpg"}/>
    </div>

    <div className="carousel-item">
      <img className="d-block w-100" src={"img/04.jpg"}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={"img/05.jpg"}/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={"img/06.jpg"}/>
    </div>
  </div>

  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      </div>

      
    );
  }
}