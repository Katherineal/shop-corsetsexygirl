import "../../styles/components/accordion.css"
import { GoArrowDown } from "react-icons/go";
import React, { useState } from 'react';

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const renderedItems = items.map((item, index) => {
    const isActive = index === activeIndex;
    const itemClasses = `AccordionItem ${isActive ? 'active' : ''}`;

    return (
      <div key={index} className={itemClasses}>
        <div className="AccordionItemTitle" onClick={() => onTitleClick(index)}>
          <h3>{item.title}</h3>
        </div>
        <div className="AccordionItemContent">
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <div className="Accordion">{renderedItems}</div>;
};

export default Accordion;