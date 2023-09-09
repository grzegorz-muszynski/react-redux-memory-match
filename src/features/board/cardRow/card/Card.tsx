import { useSelector, useDispatch } from 'react-redux';
import { 
  selectVisibleIDs, 
  flipCard,
  selectMatchedIDs,
  resetCards
} from '../../boardSlice';

let cardLogo = require("../../../../assets/images/question-mark-white.png");

export const Card = ({ id, contents }: { id: number; contents: string }) => {
  // Getting IDs of both kind of cards
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);
  const dispatch = useDispatch();

  let cardStyle = 'resting';

  // flip card action
  const flipHandler = (id: number) => {
    dispatch(flipCard(id));
  };

  // reset
  const resetHandler = () => {
    dispatch(resetCards());
  };

  let click = () => flipHandler(id);

  // cardText can be an jsx element or string
  let cardText: any = (
    <img src={cardLogo} className="logo-placeholder" alt="Card option" />
  );

  // If the card is visible - show text
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

  // Preventing flipping a third card
  if (visibleIDs.length === 2) {
    click = async () => {
      resetHandler();
      dispatch(flipCard(id));
    }
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardText}
    </button>
  );
};
