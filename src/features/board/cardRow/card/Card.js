import React from 'react';

// Add import statements below
import { useSelector, useDispatch } from 'react-redux';
import { 
  selectVisibleIDs, 
  flipCard,
  selectMatchedIDs
} from '../../boardSlice';

let cardLogo = require("./question-mark-white.png");

export const Card = ({ id, contents }) => {
  // Add selected data and dispatch variables below
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);
  const dispatch = useDispatch();

  // flip card action
  const flipHandler = (id) => {
    // Add action dispatch below
    dispatch(flipCard(id));
  };

  let cardStyle = 'resting'
  let click = () => flipHandler(id);
  
  let cardText = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  console.log(visibleIDs);

  // Checking if the card is visible - show text
  if (visibleIDs.includes(id) || matchedIDs.includes(id)) {
    cardText = contents;
    click = () => {};
  }
  
  // If the card belong to matched pair - change style properly
  if (matchedIDs.includes(id)) {
    cardStyle = 'matched';
  } 
  
  // If two cards are visible and they are no matched - style changed to make their text red
  if (!matchedIDs.includes(id) && visibleIDs.length === 2) {
    cardStyle = 'no-match';
  }

  // implement number of flipped cards check
  if (visibleIDs.length === 2) {
    click = () => {};
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
