export default function GameOver({ winner }) {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md transition-opacity">
            <div className="bg-[#3b3939] p-32 rounded-lg shadow-lg text-center transform transition-all scale-95 hover:scale-100">
                <h2 className="text-3xl font-bold mb-2">Game Over</h2>
                <p className="text-xl mb-4">{winner ? `${winner} won!` : "It's a draw!"}</p>
                <button 
                    onClick={onRematch} 
                    className="bg-[#774e0c] text-white px-6 py-2 rounded-md hover:bg-[#77450c] transition"
                >
                    Rematch
                </button>
            </div>
        </div>
    );
}
