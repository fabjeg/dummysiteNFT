import "./collection.css";
import { useNavigate } from "react-router-dom";
import { Collapse } from "../../index";
import { useState } from "react";

// Importation des images et titres de cartes depuis SlideAutoCards
import nft1 from "../../assets/pictures/nft1-1.jpg";
import nft2 from "../../assets/pictures/nft2-2.jpg";
import nft3 from "../../assets/pictures/nft3-3.jpg";
import nft4 from "../../assets/pictures/nft4-4.jpg";
import nft5 from "../../assets/pictures/nft5-5.jpg";
import nft6 from "../../assets/pictures/nft6-6.jpg";
import nft7 from "../../assets/pictures/nft7.jpg";
import nft8 from "../../assets/pictures/nft8.jpg";
import nft9 from "../../assets/pictures/nft9.jpg";

const cardsData = [
  { img: nft1, title: "SKISIRS #01" },
  { img: nft2, title: "SKISIRS #02" },
  { img: nft3, title: "SKISIRS #03" },
  { img: nft4, title: "SKISIRS #04" },
  { img: nft5, title: "SKISIRS #05" },
  { img: nft6, title: "SKISIRS #06" },
  { img: nft7, title: "SKISIRS #07" },
    { img: nft8, title: "SKISIRS #08" },
    { img: nft9, title: "SKISIRS #09" },
];

export function Collection() {
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/");
  };

  const collapsesData = [
    { id: 1, title: "CLOTHING", content: "Combatant, Ninja, King, Queen, Robot" },
    { id: 2, title: "EYES", content: "Yellow, Green, Mix, Orange, glow, Blue" },
    { id: 3, title: "FACE", content: "Yellow, Green, Mix, Orange, glow, Blue" },
    { id: 4, title: "SKIN", content: "Yellow, Green, Mix, Orange, glow, Blue" },
    { id: 5, title: "BACKGROUND", content: "Yellow, Green, Mix, Orange, glow, Blue" },
    { id: 6, title: "SPECIAL", content: "Cat, Sakura, Snake, Eath, Water" },
  ];

  const [checkedStates, setCheckedStates] = useState(() =>
    collapsesData.reduce((acc, item) => {
      acc[item.id] = {};
      return acc;
    }, {})
  );

  const handleCheckboxChange = (id, word) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [word]: !prevState[id][word],
      },
    }));
  };

  const handleClearAll = () => {
    setCheckedStates(() =>
      collapsesData.reduce((acc, item) => {
        acc[item.id] = {};
        return acc;
      }, {})
    );
  };

  const renderContentWithCheckboxes = (content, id) => {
    if (!content) return content;
    const items = content.split(",").map((item) => item.trim());
    return (
      <div>
        {items.map((item, index) => (
          <label key={index} style={{ display: "block", margin: "5px 0" }}>
            <input
              type="checkbox"
              checked={checkedStates[id][item] || false}
              onChange={() => handleCheckboxChange(id, item)}
            />
            {item}
          </label>
        ))}
      </div>
    );
  };

  const transformedCollapsesData = collapsesData.map((item) => ({
    ...item,
    content: renderContentWithCheckboxes(item.content, item.id),
  }));

  const getSelectedFilters = () => {
    const filters = [];
    Object.entries(checkedStates).forEach(([id, items]) => {
      Object.entries(items).forEach(([item, isChecked]) => {
        if (isChecked) {
          filters.push({ id, item });
        }
      });
    });
    return filters;
  };

  const handleRemoveFilter = (id, item) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        [item]: false,
      },
    }));
  };

  return (
    <div>
      <div className="container-collection">
        <h5 className="title-h5">Collection</h5>
        <div className="span-collection">
          <a className="home-collection" onClick={handleHomeClick}>HOME</a>
          <span className="col-collection">COLLECTION</span>
        </div>
      </div>
      <div className="container2-collection">
        <div className="collapses-collection">
          <Collapse collapsesData={transformedCollapsesData} />
        </div>
        <div className="allitems-collection">
          <h5 className="title-h5">ALL ITEM</h5>
          <div className="filter-content">
            {getSelectedFilters().map(({ id, item }, index) => (
              <span key={index}>
                {item}{" "}
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => handleRemoveFilter(id, item)}
                  style={{ cursor: "pointer" }}
                ></i>
              </span>
            ))}
            {getSelectedFilters().length > 0 && (
              <button className="clear-all" onClick={handleClearAll}>
                Clear All
              </button>
            )}
          </div>
          <div className="cards-display">
            {cardsData.map((card, index) => (
              <div key={index} className="cards-about-slide">
                <img src={card.img} alt={card.title}  />
                <strong className="strong-cards-slide">{card.title}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
