import { memo } from "react";

function Card({ card, index, column, deleteCard, moveCard, reorder }) 
{
return ( <div className="card">

  <p>{card.text}</p>

  <div className="card-actions">

    {/* for moving up in the same column */}

    <span onClick={() => reorder(column, index, "up")}>
      up
    </span>

    {/* for moving down in the same column */}

    <span onClick={() => reorder(column, index, "down")}>
      Down
    </span>

    {/* Conditon to move the card to left, ensuring the card in the todo should not move left */}

    {column !== "todo" && (
      <span onClick={() =>
        moveCard(column, "todo", card.id)
      }>
        left
      </span>
    )}

    {/* Condition for moving the card right, ensuring the card in the done column do not move right */}

    {column !== "done" && (
      <span onClick={() =>
        moveCard(column,
          column === "todo" ? "doing" : "done",
          card.id)
      }>
        Right
      </span>
    )}

{/* for deleting the card */}

    <span onClick={() =>
      deleteCard(column, card.id)
    }>
      Delete
    </span>

  </div>
</div>


);
}

export default memo(Card);
