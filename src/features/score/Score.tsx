import { useSelector } from 'react-redux';
import { selectMatchedIDs } from '../board/boardSlice';

export const Score = () => {
  // Selector providing array with ids of matched pairs
  const cardsMatched = useSelector(selectMatchedIDs);

  return (
    // Displaying quantity of matched cards
    <div className={cardsMatched.length === 12 ? "score-container score-container-winning": "score-container"}>Matched: {cardsMatched.length}{cardsMatched.length === 12 && " - You win!"}</div>
  );
};