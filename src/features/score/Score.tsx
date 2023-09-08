import { useSelector } from 'react-redux';
import { selectMatchedIDs } from '../board/boardSlice';

export const Score = () => {
  // Selector providing array with ids of matched pairs
  const cardsMatched = useSelector(selectMatchedIDs);

  return (
    // Displaying quantity of matched cards
    <div className="score-container">Matched: {cardsMatched.length}</div>
  );
};