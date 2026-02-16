import { useState, useEffect } from "react";
import Column from "./column.jsx";

export default function App() {

  const [showModal, setShowModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newColumnName, setNewColumnName] = useState("");

  // Column List
  const [columns, setColumns] = useState([
    { id: "todo", title: "Todo" },
    { id: "doing", title: "Doing" },
    { id: "done", title: "Done" }
  ]);

  // Board data
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

  // Function to add New Column
  function addColumn() {
    const name = newColumnName.trim();

    if (!name) {
      alert("Please enter a column name!");
      return;
    }

    if (board[id]) {
      alert("Column already exists!");
      return;
    }

    setColumns([...columns, { id, title: name }]);
    setBoard({ ...board, [id]: [] });

    setNewColumnName("");
    setShowAddModal(false);
  }

  // Add card
  function addCard(column, text, id) {
    const newBoard = { ...board };
    newBoard[column].push({ id, text, done: false });
    setBoard(newBoard);
  }

  // Delete card
  function deleteCard(column, id) {
    const newBoard = { ...board };
    newBoard[column] =
      newBoard[column].filter(card => card.id !== id);
    setBoard(newBoard);
  }

  // Move card left/right
  function moveCard(from, to, id) {
    const card = board[from].find(c => c.id === id);

    const newBoard = { ...board };

    newBoard[from] =
      newBoard[from].filter(c => c.id !== id);

    newBoard[to].push(card);

    setBoard(newBoard);
  }

  // Reorder
  function reorder(column, index, direction) {
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

  // Edit
  function editCard(column, id, newText) {
    const newBoard = { ...board };

    newBoard[column] = newBoard[column].map(card =>
      card.id === id ? { ...card, text: newText } : card
    );

    setBoard(newBoard);
  }

  // Toggle done
  function toggleDone(column, id) {
    const newBoard = { ...board };

    newBoard[column] = newBoard[column].map(card =>
      card.id === id ? { ...card, done: !card.done } : card
    );

    setBoard(newBoard);
  }

  // Clear board
  function clearBoard(action) {
    if (action === "open") {
      setShowModal(true);
      return;
    }

    if (action === "confirm") {
      const empty = {};
      columns.forEach(col => {
        empty[col.id] = [];
      });
      setBoard(empty);
    }

    setShowModal(false);
  }

  // Delete column
  function deleteColumn(columnId) {

    // prevent deleting default columns
    const fixedColumns = ["todo", "doing", "done"];

    if (fixedColumns.includes(columnId)) {
      alert("Default columns cannot be deleted!");
      return;
    }

    // remove column from columns array
    const updatedColumns =
      columns.filter(col => col.id !== columnId);

    setColumns(updatedColumns);

    // remove column from board data
    const newBoard = { ...board };
    delete newBoard[columnId];

    setBoard(newBoard);
  }

  return (
    <div>

      <div className="top-buttons">
        <button onClick={() => clearBoard("open")}>
          Clear Board
        </button>

        <button onClick={() => setShowAddModal(true)}>
          Add Column
        </button>
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-box">
            <p>Clear the board?</p>

            <button onClick={() => clearBoard("confirm")}>
              Yes
            </button>

            <button onClick={() => clearBoard()}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Dynamic Column Rendering*/}
      {columns.map(col => (
        <Column
          key={col.id}
          title={col.title}
          name={col.id}
          cards={board[col.id] || []}
          addCard={addCard}
          deleteCard={deleteCard}
          moveCard={moveCard}
          reorder={reorder}
          editCard={editCard}
          toggleDone={toggleDone}
          deleteColumn={deleteColumn}
        />
      ))}
      {showAddModal && (
        <div className="modal">
          <div className="modal-box">

            <p>Enter column name:</p>

            <input
              value={newColumnName}
              onChange={(e) => setNewColumnName(e.target.value)}
              placeholder="Column name"
            />

            <button onClick={addColumn}>
              Add
            </button>

            <button onClick={() => {
              setShowAddModal(false);
              setNewColumnName("");
            }}>
              Cancel
            </button>

          </div>
        </div>
      )}
    </div>
  );
}
