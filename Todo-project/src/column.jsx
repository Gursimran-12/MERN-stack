import { useRef } from "react";
import Card from "./components/card";
import { v4 as uuidv4 } from "uuid";
import './App.css'

export default function Column({
    title,
    name,
    cards,
    addCard,
    deleteCard,
    moveCard,
    reorder
}) {

    const inputRef = useRef(null);

    function handleAdd() {
        const text = inputRef.current.value.trim();

        if (!text) {
            alert("Please write something before adding a card!");
            return;
        }

        addCard(name, text, uuidv4());
        inputRef.current.value = "";
    }
    return (<div className="todo-app">


        <h2>{title}</h2>

        <div className="row">
            <input
                ref={inputRef}
                placeholder="Add card..."
            />
            <button onClick={handleAdd}>
                Add
            </button>
        </div>

        {cards.map((card, index) => (
            <Card
                key={card.id}
                card={card}
                index={index}
                column={name}
                deleteCard={deleteCard}
                moveCard={moveCard}
                reorder={reorder}
            />
        ))}
    </div>

    );
}
