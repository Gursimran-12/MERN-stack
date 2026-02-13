import { useState , memo} from "react";
import { v4 as uuidv4 } from "uuid";
import "../App.css";

function CardManager() {
  const [cards, setCards] = useState([]);

  // Used for adding new card and proving each card a unique Id using uuid() and storing it in id
 const addCard = () => {
  console.log('Card Added');
  setCards([...cards, { id: uuidv4() }]);
};
  // Used for deleting the card usinf filter()
  const deleteCard = (id) => {
    console.log('Card Deleted');
    setCards(cards.filter((card) => card.id !== id));
  };

  return (
    <div className="card-manager">
      {/* Button for adding the new Card */}
      <button className="add-btn" onClick={addCard}> + Add Card </button>
      <div className="card-container">

        {/* Using Map to display all the cards */}
        {cards.map((card, index) => (
          <div key={card.id} className="card">
            <p className="card-title">Card {index + 1}</p>

            {/* Button for deleting the Card */}
            <button className="delete-btn" onClick={() => deleteCard(card.id)}>
              ✖ Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default memo(CardManager);
