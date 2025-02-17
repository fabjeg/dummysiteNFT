import "./cardsAbout.css";

export function CardsAbout() {
    const cardsData=[
        {number:"01", title: "HIGH QUAILITY", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {number:"02", title: "BIG COLLECTION", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {number:"03", title: "TOP RESOURCE", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."},
        {number:"04", title: "BIG COMMUNITY", description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
    ]
  return (
    <div className="container-cards-about">
            {cardsData.map((news, index) => (
      <div className="cards-about" key={index}>
        <h3 className="title-h3">{news.number}</h3>
        <strong className="strong-cards">{news.title}</strong>
        <p className="p-cards">{news.description}</p>
      </div>
            ))}
    </div>
  );
}
