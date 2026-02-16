import { useState, useEffect } from "react";
import Column from "./column.jsx";

export default function App() {

  // Board state: 3 columns
  const [board, setBoard] = useState(() => {
    const saved = localStorage.getItem("kanban-board");
    return saved
      ? JSON.parse(saved)
      : { todo: [], doing: [], done: [] };
  });

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("kanban-board", JSON.stringify(board));
  }, [board]);

  // Add card
  function addCard(column, text, id) {
    console.log('Added card!');
    const newBoard = { ...board };
    newBoard[column].push({ id, text });
    setBoard(newBoard);
  }

  // Delete card
  function deleteCard(column, id) {
    console.log('Card Deleted!');
    const newBoard = { ...board };
    newBoard[column] =
      newBoard[column].filter(card => card.id !== id);
    setBoard(newBoard);
  }

  // Move card left/right
  function moveCard(from, to, id) {
    console.log("Card is moving either left or right");
    const card =
      board[from].find(c => c.id === id);

    const newBoard = { ...board };

    newBoard[from] =
      newBoard[from].filter(c => c.id !== id);

    newBoard[to].push(card);

    setBoard(newBoard);


  }

  // Reorder inside column
  function reorder(column, index, direction) {
    console.log('Card is moving either up or down');
    const newCards = [...board[column]];


    if (direction === "up" && index > 0) {
      [newCards[index], newCards[index - 1]] =
        [newCards[index - 1], newCards[index]];
    }

    if (direction === "down" &&
      index < newCards.length - 1) {
      [newCards[index], newCards[index + 1]] =
        [newCards[index + 1], newCards[index]];
    }

    setBoard({ ...board, [column]: newCards });


  }

  // Clear board
  function clearBoard() {
    if (confirm("Clear the board?")) {
      setBoard({ todo: [], doing: [], done: [] });
    }
  }

  return (<div> <button onClick={clearBoard}>
    Clear Board </button>

{/* column Component calling  along with the properties*/}

    <Column
      title="Todo"
      name="todo"
      cards={board.todo}
      addCard={addCard}
      deleteCard={deleteCard}
      moveCard={moveCard}
      reorder={reorder}
    />

    <Column
      title="Doing"
      name="doing"
      cards={board.doing}
      addCard={addCard}
      deleteCard={deleteCard}
      moveCard={moveCard}
      reorder={reorder}
    />

    <Column
      title="Done"
      name="done"
      cards={board.done}
      addCard={addCard}
      deleteCard={deleteCard}
      moveCard={moveCard}
      reorder={reorder}
    />
  </div>


  );
}
