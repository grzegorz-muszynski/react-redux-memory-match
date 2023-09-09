const initialState = [
  {id: 0, contents: 'Provider', visible: true, matched: true}, 
  {id: 1, contents: 'Provider', visible: true, matched: true}, 
  {id: 2, contents: 'selector', visible: true, matched: true}, 
  {id: 3, contents: 'selector', visible: true, matched: true}, 
  {id: 4, contents: 'useSelector()', visible: true, matched: true}, 
  {id: 5, contents: 'useSelector()', visible: true, matched: true}, 
  {id: 6, contents: 'useDispatch()', visible: true, matched: true}, 
  {id: 7, contents: 'useDispatch()', visible: true, matched: true}, 
  {id: 8, contents: 'Pure Function', visible: true, matched: true}, 
  {id: 9, contents: 'Pure Function', visible: true, matched: true}, 
  {id: 10, contents: 'react-redux', visible: true, matched: true}, 
  {id: 11, contents: 'react-redux', visible: true, matched: true}, 
];

export const boardReducer = (state = initialState, action: {type: string, payload: any}) => {
  switch (action.type) {
    case 'board/setBoard':
      let setState: any[] = [];
      // payload should be an array of strings with words on cards
      action.payload.forEach((element: string, index: number) => 
        setState.push({
          id: index, 
          contents: element, 
          visible: false, 
          matched: false
        })
      );
      return setState;

    case 'board/flipCard':
      let flipState = [...state];
      const cardID = action.payload;
      flipState[cardID] = {...state[cardID], visible: true}
      const [index1, index2] = flipState
        .filter(card => card.visible)
        .map(card => card.id);
      if (index2 !== undefined) {
        const card1 = flipState[index1];
        const card2 = flipState[index2];
        if (card1.contents === card2.contents) {
          flipState[index1] = {...card1, visible: false, matched: true}
          flipState[index2] = {...card2, visible: false, matched: true}
        }
      } 
      return flipState;

    case 'board/resetCards':
      return state.map(card => ({...card, visible: false}));
    default:
      return state;
  }
}
  
const wordPairs = [
  'Provider', 'Provider', 
  'selector', 'selector', 
  'useSelector()', 'useSelector()', 
  'useDispatch()', 'useDispatch()',
  'Pure Function', 'Pure Function',
  'react-redux', 'react-redux',
]

const randomWords = () => {
  let words = []
  let newWordPairs = [...wordPairs]
  const reps = newWordPairs.length
  for (let i=0; i<reps; i++) {
    const wordIndex = Math.floor(Math.random()*newWordPairs.length);
    words.push(newWordPairs[wordIndex])
    newWordPairs.splice(wordIndex, 1)
  }

  return words;
} 

// Action creators
export const setBoard = () => {
  const words = randomWords()
  return {
    type: 'board/setBoard',
    payload: words
  }
}

export const flipCard = (id: number) => {
  return {
    type: 'board/flipCard',
    payload: id
  }
}

// export const resetCards = (indices) => {
export const resetCards = () => {
  return {
    type: 'board/resetCards'
  }
}

interface stateBoardCard {
  id: number, 
  contents: string, 
  visible: boolean, 
  matched: boolean
}

// Selector export statments below
export const selectBoard = (state: any) => state.board.map((card: stateBoardCard) => ({id: card.id, contents: card.contents}));

export const selectVisibleIDs = (state: any) => state.board
  .filter((card: stateBoardCard) => card.visible)
  .map((object: stateBoardCard) => object.id)

export const selectMatchedIDs = (state: any) => state.board
  .filter((card: stateBoardCard) => card.matched)
  .map((object: stateBoardCard) => object.id)