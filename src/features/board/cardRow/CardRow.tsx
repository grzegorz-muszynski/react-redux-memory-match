import { Card } from './card/Card';

export const CardRow = ({ cards }: { cards: any }) => {
  const content = cards.map((card: any) => 
    <Card 
      key={card.id} 
      id={card.id} 
      contents={card.contents} 
  />)

  return <>{content}</>;
};
