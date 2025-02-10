import { useState } from "react";
export default function Player({ initialName, symbol, isActive, onChangeName }) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    function handleEditClick() {
        setIsEditing((editing) => !editing);
        if (isEditing) {
            onChangeName(symbol, playerName)
        }
    }
    return (
        <li className={`flex flex-row gap-8 p-4 ${!isActive ? 'border-1 rounded' : ''}`}>
            {!isEditing && <span>{playerName}</span>}
            {isEditing && <input onChange={handleChange} className="w-28 bg-[#454242] rounded uppercase font-semibold center-center" type="text" required value={playerName} />}
            <span>{symbol}</span>
            <button onClick={handleEditClick} className="text-[#d4aa13]">{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
} 