import React from 'react';
import { CardRow } from './cardRow/CardRow';
import { useSelector } from 'react-redux';
import { selectBoard } from './boardSlice';


export const Board = () => {
  const currentBoard = useSelector(selectBoard);

  const numberOfCards = currentBoard.length;
  const columns = 3;
  const rows = Math.floor(numberOfCards / columns);

  // Making an array of indices from one row
  const getRowCards = (row) => {
    const rowCards = [];
    for (let j = 0; j < columns; j++) {
      const cardIndex = row * columns + j;
      rowCards.push(currentBoard[cardIndex]); // Pushing an card's describing object from a board
    }
    return rowCards;
  };
  
  // Making an array of all slots elements
  let content = [];
  for (let row = 0; row < rows; row++) {
    const rowCards = getRowCards(row);
    // console.log(rowCards[1]);
    // console.log(typeof rowCards[1]);
    // console.log(typeof rowCards);
    console.log(typeof rowCards);

    content.push(
      <CardRow 
        key={row} 
        cards={rowCards} 
      />
    );
  }

  return <div className="cards-container">{content}</div>;
};