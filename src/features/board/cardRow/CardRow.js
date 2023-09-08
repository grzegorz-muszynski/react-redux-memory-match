import { Card } from './card/Card';

export const CardRow = ({ cards }) => {
  const content = cards.map(card => 
    <Card 
      key={card.id} 
      id={card.id} 
      contents={card.contents} 
  />)

  return <>{content}</>;
};
