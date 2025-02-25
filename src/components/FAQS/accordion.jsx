import './faqs.css';
import React, { useState } from 'react';
import PropTypes from 'prop-types'; 

export function Collapse({ collapsesData: customCollapsesData }) {
  
  const defaultCollapsesData = [
    { id: 1, title: 'What Are The NFTs?', content: 'Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.' },
    { id: 2, title: 'Where We Can Buy And Sell NFTs?', content: 'Content for buying and selling NFTs goes here.' },
    { id: 3, title: 'Who Are The Team Behind The Project?', content: 'Information about the team behind the project goes here.' },
    { id: 4, title: 'How Do I Get NFTs?', content: 'Instructions on how to get NFTs go here.' },
    { id: 5, title: 'What Is Your Contract Address?', content: 'The contract address for the project goes here.' },
    { id: 6, title: 'What is your contract address ?', content: 'Urna vitae erat et lacus, consectetur ac nulla vestibulum lobortis. Nulla dapibus urna volutpat venenatis, risus faucibus.' }
  ];

  const collapsesData = customCollapsesData || defaultCollapsesData;

  const [openStates, setOpenStates] = useState(() =>
    collapsesData.reduce((acc, item) => {
      acc[item.id] = false;
      return acc;
    }, {})
  );

  const toggleCollapse = (id) => {
    setOpenStates(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  const renderCollapse = (id, title, content) => {
    return (
      <div className={`accordion ${openStates[id] ? 'open' : ''}`}>
        <div 
          className="collapse-title"
          onClick={() => toggleCollapse(id)}
        >
          <span className='span-txt'>{title}</span>
          <span className='logo-span'>{openStates[id] ? '-' : '+'}</span>
        </div>
        <div className="collapse-content">
          {content}
        </div>
      </div>
    );
  };

  return (
    <div className="container-accordion">
      <div className="container-collapse">
        {collapsesData.slice(0, 3).map(item => (
          <React.Fragment key={item.id}>
            {renderCollapse(item.id, item.title, item.content)}
            {item.id % 2 === 0 && <div className=""></div>}
          </React.Fragment>
        ))}
      </div>
      <div className="container-collapse">
        {collapsesData.slice(3).map(item => (
          <React.Fragment key={item.id}>
            {renderCollapse(item.id, item.title, item.content)}
            {item.id % 2 === 0 && <div className=""></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

Collapse.propTypes = {
  collapsesData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired, 
      content: PropTypes.string.isRequired 
    })
  )
};

Collapse.defaultProps = {
  collapsesData: null 
};