import { memo } from "react";

function Card({
card,
index,
column,
deleteCard,
moveCard,
reorder
}) {

return ( <div className="card">

  <p>{card.text}</p>

  <div className="card-actions">

    <span onClick={() => reorder(column, index, "up")}>
      up
    </span>

    <span onClick={() => reorder(column, index, "down")}>
      Down
    </span>

    {column !== "todo" && (
      <span onClick={() =>
        moveCard(column, "todo", card.id)
      }>
        left
      </span>
    )}

    {column !== "done" && (
      <span onClick={() =>
        moveCard(column,
          column === "todo"
            ? "doing"
            : "done",
          card.id)
      }>
        Right
      </span>
    )}

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
